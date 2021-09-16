import * as colors from "./colors";

export const loreBit = (
  text,
  color,
  { italic, bold, obfuscated, underlined, strikethrough } = { italic: false }
) => {
  return {
    text,
    color,
    italic,
    bold,
    obfuscated,
    underlined,
    strikethrough,
  };
};

export const loreLine = (...loreBits) => {
  return loreBits;
};

export const rarityLine = (rarity) => {
  return loreLine(loreBit(rarity.id, rarity.color));
};

export const creditLine = (author, color) => {
  return loreLine(
    loreBit("Artifact Credit: ", colors.white),
    loreBit(author, color)
  );
};

export const emptyLine = () => {
  return loreLine(loreBit(""));
};
