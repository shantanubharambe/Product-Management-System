import React, { useState } from 'react';
import productService from '../Service/product.service';
const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    status: ""   
  });
const[msg,setMsg]=useState(" ");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const ProductRegister = (e) => { 
    e.preventDefault();
    productService
      .saveProduct(product)
      .then((res) => {
        console.log("Product added successfully:", res.data);
        setMsg("product added successfully........!");
        setProduct({
          productName: "",
          description: "",
          price: "",
          status: ""
        });
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };
  
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
                     <div className="card-header bg-primary text-white">
             {
               msg &&
                  <h3 className="mb-0 text-center text-success">{msg}</h3>
             }
              <h2 className="mb-0 text-center  ">Add Product</h2>
            </div>
            <div className="card-body">
              <form onSubmit={ProductRegister}>
                <div className="form-group">
                  <label htmlFor="productName">Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    name="productName"
                    placeholder="Enter product name"
                    onChange={(e) => handleChange(e)}
                    value={product.productName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    placeholder="Enter product Description"
                    onChange={(e) => handleChange(e)}
                    value={product.description}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="price">Price</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">RS</span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="price"
                        name="price"
                        placeholder="Enter price"
                        onChange={(e) => handleChange(e)}
                        value={product.price}
                      />
                    </div>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="status">Status</label>
                    <input
                      type="text"
                      className="form-control"
                      id="status"
                      name="status"
                      placeholder="Enter status"
                      onChange={(e) => handleChange(e)}
                     value={product.status}
                  
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary m-4">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
