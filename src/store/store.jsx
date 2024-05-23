import { configureStore } from '@reduxjs/toolkit';
import baseUrlReducer from './baseUrlSlice';
import projectsReducer from './projectsSlice';
const store = configureStore({
  reducer: {
    baseUrl: baseUrlReducer,
    projects: projectsReducer,
  },
});

export default store;
