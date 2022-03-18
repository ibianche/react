import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import List from '../List/List';



class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
  }

  render() {
    return(
      <main className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
      </main>
    )
  }
}

export default Column;