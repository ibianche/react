import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/Column';
import {settings} from '../../data/dataStore';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.node.isRequired,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    return (
      <section className={styles.component}>
      <h2 className={styles.subtitle}><Hero titleText={this.props.title} imageBackground={this.props.image}/></h2>
        <div className={styles.description}>
          {this.props.description}
        </div>
        <div className={styles.columns}>
          <Column titleColumns={'Animals'} />
          <Column titleColumns={'Plants'} />
          <Column titleColumns={'Minerals'} />
        </div>
    </section>
  )
  }
}

export default List;