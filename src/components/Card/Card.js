import React from 'react';
import styles from './Card.scss';
import {listData, settings} from '../../data/dataStore';
import List from "../List/List";

class Card extends React.Component {
  render() {
    return(
      <section className={styles.component}>
        <h2 className={styles.title}>{listData.columns.cards}</h2>
      </section>

    )
  }
}
export default Card;