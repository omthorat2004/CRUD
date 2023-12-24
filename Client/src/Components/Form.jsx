import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { editContact, postContact } from '../Redux/contactSlice';
const Form = ({id,name,lastName,contact}) => {
  const [formData,setFormData] = useState({
    name:name? name:'',
    lastName:lastName?lastName:'',
    contact:contact?contact:''
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange = (e)=>{
      setFormData((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
      }))
  }
  const handleAddClick = ()=>{
        if(!formData.name||!formData.lastName||!formData.contact){
          Swal.fire({
            title: 'Error',
            text: 'Please Complete All Field',
            icon: 'error',
            confirmButtonText: 'Ok'
          })

        }
        else{
          Swal.fire({
            title: 'Success',
            text: 'Contact Added',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        dispatch(postContact(formData))
        navigate('/')
        }
  }
 const handleEditClick = ()=>{
  Swal.fire({
    title: 'Success',
    text: 'Contact Edited',
    icon: 'success',
    confirmButtonText: 'Ok'
  })
      dispatch(editContact({...formData,id:id}))
      navigate('/')
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  return (
    <div>
      <div class="container py-5 w">
    <h1>{name? "Edit Contact":"Add Contact"}</h1>

          <form class="p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleSubmit}>

           

            <div class="form-floating mb-3">

              <input type="text" id="form4Example1" class="form-control" name='name'  onChange={handleChange} value={formData.name} />

              <label class="form-label" for="form4Example1">Name</label>

            </div>



            

            <div class="form-floating mb-3">

              <input type="text" id="form4Example2" class="form-control" name='lastName' onChange={handleChange} value={formData.lastName}  />

              <label class="form-label" for="form4Example2">Last Name</label>

            </div>



           

            <div class="form-floating mb-3">

            <input type="text" id="form4Example3" class="form-control" name='contact' onChange={handleChange} value={formData.contact}/>

              <label class="form-label" for="form4Example3">Contact Number</label>

            </div>



           

            



          

            {name?<button type="submit" className="w-100 btn btn-lg btn-dark" onClick={handleEditClick} >Edit</button>:<button type="submit" className="w-100 btn btn-lg btn-dark" onClick={handleAddClick}>Add</button>}

          </form>

   
</div>
    </div>
  );
}

export default Form;
