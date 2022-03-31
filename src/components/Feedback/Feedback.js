import React from "react";
import PropTypes from 'prop-types';
import Statistics from "../Statistics";
import FeedbackOptions from "../FeedbackOptions";
import Section from "components/Section";
import Notification from "components/Notification";

class Feedback extends React.Component{

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
 
     
    leaveFeedback = (option) => {
        this.setState(prevState =>
        ({[option]: prevState[option] + 1,}));
    }

    render() {

        function countTotalFeedback(state) {         
            const total = state.good + state.neutral + state.bad;
            return total;
        };
        function countPositiveFeedbackPercentage(state) {
            const total = state.good + state.neutral + state.bad;
            const percentage = Math.round(state.good / total * 100)||0;
            return percentage;
        }
       
        const arrayState = Object.keys(this.state);
        
        return (
            
<Section title="Please leave feedback">
                
                <FeedbackOptions options={arrayState} onleaveFeedback={this.leaveFeedback} />
                {(this.state.good || this.state.neutral || this.state.bad) ? (
                    <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={countTotalFeedback(this.state)}
                        positivePercentage={countPositiveFeedbackPercentage(this.state)} />
                ) : (<Notification message="There is no feedback"></Notification>)} 
          
</Section>
        
        )
    };
};

Feedback.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,    
   };

export default Feedback;