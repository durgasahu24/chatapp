import React, { useState } from 'react'
import { BiSearchAlt2 } from "react-icons/bi";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import OtherUsers from './OtherUsers.jsx'
import { setAuthUser, setOtherUsers } from '../redux/userSlice.js';


const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const { otherUsers } = useSelector(store => store.user)

    console.log("other users in sidebar : ", otherUsers);


    const logoutHandler = async () => {
        try {
            console.log("welcom logout : ")
            const res = await axios.get("http://localhost:8000/api/v1/user/logout")
            console.log("res : ", res)
            toast.success(res.data.message);
            dispatch(setAuthUser(null))
            navigate("/login")

        } catch (error) {
            console.log("error in logOut : ", error)
        }
    }

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        const conversationUser = otherUsers?.find((user) => user.fullName.toLowerCase().includes(search.toLowerCase()));
        if (conversationUser) {
            console.log("conversatonUser : ", conversationUser);
            dispatch(setOtherUsers([conversationUser]));
        } else {
            toast.error("User not found!");
        }
        console.log("search value : ", search);
    }



    return (
        <div className='border-r border-slate-500 p-4 flex flex-col'>
            <form onSubmit={searchSubmitHandler} className='flex items-center gap-2'>
                <input

                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='input input-bordered rounded-md' type="text"
                    placeholder='Search...'
                />
                <button type='submit' className='btn bg-zinc-700 text-white'>
                    <BiSearchAlt2 className='w-6 h-6 outline-none' />
                </button>
            </form>
            <div className="divider px-3"></div>
            <OtherUsers />
            <div className='mt-2'>
                <button onClick={logoutHandler} className='btn btn-sm'>Logout</button>
            </div>
        </div>
    )
}



export default Sidebar