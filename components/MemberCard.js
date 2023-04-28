import styles from "@/styles/BookCard.module.css";
import {useEffect, useState} from "react";
import data from "@/data/data";
import BookCard from "@/components/BookCard";

const MemberCard = (props) => {

    const [viewReservedTitles, setViewReservedTitles] = useState(false);
    const [reservedTitles, setReservedTitles] = useState([]);

    useEffect(() => {
        data.titlesByMember(props.member)
            .then((data) => {
                    setReservedTitles(data);
                    console.log(data);
                }
            )
    }, [])

    const handleClick = () => {
        setViewReservedTitles(!viewReservedTitles);
    }

    return (
        <>
            <div className={styles.card_container}>
                <table className={styles.card_table}>
                    <tbody>
                    <tr>
                        <td className={styles.tag}>Name:</td>
                        <td className={styles.title_info}>{props.member.name}</td>
                    </tr>
                    <tr>
                        <td className={styles.tag}>Email:</td>
                        <td className={styles.title_info}>{props.member.email}</td>
                    </tr>
                    <tr>
                        <td className={styles.view}>
                            <input className={styles.view_titles} onClick={handleClick} id="viewTitles" type="checkbox"/>
                            <label htmlFor="viewTitles">view titles</label>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            {viewReservedTitles ? reservedTitles.map(title =>
            <BookCard key={title.id} title={title}/>) : <></>}
        </>
    )
}

export default MemberCard;
