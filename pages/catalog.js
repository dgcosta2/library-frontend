import {useState} from "react";
import Card from "@/components/Card";
const Catalog = () => {

    const [titles, setTitles] = useState([
        {
            "id": 1,
            "name": "The Book Thief",
            "author": "Markus Zusak",
            "yearOfPublication": 2005,
            "reserved": false,
            "memberId": null
        },
        {
            "id": 2,
            "name": "The Giver",
            "author": "Lois Lowry",
            "yearOfPublication": 1993,
            "reserved": false,
            "memberId": null
        },
        {
            "id": 3,
            "name": "The Hunger Games",
            "author": "Suzanne Collins",
            "yearOfPublication": 2008,
            "reserved": false,
            "memberId": null
        }
    ])

    return (
        <>
            <div>
                <h1>Catalog</h1>
                {titles.map(title =>
                <Card key = {title.id} title = {title}/>)}
            </div>
        </>
    )

}

export default Catalog;