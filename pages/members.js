import {useEffect, useState} from "react";
import MemberCard from "@/components/MemberCard";
import data from "@/data/data";
import {set} from "react-hook-form";
import styles from "@/styles/SearchBar.module.css";

const Members = () => {

    const [memberList, setMemberList] = useState([]);
    const [searchField, setSearchField] = useState("");


    useEffect(() => {
        data.members()
            .then((data) => {
                setMemberList(data);
                console.log(data);
                }
            )
    }, []);

    const handleChange = (e) => {
        setSearchField(e.target.value);
    }

    const filterTitles = memberList? memberList.filter(
        member => {
            return (
                member.name.toLowerCase()
                    .includes(searchField.toLowerCase()) ||
                member.email.toLowerCase()
                    .includes(searchField.toLowerCase())
            )
        }
    ): [];

    return (
        <>
            <h1 className={styles.catalogHeading}>Members</h1>
            <form className={styles.searchform}>
                <input className={styles.searchBox}
                       type="text" placeholder="Search"
                       onChange={handleChange}/>
            </form>
            {filterTitles.map(member => (
                <MemberCard key={member.id} member={member}/>
            ))}
        </>
    )
}

export default Members;