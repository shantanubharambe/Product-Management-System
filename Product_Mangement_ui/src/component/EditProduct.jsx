import React, { useEffect, useState } from 'react';
import productService from '../Service/product.service';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    id: "",
    productName: "",
    description: "",
    price: "",
    status: ""
  });
  const navigate=useNavigate();
  const [msg, setMsg] = useState("");
  useEffect(() => {
    productService.getProductById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const productUpdate = (e) => {
    e.preventDefault();
    productService.saveProduct(product)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-header bg-primary text-white">
              {msg && <h3 className="mb-0 text-center text-success">{msg}</h3>}
              <h2 className="mb-0 text-center">Update Product Details...</h2>
            </div>
            <div className="card-body">
              <form onSubmit={productUpdate}>
                <div className="form-group">
                  <label htmlFor="productName">Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    name="productName"
                    placeholder="Enter product name"
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                        onChange={handleChange}
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
                      onChange={handleChange}
                      value={product.status}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
