import { useState, useEffect } from 'react';
import CardCart from '../components/products/CardCart';
import SingleProductCard from '../components/products/SingleProductCard';
/* // sukurti CartPage
// Cart page atvaizduoti prekias is cart dalies json
// virs produktu padaryti kategoriju filtra
// singleProductPage prideti Buy mygtuka jis siuncia prekes duomenis su fetch */

const CartPage = () => {
  console.log('CartPage ran');
  const [productsArr, setProductsArr] = useState([]);

  const getProductsAndSetState = async () => {
    const resp = await fetch('/db/db.json');
    const dataInJs = await resp.json();
    const neededData = dataInJs['cart'];

    console.log('neededData ===', neededData);

    const onlyDataWeNeed = neededData.map(({ id, item, price }) => ({
      id,
      item,
      price,
    }));
    // console.log('onlyDataWeNeed  ===', onlyDataWeNeed);
    setProductsArr(onlyDataWeNeed);
  };

  useEffect(() => {
    getProductsAndSetState();
  }, []);

  return (
    <div>
      <h1>Our products</h1>
      <div className='product-grid'>
        {/* map per productsArr id make  <SingleProductCard /> */}
        {productsArr.map((pObj) => (
          // <SingleProductCard
          //   key={pObj.id}
          //   id={pObj.id}
          //   title={pObj.title}
          //   image={pObj.image}
          //   price={pObj.price}
          // />
          //   <SingleProductCard key={pObj.id} {...pObj} />
          <CardCart key={pObj.id} {...pObj} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
