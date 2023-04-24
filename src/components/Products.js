import React from 'react'

const Products = ({products,addToCart,deleteCart}) => {

    const addToCartHandler = () => {
        addToCart();
    }
    const deleteToCartHandler = (product) => {
        deleteCart(product);
    }

    



  return (
    <>
      <div className='products'>

        {
            products.map((product,index) => (

                <div key={index}>

                    <h3>Candies Name: {product.inputName} || Description : {product.inputDescription} || Price : {product.inputPrice} || Number of Candies: {product.inputSize}
                    <button onClick={() => addToCartHandler(product)}>Add to Cart</button>
                    <button onClick={() => deleteToCartHandler(product)}>Delete</button>
</h3>
                    
        
                </div>

            ))
        }
        

      </div>
    </>
  )
}

export default Products;