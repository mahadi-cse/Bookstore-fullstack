import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
        const userInfo = ({
            name: data.name,
            email: data.email,
            password: data.password
        })
        fetch('https://bookstore-mahadi.onrender.com/user/signup', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(userInfo)
      })
      .then(response => response.json())
      .then(data => {
        toast.success(data.message);
        navigate(from)
        window.location.reload();
      })
      .catch(error => {
        toast.error('This is an error!',error);
      });
      };


    return (
        <div className="h-screen w-screen flex items-center justify-center px-4 sm:px-0">
            <div className='w-full sm:w-1/2 lg:w-1/3 border p-6 sm:p-10 h-auto shadow-md rounded-md'>
                <div>
                    <h3 className="font-bold text-lg text-center">Sign Up</h3>
                    <div className='space-y-5 mt-5'>
                        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                        <input type="text" placeholder="Name" className="input input-bordered w-full" required
                        {...register("name", { required: true })} />
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="email" className="grow" placeholder="Email" required
                            {...register("email", { required: true })} />
                        </label>

                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input type="password" className="grow" placeholder='Password' required
                            {...register("password", { required: true })}
                            />
                        </label>
                        <div className='flex flex-col sm:flex-row sm:justify-between items-center sm:items-start'>
                            <button className='bg-pink-500 rounded-md hover:bg-700 text-white px-4 py-2 mb-2 sm:mb-0'>Sign up</button>
                            <p className='text-center sm:text-left mt-2 sm:mt-0'>Already Registered? <Link to='/'><span className='text-pink-700 cursor-pointer'>Sign in</span></Link></p>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
