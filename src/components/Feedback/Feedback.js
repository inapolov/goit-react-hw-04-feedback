import {useState} from "react";
import PropTypes from 'prop-types';
import Statistics from "../Statistics";
import FeedbackOptions from "../FeedbackOptions";
import Section from "components/Section";
import Notification from "components/Notification";

export default function Feedback(){

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    
    const state = { good, neutral, bad };
 
     
    const leaveFeedback = option => {
        switch (option) {
            case 'good':
                setGood(state => state + 1);
                break;
            case 'neutral':
                setNeutral(state => state + 1);
                break;
            case 'bad':
                setBad(state => state + 1);
                break;

            default:
                return;
        }
    };

    
        function countTotalFeedback() {         
            const total = good + neutral + bad;
            return total;
        };
        function countPositiveFeedbackPercentage() {
            const total = good + neutral + bad;
            const percentage = Math.round(good / total * 100)||0;
            return percentage;
        };
       
        const arrayState = Object.keys(state);
        
        return (
            
<Section title="Please leave feedback">
                
                <FeedbackOptions options={arrayState} onleaveFeedback={leaveFeedback} />
                {(good || neutral || bad) ? (
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback()}
                        positivePercentage={countPositiveFeedbackPercentage()} />
                ) : (<Notification message="There is no feedback"></Notification>)} 
          
</Section>
        
        )
    
};

Feedback.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,    
   };

