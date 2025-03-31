import React, { useEffect, useRef } from 'react'
import {useSelector} from "react-redux";

const Message = ({message}) => {
    // const scroll = useRef();
    // const {authUser,selectedUser} = useSelector(store=>store.user);

    // useEffect(()=>{
    //     scroll.current?.scrollIntoView({behavior:"smooth"});
    // },[message]);
    
    return (
        <div  
        // className={`chat ${message?.senderId === authUser?._id ? 'chat-end' : 'chat-start'}`}
        >
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    {/* <img alt="Tailwind CSS chat bubble component" src={message?.senderId === authUser?._id ? authUser?.profilePhoto  : selectedUser?.profilePhoto } /> */}
                    <img src="https://i.pinimg.com/236x/7c/19/25/7c192524baffdcdaebf46de9b93a4dfe.jpg" alt="" />
                </div>
            </div>
            <div className="chat-header">
                <time className="text-xs opacity-50 text-white">12:45</time>
            </div>
            {/* <div className={`chat-bubble ${message?.senderId !== authUser?._id ? 'bg-gray-200 text-black' : ''} `}>{message?.message}</div> */}
            <div className='bg-gray-200 text-black'>hi how are you</div>
        </div>
    )
}

export default Message