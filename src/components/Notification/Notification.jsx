import React from 'react';
import { PropTypes } from 'prop-types';
import style from '../Notification/Notification.module.css';

export const Notification = ({ message }) => {
  return (
    <div>
      <h2 className={style.message}>{message}</h2>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
