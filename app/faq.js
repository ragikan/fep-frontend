// src/components/Faq/Faq.js

import React from 'react';
import styles from './faq.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Faq() {
    return (
        <div className={styles.bod}>
            <header className={styles.header}>
                <h1 className={styles.heading}>Meet Our Team</h1>
            </header>
            
            <section className={styles.teamSection}>
                

                {/* <img className={styles.video} src="world.jpg" alt="Background" /> */}
                <div className={styles.teamMember}>
                    <div className={styles.memberAvatar}>
                        <img src="oggy.png" className={styles.memberAvatar} alt="Avatar" />
                    </div>
                    {/* <div className={styles.iconContainer}>
                        <a href="#" target="_blank" rel="noopener noreferrer" className={styles.icon}><FontAwesomeIcon  /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className={styles.icon}><FontAwesomeIcon  /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className={styles.icon}><FontAwesomeIcon  /></a>
                    </div> */}
                    <div className={styles.memberInfo}>
                        <h3>Oggy Cat</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                {/* Add other team members similarly */}
            </section>
        </div>
    );
}

export default Faq;
