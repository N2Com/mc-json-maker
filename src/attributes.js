import * as _rarity from "./rarity";

export const randomNumber = (min, max, round = 0) => {
  return parseFloat((min + Math.random() * (max - min)).toFixed(round));
};

const UUIDs = () => {
  return {
    UUIDLeast: randomNumber(0, 2147483647),
    UUIDMost: randomNumber(0, 2147483647),
  };
};

class Attribute {
  constructor(name, op) {
    this.attributeName = name;
    this.defaultOp = op;
  }

  *format(slot, amount, op) {
    return {
      Slot: slot,
      AttributeName: this.attributeName,
      Amount: amount,
      Operation: op ?? this.defaultOp,
      ...UUIDs(),
    };
  }
}

export const operations = {
  additive: 0,
  multiply_base: 1,
  multiply: 2,
};

export const maxHealth = new Attribute(
  "generic.max_health",
  operations.additive
);

export const knockbackResistance = {
  attributeName: "generic.knockback_resistance",
  defaultOp: operations.additive,
  range: [0, 0.1],
  format,
};

export const movementSpeed = {
  attributeName: "generic.movement_speed",
  defaultOp: operations.multiply_base,
  range: [0, 0.1],
  format,
};

export const attackDamage = {
  attributeName: "generic.attack_damage",
  defaultOp: operations.additive,
  range: [0, 1],
  format,
};

export const armor = {
  attributeName: "generic.armor",
  defaultOp: operations.additive,
  range: [0, 5],
  format,
};

export const armorToughness = {
  attributeName: "generic.armor_toughness",
  defaultOp: operations.additive,
  format,
};

export const attackSpeed = {
  attributeName: "generic.attack_speed",
  defaultOp: operations.multiply_base,
  format,
};

export const luck = {
  attributeName: "generic.luck",
  defaultOp: operations.additive,
  format,
};
