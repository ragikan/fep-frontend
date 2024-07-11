// components/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3492/api/admin/project'; 

// Project APIs
export const getAllProjects = () => axios.get(`${API_BASE_URL}/admin/project`);
export const getProjectById = (id) => axios.get(`${API_BASE_URL}/admin/project/${id}`);
