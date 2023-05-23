import style from './RecipeItem.module.css'

const RecipeItem = ({recipe}) => {
    return (
        <div>
            <h3 className={style.name}>{recipe.name}</h3>
            <button>Добавить в избранные</button>
        </div>
    );
}
 
export default RecipeItem;