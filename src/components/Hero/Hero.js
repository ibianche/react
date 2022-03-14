import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{props.titleText}</h2>
    <img className={styles.image} src={props.imageBackground}/>
  </header>
);

export default Hero;

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  imageBackground: PropTypes.string.isRequired,
};