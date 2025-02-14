import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:komal942003@gmail.com">komal942003@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/linkedinIcon.png")}
                        alt="LinkedIn "
                    />
                    <a href="https://www.linkedin.com/in/komal-k-4a0878348/">Linkedin</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                    <a href="https://github.com/Komalch06">Github</a>
                </li>
                
            </ul>
        </footer>
    );
};

export default Contact;