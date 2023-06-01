import style from './RecipeItem.module.css'
import { useSelector } from 'react-redux'
import { useFavorites } from '../../hooks/useFavorites'
import styles from './RecipeItem.module.css'
import { useActions } from '../../hooks/useActions'

const RecipeItem = ({ recipe }) => {

    const { toggleFavorites } = useActions()

    const { favorites } = useFavorites()

    const isExist = favorites.some(r => r.id === recipe.id)

    return (
        <section>
            <div className={styles.card}>
                <img src={recipe.image} alt="image" />
                <h3 className={style.name}>{recipe.name}</h3>
                <button className={styles.btn} onClick={() =>
                    toggleFavorites(recipe)}>
                    {isExist ? 'Remove from'
                        : 'Add to '} favorites
                </button>
            </div>
        </section>
    );
}

export default RecipeItem;