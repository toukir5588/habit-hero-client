import React, { useContext } from 'react';
import { Link, Navigate, NavLink, useNavigate } from 'react-router';
import { motion } from "motion/react"

import userImg from '../../assets/user1.png'

import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthContext';


const Navbar = () => {
  const navigate = useNavigate();
  const {user,signOutUser,setUser} = useContext(AuthContext);
  // console.log(user);


  const handleLogout = ()=>{
    signOutUser()
        .then(() => {
            
            setUser(null)
            toast.success("your logOut is success");
            navigate('/auth/login')
            // console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
            // ..
          });
  // console.log("logout");
  }

  // console.log(user);
    const link = <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/allHabits'>All Habits</NavLink></li>
      <li><NavLink to='/my-profile'>My Profile</NavLink></li>
    
    </>
    return (
        <div className='gb-gradient shadow-sm '>
            <div className="navbar w-11/12 mx-auto text-white text-lg font-semibold">
  <div className="navbar-start">
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul 
        tabIndex="-1"
        className="menu menu-sm dropdown-content gb-gradient rounded-box z-1 mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
   <NavLink to="/" className=" font-bold text-2xl ">Habit-<span>Hero</span></NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {link}
    </ul>
  </div>
  <div className="navbar-end">
    {/* <Link to='/auth/login' className="btn">Login</Link> */}
 {
    user?    <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className=" m-1">
    {/* {
      user.photoURL?<img className='w-[50px] rounded-full' src={user.photoURL} alt="" />:<img className='w-[50px] rounded-full' src={userImg} alt="" />
    } */}
    <img className='w-[50px] rounded-full' src={user?.photoURL || userImg} alt="profile image" />
  </div>
  <div tabIndex="-1" className="dropdown-content  bg-black rounded-box w-[300px] absolute right-1.5 z-1  p-2 shadow-sm">
    <h2 className='text-2xl text-white text-center'>{user?.displayName}</h2>
    <h2 className='text-lg text-white text-center'>{user?.email}</h2>
    <Link  onClick={handleLogout} className="btn btn-secondary w-full mt-5">Logout</Link>
  </div>
</div>
:  <motion.div
        whileTap={{
            scale:0.8
        }}
 className='btn '><Link to='/login' className="">Login</Link></motion.div>
 }
  </div>
</div>
        </div>
    );
};

export default Navbar;