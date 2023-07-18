import '../index.css'
import Header from './header/Header';
import RecipeItem from './recipe-item/RecipeItem'
import { useGetRecipesQuery } from '../store/api/api'
import CreateRecipe from './create-recipe/CreateRecipe';

const App = () => {

  const { isLoading, data } = useGetRecipesQuery(null)
  console.log(data);

  return (
    <section>
      <Header />
      <CreateRecipe />
      <div style={{display: "flex", flexWrap: "wrap"}}>
        {isLoading ? (
          <div>Loading...</div>
        ) : data ? (
          data.map(recipe =>
            <RecipeItem key={recipe.id} recipe={recipe} />)
        ) : (
          <div>Not found</div>
        )}

          {/* RecipeItem`ы можем убрать */}
      </div>
    </section>
  );
}

export default App;

