import { textColors } from "./colors";

/**
 * Formats a textBit based on input
 * @param {string} text Text of the textBit
 * @param {string} color Color of the textBit
 * @param {object} format Formatting of the textBit
 * @returns {object} Minecraft's expected textBit object
 */
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

/**
 * Simplifies array-ification of any number of input textBit params
 * @param  {...object} textBits Any number of textBits can go in a textLine
 * @returns {object[]} The array of input textBits, symbolizing the textLine
 */
export const textLine = (...textBits) => {
  return textBits;
};

/**
 * Simplifies array-ification of any number of input textLine params
 * @param  {...object} textLines Any number of textLines can go in a textChunk
 * @returns {object[]} Array of input textLines, symbolizing the textChunk
 */
export const textChunk = (...textLines) => {
  return textLines;
};

/**
 * Auto line breaks input text per lineCharLimit; breaks on spaces
 * @param {string} text Text you want displayed in the textLines
 * @param {number} lineCharLimit
 * @param {string} color
 * @returns Array of textLines
 */
export const easyTextLines = (
  text,
  lineCharLimit,
  color = textColors.dark_purple
) => {
  var regex = new RegExp(`.{1,${lineCharLimit}}(\\s|$)`, "g");
  const splits = text.match(regex);
  return (
    splits?.map((l) => {
      return textLine(textBit(l, color));
    }) ?? []
  );
};

/**
 * Quick way to input an empty textLine
 * @returns Empty textLine
 */
export const emptyLine = () => {
  return textLine(textBit(""));
};

/**
 * Quick way to input a rarity textLine
 * @param {object} rarity Rarity object
 * @returns Rarity id as the rarity color
 */
export const rarityLine = (rarity) => {
  return textLine(textBit(rarity.id, rarity.color));
};

/**
 * Quick way to input a credit textLine
 * @param {string} author Who you would like to credit
 * @param {string} nameColor What color their name will be
 * @returns 'Artifact Credit: author' textLine
 */
export const creditLine = (author, nameColor) => {
  return textLine(
    textBit("Artifact Credit: ", textColors.gray),
    textBit(author, nameColor)
  );
};

/**
 * Quick way to input lore closing textLines
 * @param {object} rarity Rarity object
 * @param {string} name Who you would like to credit the artifact towards
 * @param {string} nameColor What color their name will be
 * @returns emptyLine, rarityLine, creditLine
 */
export const creditCloser = (
  rarity,
  name,
  nameColor = textColors.dark_aqua
) => {
  return [emptyLine(), rarityLine(rarity), creditLine(name, nameColor)];
};

const rainbow = [
  textColors.red,
  textColors.gold,
  textColors.yellow,
  textColors.green,
  textColors.blue,
  textColors.dark_purple,
];

/**
 * Rainbow-ifies the input text, cycling through the 6 core colors of ROY G BV
 * Preserves colors when iterating through spaces
 * #IndigoIsNotReal
 * @param {string} text The text you would like to rainbow-ify
 * @param {object} format Formatting of said text
 * @returns Array of textBits, looking faaaabulooouusss
 */
export const rainbowTextBit = (text, format) => {
  var cv = 0;
  return [...text].map((char, index) => {
    if (char === " ") {
      cv++;
      return textBit(char, textColors.white, format);
    }

    return textBit(char, rainbow[(index - cv) % rainbow.length], format);
  });
};
