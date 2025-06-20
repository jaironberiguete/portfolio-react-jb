import React, {useState} from 'react';
import styles from "./Navbar.module.css"
import {getImageUrl} from "../../utils.js"

export const Navbar = () => {
    return <nav className={styles.navbar}>
        <a  className={styles.title} href="/"> Jairon</a>
        <div  className={styles.menu}>
            <ul  className={styles.menuItems}>
                <li>
                    <img className={styles.menuBtn} src={getImageUrl("nav/closeIcon.png")}/>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projectds">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>

            </ul>
        </div>
    </nav>
};