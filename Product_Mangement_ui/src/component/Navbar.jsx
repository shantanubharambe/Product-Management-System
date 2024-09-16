import React from 'react'
import { NavLink ,Link} from 'react-router-dom';
import AddProduct from './AddProduct';

const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark font-weight-bold">
  <Link className="navbar-brand" to="/">Product Management System</Link>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link  className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/addProduct">Add Product</Link>
      </li>
    </ul>
  </div>
</nav>

   </>
  );
};

export default Navbar
