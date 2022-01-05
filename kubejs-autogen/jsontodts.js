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
			GENERATED_FILE.write(`  * Events: ${definition.events.join(", ")}\n`);
		}
		GENERATED_FILE.write(`  */\n`);

		const extend = !definition.extends ? "" : " extends " + (definition.extends.name ? normalizeType(definition.extends.name) : (Array.isArray(definition.extends) ? definition.extends : [definition.extends]).join(", "));

		// ACTUAL CLASS
		GENERATED_FILE.write(`interface ${definition.unique}${extend} {\n`)
		
		if (definition.fields) {
			for (const key in definition.fields) {
				const value = definition.fields[key];

				GENERATED_FILE.write(`${SPACES}/**\n`);
				GENERATED_FILE.write(`${SPACES}  * ${JSON.stringify(value)}\n`);
				(value.deprecated ? GENERATED_FILE.write(`${SPACES}  * @depricated\n`) : undefined);
				GENERATED_FILE.write(`${SPACES}  */\n`);
				GENERATED_FILE.write(`${SPACES}readonly ${value.name}${value.nullable ? "?" : ""}: ${normalizeType(value.type)};\n`)
			}
		}

		if (definition.methods) {
			for (const key in definition.methods) {
				const value = definition.methods[key];

				GENERATED_FILE.write(`\n${SPACES}/**\n`);
				(value.deprecated ? GENERATED_FILE.write(`${SPACES}  * @depricated\n`) : undefined);
				GENERATED_FILE.write(generateParamsDesc(value.params))
				GENERATED_FILE.write(`${SPACES}  */\n`);
				GENERATED_FILE.write(`${SPACES}${value.name}(${generateParams(value.params)}): ${normalizeType(value.type)};\n`)
			}
		}

		GENERATED_FILE.write(`}\n\n`)
	}

	const generateInterfaceMap = (namespaceJSON, namespace) => {
		let event_map = {};
		for (const key in namespaceJSON) {
			const value = namespaceJSON[key];
			if (!value.events){
				continue; //lulw no
			}
			event_map[value.events] = value.unique;
		}

		GENERATED_FILE.write(`/**\n`);
		GENERATED_FILE.write(`  * Event type -> Event mapping for ${namespace}\n`);
		GENERATED_FILE.write(`  */\n`);
		GENERATED_FILE.write(`interface ${namespace} {\n`)
		// event_map
		map((key, value) => {
			if (value.includes(",")) {
				value.split(",").map(v => {
					GENERATED_FILE.write(`${SPACES}"${v}": ${key};\n`);
				})
				return;
			}
			GENERATED_FILE.write(`${SPACES}"${value}": ${key};\n`);
		})(event_map);
		console.log(event_map)

		GENERATED_FILE.write(`}\n\n`)

		// DESC 
		GENERATED_FILE.write(`/**\n`);
		GENERATED_FILE.write(`  * KubeJS event listener.\n`);
		GENERATED_FILE.write(`  * Triggers during an event.\n`);
		GENERATED_FILE.write(`  * \n`);
		GENERATED_FILE.write(`  * @param type {string} The event ID\n`);
		GENERATED_FILE.write(`  * @param event\n`);
		GENERATED_FILE.write(`  */\n`);
		// FUNC
		GENERATED_FILE.write(`declare function onEvent<T extends keyof ${namespace}, E extends ${namespace}[T]>(type: T, handle: (e: E) => void): void;\n\n`);
	}

	GENERATED_FILE.write('/// <reference no-default-lib="true"/>\n');
	GENERATED_FILE.write('\n');
	GENERATED_FILE.write('/////////////////////////////\n');
	GENERATED_FILE.write('/// KubeJS APIs - Autogen\n');
	GENERATED_FILE.write(`/// Version: ${KUBEJS_DOCS_JSON["version"]}\n`);
	GENERATED_FILE.write('/////////////////////////////\n\n\n');

	const KUBEJS_NS = findNameSpace("kubejs", KUBEJS_DOCS_JSON)["classes"];

	generateInterfaceMap(KUBEJS_NS, "KubeJS")

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
	nullable: "null",
	Boolean: "boolean",
	String: "string",
	Long: "number",
	Double: "number",
	Float: "number",
	Integer: "number",
	ResourceLocation: "string",
	VarArray: "Array", // what the fuck is a va,
	ArrayList: "Array",
}
function normalizeType(type) {
	if (!type) {
		return "void";
	}
	if (type.name) {
		// special function
		const r = (type.name in NORMALIZED_TYPE) ? NORMALIZED_TYPE[type.name] : type.name;
		if (type.generics) {
			// its a collection or map
			const generics = type.generics[0];
			// aeugh
			if (generics.name) {
				return normalizeType(generics.name);
			}
			if (r === "Function" || r === "Consumer") {
				return `(input: ${generics}) => ${(type.generics[1] && !r === "Consumer") ? type.generics[1] : "void"}`;
			}
			if (r === "List") {
				return `${generics}[]`;
			}
			return `${r}<${generics}>`;
		}
		return r;
	}

	return (type in NORMALIZED_TYPE) ? NORMALIZED_TYPE[type] : type;
}

function generateParams(params) {
	let paramOut = "";
	for (const key in params) {
		const value = params[key];
		paramOut += `${value.name}${value.nullable ? "?" : ""}: ${normalizeType(value.type)}${params[Number(key)+1] ? ", " : ""}`;
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

/**
 * Creates an array of values by running each element in collection
 * thru an iteratee function. The iteratee is invoked with three
 * arguments: (value, index|key, collection).
 *
 * If collection is 'null' or 'undefined', it will be returned "as is"
 * without emitting any errors (which can be useful in some cases).
 *
 * @returns {any[]}
 */
const map = iterateeFn => collection => {
	if (collection === null || collection === undefined) {
	  return collection;
	}
	if (Array.isArray(collection)) {
	  const result = [];
	  for (let i = 0; i < collection.length; i++) {
		result.push(iterateeFn(collection[i], i, collection));
	  }
	  return result;
	}
	if (typeof collection === 'object') {
	  const hasOwnProperty = Object.prototype.hasOwnProperty;
	  const result = [];
	  for (let i in collection) {
		if (hasOwnProperty.call(collection, i)) {
		  result.push(iterateeFn(collection[i], i, collection));
		}
	  }
	  return result;
	}
	throw new Error(`map() can't iterate on type ${typeof collection}`);
  };

buildDefinition();