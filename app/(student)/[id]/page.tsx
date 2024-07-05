"use client";

import { useState, useEffect } from 'react';
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
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents, LayersControl, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-control-geocoder';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const projectData = {
  id: '1',
  title: "Frugal Innovation in India's Space Sector and Its Socio-Economic Impacts",
  university: 'Judge Business School, University of Cambridge',
  location: 'England',
  UniversityDescription: 'The University of Cambridge, established in 1209, is one of the world\'s oldest and most prestigious universities, located in Cambridge, England. It is renowned for its academic excellence and contributions to research, making it a leading institution in various fields. Cambridge is home to 31 autonomous colleges, each with its own unique history and traditions, providing a close-knit community for students. The university offers a wide range of undergraduate and postgraduate courses, covering subjects from arts and humanities to sciences and technology. Cambridge is known for its rigorous academic standards, challenging students to excel in their chosen fields. The university boasts a strong research culture, with many groundbreaking discoveries and innovations originating from its laboratories and libraries. Apart from academics, Cambridge offers a vibrant student life, with numerous clubs, societies, and events catering to diverse interests. The city of Cambridge itself is steeped in history and culture, providing a picturesque backdrop for students to explore and enjoy. Overall, the University of Cambridge continues to uphold its reputation as a world-class institution, attracting students and scholars from around the globe who seek to be part of its rich academic tradition.',
  otherInformation: {
    ranking: '#233',
  },
  projectDetails: {
    description: 'Time-series data popularly exists in all forms of sensor data, stock markets, and different kinds of temporal tracking and forecasting applications. In the last decades, although time-series data have attracted an explosion of interest in the data mining community, time-series data mining is still far behind other kinds of data mining techniques. The problem definitions in the time-series scenario are significantly diverse. The anomaly detection problem for time series is usually formulated as identifying outlier instances relative to some standard or usual signal. In this project, students will explore the definition of different kinds of anomalies existing in time series and investigate existing anomaly detection methods. Furthermore, students will evaluate the performance of these methods on large real-world time-series datasets, then identify the challenging issues and potential directions for further research.',
    details: {
      Deadline: 'Nov. 1, 2023',
      Stipend: '0 INR',
      Mode: 'Remote'
    },
    prerequisites: 'Basic knowledge of data mining techniques, familiarity with time-series data, and some experience with programming in Python or R is required. Knowledge of statistical methods for anomaly detection is a plus.',
  },
  universityLocation: 'University of Cambridge, Trumpington St, Cambridge CB2 1AG, United Kingdom...',
  coordinates: [51.753867, 0.096450], // Coordinates for University of Cambridge
};

// Geocoder component to add a search control
const GeocoderControl = () => {
  const map = useMap();

  useEffect(() => {
    const geocoder = L.Control.Geocoder.nominatim();
    L.Control.geocoder({
      geocoder,
      position: 'topright',
      collapsed: false,
    }).addTo(map);
  }, [map]);

  return null;
};

// Component to find user's current location
const LocateControl = () => {
  const map = useMapEvents({
    locationfound(e) {
      map.flyTo(e.latlng, map.getZoom());
      L.marker(e.latlng).addTo(map)
        .bindPopup("You are here")
        .openPopup();
    },
  });

  const locateUser = () => {
    map.locate({ setView: true, maxZoom: 16 });
  };

  return (
    <button onClick={locateUser} className={styles.locateButton}>
      Locate Me
    </button>
  );
};

export default function ProjectDetails() {
  const [activeTab, setActiveTab] = useState('description');
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <h2 className={styles.Heading}>{projectData.title}</h2>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <a href="#overview" className={styles.link}>Overview</a><br />
          <a href="#otherInformation" className={styles.link}>Other Information</a><br />
          <a href="#projectDetails" className={styles.link}>Project Details</a><br />
          <a href="#universityLocation" className={styles.link}>University Location</a>
        </div>
        <div className={styles.main}>
          <div className={styles.header} id="overview">
            <img src="https://ircell.iitkgp.ac.in/media/George-Gilbert-Scott-Cambridge-St-Johns-College_zQtFT8P.webp" alt={projectData.title} className={styles.image} />
            <div className={styles.headerContent}>
              <h1 className={styles.mainHeading}>{projectData.university}</h1>
              <p><LocationOnIcon /> {projectData.location}</p>
              <div className={styles.buttons}>
                <button className={styles.buttonDisabled}><ChatBubbleOutlineRoundedIcon /> Already Applied</button>
                <Link href="/results" className={styles.button}><SchoolOutlinedIcon /> Shortlisted</Link>
                <Link href="/favorites" className={styles.button}><BookmarksOutlinedIcon /> Bookmark</Link>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <h2 className={styles.subHeading}>{projectData.university}</h2>
            <p>
              {isExpanded ? projectData.UniversityDescription : `${projectData.UniversityDescription.substring(0, 100)}...`}
              <button onClick={toggleReadMore} className={styles.readMoreButton}>
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
            </p>
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
                {activeTab === 'description' ? (
                  <>
                    <p>{projectData.projectDetails.description}</p>
                    <h3 id="otherInformation" className={styles.subHeading}>Details:</h3>
                    <span><AccessTimeIcon /> Deadline: {projectData.projectDetails.details.Deadline}</span><br />
                    <span><SavingsIcon /> Stipend: {projectData.projectDetails.details.Stipend}</span><br />
                    <span><ApartmentIcon /> Mode: {projectData.projectDetails.details.Mode}</span>
                  </>
                ) : (
                  <p>{projectData.projectDetails.prerequisites}</p>
                )}
              </div>
            </div>
            <h3 id="universityLocation" className={styles.subHeading}>University Location</h3>
            <p>{projectData.universityLocation}</p>
            <MapContainer center={projectData.coordinates} zoom={13} style={{ height: '400px', width: '100%' }} zoomControl={false}>
              <LayersControl position="topright">
                <LayersControl.BaseLayer checked name="Street View">
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="Satellite View">
                  <TileLayer
                    url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://opentopomap.org">OpenTopoMap</a> contributors'
                  />
                </LayersControl.BaseLayer>
              </LayersControl>
              <Marker position={projectData.coordinates}>
                <Popup>{projectData.university}</Popup>
              </Marker>
              <LocateControl />
              <ZoomControl position="bottomright" />
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
}
