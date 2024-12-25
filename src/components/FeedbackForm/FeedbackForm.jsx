import React from 'react';
import "./FeedbackForm.css";

const FeedbackForm = (props) => {

    const handleFormSubmit = () => {
        props.onSubmit(); // Call the onSubmit function from props
      };

    return (
        <div className='feedbackForm' style={{ display: props.displayForm ? "block" : "none" }}>
            <p className='feedbackname'>FeedbackForm</p>
            
            <button className='feedbackformsubmitbutton' onClick={handleFormSubmit}>Submit Feedback</button>
        </div>
    );
}





export default FeedbackForm;