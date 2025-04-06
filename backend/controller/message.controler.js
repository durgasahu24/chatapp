import { ConversationModel } from "../model/conversation.model.js";
import { Message } from "../model/message.model.js";
import { getReceiverSocketId, io } from "../sockets/sockets.js";




export const sendMessage = async (req, res) => {

    console.log("welcome to send messge ")

    try {
        const senderId = req.id;
        const receiverId = req.params.id;
        const { message } = req.body;

        let gotConversation = await ConversationModel.findOne({
            participants: { $all: [senderId, receiverId] }
        });



        if (!gotConversation) {
            gotConversation = await ConversationModel.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        });


        if (newMessage) {
            gotConversation.messages.push(newMessage._id)
        }

        
        await Promise.all([gotConversation.save(), newMessage.save()]);

        console.log("from here socket will start ")
        //socket 
        const receiverSocketId = getReceiverSocketId(receiverId);
        console.log('receiver id socket id  ',receiverSocketId)
        if(receiverSocketId){
            
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }
        
        return res.status(201).json(newMessage)


    } catch (error) {
    
        return res.status(500).json({ message: "Server Error ", error: error.message })
    }
}




export const getMessage = async (req,res) => {
    try {
        const receiverId = req.params.id;
        const senderId = req.id;
        const conversation = await ConversationModel.findOne({
            participants:{$all : [senderId, receiverId]}
        }).populate("messages"); 
        return res.status(200).json(conversation?.messages);
    } catch (error) {
        console.log(error);
    }
}