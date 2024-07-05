"use client";
// footer.tsx
import React from "react";
import styles from './footer.module.css';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
export default function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "1rem", background: "white", color: "black" }}>
      <main className={styles.main}>
        <section className={styles.leftSection}>
          <div className={styles.iconContainer}>
            {/* icon to be placed here */}
          </div>
          <p>The Students' International Relations Cell (SIRC) is a student body working along with the Office of International Relations (OIR). It works to promote the exchange of students, faculties, and ideas between IIT Kharagpur and the international partners and establishing the globalization of IIT Kharagpur.</p>
        </section>

        <section className={styles.middleSection}>
          <h2><strong>Useful Links:</strong></h2>
          <ul>
            {/* this are just for display as for now  */}
            <li><a href="/faq"><KeyboardArrowRightSharpIcon /> F.A.Q</a></li>
            <li><a href="/about"><KeyboardArrowRightSharpIcon /> Contact us</a></li>
            <li><a href="/notice"><KeyboardArrowRightSharpIcon /> About us</a></li>
            <li><a href="/notice"><KeyboardArrowRightSharpIcon /> Notice Boards</a></li>
          </ul>
        </section>

        <section className={styles.rightSection}>
          <h2>Subscribe to our Newsletter</h2>
          <form onSubmit={handleSubscribe}>
            <input type="email" placeholder="Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </main>
      <div className={styles.gradientLine}></div>


      © 2024 Students' International Relations Cell
    </footer>
  );
}
function handleSubscribe(e) {
  e.preventDefault();
 //  newsletter subscription ka logic likhna hai ya fir back end se extract karna hai 
}
