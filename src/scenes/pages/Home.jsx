import React from 'react'
import { Link ,useNavigate,Redirect} from 'react-router-dom'
import Dashboard from './Dashboard';
import Login from './Login';
import Layout from '../global/Layout';
function Home() {
    let navigate = useNavigate();
    let token=localStorage.getItem("token")
return(<>
    {token? (
           <Layout title="Dashboard">
           this is homepagew
          
          </Layout>
       
      ):
      <Login />
    }
    </>

)
    
  
    }



export default Home