import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setMessages } from '../redux/messageSlice';


function useGetRealtimeMessage() {
    const dispatch = useDispatch();
    const {socket} = useSelector(store => store.socket)
    const {messages} = useSelector(store => store.messages);

    console.log("socket in use get real time : ",socket);
    console.log("messages in real ",messages);

    useEffect(() => {
        socket?.on("newMessage",(newMessage) => {
            console.log("newmessage in custome hook ",newMessage);
            dispatch(setMessages([...messages,newMessage]))
        })
    },[setMessages,messages])
    
}

export default useGetRealtimeMessage
