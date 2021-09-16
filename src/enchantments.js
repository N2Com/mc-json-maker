const _aquaAffinity = "minecraft:aqua_affinity";
const _baneOfArthropods = "minecraft:bane_of_arthropods";
const _curseOfBinding = "minecraft:binding_curse";
const _blastProtection = "minecraft:blast_protection";
const _channeling = "minecraft:channeling";
const _depthStrider = "minecraft:depth_strider";
const _efficiency = "minecraft:efficiency";
const _featherFalling = "minecraft:feather_falling";
const _fireAspect = "minecraft:fire_aspect";
const _fireProtection = "minecraft:fire_protection";
const _flame = "minecraft:flame";
const _fortune = "minecraft:fortune";
const _frostWalker = "minecraft:frost_walker";
const _impaling = "minecraft:impaling";
const _infinity = "minecraft:infinity";
const _knockback = "minecraft:knockback";
const _looting = "minecraft:looting";
const _loyalty = "minecraft:loyalty";
const _luckOfTheSea = "minecraft:luck_of_the_sea";
const _lure = "minecraft:lure";
const _mending = "minecraft:mending";
const _multishot = "minecraft:multishot";
const _piercing = "minecraft:piercing";
const _power = "minecraft:power";
const _projectileProtection = "minecraft:projectile_protection";
const _protection = "minecraft:protection";
const _punch = "minecraft:punch";
const _quickCharge = "minecraft:quick_charge";
const _respiration = "minecraft:respiration";
const _riptide = "minecraft:riptide";
const _sharpness = "minecraft:sharpness";
const _silkTouch = "minecraft:silk_touch";
const _smite = "minecraft:smite";
const _soulSpeed = "minecraft:soul_speed";
const _sweeping = "minecraft:sweeping";
const _thorns = "minecraft:thorns";
const _unbreaking = "minecraft:unbreaking";
const _curseOfVanishing = "minecraft:vanishing_curse";

const lvl = function (lvl) {
  return { id: this.id, lvl };
};

const max = function () {
  return { id: this.id, lvl: this.maxLvl };
};

export const aquaAffinity = {
  id: _aquaAffinity,
  maxLvl: 1,
  lvl,
  max,
};

export const baneOfArthropods = {
  id: _baneOfArthropods,
  maxLvl: 5,
  mutuallyExclusive: [_smite, _sharpness],
  lvl,
  max,
};

export const curseOfBinding = {
  id: _curseOfBinding,
  maxLvl: 1,
  lvl,
  max,
};

export const blastProtection = {
  id: _blastProtection,
  maxLvl: 4,
  mutuallyExclusive: [_fireProtection, _protection, _projectileProtection],
  lvl,
  max,
};

export const channeling = {
  id: _channeling,
  maxLvl: 1,
  mutuallyExclusive: [_riptide],
  lvl,
  max,
};

export const depthStrider = {
  id: _depthStrider,
  maxLvl: 3,
  mutuallyExclusive: [_frostWalker],
  lvl,
  max,
};

export const efficiency = {
  id: _efficiency,
  maxLvl: 5,
  lvl,
  max,
};

export const featherFalling = {
  id: _featherFalling,
  maxLvl: 4,
  lvl,
  max,
};

export const fireAspect = {
  id: _fireAspect,
  maxLvl: 2,
  lvl,
  max,
};

export const fireProtection = {
  id: _fireProtection,
  maxLvl: 4,
  mutuallyExclusive: [_blastProtection, _protection, _projectileProtection],
  lvl,
  max,
};

export const flame = {
  id: _flame,
  maxLvl: 1,
  lvl,
  max,
};

export const fortune = {
  id: _fortune,
  maxLvl: 3,
  mutuallyExclusive: [_silkTouch],
  lvl,
  max,
};

export const frostWalker = {
  id: _frostWalker,
  maxLvl: 2,
  mutuallyExclusive: [_depthStrider],
  lvl,
  max,
};

export const impaling = {
  id: _impaling,
  maxLvl: 5,
  lvl,
  max,
};

export const infinity = {
  id: _infinity,
  maxLvl: 1,
  mutuallyExclusive: [_mending],
  lvl,
  max,
};

export const knockback = {
  id: _knockback,
  maxLvl: 2,
  lvl,
  max,
};

export const looting = {
  id: _looting,
  maxLvl: 3,
  lvl,
  max,
};

export const loyalty = {
  id: _loyalty,
  maxLvl: 3,
  mutuallyExclusive: [_riptide],
  lvl,
  max,
};

export const luckOfTheSea = {
  id: _luckOfTheSea,
  maxLvl: 3,
  lvl,
  max,
};

export const lure = {
  id: _lure,
  maxLvl: 3,
  lvl,
  max,
};

export const mending = {
  id: _mending,
  maxLvl: 1,
  mutuallyExclusive: [_infinity],
  lvl,
  max,
};

export const multishot = {
  id: _multishot,
  maxLvl: 1,
  mutuallyExclusive: [_piercing],
  lvl,
  max,
};

export const piercing = {
  id: _piercing,
  maxLvl: 4,
  mutuallyExclusive: [_multishot],
  lvl,
  max,
};

export const power = {
  id: _power,
  maxLvl: 5,
  lvl,
  max,
};

export const projectileProtection = {
  id: _projectileProtection,
  maxLvl: 4,
  mutuallyExclusive: [_blastProtection, _fireProtection, _protection],
  lvl,
  max,
};

export const protection = {
  id: _protection,
  maxLvl: 4,
  mutuallyExclusive: [_blastProtection, _fireProtection, _projectileProtection],
  lvl,
  max,
};

export const punch = {
  id: _punch,
  maxLvl: 2,
  lvl,
  max,
};

export const quickCharge = {
  id: _quickCharge,
  maxLvl: 3,
  lvl,
  max,
};

export const respiration = {
  id: _respiration,
  maxLvl: 3,
  lvl,
  max,
};

export const riptide = {
  id: _riptide,
  maxLvl: 3,
  mutuallyExclusive: [_channeling, _loyalty],
  lvl,
  max,
};

export const sharpness = {
  id: _sharpness,
  maxLvl: 5,
  mutuallyExclusive: [_baneOfArthropods, _smite],
  lvl,
  max,
};

export const silkTouch = {
  id: _silkTouch,
  maxLvl: 1,
  mutuallyExclusive: [_fortune],
  lvl,
  max,
};

export const smite = {
  id: _smite,
  maxLvl: 5,
  mutuallyExclusive: [_baneOfArthropods, _sharpness],
  lvl,
  max,
};

export const soulSpeed = {
  id: _soulSpeed,
  maxLvl: 3,
  lvl,
  max,
};

export const sweeping = {
  id: _sweeping,
  maxLvl: 3,
  lvl,
  max,
};

export const thorns = {
  id: _thorns,
  maxLvl: 3,
  lvl,
  max,
};

export const unbreaking = {
  id: _unbreaking,
  maxLvl: 3,
  lvl,
  max,
};

export const curseOfVanishing = {
  id: _curseOfVanishing,
  maxLvl: 1,
  lvl,
  max,
};
