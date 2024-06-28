"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './[id].module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SavingsIcon from '@mui/icons-material/Savings';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';

const projectData = {
  id: '1',
  title: 'Frugal Innovation in India\'s Space Sector and Its Socio-Economic Impacts',
  university: 'Judge Business School, University of Cambridge',
  location: 'England',
  description: 'The University of Cambridge, established in 1209, is one of the world\'s oldest and most prestigious universities...',
  otherInformation: {
    ranking: '#233',
  },
  projectDetails: {
    description: 'Time-series data popularly exists in all forms of sensor data, stock markets, and different kinds of temporal tracking and forecasting applications. In the last decades, although time-series data have attracted an explosion of interest in the data mining community, time-series data mining is still far behind other kinds of data mining techniques. The problem definitions in the time-series scenario are significantly diverse. The anomaly detection problem for time series is usually formulated as identifying outlier instances relative to some standard or usual signal. In this project, students will explore the definition of different kinds of anomalies existing in time series and investigate existing anomaly detection methods. Furthermore, students will evaluate the performance of these methods on large real-world time-series datasets, then identify the challenging issues and potential directions for further research.',
    details: {Deadline : 'Nov. 1, 2023',
    Stipend: '0 INR',
    Mode: 'Remote'},
    prerequisites: 'Basic knowledge of data mining techniques, familiarity with time-series data, and some experience with programming in Python or R is required. Knowledge of statistical methods for anomaly detection is a plus.',
  },
  universityLocation: 'University of Cambridge, Trumpington St, Cambridge CB2 1AG, United Kingdom...',
};

export default function ProjectDetails() {
  const [activeTab, setActiveTab] = useState('description');


  return (
    <>
      
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <a href="#overview" className={styles.link}>Overview</a><br />
          <a href="#otherInformation" className={styles.link}>Other Information</a><br />
          <a href="#projectDetails" className={styles.link}>Project Details</a><br />
          <a href="#universityLocation" className={styles.link}>University Location</a>
        </div>
        <div className={styles.main}>
          <div className={styles.header} id="overview">
              <img src="https://ircell.iitkgp.ac.in/media/George-Gilbert-Scott-Cambridge-St-Johns-College_zQtFT8P.webp" alt={projectData.title} className={styles.image} />            <div className={styles.headerContent}>
              <h1 className={styles.mainHeading}>{projectData.university}</h1>
              <p><LocationOnIcon /> {projectData.location}</p>
              <div className={styles.buttons}>
                <button className={styles.buttonDisabled}><ChatBubbleOutlineRoundedIcon />  Already Applied</button>
                <Link href="/results" className={styles.button}><SchoolOutlinedIcon/>  Shortlisted</Link>
                <Link href="/favorites" className={styles.button}><BookmarksOutlinedIcon/> Bookmark</Link>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <h2 className={styles.subHeading}>{projectData.title}</h2>
            <p>{projectData.description}</p>
            <h3 id="otherInformation" className={styles.subHeading}>Other Information</h3>
            <div className={styles.otherInformation}>
              <div className={styles.otherInfoTab}>
                <FontAwesomeIcon icon={faTrophy} className={styles.trophyIcon} />
                <span>QS World University Rankings</span>
                <p>{projectData.otherInformation.ranking}</p>
              </div>
            </div>
            <h3 id="projectDetails" className={styles.subHeading}>Project Details</h3>
            <div className={styles.projectDetails}>
              <div className={styles.tabs}>
                <button
                  className={`${styles.tab} ${activeTab === 'description' ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab('description')}
                >
                  DESCRIPTION
                </button>
                <button
                  className={`${styles.tab} ${activeTab === 'prerequisites' ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab('prerequisites')}
                >
                  PREREQUISITES
                </button>
              </div>
              <div className={styles.tabContent} key={activeTab}>
                {activeTab === 'description' ? (<>
                  <p>{projectData.projectDetails.description}</p>
                  <h3 id="otherInformation" className={styles.subHeading}>Details:</h3>
                  <span><AccessTimeIcon />  Deadline: {projectData.projectDetails.details.Deadline}</span><br />
                  <span><SavingsIcon />  Stipend: {projectData.projectDetails.details.Stipend}</span><br />
                  <span><ApartmentIcon />  Mode: {projectData.projectDetails.details.Mode}</span></>
                ) : (
                  <p>{projectData.projectDetails.prerequisites}</p>
                )}
              </div>
            </div>
            <h3 id="universityLocation" className={styles.subHeading}>University Location</h3>
            <p>{projectData.universityLocation}</p>
          </div>
        </div>
      </div>
      
    </>
  );
}









{/* <img src="https://ircell.iitkgp.ac.in/media/George-Gilbert-Scott-Cambridge-St-Johns-College_zQtFT8P.webp" alt={projectData.title} className={styles.image} /> */}