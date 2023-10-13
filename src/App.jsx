import { Header } from "./header";
import { CharacterRatings } from "./character-ratings";
import { CharacterCards } from "./characater-cards";
import "./reset.css";
import "./style.css";
import "./character-cards.css";
import "./character-ratings.css";
import "./header.css";

function App() {
  return (
    <>
      <div className="component-container">
        <Header />
        <CharacterRatings />
        <CharacterCards />
      </div>
    </>
  );
}

export default App;
