import styles from '@/styles/BookCard.module.css';
import Reserved from "@/components/Reserved";
const BookCard = (props) => {

    return (
        <>
            <div className={styles.card_container}>
                <table className={styles.card_table}>
                    <tbody>
                        <tr>
                            <td className={styles.tag}>Name:</td>
                            <td className={styles.title_info}>{props.title.name}</td>
                        </tr>
                        <tr>
                            <td className={styles.tag}>Author:</td>
                            <td className={styles.title_info}>{props.title.author}</td>
                        </tr>
                        <tr>
                            <td className={styles.tag}>Year:</td>
                            <td className={styles.title_info}>{props.title.yearOfPublication}</td>
                        </tr>
                    </tbody>
                </table>
                <Reserved title={props.title}/>
            </div>
        </>
    )
}

export default BookCard;