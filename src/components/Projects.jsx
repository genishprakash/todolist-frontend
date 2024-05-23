
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useDispatch,useSelector } from 'react-redux'
import { setProjects } from "../store/projectsSlice"
import { useNavigate } from "react-router-dom"
import styles from "./Projects.module.css"
import { deleteProject } from "../store/projectsSlice"
const Projects = () => {
    const baseUrl = useSelector((state) => state.baseUrl.baseUrl);
    const data=useSelector((state) => state.projects);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await axios.get(`${baseUrl}/api/projects`);
                
                dispatch(setProjects(response.data));
                setLoading(false);
            } catch (error) {
                console.error(error.message);
            }

        }

        fetchData();
    }, []);
    
    const navigate = useNavigate();
    const handleProjectClick = (projectId) => {
        navigate(`/projects/${projectId}`);
    }
    const deleteProjectFn=async(projectId)=>{
        try {
            console.log(projectId)
            await axios.delete(`${baseUrl}/api/projects/${projectId}`)
            dispatch(deleteProject(projectId))
          } catch (error) {
            console.error("Error deleting post:", error);
          }
    }
    return (
        <>
            
            {loading && <div>Loading</div>}
            {!loading && (
                <ul className={styles.projects}>
                    <h1>Projects</h1>
                    {data.map(item => (<div key={item._id}>
                        <div key={item._id} className={styles.project}>
                            <li onClick={() => handleProjectClick(item._id)}>{item.name}</li>
                            <button key={item._id} onClick={() => deleteProjectFn(item._id)}><i className="material-icons" >delete</i></button>
                        </div>
                    </div>))}
                </ul>
            )}

        </>
    )
}

export default Projects