import React from "react";
import Modal from "../UI/Modal";
import styles from './AddProject.module.css'
import { useState } from "react";
import axios from "axios";
import { useSelector , useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProject } from "../store/projectsSlice";

const AddProject = (props) => {

    const [projectName, setProjectName] = useState('')
    const [projectDescription, setProjectDescription] = useState('')

    const baseUrl = useSelector((state) => state.baseUrl.baseUrl);
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const submitHandler = async (event) => {
        event.preventDefault()
        const projectObj = {
            name: projectName,
            description: projectDescription,
            tasks: []
        }


        try {
            const response = await axios.post(`${baseUrl}/api/projects`, projectObj)
            dispatch(addProject(response.data))
            props.onClose()
            navigate(`/projects/`)

        } catch (error) {
            console.error(error.message);
        }
    }
    return (
        <Modal onClose={props.onClose}>

            <form action="" className={styles.form}>
                <h1>Add Project</h1>
                <div className={styles.input_field}>
                    <label htmlFor="project_name">Name</label>
                    <input type="text" name="Name" id={styles.name_input} value={projectName} onChange={(e) => setProjectName(e.target.value)} />
                </div>
                <div className={styles.input_field}>
                    <label htmlFor="project_name">Description</label>
                    <input type="text" name="Name" id={styles.name_input} value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} />
                </div>
                <div className={styles.buttons}>
                    <button className={styles.cancel_button} onClick={props.onClose}>Cancel</button>
                    <button className={styles.add_button} onClick={submitHandler}>Add</button>
                </div>
            </form>

        </Modal>
    )
}

export default AddProject