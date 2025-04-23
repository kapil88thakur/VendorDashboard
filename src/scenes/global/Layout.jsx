import React,{useState} from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Footer from './Footer'
import Body from './Body'
import {GetUserDetail} from '../../data/getUserById';
import { useQuery,useMutation } from '@apollo/client';
import { getUserById } from '../../graphql/queries';
function Layout({title,children}) {
  let userData=localStorage.getItem("userData");
let venderdetail=JSON.parse(userData);
  console.log("udata".udata);
  return (
    <div className=" h-full bg-red-300">
       
        <Topbar venderdetail={venderdetail} />

{/* Start Side bar and content */}
			<div className="bg-white ">
				<div className="flex-col-reverse flex h-full">
					<div className="w-full border-b-2 border-gray-200 h-full"></div>
					<div className="flex bg-gray-500 h-screen  overflow-x-hidden">
	                    <Sidebar/>	
                        <Body content={children} username={venderdetail.name}/>
	                </div>
     
				</div>
			</div>

        {/* END Side bar and content */}    
       
           
          
                <Footer />
         

    </div>
  )
}

export default Layout