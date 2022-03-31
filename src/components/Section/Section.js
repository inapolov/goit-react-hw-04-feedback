import React from "react";
import PropTypes from 'prop-types';
import styles from "./Section.module.css";


function Section({title,children}) {
    return (
        <section className={styles.container}>
            <h2>{title }</h2>
                {children}
        </section>
    )
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired, 
   };

export default Section;