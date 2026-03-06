import React from 'react';
import { FaPlus } from "react-icons/fa6";
import supportlogo from '../../assets/supportlogo.jpg'

const Navbar=() => {
    return (
        <div> 
            <div className="navbar max-w-[1350px] mx-auto">
        <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>FAQ</a></li>
        <li><a>Changelog</a></li>
        <li><a>Blog</a></li>
        <li><a>Download</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <div className='flex items-center '>
      <img src={supportlogo} alt=""  className='w-32 h-32'/>
      <a className=" text-xl">CS- Support Care</a>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><a>Home</a></li>
        <li><a>FAQ</a></li>
        <li><a>Changelog</a></li>
        <li><a>Blog</a></li>
        <li><a>Download</a></li>
        <li><a>Contact</a></li>
    </ul>
  </div>
  <div className=" ml-16 md:ml-4">
    <a className="btn text-white font-bold bg-gradient-to-r  from-[#632ee3] to-[#9f62f2] "><FaPlus></FaPlus>New Ticket</a>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;