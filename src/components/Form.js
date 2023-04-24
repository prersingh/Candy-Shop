import React, { useRef } from 'react'


const Form = (props) => {

    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const priceRef = useRef('')

    const submitHandler = (event) => {
        event.preventDefault()
        

        const data ={
            inputName:nameRef.current.value,
            inputDescription:descriptionRef.current.value,
            inputPrice:priceRef.current.value,
            inputSize:document.getElementById('select').value,
        }

            


        

        props.addProduct(data)

        event.target.reset()

    }

  return (
    <>
      <form className='form' onSubmit={submitHandler}>

        <label htmlFor="brandname"> Candy Name : </label>
        <input type="text" ref={nameRef} />
        <label htmlFor="brandname"> Description : </label>
        <input type="text" ref={descriptionRef} />
        <label htmlFor="brandname"> Price : </label>
        <input type="number" ref={priceRef} />
        <label htmlFor='size'>Number of Candies </label>
        <select name='size' id='select'>
            <option value='Small'>BUY ONE</option>
            <option value='Medium'>BUY TWO</option>
            <option value='Large'>BUY THREE</option>
        </select>
        
        <button>Add Product</button>

      </form>
    </>
  )
}

export default Form;