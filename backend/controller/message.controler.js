import { ConversationModel } from "../model/conversation.model.js";
import { Message } from "../model/message.model.js";



export const sendMessage = async (req, res) => {

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

        await gotConversation.save();

        return res.status(201).json({ message: "message send success : " })

        //socket id 
    } catch (error) {
        console.log("error in send message controller : ", error.message);
        return res.status(500).json({ message: "Server Error ", error: error.message })
    }
}


export const getMessage = async (req, res) => {
    console.log("welome ")
    try {
        const receiverId = req.params.id;
        const senderId = req.id;

        const conversation = await ConversationModel.findOne({
            participants: [
                senderId, receiverId
            ]
        }).populate("messages")
        console.log(conversation);

    } catch (error) {

    }
}