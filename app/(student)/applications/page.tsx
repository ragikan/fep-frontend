"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link'; 
import Head from 'next/head';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid'; // Import Grid component
import ProjectCard from '@/components/ProjectCard'; 
import styles from './applications.module.css';
import { getAllProjects } from '@/components/api'; // Import the getAllProjects function
import { Project } from '@/models/projects';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]); // Use the Project model for type safety

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    // Fetch projects from the backend
    const fetchProjects = async () => {
      try {
        const response = await getAllProjects(); // Use the getAllProjects function from api.js
        setProjects(response.data); // Assuming the API response contains the project data in the data property
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Projects Page</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.buttonContainer}>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Request a Project
          </Button>
          <h1 className={styles.title}>Applications</h1>
          <Link href="/applications" passHref>
            <Button variant="contained" color="primary">
              Go to applied Projects →
            </Button>
          </Link>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-title" variant="h6" component="h2">
              Select a Project Topic
            </Typography>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Operation Research" />
              <FormControlLabel control={<Checkbox />} label="BioImage Processing" />
              <FormControlLabel control={<Checkbox />} label="Econometrics" />
              <FormControlLabel control={<Checkbox />} label="Data Science" />
              <FormControlLabel control={<Checkbox />} label="Computer Vision" />
              <FormControlLabel control={<Checkbox />} label="VLSI Design" />
              <FormControlLabel control={<Checkbox />} label="Quantum Computing" />
              <FormControlLabel control={<Checkbox />} label="Other" />
            </FormGroup>
            <Box mt={2}>
              <Button variant="contained" color="primary" onClick={handleClose}>
                Request
              </Button>
              <Button variant="outlined" color="secondary" onClick={handleClose} sx={{ ml: 2 }}>
                Close
              </Button>
            </Box>
          </Box>
        </Modal>
        <Grid container spacing={3} className={styles.projectList}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.ID}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </main>
    </div>
  );
}

export default Projects;
