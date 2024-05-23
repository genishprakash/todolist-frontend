import React from "react";
import styles from './ProjectsSideBar.module.css'
import { Link } from "react-router-dom";

const ProjectsSideBar = (props) => {
    return (
        <>
            <div className={styles.projects}>
                <h3 ><Link to="/projects">My Projects</Link></h3> 
                <button className={styles.addproject_button} onClick={props.showAddProject}>+</button>
            </div>
        </>
    )
}
export default ProjectsSideBar