import { Link } from 'react-router-dom';

const CardCart = (props) => {
  return (
    <div className='product-card'>
      <img className='product-image' src={props.image} alt={props.title} />
      <h3>{props.item}</h3>
      <p>{props.price}</p>
      {/* <Link to={`/products/${props.id}`}>
        <button>Read more</button>
      </Link> */}
    </div>
  );
};

export default CardCart;
