import React from "react";
import Modal from "../UI/Modal";
import styles from './AddTask.module.css'

const AddTask = (props) => {
    const submitHandler = (event) => {
        
    }
    return (
        <Modal onClose={props.onClose}>
            <form onSubmit={submitHandler} className={styles.form}> 
                <input type="text" name="Task" id={styles.task}  placeholder="TaskName"/>
                <input type="text" name="" id={styles.description} placeholder="Description"/>
                <input type="date" id={styles.date} placeholder="Due Date"></input>
                <div className={styles.buttons}>
                    <button className={styles.cancel_button}>Cancel</button>
                    <button className={styles.task_button}>Add Task</button>
                </div>
            </form>
        </Modal>
    )
}
export default AddTask