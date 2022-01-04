
/// <reference no-default-lib="true"/>

/////////////////////////////
/// KubeJS APIs
/////////////////////////////

/// GENERIC TYPES
interface KVString {
	[key: string]: string;
}

/// KUBEJS ROOT

/**
 * KubeJS event listener. 
 * Triggers during an event.
 * 
 * @param id The event ID
 * @param event 
 */
declare function onEvent(id: string, event: (event: EventJS) => void): void;

type StartupIDs = "init" | "postinit" | "loaded" | "block.registry" | "item.registry" | "item.modification" | "fluid.registry" | "worldgen.add" | "worldgen.remove";
/**
 * KubeJS event listener. (Game Startup) 
 * Cannot be reloaded, requires a full client/server restart
 * 
 * Must be placed in `kubejs/startup_scripts`!
 * 
 * @param id The event ID
 * @param event 
 */
declare function onEvent(id: StartupIDs, event: (event: EventJS) => void): void;


type ServerCommandIDs = "command.registry" | "command.run";
/**
 * KubeJS event listener. (Server Side)
 * Can be reloaded with `/reload` command
 * 
 * Must be placed in `kubejs/server_scripts`!
 * 
 * @param id The event ID
 * @param event 
 */
declare function onEvent(id: ServerCommandIDs, event: (event: CommandEventJS) => void): void;


type ServerIDs = "command.registry" | "command.run";
/**
 * KubeJS event listener. (Server Side)
 * Can be reloaded with `/reload` command
 * 
 * Must be placed in `kubejs/server_scripts`!
 * 
 * @param id The event ID
 * @param event 
 */
declare function onEvent(id: ServerIDs, event: (event: EventJS) => void): void;

declare var settings: KubeJSSettings;

interface KubeJSSettings {
	/**
	 * Enable recipe logging, off by default
	 */
	logAddedRecipes: boolean;
	/**
	 * Enable recipe logging, off by default
	 */
	logRemovedRecipes: boolean;
	/**
	 * Enable skipped recipe logging, off by default
	 */
	logSkippedRecipes: boolean;
	/**
	 * Enable erroring recipe logging, on by default, recommended to be kept to true
	 */
	logErroringRecipes: boolean;
}

/////////////////////////////
/// KubeJS Event Types
/////////////////////////////

/**
 * # EventJS
 * This event is the most basic event class, parent of all other events.
 * 
 * @link See https://mods.latvian.dev/books/kubejs/page/eventjs
 */
interface EventJS {
	/**
	 * Cancels event. If the event can't be cancelled, it won't do anything.
	 */
	cancel(): void;
}

/**
 * # CommandEventJS
 * This event is fired when a command is executed on server side.
 * 
 * This event needs cleanup! Using it is not recommended.
 * 
 * @link See https://mods.latvian.dev/books/kubejs/page/commandeventjs
 */
interface CommandEventJS extends EventJS {
	/**
	 * Command params 
	 */
	parseResults(): ParseResults<CommandSource>;
	/**
	 * Error, set if something went wrong
	 */
	exception(): Exemptions;
}

interface ParseResults<T> {
	// UNIMPLEMENTED
}
interface CommandSource {
	// UNIMPLEMENTED
}
interface Exemptions {
	// UNIMPLEMENTED
}

/**
 * # TagEventJS
 * This event is fired when a tag collection is loaded, to modify it with script. 
 * You can add and remove tags for items, blocks, fluids and entity types.
 * 
 * @link See https://mods.latvian.dev/books/kubejs/page/tageventjs
 */
interface TagEventJS extends EventJS {
	/**
	 * Tag collection type.
	 */
	readonly type: string;

	/**
	 * Returns specific tag container which you can use to add or remove objects to.
	 * If tag doesn't exist, it will create a new one.
	 * @param tag The tag like `forge:ingots/copper`. 
	 */
	get(tag: string): TagWrapper;

	/**
	 * Shortcut method for event.get(tag).add(ids).
	 * @param tag The tag like `forge:ingots/copper`. 
	 * @param ids A String[] list/regex of ids
	 */
	add(tag: string, ids: string[] | RegExp): TagWrapper;

	/**
	 * Shortcut method for event.get(tag).remove(ids).
	 * @param tag The tag like `forge:ingots/copper`. 
	 * @param ids A String[] list/regex of ids
	 */
	remove(tag: string, ids: string[] | RegExp): TagWrapper;

	/**
	 * Shortcut method for event.get(tag).removeAll().
	 * @param tag The tag like `forge:ingots/copper`. 
	 */
	removeAll(tag: string): TagWrapper;

	/**
	 * Removes all tags from object
	 * @param ids A String[] list of ids
	 */
	removeAllTagsFrom(ids: string[]): void;
}

interface TagWrapper {
	/**
	 * Adds an object to this tag. 
	 * 
	 * If string starts with `#` then it will add all objects from the second tag. 
	 * It can be either single string, regex (/regex/flags) or array of either.
	 * 
	 * @param ids A String[] list/regex of ids
	 */
	add(ids: string[] | RegExp): TagWrapper;

	/**
	 * Removes an object from tag, works the same as add().
	 * 
	 * @param ids A String[] list/regex of ids
	 */
	remove(ids: string[] | RegExp): TagWrapper;

	/**
	 * Removes all entries from tag.
	 */
	removeAll(): TagWrapper;
}

interface RecipeEventJS extends EventJS {
	/**
	 * Removes all recipes (nuke option, usually not recommended)
	 * @param thingToRemove The thing to remove (everything in this case)
	 */
	remove(thingToRemove: {}): void;

	/**
	 * Recipie to remove based on mod, input, output.
	 * @param thingToRemove The thing to remove
	 */
	remove(thingToRemove: RemoveParam): void;

	/**
	 * If you use custom({json}) it will be using vanilla Json/datapack syntax. 
	 * Must include `"type": "mod:recipe_id"`!
	 * 
	 * You can add recipe to any recipe handler that uses vanilla recipe system or isn't supported by KubeJS
	 * 
	 * @param customThingy The "JSON" recipie datapack
	 */
	custom(customThingy: CustomRecipie): void;

	/**
	 * Replace input of recipies
	 * @param recipiesToReplace The recipies to replace
	 * @param thing The item to replace (ItemID or Tags)
	 * @param replaceWith The item to replace the `thing` param
	 */
	replaceInput(recipiesToReplace: RemoveParam, thing: string, replaceWith: string): void;

	/**
	 * Replace output of recipies
	 * @param recipiesToReplace The recipies to replace
	 * @param thing The item to replace (ItemID or Tags)
	 * @param replaceWith The item to replace the `thing` param
	 */
	replaceOutput(recipiesToReplace: RemoveParam, thing: string, replaceWith: string): void;

	// TODO RETURNTYPES MISSING
	shaped(outcome: string, pattern: string[], keys: KVString): void;
	shapeless(outcome: string, thingsRequired: string[]): void;
	stonecutting(outcome: string, input: string): void;
	smelting(outcome: string, input: string): void;
	blasting(outcome: string, input: string): void;
	smoking(outcome: string, input: string): void;
	campfireCooking(outcome: string, input: string): void;
	smithing(outcome: string, materialToUse: string, itemToConvert: string): void;
}

interface CustomRecipie extends KVString {
	/**
	 * The recipie type. Required.
	 */
	type: string;
}

interface RemoveParam {
	/**
	 * Remove an item based on it's output
	 */
	output?: string;
	/**
	 * Remove an item based on it's input
	 */
	input?: string;
	/**
	 * Remove an item based on it's mod
	 */
	mod?: string;
	/**
	 * Remove an item based on the crafting type
	 */
	type?: string;
}

// DOCUMENTATION
interface WorldgenAddEventJS extends EventJS {
	
}