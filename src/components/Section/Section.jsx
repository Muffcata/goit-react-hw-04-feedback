import React from 'react';
import { PropTypes } from 'prop-types';
import style from './Section.module.css';

export const Section = ({ title, subtitle, children }) => {
  return (
    <div className={style.section}>
      <h1 className={style.title}>{title}</h1>
      <h2>{subtitle}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};
