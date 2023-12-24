import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { deleteContact, setEditContact } from '../Redux/contactSlice';
const Row = ({id,name,lastName,contact}) => {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const handleEditClick = ()=>{
   dispatch(setEditContact({id:id,name:name,lastName:lastName,contact:contact}))
   navigate('/edit')
  }
  const handleDeleteClick = ()=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        dispatch(deleteContact({id:id}))
      }
    });
    
  }
  return (
    <tr>
    <th scope="row">{id}</th>
    <td>{name}</td>
    <td>{lastName}</td>
    <td>{contact}</td>
    <td><button className="btn btn-outline-primary" onClick={()=> {handleEditClick()}}>Edit</button></td>
    <td><button className="btn btn-danger" onClick={()=> {handleDeleteClick()}}>Delete</button></td>
  </tr>
  );
}

export default Row;
