import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch , useSelector } from 'react-redux';
import { setOtherUsers } from '../redux/userSlice.js';

function useGetOthersUsers() {
    const dispatch = useDispatch();

    
   
    

    useEffect(() => {
        const fetchOtherUsers = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/v1/user/`, { withCredentials: true });
                console.log(res.data);
                dispatch(setOtherUsers(res.data));
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchOtherUsers();
    }, [dispatch]);
}

export default useGetOthersUsers;
