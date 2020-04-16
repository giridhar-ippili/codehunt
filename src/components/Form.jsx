import React, { useState } from 'react';

function Form() {
  const contact =
    {
      key:0,
      name:"",
      img:"",
      phone:"",
      email:"",
      gender:""
    }
  const [newContact, setContact] = useState(contact)
  const updatedContact =
    {
      key:0,
      name:"",
      img:"",
      phone:"",
      email:"",
      gender:""
    }
  function handleChange(event){

    const value = event.target.value
    console.log(event.target.name)
    if(event.target.name === "name"){
      updatedContact.name = value
      console.log("I am here")
    }else if(event.target.name === "phone"){
      console.log("I am here as well")
      updatedContact.phone = value
    }else if(event.target.name === "email"){
      updatedContact.email = value
    }else if(event.target.name === "gender"){
      updatedContact.gender = value
    }
    setContact({
      [event.target.name]: value
    });
    // setContact(updatedContact);
    console.log(updatedContact)
  }
  function handleSubmit() {
    console.log(newContact)
  }
  return (
    <form>
          <h5>Add Contact</h5>
          <label>
            Name: <input type="text" 
                         className="text-Input" 
                         name="name" value={newContact.name} 
                         onChange={handleChange}/>
          </label>
          <label>
            Email: <input type="email" 
                          className="text-Input" 
                          name="email" 
                          value={newContact.email}
                          onChange={handleChange}/>
          </label>
          <label>
            Phone: <input type="tel" 
                          name="phone" 
                          className="text-Input" 
                          value={newContact.phone} 
                          pattern="[0-9]{10}"
                          onChange={handleChange}
                          />
          </label>
          <label>
          Gender:
          <span>   </span>
          <select name="gender" value={newContact.gender} onChange={handleChange}>
            <option hidden disabled selected>select an option</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="idiot">I don't know</option>
          </select>
        </label>
          <div>
            <button type="button" className="submit-button" onClick={handleSubmit}>Add Contact</button>
            <span> </span>
            <button type="cancel" value="cancel">Cancel</button>
          </div>
        </form>
  );
}

export default Form;