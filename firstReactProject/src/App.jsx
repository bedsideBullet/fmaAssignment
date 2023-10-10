import { Header } from "./components/header"
import { CharacterRatings } from "./components/character-ratings"
import { CharacterCards } from "./components/characater-cards"
import "./reset.css"
import "./style.css"  
import "./character-cards.css" 
import "./character-ratings.css" 
import "./header.css" 



function App() {
 

  return (
    <body>
      <Header />
      <CharacterRatings />
      <CharacterCards />
    </body>
  )
}

export default App
