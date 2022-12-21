import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ set }) => {
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

export default CardList;