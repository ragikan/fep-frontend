import axios from 'axios';

const API_BASE_URL = 'http://localhost:3492/api/admin/project';

// Project APIs
export const getAllProjects = () => axios.get(`${API_BASE_URL}`);
export const getProjectById = (id) => axios.get(`${API_BASE_URL}/${id}`);
export const createProject = (project) => axios.post(`${API_BASE_URL}`, project);
