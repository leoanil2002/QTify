import React from "react";
import Button from "../FeedbackButton/FeedbackButton";
import Search from "../Searchbar/Searchbar";
import styles from './Navbar.module.css'
import LogoImage from "../../Images/logo.png"


export default function Navbar(){
    return(
        <>
            <nav className={styles.navbar}>
                <div className={styles.logoDiv}><img  src={LogoImage} alt="logo" width={67}/></div>
                 <Search search={"Search a song of your choice"}/>
                <Button children="Give Feedback"/>
            </nav>
        </>
    )
}