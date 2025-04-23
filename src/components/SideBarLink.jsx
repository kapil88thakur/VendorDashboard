import React, { Children } from 'react'
import { Link } from 'react-router'
export default function SideBarLink({link,title,icon,children}) {
  return ( <Link to={link} className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 block transition-all duration-200 hover:bg-gray-200 group cursor-pointer" >
        {title}</Link> )
}