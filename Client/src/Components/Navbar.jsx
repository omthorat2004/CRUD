import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchFilter } from '../Redux/contactSlice';
const Navbar = () => {
  const dispatch = useDispatch()
  let search;
  const handleChange = (e)=>{
    search = e.target.value
    dispatch(searchFilter({search:search}))
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Ninth navbar example">
    <div className="container-xl">
      <a className="navbar-brand" href="#">CRUD</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample07XL">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to='/form' >Add</Link>
          </li>
          
         
        </ul>
        <form role="search">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" name='search' onChange={handleChange}/>
        </form>
      </div>
    </div>
  </nav>
    </div>
  );
}

export default Navbar;
