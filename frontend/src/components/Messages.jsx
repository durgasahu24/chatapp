import React from 'react'
// import Message from './Message'
// import useGetMessages from '../hooks/useGetMessages';
// import UseGetMessages from '../hooks/UseGetMessages.js';
// import  UseGetMessages from '../hooks/useGetMessages.js'
import UseGetMessages from '../hooks/UseGetMessages.js';
import { useSelector } from "react-redux";
// import Message from './Message.jsx';
import Message from './Message.jsx';

// import useGetRealTimeMessage from '../hooks/useGetRealTimeMessage';

const Messages = () => {
    UseGetMessages();
    // useGetRealTimeMessage();
    const {messages  } = useSelector(store => store.messages);
    console.log("message in Message compo",messages)
    return (
        <div className='px-4 flex-1 overflow-auto'>
            {
               messages && messages?.map((message) => {
                    return (
                        <Message key={message?._id} message={message} />
                    )
                })
            }
    

        </div>


    )
}

export default Messages