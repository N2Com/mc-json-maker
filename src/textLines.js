import * as colors from "./colors";

export const textBit = (
  text,
  color,
  { italic, bold, obfuscated, underlined, strikethrough } = {
    italic: false,
  }
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

export const textLine = (...loreBits) => {
  return loreBits;
};

export const textChunk = (...loreLines) => {
  return loreLines;
};

function escapeRegExp(stringToGoIntoTheRegex) {
  return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}

export const easyLoreBlock = (
  text,
  lineCharLimit,
  color = colors.dark_purple
) => {
  var regex = new RegExp(`.{1,${lineCharLimit}}(\\s|$)`, "g");
  const splits = text.match(regex);
  return (
    splits?.map((l) => {
      return textLine(textBit(l, color));
    }) ?? []
  );
};

export const emptyLine = () => {
  return textLine(textBit(""));
};

export const rarityLine = (rarity) => {
  return textLine(textBit(rarity.id, rarity.color));
};

export const creditLine = (author, nameColor) => {
  return textLine(
    textBit("Artifact Credit: ", colors.gray),
    textBit(author, nameColor)
  );
};

export const creditCloser = (rarity, name, nameColor = colors.dark_aqua) => {
  return [emptyLine(), rarityLine(rarity), creditLine(name, nameColor)];
};

const rainbow = [
  colors.red,
  colors.gold,
  colors.yellow,
  colors.green,
  colors.blue,
  colors.light_purple,
];
const rainbowTextBit = (text, format) => {
  let i = -1;
  return [...text].map((char) => {
    if (char === " ") return textBit(char, rainbow[i], format);
    if (i === 5) {
      i = 0;
    } else {
      i++;
    }
    return textBit(char, rainbow[i], format);
  });
};
