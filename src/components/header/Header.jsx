import {BsFillBookmarkHeartFill} from 'react-icons/bs'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <BsFillBookmarkHeartFill />
        </header>
    );
}
 
export default Header;