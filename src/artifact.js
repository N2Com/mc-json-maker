import * as enchants from "./enchantments";
import * as attr from "./attributes";
import { randomNumber } from "./helpers";
import {
  loreLine,
  loreBit,
  emptyLine,
  creditLine,
  rarityLine,
} from "./loreBit";
import * as colors from "./colors";
import * as rarity from "./rarity";
import * as slots from "./slots";
import hideFlag, * as flags from "./hideFlags";

const jsonify = (s) => {
  return JSON.stringify(s);
};

const rainbow = [
  colors.red,
  colors.gold,
  colors.yellow,
  colors.green,
  colors.blue,
  colors.light_purple,
];
const rainbowLoreBit = (text, format) => {
  let i = -1;
  return [...text].map((char) => {
    if (char === " ") return loreBit(char, rainbow[i], format);
    if (i === 5) {
      i = 0;
    } else {
      i++;
    }
    return loreBit(char, rainbow[i], format);
  });
};

export const returnArtifact = () => {
  const name = loreLine(loreBit("Toe Warmers of Mega Doom and stuff", colors.green));

  const lore = [
    loreLine(loreBit("Quin, dude, I'm here to keep")),
    loreLine(loreBit("them little piggies warm.")),
    emptyLine(),
    rarityLine(rarity.uncommon),
    creditLine("KD88", colors.dark_red),
  ];

  const slot = slots.feet;

  return {
    display: {
      Name: jsonify(name),
      Lore: lore.map((l) => {
        return jsonify(l);
      }),
    },
    AttributeModifiers: [
      attr.armor.format(slot, 3, attr.operations.additive),
      attr.knockbackResistance.format(slot, 0.03, attr.operations.additive),
      attr.attackSpeed.format(slot, 0.06, attr.operations.multiply_base),
    ],
    Enchantments: [
      enchants.depthStrider.lvl(3),
      enchants.protection.lvl(5),
      enchants.blastProtection.lvl(2),
      enchants.unbreaking.lvl(4),
    ],
    //RepairCost: 10000,
    //Unbreakable: 1,
    //HideFlags: hideFlag(flags.hideAttributeModifiers, flags.hideEnchantments),
  };
};

/*
    loreLine([
      {
        text: "When in Main Hand:",
        color: colors.gray,
        format: { italic: false },
      },
    ]),
    loreLine([
      {
        text: "1.6 Attack Speed",
        color: colors.dark_green,
        format: { italic: false },
      },
    ]),
    loreLine([
      {
        text: "6 Attack Damage",
        color: colors.dark_green,
        format: { italic: false },
      },
    ]),
    loreLine([
      {
        text: "+7 Max Health",
        color: colors.blue,
        format: { italic: false },
      },
    ]),*/
