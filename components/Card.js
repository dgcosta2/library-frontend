import styles from '@/styles/Card.module.css';

const Card = (props) => {

    return (
        <>
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
        </>
    )
}

export default Card;