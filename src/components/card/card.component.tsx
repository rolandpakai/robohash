import { Robo } from '../../App';
import './card.styles.css';

type CardProps = {
  data: Robo
}

const Card = ({ data }: CardProps) => {
  const { id, name, email } = data;

  return (
    <div className="card-container">
      <img 
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set3`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;