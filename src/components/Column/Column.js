import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import List from '../List/List';
import {settings} from '../../data/dataStore';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';



class Column extends React.Component {
  state = {
    cards: this.props.columns || [],
  }

  static propTypes = {
    title: PropTypes.node.isRequired,
  }

  render() {
    return(
      <main className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>

        <div className={styles.cards}>
          {this.state.cards.map(({key, ...cardsProps}) => (
            <Card key={key} {...cardsProps} />
          ))}
        </div>

        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
      </main>
    )
  }

  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: []
          }
        ]
      }
    ));
  }


}

export default Column;