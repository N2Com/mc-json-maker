export const hideNothing = 0;
export const hideEnchantments = 1;
export const hideAttributeModifiers = 2;
export const hideUnbreakable = 4;
export const hideCanDestroy = 8;
export const hideCanPlaceOn = 16;
export const hideVariousOther = 32;
export const hideDyedArmor = 64;

const hideFlag = (flags) => {
  return flags.reduce((a, b) => a + b, 0);
};

export default hideFlag;