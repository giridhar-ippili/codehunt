import React from 'react';

const contact = [
  {
    key:0,
    name:"",
    img:"",
    phone:"",
    email:""
  }
]

function submit(){
  console.log(contact)
}

function Form() {
  return (
    <form>
          <h5>Add Contact</h5>
          <label>
            Name: <input type="text" className="text-Input" name="name" value={contact.name}/>
          </label>
          <label>
            Email: <input type="email" className="text-Input" name="Email" value={contact.email}/>
          </label>
          <label>
            Phone: <input type="tel" name="Phone" className="text-Input" value={contact.phone} pattern="[0-9]{10}"/>
          </label>
          <label>
            Gender : 
            <span> </span>
            <input type="radio" id="male" name="gender" value="male"/>
            <label >Male</label>
            <span> </span>
            <input type="radio" id="female" name="gender" value="female"/>
            <label>Female</label>
          </label>
          <div>
            <button type="button" className="submit-button" onClick={submit}>Add Contact</button>
            <span> </span>
            <button type="cancel" value="cancel">Cancel</button>
          </div>
        </form>
  );
}

export default Form;