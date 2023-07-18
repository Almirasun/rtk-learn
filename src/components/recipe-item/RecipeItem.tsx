// import { useDispatch, useSelector } from "react-redux";
// import { actions } from '../store/favorites/favorites.slice';
import style from "./RecipeItem.module.css";
import { useActions } from "../../hooks/useActions";
import { useFavorites } from "../../hooks/useFavorites";
import { IRecipe } from "../../types/recipe.types";

interface IRecipeItem {
  recipe: IRecipe
}

const RecipeItem = ({ recipe }: IRecipeItem) => {
  const { favorites } = useFavorites();

  const { toggleFavorites } = useActions();

  const isExists = favorites.some((r) => r.id === recipe.id);

  return (
    <div className={style.item}>
      <img src={recipe.image} alt={recipe.name} />
      <h2>{recipe.name}</h2>
      <button onClick={() => toggleFavorites(recipe)}>
        {isExists ? "Remove from" : "Add to"} favorites
      </button>
    </div>
  );
};

export default RecipeItem;
