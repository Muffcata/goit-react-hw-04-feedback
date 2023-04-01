import React from 'react';
import { PropTypes } from 'prop-types';
import style from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, handleFeedback }) => {
  return (
    <div className={style.wrapper_btn}>
      <button className={style.button} onClick={() => handleFeedback(options)}>
        {options}
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  handleFeedback: PropTypes.func,
  options: PropTypes.string,
  onClick: PropTypes.func,
};
