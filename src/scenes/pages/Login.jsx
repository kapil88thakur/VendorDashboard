import {useNavigate} from 'react-router-dom';

import React,{useRef,useEffect,useState} from 'react';
//import {  Link } from "react-router-dom";
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button
} from '@mui/material';
import { useQuery,useMutation } from '@apollo/client';
import { LOGINQuery,getUserById } from '../../graphql/queries';


const Login = () => {
    let navigate = useNavigate();
    const [singinUser, { loading, error ,data}] =useMutation(LOGINQuery,{
        onCompleted(data){    
           // console.log(data.singinUser);
            localStorage.setItem("token",data.singinUser.token);
            localStorage.setItem("userData",JSON.stringify(data.singinUser.user));
            navigate('/home', { replace: true });
        }
      
});

    const [checked, setChecked] = useState(true);
    const userName =useRef("");
    const pass =useRef();
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const handleLogin = () => {
            singinUser({
                variables:{
                    userSignin:{
                        "email":userName.current.value,
                        "password":pass.current.value
                    } 
                }
            });
    };
  
    return (
        <div style={{ padding: 30 }}>
        <Paper>
            <Grid
            container
            spacing={3}
            direction={'column'}
            justify={'center'}
            alignItems={'center'}
            >
            <Grid item xs={12}>
                <TextField value="kapil@gmail.com" inputRef={userName} label="Username" ></TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField value="12345" inputRef={pass} label="Password" type={'password'}></TextField>
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel
                control={
                    <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    label={'Keep me logged in'}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                }
                label="Keep me logged in"
                />
            </Grid>
            <Grid item xs={12}>
                <Button fullWidth onClick={handleLogin}> Login </Button>
            </Grid>
            <Grid item xs={12}>
                {loading && <h1>Loading Please wait... ip is </h1>}
                {process.env['API_URI']}kapil
                {error && <h1>{error.message}</h1>}
                
            </Grid>
            <nav>
      {/* NavLink makes it easy to show active states */}
      {/* <Link to="/dashca">Login again</Link> */}

    </nav>
            </Grid>
        </Paper>
        </div>
    );
    };

export default Login;
