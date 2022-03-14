import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import List from '../List/List';



class Column extends React.Component {
  static propTypes = {
    titleColumns: PropTypes.node.isRequired,
  }

  render() {
    return(
      <main className={styles.component}>
        <h3 className={styles.title}>{this.props.titleColumns}</h3>
      </main>
    )
  }
}

export default Column;