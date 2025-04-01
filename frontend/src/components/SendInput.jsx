import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
// import axios from "axios";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
// import { setMessages } from '../redux/messageSlice';
import { setMessages } from '../redux/messageSlice.js'
// import { BASE_URL } from '..';

const SendInput = () => {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const { selectedUser } = useSelector(store => store.user);
    const { messages } = useSelector(store => store.messages);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log("id and mesages : ", selectedUser?._id, message)
        try {
            const res = await axios.post(`http://localhost:8000/api/v1/message/send/${selectedUser?._id}`, { message }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            console.log("res : ", res);
            dispatch(setMessages([...messages, res?.data]))
        } catch (error) {
            console.log(error);
        }
        setMessage("");
    }
    return (
        <form onSubmit={onSubmitHandler} className='px-4 my-3'>
            <div className='w-full relative'>
                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    placeholder='Send a message...'
                    className='border text-sm rounded-lg block w-full p-3 border-zinc-500 bg-gray-600 text-white'
                />
                <button type="submit" className='absolute flex inset-y-0 end-0 items-center pr-4'>
                    <IoSend />
                </button>
            </div>
        </form>
    )
}

export default SendInput