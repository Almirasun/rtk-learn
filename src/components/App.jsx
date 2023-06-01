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
        {isLoading ? (<div>loading...</div>
        ) : data ? (
          data.map(recipe =>
            <RecipeItem key={recipe.id} recipe={recipe} />)
        ) : (
          <div>Not found</div>
        )}
        
      </div>
    </section>
  )
}

export default App
