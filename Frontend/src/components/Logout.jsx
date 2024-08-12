import React from 'react'
import { useAuth } from './context/Authprovider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Logout = () => {
    const [authUser, setAuthUser] = useAuth();
    const navigate = useNavigate();

    console.log(authUser);
    const handlelogout = () => {
        if(authUser){
            localStorage.removeItem('userInfo');
            setAuthUser(null);
            navigate('/');
            toast.success('Logged out successfully');
        }
    }
  return (
    <div>
      <button 
      onClick={handlelogout}
      className='bg-red-500 text-white px-3 py-2 rounded-md'>Logout</button>
    </div>
  )
}

export default Logout
