import React from 'react'
import OtherUsers from './OtherUsers.jsx'
import { BiSearchAlt2 } from "react-icons/bi";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            console.log("welcom logout : ")
            const res = await axios.get("http://localhost:8000/api/v1/user/logout")
            console.log("res : ", res)
            toast.success(res.data.message);
            navigate("/login")

        } catch (error) {
            console.log("error in logOut : ", error)
        }
    }
    return (
        <div className='border-r border-slate-500 p-4 flex flex-col'>
            <form className='flex items-center gap-2'>
                <input
                    // value={search}
                    // onChange={(e) => setSearch(e.target.value)}
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
