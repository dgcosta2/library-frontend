import styles from '@/styles/SearchBar.module.css';
import { useForm } from 'react-hook-form';

const SearchBar = () => {
    const { register, handleSubmit, errors, reset} = useForm();

    return (
        <>
            <form className={styles.searchform}>
                <input className={styles.searchBox} type="text" placeholder="Search our library"/>
                <input className={styles.submit} type="submit" value="search"/>
            </form>
        </>
    )
}

export default SearchBar;