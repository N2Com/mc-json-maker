import "./App.css";
import { formatArtifact } from "./artifact";
import {
  creditCloser,
  easyLoreBlock,
  textBit,
  textChunk,
  textLine,
} from "./textLines";
import * as colors from "./colors";
import * as rarity from "./rarity";
import * as enchants from "./enchantments";
import * as attr from "./attributes";
import * as slots from "./slots";
import * as flags from "./hideFlags";

function App() {
  const itemRarity = rarity.uncommon;
  const arti = {
    rarity: itemRarity,
    name: textBit("Name of the item goes here xD", itemRarity.color),
    lore: textChunk(
      ...easyLoreBlock(
        "clearly long characters exist in this text so that they may be split among themselvbes at a predetermined counter of characters",
        20
      ),
      ...creditCloser(itemRarity, "Nifusion", colors.dark_red)
    ),
    attributeModifiers: [
      attr.armor.format(slots.head, 3, attr.operations.additive),
    ],
    enchantments: [enchants.unbreaking.lvl(4)],
    hideFlags: [flags.hideNothing],
  };

  console.log(arti);

  const art = formatArtifact(arti);

  console.log(art);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(art));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ fontSize: ".5em", width: "75%" }}>
          {JSON.stringify(art, null, "\t")}
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
