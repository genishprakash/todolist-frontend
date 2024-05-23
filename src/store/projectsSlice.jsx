import { createSlice } from '@reduxjs/toolkit';



const projectsSlice = createSlice({
  name: 'projects',
  initialState:[],
  reducers: {
    setProjects: (state, action) => [...action.payload],
    addProject: (state, action) => [...state, action.payload],
    deleteProject: (state, action) => {
        console.log(action.payload)
        const arr=state.filter((item) => item._id !== action.payload);
        return [...arr];
    }
  },
});

export const { setProjects,addProject ,deleteProject} = projectsSlice.actions;

export default projectsSlice.reducer;
