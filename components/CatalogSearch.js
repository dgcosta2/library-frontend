import styles from '@/styles/SearchBar.module.css';
import { useForm } from 'react-hook-form';
import {useState} from "react";
import BookCard from "@/components/BookCard";

const CatalogSearch = (props) => {
    const { register, handleSubmit, errors, reset} = useForm();
    const [searchField, setSearchField] = useState(props.query);
    const [titleList, setTitleList] = useState(props.titles);

    const handleChange = (e) => {
        setSearchField(e.target.value);
    }

    const filterTitles = titleList? titleList.filter(
        title => {
            return (
                title.name.toLowerCase()
                    .includes(searchField.toLowerCase()) ||
                title.author.toLowerCase()
                    .includes(searchField.toLowerCase())
            )
        }
    ): [];
    // )) titles? titles.filter(
    //     title => {
    //         return (
    //             title.name.toLowerCase()
    //                 .includes(searchField.toLowerCase()) ||
    //             title.author.toLowerCase()
    //                 .includes(searchField.toLowerCase())
    //         )
    //     }
    // ) : titles;

    return (
        <>
            <h1>Catalog</h1>
            <form className={styles.searchform}>
                <input className={styles.searchBox}
                       type="text" placeholder="Search"
                       onChange={handleChange}/>
            </form>
            <div>
                {filterTitles.map(title =>
                    <BookCard key = {title.id} title = {title}/>)}
            </div>
        </>
    )
}

export default CatalogSearch;