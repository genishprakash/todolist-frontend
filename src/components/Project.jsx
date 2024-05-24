import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
const Project = () => {
    const baseUrl = useSelector((state) => state.baseUrl.baseUrl);
    const { projectId } = useParams();
    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseUrl}/api/projects/${projectId}`);
                setTasks(response.data.tasks);
                setLoading(false);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchData();
    }, []);


    return (
        <>
            <div>Project {projectId}</div>

            {loading && <div>Loading</div>}
            {!loading && (
                <ul>
                    {tasks.map((task) => (
                        <li key={task._id}>{task.title}</li>
                    ))}
                </ul>
            )}
        </>
    )
}
export default Project