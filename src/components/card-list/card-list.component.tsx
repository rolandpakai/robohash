import { Robo } from '../../App';
import Card from '../card/card.component';
import './card-list.styles.css';

type CardListProps = {
  set: Robo[]
}
 
const CardList = ({ set }: CardListProps) => {
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