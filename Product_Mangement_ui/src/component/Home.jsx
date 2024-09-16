import React, { useEffect, useState } from 'react';
import productService from '../Service/product.service';
import { Link } from 'react-router-dom';

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService.getAllProduct()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (id) => {
    productService.deleteProduct(id)
      .then(() => {
        setMsg("Product deleted successfully");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
     
     <div className="container text-center mt-5" >
     <h2 className="mb-0 text-center bg-primary font-weight-bold">List Product</h2>
      {msg && <h3 className="mb-0 text-center text-success">{msg}</h3>}
      <table className="table" align='center'>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((p, index) => (
            <tr key={p.id}>
              <td>{(index) + 1}</td>
              <td>{p.productName}</td>
              <td>{p.description}</td>
              <td>{p.price}</td>
              <td>{p.status}</td>
              <td>
                <button className="btn btn-danger m-2" onClick={() => deleteProduct(p.id)}>Delete</button>
                <Link to={'editProduct/'+p.id} className="btn btn-primary mr-2">Update</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default Home;
