import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

export default function Login(props) {
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
        props.onLoginSubmit(login)
        event.preventDefault()
      }
  return (
    <div className="login">    
    <form className="login-form" onSubmit={handleSubmit}>
    <h1 className="login-text">Welcome to Buddy Keeper</h1>
      <Grid container>
          <Grid item xs={12}><label>Name *</label></Grid>      
          <Grid  item xs={12}>
                 <TextField id="name"
                            required
                            variant="outlined" 
                            className="login-input" 
                            name="name"                            
                            value={login.name} 
                            onChange={handleChange}/>
          </Grid>
          <Grid item xs={12}><label>Email *</label></Grid>
          <Grid item xs={12}>
                 <TextField 
                            variant="outlined" 
                            className="login-input" 
                            name="email" 
                            type="email"
                            required
                            value={login.email} 
                            onChange={handleChange}/> 
          </Grid>
          <Grid item xs={12}><br/></Grid>
          <Grid item xs={12}>
          <Button type="submit" variant="outlined" color="primary" className="login-button">Take me in!</Button> 
          </Grid>
      </Grid>   
    </form>
  </div>
  );
}


