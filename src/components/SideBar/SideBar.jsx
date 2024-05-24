import React, { useState } from "react";
import ProjectsSideBar from "../ProjectsSideBar/ProjectsSideBar.jsx"
import styles from './SideBar.module.css'
import { Link } from "react-router-dom";
const SideBar = (props) => {

    return (
        <div className={styles.sidebar}>
            <h1 className={styles.header}>Todoist</h1>
            <ul className={styles.list}>
                <button onClick={props.showAddTask}>Add task</button>
                <li >Search</li>
                <li><Link to="/inbox">Inbox</Link></li>
                <li><Link to="/today">Today</Link></li>
                <li><Link to="/Upcoming">Upcoming</Link></li>
                <li>Filters and labels</li>
            </ul>
            <ProjectsSideBar showAddProject={props.showAddProject}></ProjectsSideBar>
        </div>
    )
}
export default SideBar