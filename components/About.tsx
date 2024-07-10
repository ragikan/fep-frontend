import React from "react";
import styles from "./About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import {
  faRobot,
  faSquareRootVariable,
} from "@fortawesome/free-solid-svg-icons";
import { faGears } from "@fortawesome/free-solid-svg-icons/faGears";
import { faFlask } from "@fortawesome/free-solid-svg-icons/faFlask";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.cover}>
      <h2 className={styles.sectionHeading}>
        Make your choice and take off your career
      </h2>
      <div className={styles.sectionContent}>
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
      </div>

      <div className={styles.section}>
        <div className={styles.sliderContainer}>
          <div className={styles.cardSlider}>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src="/images/20230616_085948.jpg"
                  height={500}
                  width={400}
                  alt="efds"
                />
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
                <Image
                  src="/images/20230626_180133.jpg"
                  height={500}
                  width={400}
                  alt="efds"
                />
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
              <Image
                src="/images/20230626_180133.jpg"
                height={500}
                width={400}
                alt="efds"
              />
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

      <h2 className={styles.sectionHeading}>Skills you will learn</h2>
      <div className={styles.bodi}>
        <div className={styles.productContainer}>
          <div className={styles.productCard}>
            <FontAwesomeIcon icon={faRobot} className={styles.productImage} />
            <h3 className={styles.skills}> Skills </h3>
            <p className={styles.productDescription}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              animi fugit rerum architecto nihil maiores distinctio explicabo
              earum harum. Dolores esse, deserunt eum quas nisi molestiae optio
              ex voluptate blanditiis?
            </p>
          </div>

          <div className={styles.productCard}>
            <FontAwesomeIcon icon={faRobot} className={styles.productImage} />
            <h3 className={styles.skills}> Skills </h3>
            <p className={styles.productDescription}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              animi fugit rerum architecto nihil maiores distinctio explicabo
              earum harum. Dolores esse, deserunt eum quas nisi molestiae optio
              ex voluptate blanditiis?
            </p>
          </div>

          <div className={styles.productCard}>
            <FontAwesomeIcon icon={faRobot} className={styles.productImage} />
            <h3 className={styles.skills}> Skills </h3>
            <p className={styles.productDescription}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              animi fugit rerum architecto nihil maiores distinctio explicabo
              earum harum. Dolores esse, deserunt eum quas nisi molestiae optio
              ex voluptate blanditiis?
            </p>
          </div>

          <div className={styles.productCard}>
            <FontAwesomeIcon icon={faRobot} className={styles.productImage} />
            <h3 className={styles.skills}> Skills </h3>
            <p className={styles.productDescription}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              animi fugit rerum architecto nihil maiores distinctio explicabo
              earum harum. Dolores esse, deserunt eum quas nisi molestiae optio
              ex voluptate blanditiis?
            </p>
          </div>
          <div className={styles.productCard}>
            <FontAwesomeIcon icon={faRobot} className={styles.productImage} />
            <h3 className={styles.skills}> Skills </h3>
            <p className={styles.productDescription}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              animi fugit rerum architecto nihil maiores distinctio explicabo
              earum harum. Dolores esse, deserunt eum quas nisi molestiae optio
              ex voluptate blanditiis?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
