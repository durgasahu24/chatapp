import React, { useEffect } from 'react'
// import SendInput from './SendInput'
import SendInput from './SendInput.jsx';
// import Messages from './Messages';
import Messages from './Messages.jsx';
import { useSelector,useDispatch } from "react-redux";
// import { setSelectedUser } from '../redux/userSlice';

const MessageContainer = () => {
    // const { selectedUser, authUser, onlineUsers } = useSelector(store => store.user);
    const dispatch = useDispatch();

    // const isOnline = onlineUsers?.includes(selectedUser?._id);
   
    return (
        <>
            {
            
                    <div className='md:min-w-[550px] flex flex-col'>
                        <div className='flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2'>
                            <div className={`avata 'online' : ''}`}>
                                <div className='w-12 rounded-full'>
                                    {/* <img src={selectedUser?.profilePhoto} alt="user-profile" /> */}
                                    <img src="https://i.pinimg.com/236x/7c/19/25/7c192524baffdcdaebf46de9b93a4dfe.jpg" alt="" />
                                </div>
                            </div>
                            <div className='flex flex-col flex-1'>
                                <div className='flex justify-between gap-2'>
                                    {/* <p>{selectedUser?.fullName}</p> */}
                                    rahul
                                </div>
                            </div>
                        </div>
                        <Messages />
                        <SendInput />
                    </div>
                // ) : (
                //     <div className='md:min-w-[550px] flex flex-col justify-center items-center'>
                //         <h1 className='text-4xl text-white font-bold'>Hi,{authUser?.fullName} </h1>
                //         <h1 className='text-2xl text-white'>Let's start conversation</h1>

                //     </div>
                // )
            }
        </>

    )
}

export default MessageContainer