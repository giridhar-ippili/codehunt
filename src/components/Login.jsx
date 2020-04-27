import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";


export default function Login() {
    const [login, setLogin] = useState({
        name:"",
        email:"",
      })
      function handleChange(event){
    
        const {name, value} = event.target
        if(name === "name"){
            login.name = value
        }else if(name === "email"){
            login.email = value
        }
        setLogin({...login});
      }
  return (
    <div>    
    <h1 className="login-text">Welcome to Buddy Keeper</h1>
    <form className="login">
    <Grid container   >
          <Grid  item xs={12}>
                 <TextField label="Name" 
                            variant="outlined" 
                            className="text-Input" 
                            name="name"                              
                            type="text"
                            required
                            value={login.name} 
                            onChange={handleChange}/>
          </Grid>
          <Grid item xs={12}>
                 <TextField label="Email" 
                            variant="outlined" 
                            className="text-Input" 
                            name="email" 
                            type="email"
                            required
                            value={login.email} 
                            onChange={handleChange}/> 
          </Grid>
          <Grid>
          <Button  variant="outlined" color="primary"><Link to="/home">Login</Link></Button> 
          </Grid>
       </Grid>   
    </form>
  </div>
  );
}


