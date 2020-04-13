import React from 'react';


function Form() {
  return (
    <form>
          <label>
            Name: <input type="text" className="text-Input" name="name" />
          </label>
          <label>
            Email: <input type="email" className="text-Input" name="Email" />
          </label>
          <label>
            Phone: <input type="tel" name="Phone" className="text-Input" pattern="[0-9]{10}"/>
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
            <button type="submit" className="submit-button" value="Submit">Submit</button>
            <button type="cancel" value="cancel">Cancel</button>
          </div>

        </form>
  );
}

export default Form;