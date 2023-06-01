import { BsFillBookmarkHeartFill } from 'react-icons/bs'
import { useFavorites } from '../../hooks/useFavorites';
import style from './Header.module.css'

const Header = () => {

    const { favorites } = useFavorites()

    return (
        <header className={style.header}>
            <BsFillBookmarkHeartFill className={style.icon} />
            <span> {favorites.length}  </span>
        </header>
    );
}

export default Header;