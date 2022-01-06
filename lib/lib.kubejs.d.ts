/// <reference no-default-lib="true"/>

/////////////////////////////
/// KubeJS APIs - Autogen
/// Version: 2021-09-29T11:38:10.599039177Z
/////////////////////////////


/**
  * Event type -> Event mapping for KubeJS
  */
interface KubeJS {
  "world.explosion.pre": WorldEventJS$Pre;
  "world.explosion.post": WorldEventJS$Post;
  "world.load": SimpleWorldEventJS;
  "world.unload": SimpleWorldEventJS;
  "world.tick": SimpleWorldEventJS;
  "item.tags": TagEventJS;
  "block.tags": TagEventJS;
  "fluid.tags": TagEventJS;
  "entity_type.tags": TagEventJS;
  "<custom_type>.tags": TagEventJS;
  "jei.information": InformationJEIEventJS;
  "jei.add.items": AddJEIEventJS;
  "jei.add.fluids": AddJEIEventJS;
  "jei.subtypes": AddJEISubtypesEventJS;
  "jei.remove.categories": RemoveJEICategoriesEvent;
  "jei.hide.custom": HideCustomJEIEventJS;
  "jei.hide.items": HideJEIEventJS;
  "jei.hide.fluids": HideJEIEventJS;
  "jei.remove.recipes": RemoveJEIRecipesEvent;
  "fishing.loot_tables": FishingLootEventJS;
  "generic.loot_tables": GenericLootEventJS;
  "block.loot_tables": BlockLootEventJS;
  "entity.loot_tables": EntityLootEventJS;
  "chest.loot_tables": ChestLootEventJS;
  "gift.loot_tables": GiftLootEventJS;
  "custom_id": DataEvent;
}

/**
  * KubeJS event listener.
  * Triggers during an event.
  * 
  * @param type {string} The event ID
  * @param event
  */
declare function onEvent<T extends keyof KubeJS, E extends KubeJS[T]>(type: T, handle: (e: E) => void): void;



/////////////////////////////
/// KubeJS APIs - Types
/////////////////////////////

/**
  * dev.latvian.kubejs.entity.DamageSourceJS
  */
interface DamageSourceJS {
  /**
    * {"name":"source","type":{"name":"DamageSource","type":2}}
    */
  readonly source: DamageSource;
  /**
    * {"name":"world","type":"WorldJS"}
    */
  readonly world: WorldJS;
  /**
    * {"name":"type","type":"String"}
    */
  readonly type: string;
  /**
    * {"name":"immediate","type":"EntityJS","nullable":true}
    */
  readonly immediate?: EntityJS;
  /**
    * {"name":"actual","type":"EntityJS","nullable":true}
    */
  readonly actual?: EntityJS;
  /**
    * {"name":"player","type":"PlayerJS","nullable":true}
    */
  readonly player?: PlayerJS;
}

/**
  * dev.latvian.kubejs.entity.LivingEntityJS
  */
interface LivingEntityJS extends EntityJS {
  /**
    * {"name":"child","type":"Boolean"}
    */
  readonly child: boolean;
  /**
    * {"name":"health","type":"Float","access":1}
    */
  readonly health: number;
  /**
    * {"name":"maxHealth","type":"Float","access":1}
    */
  readonly maxHealth: number;
  /**
    * {"name":"undead","type":"Boolean"}
    */
  readonly undead: boolean;
  /**
    * {"name":"onLadder","type":"Boolean"}
    */
  readonly onLadder: boolean;
  /**
    * {"name":"sleeping","type":"Boolean"}
    */
  readonly sleeping: boolean;
  /**
    * {"name":"elytraFlying","type":"Boolean"}
    */
  readonly elytraFlying: boolean;
  /**
    * {"name":"revengeTarget","type":"LivingEntityJS","access":1,"nullable":true}
    */
  readonly revengeTarget?: LivingEntityJS;
  /**
    * {"name":"revengeTimer","type":"Integer"}
    */
  readonly revengeTimer: number;
  /**
    * {"name":"lastAttackedEntity","type":"LivingEntityJS","nullable":true}
    */
  readonly lastAttackedEntity?: LivingEntityJS;
  /**
    * {"name":"lastAttackedEntityTime","type":"Integer"}
    */
  readonly lastAttackedEntityTime: number;
  /**
    * {"name":"idleTime","type":"Integer"}
    */
  readonly idleTime: number;
  /**
    * {"name":"potionEffects","type":{"name":"EntityPotionEffectsJS","type":2}}
    */
  readonly potionEffects: EntityPotionEffectsJS;
  /**
    * {"name":"lastDamageSource","type":"DamageSourceJS","nullable":true}
    */
  readonly lastDamageSource?: DamageSourceJS;
  /**
    * {"name":"attackingEntity","type":"LivingEntityJS","nullable":true}
    */
  readonly attackingEntity?: LivingEntityJS;
  /**
    * {"name":"mainHandItem","type":"ItemStackJS","access":1}
    */
  readonly mainHandItem: ItemStackJS;
  /**
    * {"name":"offHandItem","type":"ItemStackJS","access":1}
    */
  readonly offHandItem: ItemStackJS;
  /**
    * {"name":"headArmorItem","type":"ItemStackJS","access":1}
    */
  readonly headArmorItem: ItemStackJS;
  /**
    * {"name":"chestArmorItem","type":"ItemStackJS","access":1}
    */
  readonly chestArmorItem: ItemStackJS;
  /**
    * {"name":"legsArmorItem","type":"ItemStackJS","access":1}
    */
  readonly legsArmorItem: ItemStackJS;
  /**
    * {"name":"feetArmorItem","type":"ItemStackJS","access":1}
    */
  readonly feetArmorItem: ItemStackJS;
  /**
    * {"name":"movementSpeed","type":"Float","access":1}
    */
  readonly movementSpeed: number;
  /**
    * {"name":"absorptionAmount","type":"Float","access":1}
    */
  readonly absorptionAmount: number;
  /**
    * {"name":"reachDistance","type":"Double"}
    */
  readonly reachDistance: number;

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
  damageEquipment(slot: EquipmentSlot, amount: number): void;

  /**
    * @param slot {"name":"slot","type":{"name":"EquipmentSlot","type":2}}
    * @param amount Integer
    * @param onBroken {"name":"onBroken","type":{"name":"Consumer","generics":["ItemStackJS"]}}
    */
  damageEquipment(slot: EquipmentSlot, amount: number, onBroken: (input: ItemStackJS) => void): void;

  /**
    * @param slot {"name":"slot","type":{"name":"EquipmentSlot","type":2}}
    */
  damageEquipment(slot: EquipmentSlot): void;

  /**
    * @param hand InteractionHand
    * @param amount Integer
    */
  damageHeldItem(hand: InteractionHand, amount: number): void;

  /**
    * @param hand InteractionHand
    * @param amount Integer
    * @param onBroken {"name":"onBroken","type":{"name":"Consumer","generics":["ItemStackJS"]}}
    */
  damageHeldItem(hand: InteractionHand, amount: number, onBroken: (input: ItemStackJS) => void): void;

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
  * dev.latvian.kubejs.entity.ItemEntityJS
  */
interface ItemEntityJS extends EntityJS {
  /**
    * {"name":"item","type":"ItemStackJS","access":1}
    */
  readonly item: ItemStackJS;
  /**
    * {"name":"lifespan","type":"Integer","access":1}
    */
  readonly lifespan: number;
  /**
    * {"name":"owner","type":"UUID","access":1,"nullable":true}
    */
  readonly owner?: UUID;
  /**
    * {"name":"thrower","type":"UUID","access":1,"nullable":true}
    */
  readonly thrower?: UUID;
  /**
    * {"name":"pickupDelay","type":"Integer","access":2}
    */
  readonly pickupDelay: number;

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
  * dev.latvian.kubejs.entity.RayTraceResultJS
  */
interface RayTraceResultJS {
  /**
    * {"name":"fromEntity","type":"EntityJS"}
    */
  readonly fromEntity: EntityJS;
  /**
    * {"name":"type","type":"String"}
    */
  readonly type: string;
  /**
    * {"name":"distance","type":"Double"}
    */
  readonly distance: number;
  /**
    * {"name":"hitX","type":"Double","access":1}
    */
  readonly hitX: number;
  /**
    * {"name":"hitY","type":"Double","access":1}
    */
  readonly hitY: number;
  /**
    * {"name":"hitZ","type":"Double","access":1}
    */
  readonly hitZ: number;
  /**
    * {"name":"block","type":"BlockContainerJS","access":1,"nullable":true}
    */
  readonly block?: BlockContainerJS;
  /**
    * {"name":"facing","type":"Direction","access":1,"nullable":true}
    */
  readonly facing?: Direction;
  /**
    * {"name":"entity","type":"EntityJS","access":1,"nullable":true}
    */
  readonly entity?: EntityJS;
}

/**
  * dev.latvian.kubejs.entity.EntityArrayList
  */
interface EntityArrayList extends Array {
  /**
    * {"name":"world","type":"WorldJS"}
    */
  readonly world: WorldJS;
  /**
    * {"name":"first","type":"EntityJS"}
    */
  readonly first: EntityJS;

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
  filter(filter: Predicate<EntityJS>): EntityArrayList;

  /**
    * @param channel String
    * @param data {"name":"data","type":{"name":"MapJS","type":2},"nullable":true}
    */
  sendData(channel: string, data?: MapJS): void;
}

/**
  * dev.latvian.kubejs.entity.ItemFrameEntityJS
  */
interface ItemFrameEntityJS extends EntityJS {
  /**
    * {"name":"item","type":"ItemStackJS","access":1}
    */
  readonly item: ItemStackJS;
  /**
    * {"name":"frameRotation","type":"Integer","access":1}
    */
  readonly frameRotation: number;
}

/**
  * dev.latvian.kubejs.entity.EntityJS
  */
interface EntityJS {
  /**
    * {"name":"minecraftEntity","type":{"name":"Entity","type":2}}
    */
  readonly minecraftEntity: Entity;
  /**
    * {"name":"world","type":"WorldJS"}
    */
  readonly world: WorldJS;
  /**
    * {"name":"server","type":"ServerJS","nullable":true}
    */
  readonly server?: ServerJS;
  /**
    * {"name":"id","type":"UUID"}
    */
  readonly id: UUID;
  /**
    * {"name":"type","type":"String"}
    */
  readonly type: string;
  /**
    * {"name":"profile","type":{"name":"GameProfile","type":2}}
    */
  readonly profile: GameProfile;
  /**
    * {"name":"item","type":"ItemStackJS","nullable":true}
    */
  readonly item?: ItemStackJS;
  /**
    * {"name":"frame","type":"Boolean"}
    */
  readonly frame: boolean;
  /**
    * {"name":"tags","type":{"name":"Set","generics":["String"]}}
    */
  readonly tags: Set<String>;
  /**
    * {"name":"alive","type":"Boolean"}
    */
  readonly alive: boolean;
  /**
    * {"name":"living","type":"Boolean"}
    */
  readonly living: boolean;
  /**
    * {"name":"player","type":"Boolean"}
    */
  readonly player: boolean;
  /**
    * {"name":"crouching","type":"Boolean"}
    */
  readonly crouching: boolean;
  /**
    * {"name":"sprinting","type":"Boolean"}
    */
  readonly sprinting: boolean;
  /**
    * {"name":"swimming","type":"Boolean"}
    */
  readonly swimming: boolean;
  /**
    * {"name":"glowing","type":"Boolean","access":1}
    */
  readonly glowing: boolean;
  /**
    * {"name":"invisible","type":"Boolean","access":1}
    */
  readonly invisible: boolean;
  /**
    * {"name":"invulnerable","type":"Boolean","access":1}
    */
  readonly invulnerable: boolean;
  /**
    * {"name":"boss","type":"Boolean"}
    */
  readonly boss: boolean;
  /**
    * {"name":"monster","type":"Boolean"}
    */
  readonly monster: boolean;
  /**
    * {"name":"animal","type":"Boolean"}
    */
  readonly animal: boolean;
  /**
    * {"name":"ambientCreature","type":"Boolean"}
    */
  readonly ambientCreature: boolean;
  /**
    * {"name":"waterCreature","type":"Boolean"}
    */
  readonly waterCreature: boolean;
  /**
    * {"name":"peacefulCreature","type":"Boolean"}
    */
  readonly peacefulCreature: boolean;
  /**
    * {"name":"onGround","type":"Boolean"}
    */
  readonly onGround: boolean;
  /**
    * {"name":"fallDistance","type":"Float","access":1}
    */
  readonly fallDistance: number;
  /**
    * {"name":"stepHeight","type":"Float","access":1}
    */
  readonly stepHeight: number;
  /**
    * {"name":"noClip","type":"Boolean","access":1}
    */
  readonly noClip: boolean;
  /**
    * {"name":"silent","type":"Boolean","access":1}
    */
  readonly silent: boolean;
  /**
    * {"name":"noGravity","type":"Boolean","access":1}
    */
  readonly noGravity: boolean;
  /**
    * {"name":"x","type":"Double","access":1}
    */
  readonly x: number;
  /**
    * {"name":"y","type":"Double","access":1}
    */
  readonly y: number;
  /**
    * {"name":"z","type":"Double","access":1}
    */
  readonly z: number;
  /**
    * {"name":"yaw","type":"Float","access":1}
    */
  readonly yaw: number;
  /**
    * {"name":"pitch","type":"Float","access":1}
    */
  readonly pitch: number;
  /**
    * {"name":"motionX","type":"Double","access":1}
    */
  readonly motionX: number;
  /**
    * {"name":"motionY","type":"Double","access":1}
    */
  readonly motionY: number;
  /**
    * {"name":"motionZ","type":"Double","access":1}
    */
  readonly motionZ: number;
  /**
    * {"name":"ticksExisted","type":"Integer"}
    */
  readonly ticksExisted: number;
  /**
    * {"name":"position","type":"BlockContainerJS","access":2}
    */
  readonly position: BlockContainerJS;
  /**
    * {"name":"passengers","type":"EntityArrayList"}
    */
  readonly passengers: EntityArrayList;
  /**
    * {"name":"recursivePassengers","type":"EntityArrayList"}
    */
  readonly recursivePassengers: EntityArrayList;
  /**
    * {"name":"ridingEntity","type":"EntityJS","nullable":true}
    */
  readonly ridingEntity?: EntityJS;
  /**
    * {"name":"teamId","type":"String"}
    */
  readonly teamId: string;
  /**
    * {"name":"customName","type":"Text","access":1}
    */
  readonly customName: Text;
  /**
    * {"name":"hasCustomName","type":"Boolean"}
    */
  readonly hasCustomName: boolean;
  /**
    * {"name":"customNameAlwaysVisible","type":"Boolean","access":1}
    */
  readonly customNameAlwaysVisible: boolean;
  /**
    * {"name":"horizontalFacing","type":"Direction"}
    */
  readonly horizontalFacing: Direction;
  /**
    * {"name":"facing","type":"Direction"}
    */
  readonly facing: Direction;
  /**
    * {"name":"eyeHeight","type":"Float"}
    */
  readonly eyeHeight: number;
  /**
    * {"name":"block","type":"BlockContainerJS"}
    */
  readonly block: BlockContainerJS;
  /**
    * {"name":"onFire","type":"Integer","access":2}
    */
  readonly onFire: number;
  /**
    * {"name":"fullNBT","type":{"name":"CompoundTag","type":2},"access":1}
    */
  readonly fullNBT: CompoundTag;
  /**
    * {"name":"nbt","type":{"name":"CompoundTag","type":2}}
    */
  readonly nbt: CompoundTag;
  /**
    * {"name":"inWater","type":"Boolean"}
    */
  readonly inWater: boolean;
  /**
    * {"name":"underWater","type":"Boolean"}
    */
  readonly underWater: boolean;

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
  * dev.latvian.kubejs.script.ScriptType
  */
interface ScriptType {
  /**
    * {"name":"STARTUP","type":"ScriptType","static":true}
    */
  readonly STARTUP: ScriptType;
  /**
    * {"name":"SERVER","type":"ScriptType","static":true}
    */
  readonly SERVER: ScriptType;
  /**
    * {"name":"CLIENT","type":"ScriptType","static":true}
    */
  readonly CLIENT: ScriptType;
  /**
    * {"name":"console","type":"ConsoleJS"}
    */
  readonly console: ConsoleJS;
  /**
    * {"name":"client","type":"Boolean"}
    */
  readonly client: boolean;
  /**
    * {"name":"server","type":"Boolean"}
    */
  readonly server: boolean;
}

/**
  * dev.latvian.kubejs.world.BlockContainerJS
  */
interface BlockContainerJS {
  /**
    * {"name":"world","type":"WorldJS"}
    */
  readonly world: WorldJS;
  /**
    * {"name":"pos","type":"BlockPos"}
    */
  readonly pos: BlockPos;
  /**
    * {"name":"dimension","type":"String"}
    */
  readonly dimension: string;
  /**
    * {"name":"x","type":"Integer"}
    */
  readonly x: number;
  /**
    * {"name":"y","type":"Integer"}
    */
  readonly y: number;
  /**
    * {"name":"z","type":"Integer"}
    */
  readonly z: number;
  /**
    * {"name":"down","type":"BlockContainerJS"}
    */
  readonly down: BlockContainerJS;
  /**
    * {"name":"up","type":"BlockContainerJS"}
    */
  readonly up: BlockContainerJS;
  /**
    * {"name":"north","type":"BlockContainerJS"}
    */
  readonly north: BlockContainerJS;
  /**
    * {"name":"south","type":"BlockContainerJS"}
    */
  readonly south: BlockContainerJS;
  /**
    * {"name":"west","type":"BlockContainerJS"}
    */
  readonly west: BlockContainerJS;
  /**
    * {"name":"east","type":"BlockContainerJS"}
    */
  readonly east: BlockContainerJS;
  /**
    * {"name":"blockState","type":"BlockState"}
    */
  readonly blockState: BlockState;
  /**
    * {"name":"id","type":"String"}
    */
  readonly id: string;
  /**
    * {"name":"tags","type":{"name":"Collection","generics":["ResourceLocation"]}}
    */
  readonly tags: Collection<ResourceLocation>;
  /**
    * {"name":"properties","type":{"name":"Map","generics":["String","String"]}}
    */
  readonly properties: Map<String>;
  /**
    * {"name":"entity","type":{"name":"BlockEntity","type":2}}
    */
  readonly entity: BlockEntity;
  /**
    * {"name":"entityId","type":"String"}
    */
  readonly entityId: string;
  /**
    * {"name":"entityData","type":{"name":"Map","generics":["String","Object"]}}
    */
  readonly entityData: Map<String>;
  /**
    * {"name":"light","type":"Integer"}
    */
  readonly light: number;
  /**
    * {"name":"canSeeSky","type":"Boolean"}
    */
  readonly canSeeSky: boolean;
  /**
    * {"name":"material","type":{"name":"MaterialJS","type":2}}
    */
  readonly material: MaterialJS;
  /**
    * {"name":"item","type":"ItemStackJS"}
    */
  readonly item: ItemStackJS;
  /**
    * {"name":"playersInRadius","type":"EntityArrayList"}
    */
  readonly playersInRadius: EntityArrayList;
  /**
    * {"name":"biomeId","type":"String"}
    */
  readonly biomeId: string;

  /**
    * @param direction Direction
    * @param blocks Integer
    */
  offset(direction: Direction, blocks: number): void;

  /**
    * @param direction Direction
    */
  offset(direction: Direction): void;

  /**
    * @param x Integer
    * @param y Integer
    * @param z Integer
    */
  offset(x: number, y: number, z: number): void;

  /**
    * @param state BlockState
    * @param flags Integer
    */
  setBlockState(state: BlockState, flags: number): void;

  /**
    * @param tag ResourceLocation
    */
  hasTag(tag: string): boolean;

  /**
    * @param id ResourceLocation
    * @param properties {"name":"properties","type":{"name":"Map","generics":["String","String"]}}
    * @param flags Integer
    */
  set(id: string, properties: Map<String>, flags: number): void;

  /**
    * @param id ResourceLocation
    * @param properties {"name":"properties","type":{"name":"Map","generics":["String","String"]}}
    */
  set(id: string, properties: Map<String>): void;

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
  /**
    * {"name":"position","type":"Vec3"}
    */
  readonly position: Vec3;
  /**
    * {"name":"x","type":"Double"}
    */
  readonly x: number;
  /**
    * {"name":"y","type":"Double"}
    */
  readonly y: number;
  /**
    * {"name":"z","type":"Double"}
    */
  readonly z: number;
  /**
    * {"name":"block","type":"BlockContainerJS"}
    */
  readonly block: BlockContainerJS;
  /**
    * {"name":"exploder","type":"LivingEntityJS","nullable":true}
    */
  readonly exploder?: LivingEntityJS;
}

/**
  * dev.latvian.kubejs.world.WorldJS
  */
interface WorldJS {
  /**
    * {"name":"EntityJS","type":{"name":"nullable","type":2},"access":1,"deprecated":true}
    * @depricated
    */
  readonly EntityJS: null;
  /**
    * {"name":"LivingEntityJS","type":{"name":"nullable","type":2},"access":1,"deprecated":true}
    * @depricated
    */
  readonly LivingEntityJS: null;
  /**
    * {"name":"PlayerJS","type":{"name":"nullable","type":2},"access":1,"deprecated":true}
    * @depricated
    */
  readonly PlayerJS: null;
  /**
    * {"name":"side","type":"ScriptType"}
    */
  readonly side: ScriptType;
  /**
    * {"name":"data","type":{"name":"AttachedData","type":2}}
    */
  readonly data: AttachedData;
  /**
    * {"name":"gameRules","type":"GameRulesJS"}
    */
  readonly gameRules: GameRulesJS;
  /**
    * {"name":"server","type":"ServerJS","nullable":true}
    */
  readonly server?: ServerJS;
  /**
    * {"name":"time","type":"Long"}
    */
  readonly time: number;
  /**
    * {"name":"localTime","type":"Long"}
    */
  readonly localTime: number;
  /**
    * {"name":"dimension","type":"String"}
    */
  readonly dimension: string;
  /**
    * {"name":"overworld","type":"Boolean"}
    */
  readonly overworld: boolean;
  /**
    * {"name":"daytime","type":"Boolean"}
    */
  readonly daytime: boolean;
  /**
    * {"name":"raining","type":"Boolean"}
    */
  readonly raining: boolean;
  /**
    * {"name":"thundering","type":"Boolean"}
    */
  readonly thundering: boolean;
  /**
    * {"name":"rainStrength","type":"Float","access":2}
    */
  readonly rainStrength: number;
  /**
    * {"name":"players","type":"EntityArrayList"}
    */
  readonly players: EntityArrayList;
  /**
    * {"name":"entities","type":"EntityArrayList"}
    */
  readonly entities: EntityArrayList;

  /**
    * @param x Integer
    * @param y Integer
    * @param z Integer
    */
  getBlock(x: number, y: number, z: number): BlockContainerJS;

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
  createEntityList(entities: Entity): EntityArrayList;

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

/**
  * dev.latvian.kubejs.world.WorldEventJS
  */
interface WorldEventJS extends EventJS {
  /**
    * {"name":"world","type":"WorldJS"}
    */
  readonly world: WorldJS;
  /**
    * {"name":"server","type":"ServerJS","nullable":true}
    */
  readonly server?: ServerJS;
}

/**
  * dev.latvian.kubejs.world.WorldEventJS$Pre
  * Events: world.explosion.pre
  */
interface WorldEventJS$Pre extends ExplosionEventJS {
  /**
    * {"name":"size","type":"Float","access":1}
    */
  readonly size: number;

  /**
    */
  cancel(): void;
}

/**
  * dev.latvian.kubejs.world.WorldEventJS$Post
  * Events: world.explosion.post
  */
interface WorldEventJS$Post extends ExplosionEventJS {
  /**
    * {"name":"affectedEntities","type":"EntityArrayList"}
    */
  readonly affectedEntities: EntityArrayList;
  /**
    * {"name":"affectedBlocks","type":{"name":"List","generics":["BlockContainerJS"]}}
    */
  readonly affectedBlocks: BlockContainerJS[];

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
  * dev.latvian.kubejs.world.SimpleWorldEventJS
  * Events: world.load, world.unload, world.tick
  */
interface SimpleWorldEventJS extends WorldEventJS {
}

/**
  * dev.latvian.kubejs.server.TagEventJS
  * Events: item.tags, block.tags, fluid.tags, entity_type.tags, <custom_type>.tags
  */
interface TagEventJS extends EventJS {
  /**
    * {"name":"type","type":"String"}
    */
  readonly type: string;

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
  getInt(rule: string): number;

  /**
    * @param rule String
    * @param value Object
    */
  set(rule: string, value: Object): void;
}

/**
  * dev.latvian.kubejs.server.ServerSettings
  */
interface ServerSettings {
  /**
    * {"name":"dataPackOutput","type":"Boolean","access":1}
    */
  readonly dataPackOutput: boolean;
  /**
    * {"name":"logAddedRecipes","type":"Boolean","access":1}
    */
  readonly logAddedRecipes: boolean;
  /**
    * {"name":"logRemovedRecipes","type":"Boolean","access":1}
    */
  readonly logRemovedRecipes: boolean;
  /**
    * {"name":"logOverrides","type":"Boolean","access":1}
    */
  readonly logOverrides: boolean;
  /**
    * {"name":"logSkippedRecipes","type":"Boolean","access":1}
    */
  readonly logSkippedRecipes: boolean;
  /**
    * {"name":"logErroringRecipes","type":"Boolean","access":1}
    */
  readonly logErroringRecipes: boolean;
  /**
    * {"name":"logInvalidRecipeHandlers","type":"Boolean","access":1}
    */
  readonly logInvalidRecipeHandlers: boolean;
  /**
    * {"name":"useOriginalRecipeForFilters","type":"Boolean","access":1}
    */
  readonly useOriginalRecipeForFilters: boolean;
}

/**
  * dev.latvian.kubejs.server.ScheduledEvent
  */
interface ScheduledEvent {
  /**
    * {"name":"usingTicks","type":"Boolean"}
    */
  readonly usingTicks: boolean;
  /**
    * {"name":"server","type":"ServerJS"}
    */
  readonly server: ServerJS;
  /**
    * {"name":"timer","type":"Long"}
    */
  readonly timer: number;
  /**
    * {"name":"endTime","type":"Long"}
    */
  readonly endTime: number;
  /**
    * {"name":"timerDuration","type":"Long"}
    */
  readonly timerDuration: number;
  /**
    * {"name":"data","type":"Object","nullable":true}
    */
  readonly data?: Object;

  /**
    */
  reschedule(): void;

  /**
    * @param timer Long
    */
  reschedule(timer: number): ScheduledEvent;
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
  * dev.latvian.kubejs.server.ServerJS
  */
interface ServerJS {
  /**
    * {"name":"overworld","type":{"name":"ServerWorldJS","type":2}}
    */
  readonly overworld: ServerWorldJS;
  /**
    * {"name":"ServerPlayerJS","type":{"name":"nullable","type":2},"access":1,"deprecated":true}
    * @depricated
    */
  readonly ServerPlayerJS: null;
  /**
    * {"name":"data","type":{"name":"AttachedData","type":2}}
    */
  readonly data: AttachedData;
  /**
    * {"name":"worlds","type":{"name":"List","generics":[{"name":"ServerWorldJS","type":2}]}}
    */
  readonly worlds: ServerWorldJS;
  /**
    * {"name":"overworld","type":{"name":"ServerWorldJS","type":2}}
    */
  readonly overworld: ServerWorldJS;
  /**
    * {"name":"minecraftServer","type":{"name":"MinecraftServer","type":2}}
    */
  readonly minecraftServer: MinecraftServer;
  /**
    * {"name":"running","type":"Boolean"}
    */
  readonly running: boolean;
  /**
    * {"name":"hardcore","type":"Boolean"}
    */
  readonly hardcore: boolean;
  /**
    * {"name":"singlePlayer","type":"Boolean"}
    */
  readonly singlePlayer: boolean;
  /**
    * {"name":"dedicated","type":"Boolean"}
    */
  readonly dedicated: boolean;
  /**
    * {"name":"motd","type":"String","access":1}
    */
  readonly motd: string;
  /**
    * {"name":"players","type":"EntityArrayList"}
    */
  readonly players: EntityArrayList;
  /**
    * {"name":"entities","type":"EntityArrayList"}
    */
  readonly entities: EntityArrayList;

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
  * dev.latvian.kubejs.text.Text
  */
interface Text {
  /**
    * {"name":"string","type":"String"}
    */
  readonly string: string;
  /**
    * {"name":"siblings","type":{"name":"List","generics":["Text"]}}
    */
  readonly siblings: Text[];

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
  * dev.latvian.kubejs.stages.Stages
  */
interface Stages {
  /**
    * {"name":"all","type":{"name":"Collection","generics":["String"]}}
    */
  readonly all: Collection<String>;

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
  replace(stages: Collection<String>): void;
}

/**
  * dev.latvian.kubejs.item.ItemStackJS
  */
interface ItemStackJS {
  /**
    * {"name":"item","type":{"name":"Item","type":2}}
    */
  readonly item: Item;
  /**
    * {"name":"itemStack","type":{"name":"ItemStack","type":2}}
    */
  readonly itemStack: ItemStack;
  /**
    * {"name":"id","type":"String"}
    */
  readonly id: string;
  /**
    * {"name":"tags","type":{"name":"Collection","generics":["ResourceLocation"]}}
    */
  readonly tags: Collection<ResourceLocation>;
  /**
    * {"name":"count","type":"Integer","access":2}
    */
  readonly count: number;
  /**
    * {"name":"block","type":"Boolean"}
    */
  readonly block: boolean;
  /**
    * {"name":"nbt","type":{"name":"CompoundTag","type":2},"nullable":true}
    */
  readonly nbt?: CompoundTag;
  /**
    * {"name":"nbtString","type":"String"}
    */
  readonly nbtString: string;
  /**
    * {"name":"chance","type":"Double","access":1}
    */
  readonly chance: number;
  /**
    * {"name":"name","type":"Text"}
    */
  readonly name: Text;
  /**
    * {"name":"enchantments","type":{"name":"MapJS","type":2}}
    */
  readonly enchantments: MapJS;
  /**
    * {"name":"mod","type":"String"}
    */
  readonly mod: string;
  /**
    * {"name":"harvestSpeed","type":"Float"}
    */
  readonly harvestSpeed: number;
  /**
    * {"name":"itemGroup","type":"String"}
    */
  readonly itemGroup: string;

  /**
    * @param tag ResourceLocation
    */
  hasTag(tag: string): boolean;

  /**
    * @param c Integer
    */
  withCount(c: number): void;

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
  hasEnchantment(enchantment: Enchantment, level: number): boolean;

  /**
    * @param enchantments {"name":"enchantments","type":{"name":"MapJS","type":2}}
    */
  enchant(enchantments: MapJS): void;

  /**
    * @param enchantment {"name":"enchantment","type":{"name":"Enchantment","type":2}}
    * @param level Integer
    */
  enchant(enchantment: Enchantment, level: number): void;

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
  getHarvestLevel(tool: ToolType, player?: PlayerJS, block?: BlockContainerJS): number;

  /**
    * @param tool {"name":"tool","type":{"name":"ToolType","type":2}}
    */
  getHarvestLevel(tool: ToolType): number;

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
  * dev.latvian.kubejs.item.InventoryJS
  */
interface InventoryJS {
  /**
    * {"name":"minecraftInventory","type":{"name":"ItemHandler","type":2}}
    */
  readonly minecraftInventory: ItemHandler;
  /**
    * {"name":"size","type":"Integer"}
    */
  readonly size: number;
  /**
    * {"name":"empty","type":"Boolean"}
    */
  readonly empty: boolean;

  /**
    * @param slot Integer
    */
  get(slot: number): ItemStackJS;

  /**
    * @param slot Integer
    * @param item ItemStackJS
    */
  set(slot: number, item: ItemStackJS): void;

  /**
    * @param slot Integer
    * @param item ItemStackJS
    * @param simulate Boolean
    */
  insert(slot: number, item: ItemStackJS, simulate: boolean): ItemStackJS;

  /**
    * @param slot Integer
    * @param amount Integer
    * @param simulate Boolean
    */
  extract(slot: number, amount: number, simulate: boolean): ItemStackJS;

  /**
    * @param slot Integer
    */
  getSlotLimit(slot: number): number;

  /**
    * @param slot Integer
    * @param item Object
    */
  isItemValid(slot: number, item: Object): boolean;

  /**
    */
  clear(): void;

  /**
    * @param item ItemStackJS
    */
  clear(item: ItemStackJS): void;

  /**
    */
  find(): number;

  /**
    * @param item ItemStackJS
    */
  find(item: ItemStackJS): number;

  /**
    */
  count(): number;

  /**
    * @param item ItemStackJS
    */
  count(item: ItemStackJS): number;

  /**
    */
  countNonEmpty(): number;

  /**
    * @param item ItemStackJS
    */
  countNonEmpty(item: ItemStackJS): number;

  /**
    */
  markDirty(): void;

  /**
    * @param world WorldJS
    */
  getBlock(world: WorldJS): BlockContainerJS;
}

/**
  * dev.latvian.kubejs.item.ingredient.IngredientJS
  */
interface IngredientJS {
  /**
    * {"name":"vanillaPredicate","type":{"name":"Predicate","generics":[{"name":"ItemStack","type":2}]}}
    */
  readonly vanillaPredicate: ItemStack;
  /**
    * {"name":"empty","type":"Boolean"}
    */
  readonly empty: boolean;
  /**
    * {"name":"invalidRecipeIngredient","type":"Boolean"}
    */
  readonly invalidRecipeIngredient: boolean;
  /**
    * {"name":"stacks","type":{"name":"Set","generics":["ItemStackJS"]}}
    */
  readonly stacks: Set<ItemStackJS>;
  /**
    * {"name":"vanillaItems","type":{"name":"Set","generics":[{"name":"Item","type":2}]}}
    */
  readonly vanillaItems: Item;
  /**
    * {"name":"itemIds","type":{"name":"Set","generics":["String"]}}
    */
  readonly itemIds: Set<String>;
  /**
    * {"name":"first","type":"ItemStackJS"}
    */
  readonly first: ItemStackJS;
  /**
    * {"name":"count","type":"Integer"}
    */
  readonly count: number;

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
  withCount(count: number): void;

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
  unwrapStackIngredient(): IngredientJS[];

  /**
    */
  createVanillaIngredient(): Ingredient;
}

/**
  * dev.latvian.kubejs.integration.jei.InformationJEIEventJS
  * Events: jei.information
  */
interface InformationJEIEventJS extends EventJS {

  /**
    * @param object Object
    * @param info {"name":"info","type":{"name":"VarArray","generics":["String"]}}
    */
  add(object: Object, info: Array<String>): void;

  /**
    * @param type {"name":"type","type":{"name":"IIngredientType","type":2,"generics":[{"name":"T","type":1}]}}
    * @param object Object
    * @param info {"name":"info","type":{"name":"VarArray","generics":["String"]}}
    */
  addForType(type: T, object: Object, info: Array<String>): void;
}

/**
  * dev.latvian.kubejs.integration.jei.AddJEIEventJS
  * Events: jei.add.items, jei.add.fluids
  */
interface AddJEIEventJS extends EventJS {

  /**
    * @param object Object
    */
  add(object: Object): void;
}

/**
  * dev.latvian.kubejs.integration.jei.AddJEISubtypesEventJS
  * Events: jei.subtypes
  */
interface AddJEISubtypesEventJS extends EventJS {

  /**
    * @param item ItemStackJS
    * @param interpreter {"name":"interpreter","type":{"name":"Function","generics":["ItemStackJS","Object"]}}
    */
  registerInterpreter(item: ItemStackJS, interpreter: (input: ItemStackJS) => void): void;

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
  * dev.latvian.kubejs.integration.jei.RemoveJEICategoriesEvent
  * Events: jei.remove.categories
  */
interface RemoveJEICategoriesEvent extends EventJS {
  /**
    * {"name":"categories","type":{"name":"Collection","generics":[{"name":"IRecipeCategory","type":2,"generics":["Object"]}]}}
    */
  readonly categories: IRecipeCategory;
  /**
    * {"name":"categoryIds","type":{"name":"Collection","generics":["ResourceLocation"]}}
    */
  readonly categoryIds: Collection<ResourceLocation>;

  /**
    * @param categoriesToYeet {"name":"categoriesToYeet","type":{"name":"VarArray","generics":["String"]}}
    */
  remove(categoriesToYeet: Array<String>): void;

  /**
    * @param filter {"name":"filter","type":{"name":"Predicate","generics":[{"name":"IRecipeCategory","type":2,"generics":["Object"]}]}}
    */
  removeIf(filter: IRecipeCategory): void;
}

/**
  * dev.latvian.kubejs.integration.jei.HideCustomJEIEventJS
  * Events: jei.hide.custom
  */
interface HideCustomJEIEventJS extends EventJS {

  /**
    * @param s {"name":"s","type":{"name":"IIngredientType","type":2}}
    */
  get(s: IIngredientType): HideJEIEventJS;
}

/**
  * dev.latvian.kubejs.integration.jei.HideJEIEventJS
  * Events: jei.hide.items, jei.hide.fluids
  */
interface HideJEIEventJS extends EventJS {
  /**
    * {"name":"allIngredients","type":{"name":"Collection","generics":[{"name":"T","type":1}]}}
    */
  readonly allIngredients: T;

  /**
    * @param object Object
    */
  hide(object: Object): void;

  /**
    */
  hideAll(): void;
}

/**
  * dev.latvian.kubejs.integration.jei.RemoveJEIRecipesEvent
  * Events: jei.remove.recipes
  */
interface RemoveJEIRecipesEvent extends EventJS {
  /**
    * {"name":"categories","type":{"name":"Collection","generics":[{"name":"IRecipeCategory","type":2,"generics":["Object"]}]}}
    */
  readonly categories: IRecipeCategory;
  /**
    * {"name":"categoryIds","type":{"name":"Collection","generics":["ResourceLocation"]}}
    */
  readonly categoryIds: Collection<ResourceLocation>;

  /**
    * @param category ResourceLocation
    * @param recipesToRemove {"name":"recipesToRemove","type":{"name":"VarArray","generics":["ResourceLocation"]}}
    */
  remove(category: string, recipesToRemove: Array<ResourceLocation>): void;
}

/**
  * dev.latvian.kubejs.player.PlayerStatsJS
  */
interface PlayerStatsJS {
  /**
    * {"name":"player","type":"PlayerJS"}
    */
  readonly player: PlayerJS;

  /**
    * @param id ResourceLocation
    */
  get(id: string): number;

  /**
    * @param id ResourceLocation
    * @param value Integer
    */
  set(id: string, value: number): void;

  /**
    * @param id ResourceLocation
    * @param value Integer
    */
  add(id: string, value: number): void;

  /**
    * @param block {"name":"block","type":{"name":"Block","type":2}}
    */
  getBlocksMined(block: Block): number;

  /**
    * @param item {"name":"item","type":{"name":"Item","type":2}}
    */
  getItemsCrafted(item: Item): number;

  /**
    * @param item {"name":"item","type":{"name":"Item","type":2}}
    */
  getItemsUsed(item: Item): number;

  /**
    * @param item {"name":"item","type":{"name":"Item","type":2}}
    */
  getItemsBroken(item: Item): number;

  /**
    * @param item {"name":"item","type":{"name":"Item","type":2}}
    */
  getItemsPickedUp(item: Item): number;

  /**
    * @param item {"name":"item","type":{"name":"Item","type":2}}
    */
  getItemsDropped(item: Item): number;

  /**
    * @param entity {"name":"entity","type":{"name":"EntityType","type":2}}
    */
  getKilled(entity: EntityType): number;

  /**
    * @param entity {"name":"entity","type":{"name":"EntityType","type":2}}
    */
  getKilledBy(entity: EntityType): number;
}

/**
  * dev.latvian.kubejs.player.AdvancementJS
  */
interface AdvancementJS {
  /**
    * {"name":"advancement","type":{"name":"Advancement","type":2}}
    */
  readonly advancement: Advancement;
  /**
    * {"name":"parent","type":"AdvancementJS","nullable":true}
    */
  readonly parent?: AdvancementJS;
  /**
    * {"name":"children","type":{"name":"Set","generics":["AdvancementJS"]}}
    */
  readonly children: Set<AdvancementJS>;
  /**
    * {"name":"displayText","type":"Text"}
    */
  readonly displayText: Text;
  /**
    * {"name":"title","type":"Text"}
    */
  readonly title: Text;
  /**
    * {"name":"description","type":"Text"}
    */
  readonly description: Text;

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
  * dev.latvian.kubejs.player.ServerPlayerJS
  */
interface ServerPlayerJS extends PlayerJS {
  /**
    * {"name":"creativeMode","type":"Boolean","access":2}
    */
  readonly creativeMode: boolean;
  /**
    * {"name":"gameMode","type":"String","access":2}
    */
  readonly gameMode: string;
  /**
    * {"name":"op","type":"Boolean"}
    */
  readonly op: boolean;
  /**
    * {"name":"hasClientMod","type":"Boolean"}
    */
  readonly hasClientMod: boolean;
  /**
    * {"name":"spawnLocation","type":"BlockContainerJS","access":1,"nullable":true}
    */
  readonly spawnLocation?: BlockContainerJS;

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
  * dev.latvian.kubejs.player.ClientPlayerJS
  */
interface ClientPlayerJS extends PlayerJS {
  /**
    * {"name":"self","type":"Boolean"}
    */
  readonly self: boolean;
}

/**
  * dev.latvian.kubejs.player.PlayerJS
  */
interface PlayerJS extends LivingEntityJS {
  /**
    * {"name":"minecraftPlayer","type":{"name":"Player","type":2}}
    */
  readonly minecraftPlayer: Player;
  /**
    * {"name":"data","type":{"name":"AttachedData","type":2}}
    */
  readonly data: AttachedData;
  /**
    * {"name":"fake","type":"Boolean"}
    */
  readonly fake: boolean;
  /**
    * {"name":"inventory","type":"InventoryJS"}
    */
  readonly inventory: InventoryJS;
  /**
    * {"name":"selectedSlot","type":"Integer","access":1}
    */
  readonly selectedSlot: number;
  /**
    * {"name":"mouseItem","type":"ItemStackJS","access":1}
    */
  readonly mouseItem: ItemStackJS;
  /**
    * {"name":"creativeMode","type":"Boolean"}
    */
  readonly creativeMode: boolean;
  /**
    * {"name":"spectator","type":"Boolean"}
    */
  readonly spectator: boolean;
  /**
    * {"name":"stats","type":"PlayerStatsJS"}
    */
  readonly stats: PlayerStatsJS;
  /**
    * {"name":"foodLevel","type":"Integer","access":1}
    */
  readonly foodLevel: number;
  /**
    * {"name":"xp","type":"Integer","access":1}
    */
  readonly xp: number;
  /**
    * {"name":"xpLevel","type":"Integer","access":1}
    */
  readonly xpLevel: number;
  /**
    * {"name":"openInventory","type":{"name":"AbstractContainerMenu","type":2}}
    */
  readonly openInventory: AbstractContainerMenu;
  /**
    * {"name":"miningBlock","type":"Boolean"}
    */
  readonly miningBlock: boolean;
  /**
    * {"name":"airSupply","type":"Integer","access":1}
    */
  readonly airSupply: number;
  /**
    * {"name":"maxAirSupply","type":"Integer"}
    */
  readonly maxAirSupply: number;
  /**
    * {"name":"stages","type":"Stages"}
    */
  readonly stages: Stages;

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
  addFood(f: number, m: number): void;

  /**
    * @param exhaustion Float
    */
  addExhaustion(exhaustion: number): void;

  /**
    * @param xp Integer
    */
  addXP(xp: number): void;

  /**
    * @param l Integer
    */
  addXPLevels(l: number): void;

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
  addItemCooldown(item: Item, ticks: number): void;
}

/**
  * dev.latvian.kubejs.util.MessageSender
  */
interface MessageSender {
  /**
    * {"name":"name","type":"Text"}
    */
  readonly name: Text;
  /**
    * {"name":"displayName","type":"Text"}
    */
  readonly displayName: Text;
  /**
    * {"name":"statusMessage","type":"Text","access":2}
    */
  readonly statusMessage: Text;

  /**
    * @param message Text
    */
  tell(message: Text): void;

  /**
    * @param command String
    */
  runCommand(command: string): number;

  /**
    * @param command String
    */
  runCommandSilent(command: string): number;
}

/**
  * dev.latvian.kubejs.util.color.Color
  */
interface Color {
  /**
    * {"name":"argbKJS","type":"Integer"}
    */
  readonly argbKJS: number;
  /**
    * {"name":"rgbKJS","type":"Integer"}
    */
  readonly rgbKJS: number;
  /**
    * {"name":"fireworkColorKJS","type":"Integer"}
    */
  readonly fireworkColorKJS: number;
  /**
    * {"name":"hexKJS","type":"String"}
    */
  readonly hexKJS: string;
  /**
    * {"name":"serializeKJS","type":"String"}
    */
  readonly serializeKJS: string;

  /**
    */
  createTextColorKJS(): TextColor;
}

/**
  * dev.latvian.kubejs.util.ConsoleJS
  */
interface ConsoleJS {
  /**
    * {"name":"logger","type":{"name":"Logger","type":2}}
    */
  readonly logger: Logger;
  /**
    * {"name":"muted","type":"Boolean","access":1}
    */
  readonly muted: boolean;
  /**
    * {"name":"debugEnabled","type":"Boolean","access":1}
    */
  readonly debugEnabled: boolean;
  /**
    * {"name":"writeToFile","type":"Boolean","access":1}
    */
  readonly writeToFile: boolean;
  /**
    * {"name":"lineNumber","type":"Boolean","access":2}
    */
  readonly lineNumber: boolean;
  /**
    * {"name":"scriptLine","type":"Integer"}
    */
  readonly scriptLine: number;

  /**
    * @param message Object
    */
  info(message: Object): void;

  /**
    * @param message Object
    * @param args {"name":"args","type":{"name":"VarArray","generics":["Object"]}}
    */
  infof(message: Object, args: Array<Object>): void;

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
  warnf(message: string, args: Array<Object>): void;

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
  errorf(message: string, args: Array<Object>): void;

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
  debugf(message: string, args: Array<Object>): void;

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
  join(separator: Text, texts: Array<Text>): Text;

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
  translate(key: string, objects: Array<Object>): Text;

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
  addConditionalFunction(func: (input: ConditionalFunction) => void): void;

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
  enchantRandomly(enchantments: Array<ResourceLocation>): void;

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
  lootingEnchant(count: RandomIntGenerator, limit: number): void;

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
  * dev.latvian.kubejs.loot.FishingLootEventJS
  * Events: fishing.loot_tables
  */
interface FishingLootEventJS extends LootEventJS {

  /**
    * @param id ResourceLocation
    * @param b {"name":"b","type":{"name":"Consumer","generics":["LootBuilder"]}}
    */
  addFishing(id: string, b: (input: LootBuilder) => void): void;
}

/**
  * dev.latvian.kubejs.loot.GenericLootEventJS
  * Events: generic.loot_tables
  */
interface GenericLootEventJS extends LootEventJS {

  /**
    * @param id ResourceLocation
    * @param b {"name":"b","type":{"name":"Consumer","generics":["LootBuilder"]}}
    */
  addGeneric(id: string, b: (input: LootBuilder) => void): void;
}

/**
  * dev.latvian.kubejs.loot.BlockLootEventJS
  * Events: block.loot_tables
  */
interface BlockLootEventJS extends LootEventJS {

  /**
    * @param blocks {"name":"blocks","type":{"name":"BlockStatePredicate","type":2}}
    * @param b {"name":"b","type":{"name":"Consumer","generics":["LootBuilder"]}}
    */
  addBlock(blocks: BlockStatePredicate, b: (input: LootBuilder) => void): void;

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
  modifyBlock(blocks: BlockStatePredicate, b: (input: LootBuilder) => void): void;
}

/**
  * dev.latvian.kubejs.loot.EntityLootEventJS
  * Events: entity.loot_tables
  */
interface EntityLootEventJS extends LootEventJS {

  /**
    * @param type {"name":"type","type":{"name":"EntityType","type":2}}
    * @param b {"name":"b","type":{"name":"Consumer","generics":["LootBuilder"]}}
    */
  addEntity(type: EntityType, b: (input: LootBuilder) => void): void;

  /**
    * @param type {"name":"type","type":{"name":"EntityType","type":2}}
    * @param b {"name":"b","type":{"name":"Consumer","generics":["LootBuilder"]}}
    */
  modifyEntity(type: EntityType, b: (input: LootBuilder) => void): void;
}

/**
  * dev.latvian.kubejs.loot.ConditionalFunction
  */
interface ConditionalFunction {
}

/**
  * dev.latvian.kubejs.loot.LootBuilderPool
  */
interface LootBuilderPool {
  /**
    * {"name":"rolls","type":{"name":"RandomIntGenerator","type":2},"access":1}
    */
  readonly rolls: RandomIntGenerator;
  /**
    * {"name":"bonusRolls","type":{"name":"RandomIntGenerator","type":2},"access":1,"nullable":true}
    */
  readonly bonusRolls?: RandomIntGenerator;

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
  addEmpty(weight: number): void;

  /**
    * @param table ResourceLocation
    */
  addLootTable(table: string): void;

  /**
    * @param item ItemStackJS
    * @param weight Integer
    * @param count {"name":"count","type":{"name":"RandomIntGenerator","type":2},"nullable":true}
    */
  addItem(item: ItemStackJS, weight: number, count?: RandomIntGenerator): void;

  /**
    * @param item ItemStackJS
    * @param weight Integer
    */
  addItem(item: ItemStackJS, weight: number): void;

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
  * dev.latvian.kubejs.loot.LootEventJS
  */
interface LootEventJS extends EventJS {
  /**
    * {"name":"type","type":"String"}
    */
  readonly type: string;
  /**
    * {"name":"directory","type":"String"}
    */
  readonly directory: string;

  /**
    * @param id ResourceLocation
    * @param json {"name":"json","type":{"name":"JsonObject","type":2}}
    */
  addJson(id: string, json: JsonObject): void;

  /**
    * @param id ResourceLocation
    * @param b {"name":"b","type":{"name":"Consumer","generics":["LootBuilder"]}}
    */
  modify(id: string, b: (input: LootBuilder) => void): void;

  /**
    */
  removeAll(): void;
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
  addPool(pool: (input: LootBuilderPool) => void): void;

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
  * dev.latvian.kubejs.loot.ChestLootEventJS
  * Events: chest.loot_tables
  */
interface ChestLootEventJS extends LootEventJS {

  /**
    * @param id ResourceLocation
    * @param b {"name":"b","type":{"name":"Consumer","generics":["LootBuilder"]}}
    */
  addChest(id: string, b: (input: LootBuilder) => void): void;
}

/**
  * dev.latvian.kubejs.loot.GiftLootEventJS
  * Events: gift.loot_tables
  */
interface GiftLootEventJS extends LootEventJS {

  /**
    * @param id ResourceLocation
    * @param b {"name":"b","type":{"name":"Consumer","generics":["LootBuilder"]}}
    */
  addGift(id: string, b: (input: LootBuilder) => void): void;
}

/**
  * dev.latvian.kubejs.event.DataEvent
  * Events: custom_id
  */
interface DataEvent extends EventJS {
  /**
    * {"name":"data","type":"Object","nullable":true}
    */
  readonly data?: Object;
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
  * dev.latvian.kubejs.event.EventJS
  */
interface EventJS {
}

