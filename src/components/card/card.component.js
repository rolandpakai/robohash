import './card.styles.css';

const Card = ({ data: { id, name, email } }) => {
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