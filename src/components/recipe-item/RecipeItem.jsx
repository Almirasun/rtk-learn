import style from './RecipeItem.module.css'
import { useSelector, useDispatch } from 'react-redux'
import styles from './RecipeItem.module.css'
import { useActions } from '../../hooks/useActions'
import Header from '../header/Header'

const RecipeItem = ({ recipe }) => {

    const { favorites } = useSelector(state => state)

    const { toggleFavorites } = useActions()

    const isExist = favorites.some(r => r.id === recipe.id)

    return (
        <section>
            <Header />
            <div className={styles.card}>
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