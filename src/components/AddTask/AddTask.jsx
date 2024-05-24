import React from "react";
import Modal from "../../UI/Modal";
import styles from './AddTask.module.css'
import { useSelector } from "react-redux";
import { setProjects } from "../../store/projectsSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const AddTask = (props) => {
    const dispatch = useDispatch();
    const baseUrl = useSelector((state) => state.baseUrl.baseUrl);
    const projects=useSelector((state) => state.projects);  
    const [selectedValue, setSelectedValue] = useState('');
    const [description, setDescription] = useState('');
    const [task, setTask] = useState('');
    const [duedate, setDuedate] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseUrl}/api/projects`);
                
                dispatch(setProjects(response.data));
                
            } catch (error) {
                console.error(error.message);
            }

        }
        fetchData();
    }, []);


    const selectedProject = projects.map((item) => <option className={styles.option} key={item._id} value={item._id}>{item.name}</option>)
    
    const submitHandler = async(event) => {
        event.preventDefault();
        props.onClose();
        const obj={
            title:task,
            description:description,
            dudate:duedate,
            project:selectedValue
        }
        console.log(obj)
        const response = await axios.post(`${baseUrl}/api/tasks`, obj)
        console.log(response)
    }
    return (
        <Modal onClose={props.onClose}>
            <form onSubmit={submitHandler} className={styles.form}> 
                <input type="text" name="Task" id={styles.task}  placeholder="TaskName" value={task} onChange={(e) => setTask(e.target.value)}/>
                <input type="text" name="" id={styles.description} placeholder="Description"value={description} onChange={(e) => setDescription(e.target.value)}/>
                <input type="date" id={styles.date} placeholder="Due Date" value={duedate} onChange={(e) => setDuedate(e.target.value)}></input>
                <select className={styles.selectProject} value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)} >
                    {selectedProject}
                </select>
                <div className={styles.buttons}>
                    <button className={styles.cancel_button} onClick={props.onClose}>Cancel</button>
                    <button className={styles.task_button} type="submit">Add Task</button>
                </div>
            </form>
        </Modal>
    )
}
export default AddTask