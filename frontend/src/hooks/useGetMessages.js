import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { setMessages } from '../redux/messageSlice';


const UseGetMessages = () => {

    const dispatch = useDispatch();
    const { selectedUser } = useSelector(store => store.user);

    console.log("selected user in useGetMessges : ",selectedUser);

    useEffect(() => {
        const fetMessages = async () => {

            try {
                const res = await axios.get(`http://localhost:8000/api/v1/message/${selectedUser?._id}`, { withCredentials: true })
                console.log("res.data ",res.data)
                dispatch(setMessages(res.data))

            } catch (error) {
                console.log("error inside get message :", error.message);
            }
        }
        fetMessages();
    }, [selectedUser])

}

export default UseGetMessages
