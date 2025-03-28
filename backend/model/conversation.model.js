import mongoose from "mongoose";

const conversationModel = new mongoose.Schema({
    participants:
        [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }],
    Message: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    }]

}, { timestamps: true })


export const ConversationModel = mongoose.model("Conversation", conversationModel);