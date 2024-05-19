import React, { useState } from "react";
import Projects from "./Projects.jsx"
import styles from './SideBar.module.css'
const SideBar = (props) => {

    return (
        <div className={styles.sidebar}>
            <h1 className={styles.header}>Todoist</h1>
            <ul className={styles.list}>
                <button onClick={props.showAddTask}>Add task</button>
                <li >Search</li>
                <li>Inbox</li>
                <li>Today</li>
                <li>Upcoming</li>
                <li>Filters and labels</li>
            </ul>
            <Projects></Projects>
        </div>
    )
}
export default SideBar