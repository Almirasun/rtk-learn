import RecipeItem from "./recipe-item/RecipeItem"
import './index.css'

function App() {

  return (
    <div>
      <RecipeItem recipe={{
        id: 1,
        name: 'Лагман'
      }}/>
      <RecipeItem recipe={{
        id: 2,
        name: 'Плов'
      }}/>
      <RecipeItem recipe={{
        id: 3,
        name: 'Манты'
      }}/>
    </div>
  )
}

export default App
