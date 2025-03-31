import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: {
        authUser: null,
        otherUsers: null
    },
    reducers: {
        setAuthUser: (state, action) => {
            state.authUser = action.payload;
        },
        setOtherUsers: (state, action) => {
            console.log("action payload ", action.payload)
            state.otherUsers = action.payload;
        }
    }
})

export const { setAuthUser, setOtherUsers } = userSlice.actions;
export default userSlice.reducer;