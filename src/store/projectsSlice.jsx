import { createSlice } from '@reduxjs/toolkit';



const projectsSlice = createSlice({
  name: 'projects',
  initialState:[],
  reducers: {
    setProjects: (state, action) => [...action.payload],
    addProject: (state, action) => [...state, action.payload],
    deleteProject: (state, action) => {
        console.log(action.payload)
        const arr=state.filter((project) => project._id !== action.payload);
        return [...arr];
    },
    addTask:(state, action) => {
        const obj=state.filter((project)=> project._id === action.payload.projectId);
        obj.tasks.push(action.payload.task)
    }
  },
});

export const { setProjects,addProject ,deleteProject,addTask} = projectsSlice.actions;

export default projectsSlice.reducer;
