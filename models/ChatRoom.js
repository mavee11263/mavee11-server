const mongoose = require('mongoose')

const ChatroomSchema = new mongoose.Schema({
    users: Array,
    room_id: {
        type: String
    },
    last_message:{
        type: String
    },
    last_sent_by:{
        type: String
    },
    last_sent_to:{
        type: String
    },
    status: {
        type: String,
        enum: ['request', 'accepted', 'blocked'],
        default: 'accepted'
    },
    requested_by:{
        type: String
    },
    requested_to: {
        type: String
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Chatroom', ChatroomSchema)