"use client";
// components/Navbar.js
// components/Navbar.js
import { useState } from "react";
import styles from "./Navbar.module.css";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
export default function Navbarprof() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <div className={styles.logo}></div>
        Foreign Training Program
      </div>
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://ircell.iitkgp.ac.in/media/WhatsApp_Image_2023-12-25_at_09.58.52.jpeg"
          alt="User Avatar"
          onClick={()=>{window.location='../prof-profile'}}
        />
        <span className={styles.userName}>palashsinhalpar26</span>
        <button className={styles.menuButton} onClick={toggleDialog}>
          ☰
        </button>
      </div>
      {isOpen && (
        <div className={styles.dialog} style={{zIndex:1000000}}>
          <button
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
          <a href="#" onClick={() => setIsOpen(false)}>
            Application Review
          </a>
          <a href="#" onClick={() => setIsOpen(false)}>
            Manage Applications
          </a>
          <a href="#" onClick={() => setIsOpen(false)}>
            Logout
          </a>
        </div>
      )}
    </nav>
  );
}
