import { useState, useEffect } from 'react';
import SingleProductCard from '../components/products/SingleProductCard';

const ProductPage = () => {
  console.log('ProductPage ran');
  // state kad issaugoti products array (useState)
  const [productsArr, setProductsArr] = useState([]);
  // pasileidzia viena karta uzsikrovus komponentui

  const getProductsAndSetState = async () => {
    console.log('getProductsAndSetState ran');
    const respt = await fetch('/db/products.json');
    const dataInJs = await respt.json();
    // console.log('dataInJs ===', dataInJs);
    // const onlyDataWeNeed = dataInJs.map((pObj) => {
    //   return {
    //     id: pObj.id,
    //     title: pObj.title,
    //     price: pObj.price,
    //     image: pObj.image,
    //   };
    // });
    const onlyDataWeNeed = dataInJs.map(({ id, title, price, image }) => ({
      id,
      title,
      price,
      image,
    }));
    // console.log('onlyDataWeNeed  ===', onlyDataWeNeed);
    setProductsArr(onlyDataWeNeed);
  };

  useEffect(() => {
    console.log('useEffect ran');
    // pasileidzia viena karta uzsikrovus komponentui
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
          <SingleProductCard key={pObj.id} {...pObj} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
