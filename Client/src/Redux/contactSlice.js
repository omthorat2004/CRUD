import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const getContacts = createAsyncThunk("getContacts",async()=>{
    const response = await fetch("https://crud-api-mauve.vercel.app//")
    const data = await response.json()
    return data.users
})


export const postContact = createAsyncThunk("addContact",async(body)=>{
    const response = await fetch("https://crud-api-mauve.vercel.app//addContact",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
    })
    const data = await response.json()
    return data
})

export const editContact = createAsyncThunk("editContact",async(body)=>{
    const response = await fetch(`https://crud-api-mauve.vercel.app//updateContact/${body.id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
    })
})

export const deleteContact = createAsyncThunk("deleteContact",async(body)=>{
    const response = await fetch(`https://crud-api-mauve.vercel.app//${body.id}`,
    {
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },
    })
    const data = await response.json()
    return data
})

const contactSlice = createSlice({
    name:'Contacts',
    initialState:{
        contacts:[],
        filterContacts:[],
        editContact:{},
        filtered:false
    },
    reducers:{
    setEditContact:(state,action)=>{
        console.log(action.payload)
        state.editContact = action.payload
        console.log(state.filtered)
    },
    searchFilter:(state,action)=>{
        state.filtered=true
        console.log(action.payload.search)
        if(action.payload.search==''){
            state.filtered=false
        }
        state.filterContacts = state.contacts.filter((obj)=> obj.name.includes(action.payload.search)||obj.lastName.includes(action.payload.search)||obj.contact.includes(action.payload.search))
}
},
extraReducers:(builder)=>{
    builder.addCase(getContacts.fulfilled, (state, action) =>{
        state.filtered=false
        state.contacts = action.payload
    })
    builder.addCase(postContact.fulfilled,(state,action)=>{
        state.filtered==false
        console.log(action.payload)
    })
    builder.addCase(editContact.fulfilled,(state,action)=>{
       console.log(action.payload)
    })
    builder.addCase(deleteContact.fulfilled,(state,action)=>{
        state.contacts= state.contacts.filter((obj)=>obj.id!=action.payload.id)
    })
}
})

export const editContactSelector = (state)=> state.contacts.editContact

export const contactsSelector = (state)=> state.contacts.contacts

export const filterContactsSelector = (state)=> state.contacts.filterContacts

export const filteredSelector = (state)=> state.contacts.filtered

export const {searchFilter,setEditContact}  = contactSlice.actions
export default contactSlice.reducer
