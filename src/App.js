import "./App.css";
import { formatArtifact } from "./artifact";
import {
  creditCloser,
  easyTextLines,
  rainbowTextBit,
  textBit,
  textChunk,
  textLine,
} from "./textLines";
import { rgbToDecimal, textColors } from "./colors";
import * as rarity from "./rarity";
import * as enchants from "./enchantments";
import * as attr from "./attributes";
import * as flags from "./hideFlags";
import * as armor from "./armor";

function App() {

  console.log(rgbToDecimal(255, 255, 0))

  const itemRarity = rarity.common;

  const item = armor.ironHelmet;
  const arti = {
    rarity: itemRarity,
    name: textBit("Wise Man's Feet", itemRarity.color),
    lore: textChunk(
      ...easyTextLines(
        "clearly long characters exist in this text so that they may be split among themselvbes at a predetermined counter of characters",
        20
      ),
      textLine(textBit("This line below me is")),
      textLine(rainbowTextBit("Faaaaa buu llooousssss")),
      ...creditCloser(itemRarity, "Nifusion", textColors.dark_red)
    ),
    attributeModifiers: [attr.armor.format(item.slot, 2)],
    enchantments: [enchants.unbreaking.lvl(2)],
    hideFlags: [flags.hideNothing],
  };

  const shieldExample = {
    BlockEntityTag: {
      Base: 0,
      Patterns: [
        { Pattern: "drs", Color: 1 },
        { Pattern: "bl", Color: 8 },
      ],
    },
  };

  console.log(arti);

  const art = formatArtifact(arti);

  console.log(art);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`/give @p ${item.id}${JSON.stringify(art)}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ fontSize: ".5em", width: "75%" }}>
          {`/give @p ${item.id}${JSON.stringify(art, null, "\t")}`}
        </div>
        <button onClick={copyToClipboard}>Copy</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
