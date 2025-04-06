import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: {
        authUser: null,
        otherUsers: null,
        selectedUser: null,
        onlineUsers:null
    },
    reducers: {
        setAuthUser: (state, action) => {
            state.authUser = action.payload;
        },
        setOtherUsers: (state, action) => {
            console.log("action payload otheruser ", action.payload)
            state.otherUsers = action.payload;
        },
        setSelectedUser :(state,action) => {
            state.selectedUser = action.payload
        },
        setOnlineUsers : (state,action) => {
            console.log("online user : ",action.payload);
            state.onlineUsers = action.payload
        }
    }
})

export const { setAuthUser, setOtherUsers,setSelectedUser,setOnlineUsers } = userSlice.actions;
export default userSlice.reducer;