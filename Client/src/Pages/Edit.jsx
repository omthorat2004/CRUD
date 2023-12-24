import React from 'react';
import { useSelector } from 'react-redux';
import Form from '../Components/Form';
import { editContactSelector } from '../Redux/contactSlice';
const Edit = () => {
  const data  = useSelector(editContactSelector)
  return (
    <div>
      <Form  name={data.name} lastName={data.lastName} id={data.id} contact={data.contact} />
    </div>
  );
}

export default Edit;
