import React, { useState } from "react";
import ProductDetails from "./ProductDetails";

const initailData = [
  { code: 1, title: "AAAA", value: 5 },
  { code: 2, title: "BBBB", value: 15 },
  { code: 3, title: "CCCC", value: 20 },
  { code: 4, title: "DDDD", value: 10 },
];

export default function ProductList() {
  const [products, setProducts] = useState(initailData);
  const [currentRow, setCurrentRow] = useState({});

  const generateTableRow = (items) => {
    let rows = [];
    for (let i = 0; i < items.length; i++) {
      const product = items[i];
      const item = (
        <tr
          key={product.code}
          style={{
            backgroundColor: currentRow?.code == product.code ? "yellow" : null,
          }}
        >
          <td>{product.code}</td>
          <td>{product.title}</td>
          <td>{product.value}</td>
          <td>
            {currentRow?.code == product.code ? (
              <button onClick={() => setCurrentRow({})}>Cancel</button>
            ) : (
              <button onClick={() => setCurrentRow(product)}>Edit</button>
            )}

            <button onClick={() => deleteRow(product.code)}>Delete</button>
          </td>
        </tr>
      );
      rows.push(item);
    }
    return rows;
  };

  const deleteRow = (code) => {
    if (!window.confirm("are you sure delete row ?")) return;

    // alert(code);
    const temp = products.filter((item) => item.code != code);
    setProducts(temp);

    // if (window.confirm('are you sure delete row ?')) {
    //     // alert(code);
    //     const temp = products.filter(item => item.code != code);
    //     setProducts(temp);
    // }
  };

  const save = (product) => {
    setProducts([...products, product]);
  };

  return (
    <>
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Title</th>
            <th>Value</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            generateTableRow(products)
            // products.map((product,index) =>
            //    <tr key={product.code}>
            //         <td>{product.code}</td>
            //         <td>{product.title}</td>
            //         <td>{product.value}</td>
            //         <td>
            //             <button>Edit</button>
            //             <button >Delete</button>
            //         </td>
            //    </tr>
            // )
          }
        </tbody>
        <tfoot></tfoot>
      </table>
      <ProductDetails product={currentRow} saveAction={save} />
    </>
  );
}
