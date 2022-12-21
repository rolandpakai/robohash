import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {

  render = () => {
    console.log('render - CardList');

    const { set } = this.props;

    return (
      <div className="card-list">
          {
          set.map((element) => {
            return (
              <Card key={element.id} data={element}/>
            )
          })
        }
      </div>
    )
  }
}

export default CardList;