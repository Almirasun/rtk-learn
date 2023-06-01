import RecipeItem from "./recipe-item/RecipeItem"
import '../index.css'
import Header from "./header/Header"
import { useGetRecipesQuery } from "../store/api/api"

const App = () => {

  const { isLoading, data } = useGetRecipesQuery()
  console.log(data);

  return (
    <section>
      <Header />
      <div>
        <RecipeItem recipe={{
          id: 1,
          name: 'Лагман'
        }} />
        <RecipeItem recipe={{
          id: 2,
          name: 'Плов'
        }} />
        <RecipeItem recipe={{
          id: 3,
          name: 'Манты'
        }} />
      </div>
    </section>
  )
}

export default App
