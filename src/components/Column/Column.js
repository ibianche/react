import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Card from '../Card/Card';
// import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';



class Column extends React.Component {
  state = {
    cards: this.props.columns || [],
  };

  static propTypes = {
    title: PropTypes.node.isRequired,
    columns:  PropTypes.node,
    icon: PropTypes.node.isRequired,
  };

  render() {
    const {title, icon, cards} = this.props;
    return(
      <main className={styles.component}>
        <h3 className={styles.title}>{this.props.title}
          <span className={styles.icon}>
            <Icon name={this.props.icon}/>
          </span>
        </h3>

        {/*<div className={styles.cards}>*/}
          {/*{this.state.cards.map(({key, ...cardsProps}) => (*/}
            {/*<Card key={key} {...cardsProps} />*/}
          {/*))}*/}
        {/*</div>*/}
        <div className={styles.cards}>
          {cards.map(cardsProps => (
            <Card key={cardsProps.id} {...cardsProps} />
          ))}
        </div>

        {/*<div className={styles.creator}>*/}
          {/*<Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>*/}
        {/*</div>*/}
      </main>
    );
  }



}

export default Column;