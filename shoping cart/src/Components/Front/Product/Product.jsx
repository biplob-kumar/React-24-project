import React from 'react'
import  product  from "./Product.css";

const Product = ({productItems}) => {
  return (
    <div className='produccts'>
        
        {
            productItems.map((productItems)=>(
                <div className='card'> 

                    <div>
                        <img className='product-img ' src= {productItems.imge} alt= {productItems.name} />
                    </div>

                    <div>
                        <h3 className='product-name'>
                            {productItems.name}
                        </h3>
                    </div>
                    <div className='product-price'>
                         ${productItems.price}
                    </div>
                    <div>
                        <button className='product-add-button'> Add to cart </button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Product