import React from 'react'
import { Link } from 'react-router'
import SideBarLink from '../../components/SideBarLink';

// function Sidebar() {
//   return (
//     <div class="grid grid-flow-row auto-rows-auto">
          
        
//         <Link to="/home">Home</Link>
//         <Link to="/product">Product</Link>
//         <Link to="/logout">Logouts</Link>
    
//     </div>
//   )
// }

function Sidebar() {
	return (<>
                <div className="bg-slate-300 lg:flex md:w-64 md:flex-col hidden">
                    <div className="flex-col pt-5 flex overflow-y-auto">
                        <div className="h-full flex-col justify-between px-4 flex">
                            <div className="space-y-4">
                                <div className="bg-top bg-cover space-y-1">    
                                <SideBarLink title="Dashboards" link="/dashboard" icon="" />	
                                <SideBarLink title="Home" link="/home" icon="" />	
                                <SideBarLink title="Store"link="" icon="" />  
                                <SideBarLink title="Product" link="/product" icon="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </>);
}

export default Sidebar