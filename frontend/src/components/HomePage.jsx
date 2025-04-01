import React from 'react'
import MessageContainer from './MessageContainer.jsx'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';

function HomePage() {
  const { authUser } = useSelector(store => store.user);

  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!authUser) {
  //     navigate("/login");
  //   }
  // }, []);
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar/>
      <MessageContainer />
    </div>
  )
}

export default HomePage
