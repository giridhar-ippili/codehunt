import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

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
      function handleSubmit(event){
        event.preventDefault()
        console.log("Hello"); 
        console.log(this.props)
        this.props.history.push("/home");
      }
  return (
    <div>    
    <h1 className="login-text">Welcome to Buddy Keeper</h1>
    <form className="login" onSubmit={handleSubmit}>
      <Grid container   >
          <Grid  item xs={12}>
                 <TextField id="name"
                            label="Name" 
                            required
                            variant="outlined" 
                            className="text-Input" 
                            name="name"                            
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
          <Button type="submit" variant="outlined" color="primary" className="login-button">Take me in!</Button> 
          </Grid>
      </Grid>   
    </form>
  </div>
  );
}


