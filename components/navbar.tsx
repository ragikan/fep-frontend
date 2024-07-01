"use client";
// components/Navbar.js
// components/Navbar.js
import { useState } from "react";
import styles from "./Navbar.module.css";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

export default function Navbar() {
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
      <div className={styles.links}>
        <a href="/projects" className={styles.link}>
          {" "}
          <AccountTreeOutlinedIcon /> Projects
        </a>
        <a href="/favorites" className={styles.link}>
          {" "}
          <BookmarksOutlinedIcon /> Bookmarks
        </a>
        <a href="/scholarships" className={styles.link}>
          <SchoolOutlinedIcon />
          Scholarships
        </a>
        <a href="/results" className={styles.link}>
          <LeaderboardOutlinedIcon /> Results
        </a>
        {/* <a href="/faq"></a> */}
      </div>
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://ircell.iitkgp.ac.in/media/WhatsApp_Image_2023-12-25_at_09.58.52.jpeg"
          alt="User Avatar"
        />
        <span className={styles.userName}>palashsinhalpar26</span>
        <button className={styles.menuButton} onClick={toggleDialog}>
          ☰
        </button>
      </div>
      {isOpen && (
        <div className={styles.dialog}>
          <button
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
          <a href="/applications" onClick={() => setIsOpen(false)}>
            Applied Projects
          </a>
          <a href="/scholarships" onClick={() => setIsOpen(false)}>
            Applied Scholarships
          </a>
          <a href="/applications" onClick={() => setIsOpen(false)}>
            Bookmarks
          </a>
          <a href="/results" onClick={() => setIsOpen(false)}>
            Results
          </a>
          <a href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>{" "}
          {/*  this route is not valid for now, with reference to provided website  */}
        </div>
      )}
    </nav>
  );
}
