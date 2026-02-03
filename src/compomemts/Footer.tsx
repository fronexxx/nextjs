'use client'

import styles from "@/app/page.module.css";
import {useEffect} from "react";

export const Footer = () => {
    useEffect(() => {
        console.log(localStorage)
    }, []);
    return (
        <div className={styles.page}>
        </div>
    );
};
