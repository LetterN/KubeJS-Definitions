
/// <reference no-default-lib="true"/>

/**
 * KubeJS event listener. (PonderJS Tag Registry)
 * 
 * Cannot be reloaded, requires a full client/server restart
 * 
 * @param id The event ID
 * @param event 
 */
declare function onEvent(id: "ponder.tag.registry", event: (event: PonderTagRegistry) => void): void;

interface PonderTagRegistry extends EventJS {
	/**
	 * Create a new category in the Ponder UI
	 * @param id The ID of the new category
	 * @param iconItemID The item icon ID to be shown in the category
	 * @param name Default name of the new category
	 * @param desc Default description of the new category
	 */
	create(id: string, iconItemID: string, name: string, desc: string): void;
}

/**
 * KubeJS event listener. (PonderJS Tag Registry)
 * 
 * Can somewhat be reloaded using `/ponderjs kubejs reload`
 * 
 * @param id The event ID
 * @param event 
 */
declare function onEvent(id: "ponder.registry", event: (event: PonderRegistry) => void): void;

interface PonderRegistry extends EventJS {
	/**
	 * Create a new scene to show in the Ponder UI
	 * @param id The ID of the new scene
	 * @param relatedItems Item/Items related to the ponder. 
	 * 	Will show the "Hold [w] to ponder" on the item (REQUIRES GAME RESTART ON CHANGE)
	 * @param name Default name of the new category
	 * @param desc Default description of the new category
	 */
	create(id: string, relatedItems: string | string[]): PonderSceneConstructor;
}

interface PonderSceneConstructor {
	/**
	 * Register this scene into one of the category
	 * @param id The ID of the category this scene should go
	 */
	tag(id: string): PonderSceneConstructor;
	
	/**
	 * Create a new scene. Can be chaned to have multiple scene (Order matters!)
	 * @param id The ID of this scene
	 * @param ponderingAbout The text that appears under "Pondering about"
	 * @param nbtToShow The schematic to show
	 * @param sceneConstructor Callback constructor
	 */
	scene(id: string, ponderingAbout: string, nbtToShow: string, sceneConstructor: (scene, util) => void): PonderSceneConstructor
}