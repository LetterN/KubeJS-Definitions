const path = require("path");
const fs = require("fs");

const API_GEN_PATH = "../lib";
const SPACES = "  "; // 2 spaces

// default
const KUBEJS_DOCS_DEFAULT = fs.createReadStream(path.resolve(__dirname, API_GEN_PATH, "kubejs-docs-autogen.json"));
let KUBEJS_DOCS_JSON = {}
// out file
const GENERATED_FILE = fs.createWriteStream(path.resolve(__dirname, API_GEN_PATH, "lib.kubejs.d.ts"));

async function buildDefinition() {
    console.log("⏲   Pausing until fs opens up.");
    await Promise.all([
        await new Promise(fsResolve => {
            KUBEJS_DOCS_DEFAULT.once("open", () => {
                fsResolve();
            });
            if (!KUBEJS_DOCS_DEFAULT.pending) {
                fsResolve();
            }
        }),
        await new Promise(fsResolve => {
            GENERATED_FILE.once("open", () => {
                fsResolve();
            });
            if (!GENERATED_FILE.pending) {
                fsResolve();
            }
        })
    ]);
    console.log("✅   All fs open.");

    // we (should) exist already, if not then goddamit
    try {
        KUBEJS_DOCS_JSON = require(path.resolve(KUBEJS_DOCS_DEFAULT.path));
    } catch (error) {
        process.exitCode = 1;
        console.error(`❌   Resolved kubejs-docs-autogen.json is bad!\n❌   Error: ${error}`);
    }

	console.log(`✅   Generating KubeJS d.ts using version version ${KUBEJS_DOCS_JSON["version"]}.`);

	const generateTSDefinition = (definition) => {
		// DESC 
		GENERATED_FILE.write(`/**\n`);
		GENERATED_FILE.write(`  * ${definition.name}\n`);
		if (definition.events) {
			GENERATED_FILE.write(`  * Events this will trigger on: ${definition.events.join(", ")}\n`);
		}
		GENERATED_FILE.write(`  */\n`);

		const extend = !definition.extends ? "" : " extends " + (Array.isArray(definition.extends) ? definition.extends : [definition.extends]).join(", ");

		// ACTUAL CLASS
		GENERATED_FILE.write(`interface ${definition.unique}${extend} {\n`)
		
		if (definition.methods) {
			for (const key in definition.methods) {
				const value = definition.methods[key];

				GENERATED_FILE.write(`\n${SPACES}/**\n`);
				(value.deprecated ? GENERATED_FILE.write(`${SPACES}  * @depricated\n`) : undefined);
				GENERATED_FILE.write(generateParamsDesc(value.params))
				GENERATED_FILE.write(`${SPACES}  */\n`);
				GENERATED_FILE.write(`${SPACES}${value.name}(${generateParams(value.params)}): ${normalizeType((value.type && value.type.name) ? value.type.name : value.type)};\n`)

				console.log(value);
			}
		}

		GENERATED_FILE.write(`}\n\n`)
	}

	const generateEventDefinitions = (definition) => {
		if (!definition.events){
			return; //lulw no
		}
		
		// DESC 
		GENERATED_FILE.write(`/**\n`);
		GENERATED_FILE.write(`  * KubeJS event listener.\n`);
		GENERATED_FILE.write(`  * Triggers during an event.\n`);
		GENERATED_FILE.write(`  * \n`);
		GENERATED_FILE.write(`  * @param id The event ID\n`);
		GENERATED_FILE.write(`  * @param event\n`);
		GENERATED_FILE.write(`  */\n`);

		// FUNC
		let itsastring = [];
		definition.events.forEach(v => itsastring.push(`"${v}"`))
		GENERATED_FILE.write(`declare function onEvent(id: ${itsastring.join(" | ")}, event: (event: ${definition.unique}) => void): void;\n\n`);
	}

	GENERATED_FILE.write('/// <reference no-default-lib="true"/>\n');
	GENERATED_FILE.write('\n');
	GENERATED_FILE.write('/////////////////////////////\n');
	GENERATED_FILE.write('/// KubeJS APIs - Autogen\n');
	GENERATED_FILE.write(`/// Version: ${KUBEJS_DOCS_JSON["version"]}\n`);
	GENERATED_FILE.write('/////////////////////////////\n\n\n');

	const KUBEJS_NS = findNameSpace("kubejs", KUBEJS_DOCS_JSON)["classes"];
	//const KUBEJS_MEKA_NS = findNameSpace("kubejs_mekanism", KUBEJS_DOCS_JSON)["classes"];
	//const KUBEJS_MC_NS = findNameSpace("minecraft", KUBEJS_DOCS_JSON)["classes"];

	for (const key in KUBEJS_NS) {
		const value = KUBEJS_NS[key];
		generateEventDefinitions(value)
	}
	// GENERATED_FILE.write('\n\n/////////////////////////////\n\n');

	// for (const key in KUBEJS_MEKA_NS) {
	// 	const value = KUBEJS_MEKA_NS[key];
	// 	generateEventDefinitions(value)
	// }
	// GENERATED_FILE.write('\n\n/////////////////////////////\n\n');

	// for (const key in KUBEJS_MC_NS) {
	// 	const value = KUBEJS_MC_NS[key];
	// 	generateEventDefinitions(value)
	// }

	GENERATED_FILE.write('\n\n/////////////////////////////\n');
	GENERATED_FILE.write('/// KubeJS APIs - Types\n');
	GENERATED_FILE.write('/////////////////////////////\n\n');

	for (const key in KUBEJS_NS) {
		const value = KUBEJS_NS[key];
		generateTSDefinition(value)
	}
	// for (const key in KUBEJS_MEKA_NS) {
	// 	const value = KUBEJS_MEKA_NS[key];
	// 	generateTSDefinition(value)
	// }

}

const NORMALIZED_TYPE = {
	Void: "void",
	Boolean: "boolean",
	String: "string",
	Long: "number",
	Double: "number",
	Float: "number",
	ResourceLocation: "string"
}
function normalizeType(type) {
	if (!type) {
		return "void";
	}
	return (type in NORMALIZED_TYPE) ? NORMALIZED_TYPE[type] : type;
}

function generateParams(params) {
	let paramOut = "";
	for (const key in params) {
		const value = params[key];
		paramOut += `${value.name}${value.nullable ? "?" : ""}: ${normalizeType(value.type.name ? value.type.name : value.type)}${params[Number(key)+1] ? ", " : ""}`;
	}
	return paramOut;
}

function generateParamsDesc(params) {
	
	let paramOut = "";
	for (const key in params) {
		const value = params[key];
		paramOut += `${SPACES}  * @param ${value.name} ${value.type.name ? JSON.stringify(value) : value.type}\n`;
		if (typeof value.type == "string") {
			continue;
		}
		console.log(value.type);
	}
	return paramOut;
}

function findNameSpace(namespace, json) {
	const nsj = json["namespaces"];
	for (const key in nsj) {
		const value = nsj[key];
		if (value.namespace == namespace) {
			return value;
		}
	}
}

buildDefinition();