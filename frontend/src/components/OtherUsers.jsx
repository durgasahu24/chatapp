import React from 'react'
// import OtherUser from './OtherUser';
// import useGetOtherUsers from '../hooks/useGetOtherUsers';
import { useSelector } from "react-redux";
import OtherUser from './OtherUser.jsx';
import UseGetOthersUsers from '../hooks/useGetOthersUsers.js';



const OtherUsers = () => {
    // my custom hook
    UseGetOthersUsers();
    const { otherUsers } = useSelector(store => store.user);
    console.log("otherusers : ", otherUsers)
    if (!otherUsers) return; // early return in react

    return (
        <div className='overflow-auto flex-1'>
            {
                otherUsers?.map((user) => {
                    return (
                        <OtherUser key={user._id} user={user} />
                    )
                })
            }

        </div>
    )
}

export default OtherUsers