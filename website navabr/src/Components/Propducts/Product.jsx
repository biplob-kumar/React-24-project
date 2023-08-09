import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from "react-router-dom";
import { getProductData } from '../../Data/ProductData';
import ProductFilter from './ProductFilter';
const Product = () => {

  const [products, setProducts] = useState(getProductData)
  const [prams] = useSearchParams();
  const Min_price = prams.get('Min-price') == null ? "" : prams.get('Min-price');
  const max_price = prams.get('Max-price') == null ? "" : prams.get('Max-price');
  const search = prams.get('search') == null ? "" : prams.get('Min-price');

  useEffect(() => {

  }, [])
  const filterProducts = () => {

}



  }





  return (
    <div className='product-area-full'>
      <h2>Products</h2>
      <br />
      <ProductFilter />
      <div className='product-area'>
        {
          products.map((products, index) => (
            <div key={index} className='product-single'>
              <p>
                <img src={products.image} style={{ width: 'auto', height: '100' }} alt="" />
              </p>
              <h3>{products.title} </h3>
              <h3>{products.price} BDT </h3>
              <p>
                <Link to={`/products/${products.id}`} className="product-button">
                  Products Details
                </Link>
              </p>

            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Product