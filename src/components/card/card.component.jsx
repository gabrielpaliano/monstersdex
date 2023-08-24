import "./card.styles.css";

const Card = ({ monster }) => {
  const {id, name, email} = monster;

  <div className="card-container" key={id}>
  <img
    alt={`monster ${name}`}
    src={`https://robohash.org/${id}?set=set2&size=180x180`}
  />
  <h2>{name}</h2>
  <p>{`E-mail: ${email}`}</p>
</div>
}

export default Card;