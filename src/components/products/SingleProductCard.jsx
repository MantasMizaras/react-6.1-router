import { Link } from 'react-router-dom';

const SingleProductCard = (props) => {
  return (
    <div className='product-card'>
      <img className='product-image' src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.price}</p>
      <Link to={`/products/${props.id}`}>
        <button>Read more</button>
      </Link>
    </div>
  );
};

export default SingleProductCard;
