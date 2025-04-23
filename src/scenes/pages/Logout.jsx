import React from 'react'
import {useNavigate,Redirect} from 'react-router-dom';
function Logout() {
     let navigate = useNavigate();
   // localStorage.clear("token");
     navigate('/login', { replace: true });
   // navigate('/login', { replace: true });
   // return (<>Tis is Logout functionality</>)
    //return <Redirect to="/login" push={true} />
}

export default Logout