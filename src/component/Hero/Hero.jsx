import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Komal</h1>
                <p className={styles.description}>
                    I am 22 years old and I am software developer who loves to learn new technologies. I started with JavaScript and Mastered it then i started web development
                </p>
                <a href="mailto:komal942003@gmail.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            { <img
                src={getImageUrl("hero/myImg.jpg")}
                alt="Hero image of me"
                className={styles.heroImg}
            /> }
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};


export default Hero;