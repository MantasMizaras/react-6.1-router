const SingleProductCard = (props) => {
  return (
    <div className='product-card'>
      <img className='product-image' src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.price}</p>
      <button>Read more</button>
    </div>
  );
};

export default SingleProductCard;
