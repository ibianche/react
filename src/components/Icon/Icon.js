import React from 'react';
import {listData} from "../../data/dataStore";
import PropTypes from "prop-types";

const Icon = props => (<i className={`fas fa-${props.name}`}></i>);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon;
