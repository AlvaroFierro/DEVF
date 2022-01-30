import CardImage from "../img/card-img.png";
export default function Card(props) {
  console.log(props);
  return (
    <div>
      <img src={props.img} alt="cardImage" />
      <div>
        <span>{props.rating}</span>
        <span>{props.reviewCounter}</span>
        <span>{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>from ${props.price} / person</p>
    </div>
  );
}
