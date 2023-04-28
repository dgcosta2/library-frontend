import {useEffect, useState} from "react";
import CatalogSearch from "@/components/CatalogSearch";
import data from "@/data/data";
import {useForm} from "react-hook-form";
import styles from "@/styles/SearchBar.module.css";
import BookCard from "@/components/BookCard";

const Catalog = () => {
    const { register, handleSubmit, errors, reset} = useForm();
    const [searchField, setSearchField] = useState("");
    const [titleList, setTitleList] = useState([]);
    const [memberList, setMemberList] = useState([]);

    useEffect(() => {
        data.titles()
            .then((data) => {
                    setTitleList(data);
                    console.log(data);
                }
            )
        }, []);

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

    return (
        <>

            <h1 className={styles.catalogHeading}>Catalog</h1>

                <form className={styles.searchform}>
                    <input
                        className={styles.searchBox}
                        type="text"
                        placeholder="Search"
                        onChange={handleChange}
                    />
                </form>
                <div className={styles.catalogLetters} >
                    {filterTitles.map((title) => (
                        <BookCard key={title.id} title={title} />
                    ))}
                </div>

        </>
    );
};

export default Catalog;