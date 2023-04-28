import {useForm} from "react-hook-form";
import data from "@/data/data.js";
import styles from "@/styles/Manage.module.css";

const  Manage = () => {
    const {  register, handleSubmit, errors, reset } = useForm();
    const { register: register2, handleSubmit: handleSubmit2, errors: errors2, reset: reset2} = useForm();

    let saveMember = async (values) => {
        console.log(values);
        const response = await data.addMember(values);
        console.log(response);
        if(response != null) {
            reset();
        }
    }

    let saveTitle = async (values) => {
        console.log(values);
        const response = await data.addTitle(values);
        console.log(response);
        if(response != null) {
            reset2();
        }
    }

    return (
        <>
            <h2>Add Member</h2>
            <div className={styles.container}>
                <form className={styles.form_input} action="#" onSubmit={handleSubmit(saveMember)}>
                    <label htmlFor="memberName">name</label>
                    <input type="text"
                           id="memberName"
                           name="memberName"
                           {...register('memberName',
                               {required: true,
                                   message: 'Please enter a name'})}
                           placeholder="Enter member's name"/>

                    <label htmlFor="memberEmail">email</label>
                    <input type="email"
                           id="memberEmail"
                           name="memberEmail"
                           {...register('memberEmail',
                               {required: true,
                                   message: 'Please enter an email'})}
                           placeholder="Enter member's email"/>
                    <div className={styles.form_submit}>
                        <input type="submit" value="Save"/>
                    </div>
                </form>
            </div>
            <h2>Add Title</h2>
            <div className={styles.container}>
                <form className={styles.form_input} action="#" onSubmit={handleSubmit2(saveTitle)}>
                    <label htmlFor="titleName">title</label>
                    <input type="text"
                           id="titleName"
                           name="titleName"
                           {...register2('titleName',
                               {required: true,
                                   message: 'Please enter the title'})}
                           placeholder="Enter title"/>

                    <label htmlFor="titleAuthor">author</label>
                    <input type="text"
                           id="titleAuthor"
                           name="titleAuthor"
                           {...register2('titleAuthor',
                               {required: true,
                                   message: "Please enter the title's author"})}
                           placeholder="Enter title's author"/>

                    <label htmlFor="titleYear">year of publication</label>
                    <input type="number"
                           id="titleYear"
                           name="titleYear"
                           {...register2('titleYearOfPublication',
                               {required: true,
                                   message: "Please enter the title's year of publication"})}
                           placeholder="Enter the year of publication"/>
                    <div className={styles.form_submit}>
                        <input type="submit" value="Save"/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Manage;