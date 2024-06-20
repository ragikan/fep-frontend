"use client";
import { useState } from 'react';
import Link from 'next/link'; 
import Head from 'next/head';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import ProjectCard from '@/components/ProjectCard'; 
import styles from './applications.module.css';

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

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // sample data taken from given website  else the project card component is generalised will be integrated to backend later 
  const projects = [
    {
      id: 1,
      image: 'https://ircell.iitkgp.ac.in/media/George-Gilbert-Scott-Cambridge-St-Johns-College_zQtFT8P.webp',
      title: 'Frugal Innovation in India\'s Space Sector and Its Socio-Economic Impacts',
      institution: 'Judge Business School, University of Cambridge',
      mode: 'Remote',
      deadline: 'March 20, 2024',
      description: 'Project Overview: We are inviting research interns to participate in a study exploring frugal innovation within India\'s space sector. The project aims to understand how cost-effective and resource-efficient solutions in space technology have socio-economic impacts, particularly focusing on digital platforms.',
    },
    // can add more projects 
  ];

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
        <div className={styles.projectList}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}
