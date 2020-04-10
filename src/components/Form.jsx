import React from 'react';


function Form() {
  return (
    <form>
          <label>
            Name: <input type="text" name="name" />
          </label>
          <label>
            Email: <input type="email" name="Email" />
          </label>
          <label>
            Phone: <input type="tel" name="Phone" pattern="[0-9]{10}"/>
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
          <input type="submit" value="Submit" />
        </form>
  );
}

export default Form;