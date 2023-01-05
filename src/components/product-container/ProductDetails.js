import React, {useRef} from 'react'

const ProductDetails = ({saveAction, product}) => {
  const codeRef = useRef();
  const titleRef = useRef();
  const valueRef = useRef();

  const save = () => {
    let product = {};
    product.code = codeRef.current.value;
    product.title = titleRef.current.value;
    product.value = valueRef.current.value;
    console.log(product);
    saveAction(product);
  }


  return (
   <>
      <h2>{product?.code ? 'Update Product' : 'Create New Product'}</h2>
      <div>Code : <input  ref={codeRef}/></div>
      <div>Title : <input ref={titleRef}/></div>
      <div>Value : <input ref={valueRef}/></div>
      <button onClick={save}>Save</button>
   </>
  )
}

export default ProductDetails