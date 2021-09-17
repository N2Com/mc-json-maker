import hideFlag from "./hideFlags";

const jsonify = (s) => {
  return JSON.stringify(s);
};

export const formatArtifact = ({
  name,
  rarity,
  lore,
  attributeModifiers,
  enchantments,
  hideFlags,
}) => {
  return {
    display: {
      Name: jsonify(name),
      Lore: lore.map((l) => {
        return jsonify(l);
      }),
    },
    AttributeModifiers: attributeModifiers,
    Enchantments: enchantments,
    HideFlags: hideFlag(hideFlags),
  };
};
