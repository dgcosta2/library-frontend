import Image from "next/image";
import red from "@/public/red_circle.png";
import green from "@/public/green_circle.png";
import styles from "@/styles/Reserved.module.css";
import Link from "next/link";
import data from "@/data/data";
import {useRouter} from "next/router";
import { Dropdown } from "@nextui-org/react";
import {useEffect, useState} from "react";


const Reserved = (props) => {
    //State created for re-rendering purposes
    const router = useRouter();
    const [update, setUpdate] = useState(0);
    const [viewMembers, setViewMembers] = useState(false);
    const [memberList, setMemberList] = useState([]);
    const [selectedMember, setSelectedMember] = useState(new Set(["Select Member"]));

    useEffect(() => {
        data.members()
            .then((data) => {
                setMemberList(data);
                console.log(data);
            })
    }, [])

    const handleClick = () => {
        if (!viewMembers) {
            setViewMembers(true);
        }
        else {
            reserveTitle();
        }
    }

    const reserveTitle = async () => {
        console.log(props.title + selectedMember);
        const response = await data.reserve(props.title,
            selectedMember.values().next().value);
        if (response != null) {
            alert("Successful reservation!");
        } else {
            alert("Network error, try again soon");
        }
    }


    const renewTitle = async () => {
        console.log(props.title);
        const response = await data.renew(props.title);
        if (response != null) {
            alert("Successful renewal! Please refresh the page");
        } else {
            alert("Network error, try again soon");
        }
    }

    if (props.title.reserveStatus) {
        return (
            <>
                <Image src={red} alt="" className={styles.reserved_image}/>
                <p className={styles.p_book_reserved}>Book reserved by member {props.title.memberId}
                <br/> due date: {props.title.dueDate}
                   <br/> <input className={styles.renew_button} type="submit" onClick={renewTitle} value="Renew"/></p>
            </>
        )
    } else return (
        <>
            <Image src={green} alt="" className={styles.reserved_image}/>
            <p className={styles.p_book_reserved}>Book available.
                <input className={styles.renew_button} type="submit" onClick={handleClick} value="Reserve"/></p>
            {viewMembers?
                <>
                    <Dropdown>
                        <Dropdown.Button flat>{selectedMember}</Dropdown.Button>
                        <Dropdown.Menu aria-label="Dynamic options"
                                       items={memberList}
                                       selectionMode="single"
                                       onSelectionChange={setSelectedMember}>
                            {(member) => (
                                <Dropdown.Item
                                    key={member.id}
                                    color="default"
                                    >
                                    {member.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </> : <></>}
            {/*{viewMembers? <><label htmlFor="books">select a member:</label> <select onChange={handleChange} name="books" id="books">*/}
            {/*    {memberList.map(member =>*/}
            {/*            <option key={member.id} value={member.name}>{member.name}</option>)}*/}
            {/*</select></>:<></>}*/}
        </>
    )
}

export default Reserved;