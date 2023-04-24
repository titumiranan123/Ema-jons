import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg'
const Navbar = () => {
    return (
        <div className='flex justify-between  bg-black text-white items-center px-10'>
            <div>
                <img src={logo} alt="" />
            </div>
            <nav className='flex  justify-between'>
                <NavLink to='/' >Home</NavLink>
                <NavLink className={`({ isActive }) => isActive ? 'text-green-500 underline' : '' ms-10`} to='/orders' >Orders</NavLink>
                <NavLink className={`({ isActive }) => isActive ? 'text-green-500 underline' : '' ms-10`} to='/orders-review' >Orders Review</NavLink>
                <NavLink className={`({ isActive }) => isActive ? 'text-green-500 underline' : '' ms-10`} to='/manage-inventory' >Manage Inventory</NavLink>
                <Link className='ms-10' to='/login'> Login</Link>
            </nav>
        </div>
    );
};

export default Navbar;