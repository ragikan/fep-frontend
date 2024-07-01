import React from "react";
import styles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import {
  faRobot,
  faSquareRootVariable,
} from "@fortawesome/free-solid-svg-icons";
import { faGears } from "@fortawesome/free-solid-svg-icons/faGears";
import { faFlask } from "@fortawesome/free-solid-svg-icons/faFlask";

export default function Home() {
  return (
    <body>
      <div className={styles.bod1}>
        <nav className={styles.navsty}>
          <input type="checkbox" id={styles.check} />
          <label htmlFor="check" className={styles.checkbtn}>
            <FontAwesomeIcon icon={faBars} />
          </label>
          <label className={styles.logo}>FTP</label>
          <ul className={styles.ulu}>
            <li className={styles.lii}>
              <a href="#" className={styles.liink}>
                Home
              </a>
            </li>
            <li className={styles.lii}>
              <a href="#" className={styles.liink}>
                About Us
              </a>
            </li>
            <li className={styles.lii}>
              <a href="#" className={styles.liink}>
                F.A.Q
              </a>
            </li>
            <li className={styles.lii}>
              <a href="#" className={styles.liink}>
                Team
              </a>
            </li>
            <li className={styles.lii}>
              <a href="#" className={styles.liink}>
                Testimonials
              </a>
            </li>
            <li className={styles.lii}>
              <a href="#" className={styles.liink}>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.bod}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.centeredHeading}>Foreign Training Progam</h1>
            <p className={styles.tagline}>Your Gateway to Global Excellence</p>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              perspiciatis sed veritatis maxime quas, deleniti reprehenderit
              porro voluptatibus quis ut tenetur, vero ipsa dolore rem. Et
              tempore officia inventore rerum.
            </p>
            <a href="#" className={styles.applyButton}>
              Apply Now
            </a>
          </div>
        </div>
      </div>

      <h2 className={styles.sectionHeading}>
        Make your choice and take off your career
      </h2>
      <div className={styles.productGrid}>
        <div className={styles.productBox}>
          <div className={styles.iconBox}>
            <FontAwesomeIcon icon={faFlask} className={styles.prodicon} />
            <h3>Product 1</h3>
            <p>Description of Product 1</p>
          </div>
        </div>
        <div className={styles.productBox}>
          <div className={styles.iconBox}>
            <FontAwesomeIcon icon={faGears} className={styles.prodicon} />
            <h3>Product 2</h3>
            <p>Description of Product 2</p>
          </div>
        </div>
        <div className={styles.productBox}>
          <div className={styles.iconBox}>
            <FontAwesomeIcon icon={faRobot} className={styles.prodicon} />
            <h3>Product 3</h3>
            <p>Description of Product 3</p>
          </div>
        </div>
        <div className={styles.productBox}>
          <div className={styles.iconBox}>
            <FontAwesomeIcon
              icon={faSquareRootVariable}
              className={styles.prodicon}
            />
            <h3>Product 4</h3>
            <p>Description of Product 4</p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sliderContainer}>
          <div className={styles.cardSlider}>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <img src="image1.jpg" alt="Image 1" className={styles.images} />
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.CardTitle}>lol</h2>
                <p className={styles.cardDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam interdum ligula vel turpis posuere, sed mattis neque
                  accumsan.
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardImage}>
                <img src="image2.jpg" alt="Image 2" className={styles.images} />
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.CardTitle}>Card Title 2</h2>
                <p className={styles.cardDescription}>
                  Pellentesque euismod ipsum a ante pellentesque, eget eleifend
                  mi tincidunt. Sed dignissim ipsum a ante pellentesque.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardImage}>
              <img src="image3.jpg" alt="Image 3" className={styles.images} />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.CardTitle}>Card Title 3</h2>
              <p className={styles.cardDescription}>
                Fusce at elit aliquet, commodo mauris in, luctus nisi. Ut eget
                libero at lacus tempus condimentum vitae in dui.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.circleCirc}>
        <div className={styles.circleSection}>
          <div className={styles.circleGrid}>
            <div className={styles.cicleFlex}>
              <div className={styles.circleItem}>
                <img
                  src="logo1.png"
                  alt="Logo 1"
                  className={styles.circleLogo}
                />
              </div>
              <p className={styles.circleText}>Description 1</p>
            </div>
            <div className={styles.cicleFlex}>
              <div className={styles.circleItem}>
                <img
                  src="logo1.png"
                  alt="Logo 1"
                  className={styles.circleLogo}
                />
              </div>
              <p className={styles.circleText}>Description 1</p>
            </div>
            <div className={styles.cicleFlex}>
              <div className={styles.circleItem}>
                <img
                  src="logo1.png"
                  alt="Logo 1"
                  className={styles.circleLogo}
                />
              </div>
              <p className={styles.circleText}>Description 1</p>
            </div>
            <div className={styles.cicleFlex}>
              <div className={styles.circleItem}>
                <img
                  src="logo1.png"
                  alt="Logo 1"
                  className={styles.circleLogo}
                />
              </div>
              <p className={styles.circleText}>Description 1</p>
            </div>
            <div className={styles.cicleFlex}>
              <div className={styles.circleItem}>
                <img
                  src="logo1.png"
                  alt="Logo 1"
                  className={styles.circleLogo}
                />
              </div>
              <p className={styles.circleText}>Description 1</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.teamSection}>
        <h2 className={styles.teamTitle}>Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamBox}>
            <img
              src="person1.jpg"
              alt="Person 1"
              className={styles.teamImage}
            />
            <div className={styles.overlay}>
              <p className={styles.teamName}>Person 1</p>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon}>
                  FB
                </a>
                <a href="#" className={styles.socialIcon}>
                  IG
                </a>
                <a href="#" className={styles.socialIcon}>
                  TW
                </a>
              </div>
            </div>
          </div>
          <div className={styles.teamBox}>
            <img
              src="person1.jpg"
              alt="Person 2"
              className={styles.teamImage}
            />
            <div className={styles.overlay}>
              <p className={styles.teamName}>Person 2</p>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon}>
                  FB
                </a>
                <a href="#" className={styles.socialIcon}>
                  IG
                </a>
                <a href="#" className={styles.socialIcon}>
                  TW
                </a>
              </div>
            </div>
          </div>
          <div className={styles.teamBox}>
            <img
              src="person1.jpg"
              alt="Person 1"
              className={styles.teamImage}
            />
            <div className={styles.overlay}>
              <p className={styles.teamName}>Person 3</p>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon}>
                  FB
                </a>
                <a href="#" className={styles.socialIcon}>
                  IG
                </a>
                <a href="#" className={styles.socialIcon}>
                  TW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contactSection}>
        <h1 className={styles.contactTitle}>Contact Us</h1>
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject" className={styles.formLabel}>
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.formTextarea}
              required
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <button type="submit" className={styles.formButton}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </body>
  );
}
