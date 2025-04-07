import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setMessages } from '../redux/messageSlice';


function useGetRealtimeMessage() {
    const dispatch = useDispatch();
    const {socket} = useSelector(store => store.socket)
    const {messages} = useSelector(store => store.messages);

  

    useEffect(() => {
        socket?.on("newMessage",(newMessage) => {
            console.log("newmessage in custome hook ",newMessage);
            dispatch(setMessages([...messages,newMessage]))
        })
    },[setMessages,messages])
    
}

export default useGetRealtimeMessage
