import React from "react";
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';


function FeedbackOptions({options, onleaveFeedback}) {
    return (
        <>
            {options.map(option => (
            <button type="button" onClick={()=>onleaveFeedback(option)} className={styles.button}>{option}</button>
        ))}      
            
        </>
        
    )
};

FeedbackOptions.propTypes = {
    options:PropTypes.arrayOf(PropTypes.shape),
   };

export default FeedbackOptions;