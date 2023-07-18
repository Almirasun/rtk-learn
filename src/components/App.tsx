import "../index.css";
import Header from "./header/Header";
import RecipeItem from "./recipe-item/RecipeItem";
import { useGetRecipesQuery } from "../store/api/api";
import CreateRecipe from "./create-recipe/CreateRecipe";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [queryTerm, setQueryTerm] = useState("")

  const { isLoading, data } = useGetRecipesQuery(queryTerm);

  const handleSearch = () => {
    setQueryTerm(searchTerm)
  };

  return (
    <section>
      <Header />
      <CreateRecipe />

      <div style={{ padding: 15 }}>
        <p> If you wanna find: </p>
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter search term"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {isLoading ? (
          <div>Loading...</div>
        ) : data ? (
          data.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
        ) : (
          <div>Not found</div>
        )}

        {/* RecipeItem`ы можем убрать */}
      </div>
    </section>
  );
};

export default App;
