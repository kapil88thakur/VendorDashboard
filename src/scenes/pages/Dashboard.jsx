import React from 'react'
import { Link ,useNavigate,Redirect} from 'react-router-dom'
import Sidebar from '../global/Sidebar';
import Layout from '../global/Layout';
function Dashboard() {
     let navigate = useNavigate();
    function handleClick(){
        console.log("hiii")
           localStorage.clear("token");
            navigate('/login', { replace: true });
           // return <Redirect to="/login" />
            //navigate('/test', { replace: true });
   }
  return (
    <Layout title="Dashboard">
        this is dashboard kapil
       
       </Layout>
  )
}

export default Dashboard