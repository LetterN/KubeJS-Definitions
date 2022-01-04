/// <reference no-default-lib="true"/>

/////////////////////////////
/// KubeJS APIs - Autogen
/// Version: 2022-01-04T09:42:29.586885100Z
/////////////////////////////


/**
  * KubeJS event listener.
  * Triggers during an event.
  * 
  * @param id The event ID
  * @param event
  */
declare function onEvent(id: "custom_id", event: (event: DataEvent) => void): void;

/**
  * KubeJS event listener.
  * Triggers during an event.
  * 
  * @param id The event ID
  * @param event
  */
declare function onEvent(id: "jei.add.items" | "jei.add.fluids", event: (event: AddJEIEventJS) => void): void;

/**
  * KubeJS event listener.
  * Triggers during an event.
  * 
  * @param id The event ID
  * @param event
  */
declare function onEvent(id: "jei.subtypes", event: (event: AddJEISubtypesEventJS) => void): void;

/**
  * KubeJS event listener.
  * Triggers during an event.
  * 
  * @param id The event ID
  * @param event
  */
declare function onEvent(id: "jei.hide.custom", event: (event: HideCustomJEIEventJS) => void): void;

/**
  * KubeJS event listener.
  * Triggers during an event.
  * 
  * @param id The event ID
  * @param event
  */
declare function onEvent(id: "jei.hide.items" | "jei.hide.fluids", event: (event: HideJEIEventJS) => void): void;

/**
  * KubeJS event listener.
  * Triggers during an event.
  * 
  * @param id The event ID
  * @param event
  */
declare function onEvent(id: "jei.information", event: (event: InformationJEIEventJS) => void): void;

/**
  * KubeJS event listener.
  * Triggers during an event.
  * 
  * @param id The event ID
  * @param event
  */
declare function onEvent(id: "jei.remove.categories", event: (event: RemoveJEICategoriesEvent) => void): void;

/**
  * KubeJS event listener.
  * Triggers during an event.
  * 
  * @param id The event ID
  * @param event
  */
declare function onEvent(id: "jei.remove.recipes", event: (event: RemoveJEIRecipesEvent) => void): void;

/**
  * KubeJS event listener.
  * Triggers during an event.
  * 
  * @param id The event ID
  * @param event
  */
declare function onEvent(id: "block.loot_tables", event: (event: BlockLootEventJS) => void): void;

/**
  * KubeJS event listener.
  * Triggers during an event.
  * 
  * @param id The event ID
  * @param event
  */
declare function onEvent(id: "chest.loot_tables", event: (event: ChestLootEventJS) => void): void;

/**
  * KubeJS event listener.
  * Triggers during an event.
  * 
  * @param id The event ID
  * @param event
  */
declare function onEvent(id: "entity.loot_tables", event: (event: EntityLootEventJS) => void): void;

/**
  * KubeJS event listener.
  * Triggers during an event.
  * 
  * @param id The event ID
  * @param event
  */
declare function onEvent(id: "fishing.loot_tables", event: (event: FishingLootEventJS) => void): void;

/**
  * KubeJS event listener.
  * Triggers during an event.
  * 
  * @param id The event ID
  * @param event
  */
declare function onEvent(id: "generic.loot_tables", event: (event: GenericLootEventJS) => void): void;

/**
  * KubeJS event listener.
  * Triggers during an event.
  * 
  * @param id The event ID
  * @param event
  */
declare function onEvent(id: "gift.loot_tables", event: (event: GiftLootEventJS) => void): void;

/**
  * KubeJS event listener.
  * Triggers during an event.
  * 
  * @param id The event ID
  * @param event
  */
declare function onEvent(id: "item.tags" | "block.tags" | "fluid.tags" | "entity_type.tags" | "<custom_type>.tags", event: (event: TagEventJS) => void): void;

/**
  * KubeJS event listener.
  * Triggers during an event.
  * 
  * @param id The event ID
  * @param event
  */
declare function onEvent(id: "world.load" | "world.unload" | "world.tick", event: (event: SimpleWorldEventJS) => void): void;

/**
  * KubeJS event listener.
  * Triggers during an event.
  * 
  * @param id The event ID
  * @param event
  */
declare function onEvent(id: "world.explosion.post", event: (event: WorldEventJS$Post) => void): void;

/**
  * KubeJS event listener.
  * Triggers during an event.
  * 
  * @param id The event ID
  * @param event
  */
declare function onEvent(id: "world.explosion.pre", event: (event: WorldEventJS$Pre) => void): void;



/////////////////////////////
/// KubeJS APIs - Types
/////////////////////////////

/**
  * dev.latvian.kubejs.bindings.TextWrapper
  */
interface TextWrapper {

  /**
    * @param text Object
    */
  of(text?: Object): Text;

  /**
    * @param separator Text
    * @param texts {"name":"texts","type":{"name":"Array","generics":["Text"]}}
    */
  join(separator: Text, texts: Array): Text;

  /**
    * @param text Object
    */
  string(text: Object): Text;

  /**
    * @param key String
    */
  translate(key: string): Text;

  /**
    * @param key String
    * @param objects {"name":"objects","type":{"name":"Array","generics":["Object"]}}
    */
  translate(key: string, objects: Array): Text;

  /**
    * @param text Object
    */
  black(text: Object): Text;

  /**
    * @param text Object
    */
  darkBlue(text: Object): Text;

  /**
    * @param text Object
    */
  darkGreen(text: Object): Text;

  /**
    * @param text Object
    */
  darkAqua(text: Object): Text;

  /**
    * @param text Object
    */
  darkRed(text: Object): Text;

  /**
    * @param text Object
    */
  darkPurple(text: Object): Text;

  /**
    * @param text Object
    */
  gold(text: Object): Text;

  /**
    * @param text Object
    */
  gray(text: Object): Text;

  /**
    * @param text Object
    */
  darkGray(text: Object): Text;

  /**
    * @param text Object
    */
  blue(text: Object): Text;

  /**
    * @param text Object
    */
  green(text: Object): Text;

  /**
    * @param text Object
    */
  aqua(text: Object): Text;

  /**
    * @param text Object
    */
  red(text: Object): Text;

  /**
    * @param text Object
    */
  lightPurple(text: Object): Text;

  /**
    * @param text Object
    */
  yellow(text: Object): Text;

  /**
    * @param text Object
    */
  white(text: Object): Text;
}

/**
  * dev.latvian.kubejs.bindings.UUIDWrapper
  */
interface UUIDWrapper {

  /**
    * @param id UUID
    */
  toString(id: UUID): string;

  /**
    * @param string String
    */
  fromString(string: string): UUID;
}

/**
  * dev.latvian.kubejs.entity.DamageSourceJS
  */
interface DamageSourceJS {
}

/**
  * dev.latvian.kubejs.entity.EntityArrayList
  */
interface EntityArrayList extends [object Object] {

  /**
    */
  kill(): void;

  /**
    * @param id {"name":"id","type":{"name":"SoundEvent","type":2}}
    * @param volume Float
    * @param pitch Float
    */
  playSound(id: SoundEvent, volume: number, pitch: number): void;

  /**
    * @param id {"name":"id","type":{"name":"SoundEvent","type":2}}
    */
  playSound(id: SoundEvent): void;

  /**
    * @param filter {"name":"filter","type":{"name":"Predicate","generics":["EntityJS"]}}
    */
  filter(filter: Predicate): EntityArrayList;

  /**
    * @param channel String
    * @param data {"name":"data","type":{"name":"MapJS","type":2},"nullable":true}
    */
  sendData(channel: string, data?: MapJS): void;
}

/**
  * dev.latvian.kubejs.entity.EntityJS
  */
interface EntityJS {

  /**
    * @param x Double
    * @param y Double
    * @param z Double
    */
  setMotion(x: number, y: number, z: number): void;

  /**
    * @param x Double
    * @param y Double
    * @param z Double
    */
  setPosition(x: number, y: number, z: number): void;

  /**
    * @param yaw Float
    * @param pitch Float
    */
  setRotation(yaw: number, pitch: number): void;

  /**
    * @param x Double
    * @param y Double
    * @param z Double
    * @param yaw Float
    * @param pitch Float
    */
  setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;

  /**
    * @param x Double
    * @param y Double
    * @param z Double
    */
  addMotion(x: number, y: number, z: number): void;

  /**
    */
  kill(): void;

  /**
    * @param e EntityJS
    * @param force Boolean
    */
  startRiding(e: EntityJS, force: boolean): boolean;

  /**
    */
  removePassengers(): void;

  /**
    */
  dismountRidingEntity(): void;

  /**
    * @param e EntityJS
    */
  isPassenger(e: EntityJS): boolean;

  /**
    * @param e EntityJS
    */
  isOnSameTeam(e: EntityJS): boolean;

  /**
    * @param teamID String
    */
  isOnScoreboardTeam(teamID: string): boolean;

  /**
    */
  extinguish(): void;

  /**
    * @param tag {"name":"tag","type":{"name":"CompoundTag","type":2}}
    */
  mergeFullNBT(tag: CompoundTag): void;

  /**
    * @param id {"name":"id","type":{"name":"SoundEvent","type":2}}
    * @param volume Float
    * @param pitch Float
    */
  playSound(id: SoundEvent, volume: number, pitch: number): void;

  /**
    * @param id {"name":"id","type":{"name":"SoundEvent","type":2}}
    */
  playSound(id: SoundEvent): void;

  /**
    */
  spawn(): void;

  /**
    * @param source String
    * @param hp Float
    */
  attack(source: string, hp: number): void;

  /**
    * @param hp Float
    */
  attack(hp: number): void;

  /**
    * @param distance Double
    */
  rayTrace(distance: number): RayTraceResultJS;

  /**
    * @param x Double
    * @param y Double
    * @param z Double
    */
  getDistanceSq(x: number, y: number, z: number): number;

  /**
    * @param x Double
    * @param y Double
    * @param z Double
    */
  getDistance(x: number, y: number, z: number): number;

  /**
    * @param pos BlockPos
    */
  getDistanceSq(pos: BlockPos): number;

  /**
    * @param pos BlockPos
    */
  getDistance(pos: BlockPos): number;
}

/**
  * dev.latvian.kubejs.entity.ItemEntityJS
  */
interface ItemEntityJS extends EntityJS {

  /**
    */
  setDefaultPickupDelay(): void;

  /**
    */
  setNoPickupDelay(): void;

  /**
    */
  setInfinitePickupDelay(): void;

  /**
    */
  setNoDespawn(): void;
}

/**
  * dev.latvian.kubejs.entity.ItemFrameEntityJS
  */
interface ItemFrameEntityJS extends EntityJS {
}

/**
  * dev.latvian.kubejs.entity.LivingEntityJS
  */
interface LivingEntityJS extends EntityJS {

  /**
    * @param hp Float
    */
  heal(hp: number): void;

  /**
    * @param hand InteractionHand
    */
  swingArm(hand: InteractionHand): void;

  /**
    * @param slot {"name":"slot","type":{"name":"EquipmentSlot","type":2}}
    */
  getEquipment(slot: EquipmentSlot): ItemStackJS;

  /**
    * @param slot {"name":"slot","type":{"name":"EquipmentSlot","type":2}}
    * @param item ItemStackJS
    */
  setEquipment(slot: EquipmentSlot, item: ItemStackJS): void;

  /**
    * @param hand InteractionHand
    */
  getHeldItem(hand: InteractionHand): ItemStackJS;

  /**
    * @param hand InteractionHand
    * @param item ItemStackJS
    */
  setHeldItem(hand: InteractionHand, item: ItemStackJS): void;

  /**
    * @param slot {"name":"slot","type":{"name":"EquipmentSlot","type":2}}
    * @param amount Integer
    */
  damageEquipment(slot: EquipmentSlot, amount: Integer): void;

  /**
    * @param slot {"name":"slot","type":{"name":"EquipmentSlot","type":2}}
    * @param amount Integer
    * @param onBroken {"name":"onBroken","type":{"name":"Consumer","generics":["ItemStackJS"]}}
    */
  damageEquipment(slot: EquipmentSlot, amount: Integer, onBroken: Consumer): void;

  /**
    * @param slot {"name":"slot","type":{"name":"EquipmentSlot","type":2}}
    */
  damageEquipment(slot: EquipmentSlot): void;

  /**
    * @param hand InteractionHand
    * @param amount Integer
    */
  damageHeldItem(hand: InteractionHand, amount: Integer): void;

  /**
    * @param hand InteractionHand
    * @param amount Integer
    * @param onBroken {"name":"onBroken","type":{"name":"Consumer","generics":["ItemStackJS"]}}
    */
  damageHeldItem(hand: InteractionHand, amount: Integer, onBroken: Consumer): void;

  /**
    */
  damageHeldItem(): void;

  /**
    * @param ingredient Object
    */
  isHoldingInAnyHand(ingredient: Object): boolean;

  /**
    * @param entity EntityJS
    */
  canEntityBeSeen(entity: EntityJS): boolean;

  /**
    */
  rayTrace(): RayTraceResultJS;
}

/**
  * dev.latvian.kubejs.entity.RayTraceResultJS
  */
interface RayTraceResultJS {
}

/**
  * dev.latvian.kubejs.event.DataEvent
  * Events this will trigger on: custom_id
  */
interface DataEvent extends EventJS {
}

/**
  * dev.latvian.kubejs.event.EventJS
  */
interface EventJS {
}

/**
  * dev.latvian.kubejs.event.ScriptEventsWrapper
  */
interface ScriptEventsWrapper {

  /**
    * @param id String
    * @param handler {"name":"handler","type":{"name":"IEventHandler","type":2}}
    */
  listen(id: string, handler: IEventHandler): void;

  /**
    * @param id String
    * @param data Object
    */
  post(id: string, data?: Object): void;

  /**
    * @param id String
    */
  post(id: string): void;

  /**
    * @param id String
    * @param data Object
    */
  postCancellable(id: string, data?: Object): boolean;

  /**
    * @param id String
    */
  postCancellable(id: string): boolean;
}

/**
  * dev.latvian.kubejs.event.StartupEventJS
  */
interface StartupEventJS extends EventJS {
}

/**
  * dev.latvian.kubejs.integration.jei.AddJEIEventJS
  * Events this will trigger on: jei.add.items, jei.add.fluids
  */
interface AddJEIEventJS extends EventJS {

  /**
    * @param object Object
    */
  add(object: Object): void;
}

/**
  * dev.latvian.kubejs.integration.jei.AddJEISubtypesEventJS
  * Events this will trigger on: jei.subtypes
  */
interface AddJEISubtypesEventJS extends EventJS {

  /**
    * @param item ItemStackJS
    * @param interpreter {"name":"interpreter","type":{"name":"Function","generics":["ItemStackJS","Object"]}}
    */
  registerInterpreter(item: ItemStackJS, interpreter: Function): void;

  /**
    * @param item ItemStackJS
    */
  useNBT(item: ItemStackJS): void;

  /**
    * @param item ItemStackJS
    * @param key String
    */
  useNBTKey(item: ItemStackJS, key: string): void;
}

/**
  * dev.latvian.kubejs.integration.jei.HideCustomJEIEventJS
  * Events this will trigger on: jei.hide.custom
  */
interface HideCustomJEIEventJS extends EventJS {

  /**
    * @param s {"name":"s","type":{"name":"IIngredientType","type":2}}
    */
  get(s: IIngredientType): HideJEIEventJS;
}

/**
  * dev.latvian.kubejs.integration.jei.HideJEIEventJS
  * Events this will trigger on: jei.hide.items, jei.hide.fluids
  */
interface HideJEIEventJS extends EventJS {

  /**
    * @param object Object
    */
  hide(object: Object): void;

  /**
    */
  hideAll(): void;
}

/**
  * dev.latvian.kubejs.integration.jei.InformationJEIEventJS
  * Events this will trigger on: jei.information
  */
interface InformationJEIEventJS extends EventJS {

  /**
    * @param object Object
    * @param info {"name":"info","type":{"name":"VarArray","generics":["String"]}}
    */
  add(object: Object, info: VarArray): void;

  /**
    * @param type {"name":"type","type":{"name":"IIngredientType","type":2,"generics":[{"name":"T","type":1}]}}
    * @param object Object
    * @param info {"name":"info","type":{"name":"VarArray","generics":["String"]}}
    */
  addForType(type: IIngredientType, object: Object, info: VarArray): void;
}

/**
  * dev.latvian.kubejs.integration.jei.RemoveJEICategoriesEvent
  * Events this will trigger on: jei.remove.categories
  */
interface RemoveJEICategoriesEvent extends EventJS {

  /**
    * @param categoriesToYeet {"name":"categoriesToYeet","type":{"name":"VarArray","generics":["String"]}}
    */
  remove(categoriesToYeet: VarArray): void;

  /**
    * @param filter {"name":"filter","type":{"name":"Predicate","generics":[{"name":"IRecipeCategory","type":2,"generics":["Object"]}]}}
    */
  removeIf(filter: Predicate): void;
}

/**
  * dev.latvian.kubejs.integration.jei.RemoveJEIRecipesEvent
  * Events this will trigger on: jei.remove.recipes
  */
interface RemoveJEIRecipesEvent extends EventJS {

  /**
    * @param category ResourceLocation
    * @param recipesToRemove {"name":"recipesToRemove","type":{"name":"VarArray","generics":["ResourceLocation"]}}
    */
  remove(category: string, recipesToRemove: VarArray): void;
}

/**
  * dev.latvian.kubejs.item.ingredient.IngredientJS
  */
interface IngredientJS {

  /**
    * @param stack ItemStackJS
    */
  test(stack: ItemStackJS): boolean;

  /**
    * @param stack {"name":"stack","type":{"name":"ItemStack","type":2}}
    */
  testVanilla(stack: ItemStack): boolean;

  /**
    * @param item {"name":"item","type":{"name":"Item","type":2}}
    */
  testVanillaItem(item: Item): boolean;

  /**
    * @param filter IngredientJS
    */
  filter(filter: IngredientJS): void;

  /**
    */
  not(): void;

  /**
    * @param count Integer
    */
  withCount(count: Integer): void;

  /**
    */
  copy(): IngredientJS;

  /**
    */
  toJson(): JsonElement;

  /**
    * @param ingredient IngredientJS
    */
  anyStackMatches(ingredient: IngredientJS): boolean;

  /**
    */
  asIngredientStack(): IngredientStackJS;

  /**
    */
  unwrapStackIngredient(): List;

  /**
    */
  createVanillaIngredient(): Ingredient;
}

/**
  * dev.latvian.kubejs.item.InventoryJS
  */
interface InventoryJS {

  /**
    * @param slot Integer
    */
  get(slot: Integer): ItemStackJS;

  /**
    * @param slot Integer
    * @param item ItemStackJS
    */
  set(slot: Integer, item: ItemStackJS): void;

  /**
    * @param slot Integer
    * @param item ItemStackJS
    * @param simulate Boolean
    */
  insert(slot: Integer, item: ItemStackJS, simulate: boolean): ItemStackJS;

  /**
    * @param slot Integer
    * @param amount Integer
    * @param simulate Boolean
    */
  extract(slot: Integer, amount: Integer, simulate: boolean): ItemStackJS;

  /**
    * @param slot Integer
    */
  getSlotLimit(slot: Integer): Integer;

  /**
    * @param slot Integer
    * @param item Object
    */
  isItemValid(slot: Integer, item: Object): boolean;

  /**
    */
  clear(): void;

  /**
    * @param item ItemStackJS
    */
  clear(item: ItemStackJS): void;

  /**
    */
  find(): Integer;

  /**
    * @param item ItemStackJS
    */
  find(item: ItemStackJS): Integer;

  /**
    */
  count(): Integer;

  /**
    * @param item ItemStackJS
    */
  count(item: ItemStackJS): Integer;

  /**
    */
  countNonEmpty(): Integer;

  /**
    * @param item ItemStackJS
    */
  countNonEmpty(item: ItemStackJS): Integer;

  /**
    */
  markDirty(): void;

  /**
    * @param world WorldJS
    */
  getBlock(world: WorldJS): BlockContainerJS;
}

/**
  * dev.latvian.kubejs.item.ItemStackJS
  */
interface ItemStackJS {

  /**
    * @param tag ResourceLocation
    */
  hasTag(tag: string): boolean;

  /**
    * @param c Integer
    */
  withCount(c: Integer): void;

  /**
    */
  hasNBT(): boolean;

  /**
    */
  removeNBT(): void;

  /**
    * @param nbt {"name":"nbt","type":{"name":"CompoundTag","type":2}}
    */
  withNBT(nbt: CompoundTag): void;

  /**
    */
  hasChance(): boolean;

  /**
    */
  removeChance(): void;

  /**
    * @param c Double
    */
  withChance(c: number): void;

  /**
    * @param displayName Text
    */
  withName(displayName?: Text): void;

  /**
    * @param o Object
    */
  strongEquals(o: Object): boolean;

  /**
    * @param enchantment {"name":"enchantment","type":{"name":"Enchantment","type":2}}
    * @param level Integer
    */
  hasEnchantment(enchantment: Enchantment, level: Integer): boolean;

  /**
    * @param enchantments {"name":"enchantments","type":{"name":"MapJS","type":2}}
    */
  enchant(enchantments: MapJS): void;

  /**
    * @param enchantment {"name":"enchantment","type":{"name":"Enchantment","type":2}}
    * @param level Integer
    */
  enchant(enchantment: Enchantment, level: Integer): void;

  /**
    */
  ignoreNBT(): IngredientJS;

  /**
    */
  weakNBT(): IngredientJS;

  /**
    * @param other ItemStackJS
    */
  areItemsEqual(other: ItemStackJS): boolean;

  /**
    * @param other {"name":"other","type":{"name":"ItemStack","type":2}}
    */
  areItemsEqual(other: ItemStack): boolean;

  /**
    * @param other ItemStackJS
    */
  isNBTEqual(other: ItemStackJS): boolean;

  /**
    * @param other {"name":"other","type":{"name":"ItemStack","type":2}}
    */
  isNBTEqual(other: ItemStack): boolean;

  /**
    * @param tool {"name":"tool","type":{"name":"ToolType","type":2}}
    * @param player PlayerJS
    * @param block BlockContainerJS
    */
  getHarvestLevel(tool: ToolType, player?: PlayerJS, block?: BlockContainerJS): Integer;

  /**
    * @param tool {"name":"tool","type":{"name":"ToolType","type":2}}
    */
  getHarvestLevel(tool: ToolType): Integer;

  /**
    * @param block BlockContainerJS
    */
  getHarvestSpeed(block?: BlockContainerJS): number;

  /**
    */
  toResultJson(): JsonElement;

  /**
    */
  toNBT(): CompoundTag;
}

/**
  * dev.latvian.kubejs.loot.BlockLootEventJS
  * Events this will trigger on: block.loot_tables
  */
interface BlockLootEventJS extends LootEventJS {

  /**
    * @param blocks {"name":"blocks","type":{"name":"BlockStatePredicate","type":2}}
    * @param b {"name":"b","type":{"name":"Consumer","generics":["LootBuilder"]}}
    */
  addBlock(blocks: BlockStatePredicate, b: Consumer): void;

  /**
    * @param blocks {"name":"blocks","type":{"name":"BlockStatePredicate","type":2}}
    */
  addSimpleBlock(blocks: BlockStatePredicate): void;

  /**
    * @param blocks {"name":"blocks","type":{"name":"BlockStatePredicate","type":2}}
    * @param item ItemStackJS
    */
  addSimpleBlock(blocks: BlockStatePredicate, item: ItemStackJS): void;

  /**
    * @param blocks {"name":"blocks","type":{"name":"BlockStatePredicate","type":2}}
    * @param b {"name":"b","type":{"name":"Consumer","generics":["LootBuilder"]}}
    */
  modifyBlock(blocks: BlockStatePredicate, b: Consumer): void;
}

/**
  * dev.latvian.kubejs.loot.ChestLootEventJS
  * Events this will trigger on: chest.loot_tables
  */
interface ChestLootEventJS extends LootEventJS {

  /**
    * @param id ResourceLocation
    * @param b {"name":"b","type":{"name":"Consumer","generics":["LootBuilder"]}}
    */
  addChest(id: string, b: Consumer): void;
}

/**
  * dev.latvian.kubejs.loot.ConditionalFunction
  */
interface ConditionalFunction {
}

/**
  * dev.latvian.kubejs.loot.ConditionContainer
  */
interface ConditionContainer {

  /**
    * @param o {"name":"o","type":{"name":"JsonObject","type":2}}
    */
  addCondition(o: JsonObject): void;

  /**
    * @param chance Double
    */
  randomChance(chance: number): void;

  /**
    * @param chance Double
    * @param multiplier Double
    */
  randomChanceWithLooting(chance: number, multiplier: number): void;

  /**
    */
  survivesExplosion(): void;

  /**
    * @param entity LootContextEntityTarget
    * @param properties {"name":"properties","type":{"name":"JsonObject","type":2}}
    */
  entityProperties(entity: LootContextEntityTarget, properties: JsonObject): void;

  /**
    */
  killedByPlayer(): void;

  /**
    * @param entity LootContextEntityTarget
    * @param scores {"name":"scores","type":{"name":"JsonObject","type":2}}
    */
  entityScores(entity: LootContextEntityTarget, scores: JsonObject): void;
}

/**
  * dev.latvian.kubejs.loot.EntityLootEventJS
  * Events this will trigger on: entity.loot_tables
  */
interface EntityLootEventJS extends LootEventJS {

  /**
    * @param type {"name":"type","type":{"name":"EntityType","type":2}}
    * @param b {"name":"b","type":{"name":"Consumer","generics":["LootBuilder"]}}
    */
  addEntity(type: EntityType, b: Consumer): void;

  /**
    * @param type {"name":"type","type":{"name":"EntityType","type":2}}
    * @param b {"name":"b","type":{"name":"Consumer","generics":["LootBuilder"]}}
    */
  modifyEntity(type: EntityType, b: Consumer): void;
}

/**
  * dev.latvian.kubejs.loot.FishingLootEventJS
  * Events this will trigger on: fishing.loot_tables
  */
interface FishingLootEventJS extends LootEventJS {

  /**
    * @param id ResourceLocation
    * @param b {"name":"b","type":{"name":"Consumer","generics":["LootBuilder"]}}
    */
  addFishing(id: string, b: Consumer): void;
}

/**
  * dev.latvian.kubejs.loot.FunctionContainer
  */
interface FunctionContainer {

  /**
    * @param o {"name":"o","type":{"name":"JsonObject","type":2}}
    */
  addFunction(o: JsonObject): void;

  /**
    * @param func {"name":"func","type":{"name":"Consumer","generics":["ConditionalFunction"]}}
    */
  addConditionalFunction(func: Consumer): void;

  /**
    * @param count {"name":"count","type":{"name":"RandomIntGenerator","type":2}}
    */
  count(count: RandomIntGenerator): void;

  /**
    * @param levels {"name":"levels","type":{"name":"RandomIntGenerator","type":2}}
    * @param treasure Boolean
    */
  enchantWithLevels(levels: RandomIntGenerator, treasure: boolean): void;

  /**
    * @param enchantments {"name":"enchantments","type":{"name":"Array","generics":["ResourceLocation"]}}
    */
  enchantRandomly(enchantments: Array): void;

  /**
    * @param tag {"name":"tag","type":{"name":"CompoundTag","type":2}}
    */
  nbt(tag: CompoundTag): void;

  /**
    */
  furnaceSmelt(): void;

  /**
    * @param count {"name":"count","type":{"name":"RandomIntGenerator","type":2}}
    * @param limit Integer
    */
  lootingEnchant(count: RandomIntGenerator, limit: Integer): void;

  /**
    * @param damage {"name":"damage","type":{"name":"RandomIntGenerator","type":2}}
    */
  damage(damage: RandomIntGenerator): void;

  /**
    * @param name Text
    * @param entity LootContextEntityTarget
    */
  name(name: Text, entity?: LootContextEntityTarget): void;

  /**
    * @param name Text
    */
  name(name: Text): void;

  /**
    * @param source String
    */
  copyName(source: string): void;

  /**
    * @param table ResourceLocation
    * @param seed Long
    */
  lootTable(table: string, seed: number): void;
}

/**
  * dev.latvian.kubejs.loot.GenericLootEventJS
  * Events this will trigger on: generic.loot_tables
  */
interface GenericLootEventJS extends LootEventJS {

  /**
    * @param id ResourceLocation
    * @param b {"name":"b","type":{"name":"Consumer","generics":["LootBuilder"]}}
    */
  addGeneric(id: string, b: Consumer): void;
}

/**
  * dev.latvian.kubejs.loot.GiftLootEventJS
  * Events this will trigger on: gift.loot_tables
  */
interface GiftLootEventJS extends LootEventJS {

  /**
    * @param id ResourceLocation
    * @param b {"name":"b","type":{"name":"Consumer","generics":["LootBuilder"]}}
    */
  addGift(id: string, b: Consumer): void;
}

/**
  * dev.latvian.kubejs.loot.LootBuilder
  */
interface LootBuilder {

  /**
    */
  toJson(): JsonObject;

  /**
    * @param pool {"name":"pool","type":{"name":"Consumer","generics":["LootBuilderPool"]}}
    */
  addPool(pool: Consumer): void;

  /**
    */
  clearPools(): void;

  /**
    */
  clearFunctions(): void;

  /**
    */
  clearConditions(): void;
}

/**
  * dev.latvian.kubejs.loot.LootBuilderPool
  */
interface LootBuilderPool {

  /**
    */
  toJson(): JsonObject;

  /**
    * @param entry {"name":"entry","type":{"name":"JsonObject","type":2}}
    */
  addEntry(entry: JsonObject): void;

  /**
    * @param weight Integer
    */
  addEmpty(weight: Integer): void;

  /**
    * @param table ResourceLocation
    */
  addLootTable(table: string): void;

  /**
    * @param item ItemStackJS
    * @param weight Integer
    * @param count {"name":"count","type":{"name":"RandomIntGenerator","type":2},"nullable":true}
    */
  addItem(item: ItemStackJS, weight: Integer, count?: RandomIntGenerator): void;

  /**
    * @param item ItemStackJS
    * @param weight Integer
    */
  addItem(item: ItemStackJS, weight: Integer): void;

  /**
    * @param item ItemStackJS
    */
  addItem(item: ItemStackJS): void;

  /**
    * @param tag ResourceLocation
    * @param expand Boolean
    */
  addTag(tag: string, expand: boolean): void;
}

/**
  * dev.latvian.kubejs.loot.LootContextEntityTarget
  */
interface LootContextEntityTarget {
}

/**
  * dev.latvian.kubejs.loot.LootEventJS
  */
interface LootEventJS extends EventJS {

  /**
    * @param id ResourceLocation
    * @param json {"name":"json","type":{"name":"JsonObject","type":2}}
    */
  addJson(id: string, json: JsonObject): void;

  /**
    * @param id ResourceLocation
    * @param b {"name":"b","type":{"name":"Consumer","generics":["LootBuilder"]}}
    */
  modify(id: string, b: Consumer): void;

  /**
    */
  removeAll(): void;
}

/**
  * dev.latvian.kubejs.player.AdvancementJS
  */
interface AdvancementJS {

  /**
    */
  id(): string;

  /**
    * @param a AdvancementJS
    */
  addChild(a: AdvancementJS): void;

  /**
    */
  hasDisplay(): boolean;
}

/**
  * dev.latvian.kubejs.player.ClientPlayerJS
  */
interface ClientPlayerJS extends PlayerJS {
}

/**
  * dev.latvian.kubejs.player.PlayerJS
  */
interface PlayerJS extends LivingEntityJS {

  /**
    */
  sendInventoryUpdate(): void;

  /**
    * @param item ItemStackJS
    */
  give(item: ItemStackJS): void;

  /**
    * @param item ItemStackJS
    */
  giveInHand(item: ItemStackJS): void;

  /**
    * @param channel String
    * @param data Object
    */
  sendData(channel: string, data?: Object): void;

  /**
    * @param f Integer
    * @param m Float
    */
  addFood(f: Integer, m: number): void;

  /**
    * @param exhaustion Float
    */
  addExhaustion(exhaustion: number): void;

  /**
    * @param xp Integer
    */
  addXP(xp: Integer): void;

  /**
    * @param l Integer
    */
  addXPLevels(l: Integer): void;

  /**
    * @param renderer {"name":"renderer","type":{"name":"CompoundTag","type":2}}
    */
  paint(renderer: CompoundTag): void;

  /**
    */
  boostElytraFlight(): void;

  /**
    */
  closeInventory(): void;

  /**
    * @param item {"name":"item","type":{"name":"Item","type":2}}
    * @param ticks Integer
    */
  addItemCooldown(item: Item, ticks: Integer): void;
}

/**
  * dev.latvian.kubejs.player.PlayerStatsJS
  */
interface PlayerStatsJS {

  /**
    * @param id ResourceLocation
    */
  get(id: string): Integer;

  /**
    * @param id ResourceLocation
    * @param value Integer
    */
  set(id: string, value: Integer): void;

  /**
    * @param id ResourceLocation
    * @param value Integer
    */
  add(id: string, value: Integer): void;

  /**
    * @param block {"name":"block","type":{"name":"Block","type":2}}
    */
  getBlocksMined(block: Block): Integer;

  /**
    * @param item {"name":"item","type":{"name":"Item","type":2}}
    */
  getItemsCrafted(item: Item): Integer;

  /**
    * @param item {"name":"item","type":{"name":"Item","type":2}}
    */
  getItemsUsed(item: Item): Integer;

  /**
    * @param item {"name":"item","type":{"name":"Item","type":2}}
    */
  getItemsBroken(item: Item): Integer;

  /**
    * @param item {"name":"item","type":{"name":"Item","type":2}}
    */
  getItemsPickedUp(item: Item): Integer;

  /**
    * @param item {"name":"item","type":{"name":"Item","type":2}}
    */
  getItemsDropped(item: Item): Integer;

  /**
    * @param entity {"name":"entity","type":{"name":"EntityType","type":2}}
    */
  getKilled(entity: EntityType): Integer;

  /**
    * @param entity {"name":"entity","type":{"name":"EntityType","type":2}}
    */
  getKilledBy(entity: EntityType): Integer;
}

/**
  * dev.latvian.kubejs.player.ServerPlayerJS
  */
interface ServerPlayerJS extends PlayerJS {

  /**
    * @param reason Text
    */
  kick(reason: Text): void;

  /**
    */
  kick(): void;

  /**
    * @param banner String
    * @param reason String
    * @param expiresInMillis Long
    */
  ban(banner: string, reason: string, expiresInMillis: number): void;

  /**
    * @param id ResourceLocation
    */
  isAdvancementDone(id: string): boolean;

  /**
    * @param id ResourceLocation
    */
  unlockAdvancement(id: string): void;

  /**
    * @param id ResourceLocation
    */
  revokeAdvancement(id: string): void;
}

/**
  * dev.latvian.kubejs.script.ScriptType
  */
interface ScriptType {
}

/**
  * dev.latvian.kubejs.server.GameRulesJS
  */
interface GameRulesJS {

  /**
    * @param rule String
    */
  getString(rule: string): string;

  /**
    * @param rule String
    */
  getBoolean(rule: string): boolean;

  /**
    * @param rule String
    */
  getInt(rule: string): Integer;

  /**
    * @param rule String
    * @param value Object
    */
  set(rule: string, value: Object): void;
}

/**
  * dev.latvian.kubejs.server.IScheduledEventCallback
  */
interface IScheduledEventCallback {

  /**
    * @param callback ScheduledEvent
    */
  onCallback(callback: ScheduledEvent): void;
}

/**
  * dev.latvian.kubejs.server.ScheduledEvent
  */
interface ScheduledEvent {

  /**
    */
  reschedule(): void;

  /**
    * @param timer Long
    */
  reschedule(timer: number): ScheduledEvent;
}

/**
  * dev.latvian.kubejs.server.ServerJS
  */
interface ServerJS {

  /**
    */
  stop(): void;

  /**
    * @param dimension String
    */
  getLevel(dimension: string): WorldJS;

  /**
    * @depricated
    * @param minecraftLevel {"name":"minecraftLevel","type":{"name":"Level","type":2}}
    */
  getLevel(minecraftLevel: Level): WorldJS;

  /**
    * @param uuid UUID
    */
  getPlayer(uuid: UUID): ServerPlayerJS;

  /**
    * @param name String
    */
  getPlayer(name: string): ServerPlayerJS;

  /**
    * @param filter String
    */
  getEntities(filter: string): EntityArrayList;

  /**
    * @param timer Long
    * @param data Object
    * @param event IScheduledEventCallback
    */
  schedule(timer: number, data?: Object, event: IScheduledEventCallback): ScheduledEvent;

  /**
    * @param timer Long
    * @param event IScheduledEventCallback
    */
  schedule(timer: number, event: IScheduledEventCallback): ScheduledEvent;

  /**
    * @param ticks Long
    * @param data Object
    * @param event IScheduledEventCallback
    */
  scheduleInTicks(ticks: number, data?: Object, event: IScheduledEventCallback): ScheduledEvent;

  /**
    * @param ticks Long
    * @param event IScheduledEventCallback
    */
  scheduleInTicks(ticks: number, event: IScheduledEventCallback): ScheduledEvent;

  /**
    * @param id ResourceLocation
    */
  getAdvancement(id: string): AdvancementJS;

  /**
    * @param channel String
    * @param data Object
    */
  sendDataToAll(channel: string, data?: Object): void;
}

/**
  * dev.latvian.kubejs.server.ServerSettings
  */
interface ServerSettings {
}

/**
  * dev.latvian.kubejs.server.TagEventJS
  * Events this will trigger on: item.tags, block.tags, fluid.tags, entity_type.tags, <custom_type>.tags
  */
interface TagEventJS extends EventJS {

  /**
    * @param tag ResourceLocation
    * @param id Object
    */
  add(tag: string, id: Object): void;

  /**
    * @param tag ResourceLocation
    * @param id Object
    */
  remove(tag: string, id: Object): void;

  /**
    * @param tag ResourceLocation
    */
  removeAll(tag: string): void;

  /**
    * @param ids Object
    */
  removeAllTagsFrom(ids: Object): void;
}

/**
  * dev.latvian.kubejs.stages.Stages
  */
interface Stages {

  /**
    * @param stage String
    */
  addNoUpdate(stage: string): boolean;

  /**
    * @param stage String
    */
  removeNoUpdate(stage: string): boolean;

  /**
    * @param stage String
    */
  has(stage: string): boolean;

  /**
    * @param stage String
    */
  add(stage: string): boolean;

  /**
    * @param stage String
    */
  remove(stage: string): boolean;

  /**
    * @param stage String
    * @param enabled Boolean
    */
  set(stage: string, enabled: boolean): boolean;

  /**
    * @param stage String
    */
  toggle(stage: string): boolean;

  /**
    */
  clear(): boolean;

  /**
    */
  sync(): void;

  /**
    * @param stages {"name":"stages","type":{"name":"Collection","generics":["String"]}}
    */
  replace(stages: Collection): void;
}

/**
  * dev.latvian.kubejs.text.Text
  */
interface Text {

  /**
    */
  component(): Component;

  /**
    */
  copy(): void;

  /**
    */
  hasStyle(): boolean;

  /**
    */
  createStyle(): Style;

  /**
    * @param c Color
    */
  color(c: Color): void;

  /**
    */
  black(): void;

  /**
    */
  darkBlue(): void;

  /**
    */
  darkGreen(): void;

  /**
    */
  darkAqua(): void;

  /**
    */
  darkRed(): void;

  /**
    */
  darkPurple(): void;

  /**
    */
  gold(): void;

  /**
    */
  gray(): void;

  /**
    */
  darkGray(): void;

  /**
    */
  blue(): void;

  /**
    */
  green(): void;

  /**
    */
  aqua(): void;

  /**
    */
  red(): void;

  /**
    */
  lightPurple(): void;

  /**
    */
  yellow(): void;

  /**
    */
  white(): void;

  /**
    */
  noColor(): void;

  /**
    * @param value Boolean
    */
  bold(value?: boolean): void;

  /**
    */
  bold(): void;

  /**
    * @param value Boolean
    */
  italic(value?: boolean): void;

  /**
    */
  italic(): void;

  /**
    * @param value Boolean
    */
  underlined(value?: boolean): void;

  /**
    */
  underlined(): void;

  /**
    * @param value Boolean
    */
  strikethrough(value?: boolean): void;

  /**
    */
  strikethrough(): void;

  /**
    * @param value Boolean
    */
  obfuscated(value?: boolean): void;

  /**
    */
  obfuscated(): void;

  /**
    * @param value String
    */
  insertion(value?: string): void;

  /**
    * @param value String
    */
  font(value?: string): void;

  /**
    * @param value String
    */
  click(value?: string): void;

  /**
    * @param text Object
    */
  hover(text: Object): void;

  /**
    * @param sibling Object
    */
  append(sibling: Object): void;

  /**
    */
  hasSiblings(): boolean;
}

/**
  * dev.latvian.kubejs.util.color.Color
  */
interface Color {

  /**
    */
  createTextColorKJS(): TextColor;
}

/**
  * dev.latvian.kubejs.util.ConsoleJS
  */
interface ConsoleJS {

  /**
    * @param message Object
    */
  info(message: Object): void;

  /**
    * @param message Object
    * @param args {"name":"args","type":{"name":"VarArray","generics":["Object"]}}
    */
  infof(message: Object, args: VarArray): void;

  /**
    * @param message Object
    */
  log(message: Object): void;

  /**
    * @param message Object
    */
  warn(message: Object): void;

  /**
    * @param message String
    * @param throwable Exception
    */
  warn(message: string, throwable: Exception): void;

  /**
    * @param message String
    * @param args {"name":"args","type":{"name":"VarArray","generics":["Object"]}}
    */
  warnf(message: string, args: VarArray): void;

  /**
    * @param message Object
    */
  error(message: Object): void;

  /**
    * @param message String
    * @param throwable Exception
    */
  error(message: string, throwable: Exception): void;

  /**
    * @param message String
    * @param args {"name":"args","type":{"name":"VarArray","generics":["Object"]}}
    */
  errorf(message: string, args: VarArray): void;

  /**
    */
  shouldPrintDebug(): boolean;

  /**
    * @param message Object
    */
  debug(message: Object): void;

  /**
    * @param message String
    * @param args {"name":"args","type":{"name":"VarArray","generics":["Object"]}}
    */
  debugf(message: string, args: VarArray): void;

  /**
    */
  group(): void;

  /**
    */
  groupEnd(): void;

  /**
    */
  trace(): void;

  /**
    * @param className String
    * @param tree Boolean
    */
  printClass(className: string, tree: boolean): void;

  /**
    * @param className String
    */
  printClass(className: string): void;

  /**
    * @param o Object
    * @param tree Boolean
    */
  printObject(o?: Object, tree: boolean): void;

  /**
    * @param o Object
    */
  printObject(o?: Object): void;
}

/**
  * dev.latvian.kubejs.util.MessageSender
  */
interface MessageSender {

  /**
    * @param message Text
    */
  tell(message: Text): void;

  /**
    * @param command String
    */
  runCommand(command: string): Integer;

  /**
    * @param command String
    */
  runCommandSilent(command: string): Integer;
}

/**
  * dev.latvian.kubejs.world.BlockContainerJS
  */
interface BlockContainerJS {

  /**
    * @param direction Direction
    * @param blocks Integer
    */
  offset(direction: Direction, blocks: Integer): void;

  /**
    * @param direction Direction
    */
  offset(direction: Direction): void;

  /**
    * @param x Integer
    * @param y Integer
    * @param z Integer
    */
  offset(x: Integer, y: Integer, z: Integer): void;

  /**
    * @param state BlockState
    * @param flags Integer
    */
  setBlockState(state: BlockState, flags: Integer): void;

  /**
    * @param tag ResourceLocation
    */
  hasTag(tag: string): boolean;

  /**
    * @param id ResourceLocation
    * @param properties {"name":"properties","type":{"name":"Map","generics":["String","String"]}}
    * @param flags Integer
    */
  set(id: string, properties: Map, flags: Integer): void;

  /**
    * @param id ResourceLocation
    * @param properties {"name":"properties","type":{"name":"Map","generics":["String","String"]}}
    */
  set(id: string, properties: Map): void;

  /**
    * @param id ResourceLocation
    */
  set(id: string): void;

  /**
    */
  createExplosion(): ExplosionJS;

  /**
    * @param id ResourceLocation
    */
  createEntity(id: string): EntityJS;

  /**
    * @param effectOnly Boolean
    * @param player EntityJS
    */
  spawnLightning(effectOnly: boolean, player?: EntityJS): void;

  /**
    * @param effectOnly Boolean
    */
  spawnLightning(effectOnly: boolean): void;

  /**
    * @param fireworks {"name":"fireworks","type":{"name":"FireworksJS","type":2}}
    */
  spawnFireworks(fireworks: FireworksJS): void;

  /**
    * @param direction Direction
    */
  getInventory(direction: Direction): InventoryJS;

  /**
    * @param radius Double
    */
  getPlayersInRadius(radius: number): EntityArrayList;
}

/**
  * dev.latvian.kubejs.world.ExplosionEventJS
  */
interface ExplosionEventJS extends WorldEventJS {
}

/**
  * dev.latvian.kubejs.world.SimpleWorldEventJS
  * Events this will trigger on: world.load, world.unload, world.tick
  */
interface SimpleWorldEventJS extends WorldEventJS {
}

/**
  * dev.latvian.kubejs.world.WorldEventJS$Post
  * Events this will trigger on: world.explosion.post
  */
interface WorldEventJS$Post extends ExplosionEventJS {

  /**
    * @param entity EntityJS
    */
  removeAffectedEntity(entity: EntityJS): void;

  /**
    */
  removeAllAffectedEntities(): void;

  /**
    * @param block BlockContainerJS
    */
  removeAffectedBlock(block: BlockContainerJS): void;

  /**
    */
  removeAllAffectedBlocks(): void;

  /**
    */
  removeKnockback(): void;
}

/**
  * dev.latvian.kubejs.world.WorldEventJS$Pre
  * Events this will trigger on: world.explosion.pre
  */
interface WorldEventJS$Pre extends ExplosionEventJS {

  /**
    */
  cancel(): void;
}

/**
  * dev.latvian.kubejs.world.WorldEventJS
  */
interface WorldEventJS extends EventJS {
}

/**
  * dev.latvian.kubejs.world.WorldJS
  */
interface WorldJS {

  /**
    * @param x Integer
    * @param y Integer
    * @param z Integer
    */
  getBlock(x: Integer, y: Integer, z: Integer): BlockContainerJS;

  /**
    * @param pos BlockPos
    */
  getBlock(pos: BlockPos): BlockContainerJS;

  /**
    * @param blockEntity {"name":"blockEntity","type":{"name":"BlockEntity","type":2}}
    */
  getBlock(blockEntity: BlockEntity): BlockContainerJS;

  /**
    * @depricated
    * @param player {"name":"player","type":{"name":"Player","type":2}}
    */
  getPlayerData(player: Player): PlayerDataJS;

  /**
    * @depricated
    * @param entities {"name":"entities","type":{"name":"Collection","generics":[{"name":"Entity","type":2}]}}
    */
  createEntityList(entities: Collection): EntityArrayList;

  /**
    * @param x Double
    * @param y Double
    * @param z Double
    */
  createExplosion(x: number, y: number, z: number): ExplosionJS;

  /**
    * @param id ResourceLocation
    */
  createEntity(id: string): EntityJS;

  /**
    * @param x Double
    * @param y Double
    * @param z Double
    * @param effectOnly Boolean
    * @param player EntityJS
    */
  spawnLightning(x: number, y: number, z: number, effectOnly: boolean, player?: EntityJS): void;

  /**
    * @param x Double
    * @param y Double
    * @param z Double
    * @param effectOnly Boolean
    */
  spawnLightning(x: number, y: number, z: number, effectOnly: boolean): void;

  /**
    * @param x Double
    * @param y Double
    * @param z Double
    * @param f {"name":"f","type":{"name":"FireworksJS","type":2}}
    */
  spawnFireworks(x: number, y: number, z: number, f: FireworksJS): void;
}

