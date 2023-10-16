import { Header } from "./header";
import { CharacterRatings } from "./character-ratings";
import { CharacterCards } from "./characater-cards";
import "./reset.css";
import "./style.css";
import "./character-cards.css";
import "./character-ratings.css";
import "./header.css";
import { data } from "./data/fma-data";

function App() {
  return (
    <>
      <div className="component-container">
        <Header />
        <CharacterRatings characters={data} />
        <CharacterCards characters={data} />
      </div>
    </>
  );
}

export default App;
