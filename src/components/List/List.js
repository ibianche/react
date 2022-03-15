import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/Column';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    image: PropTypes.node.isRequired,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
      <h2 className={styles.subtitle}><Hero titleText={this.props.title} imageBackground={this.props.image}/></h2>
        <div className={styles.description}>
          {this.props.children}
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