import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestion(props) {
  return(
    <div>
      <p>Have you gone through all the steps on the Learn How to Program debugging lession?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestion.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestion;
