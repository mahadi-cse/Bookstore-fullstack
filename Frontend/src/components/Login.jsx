import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const handleModal = () => {
        document.getElementById('my_modal_3').close();
    }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
      const navigate = useNavigate();
    
      const onSubmit = (data) => {
        const userInfo = ({
            email: data.email,
            password: data.password
        })
        fetch('https://bookstore-mahadi.onrender.com/user/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(userInfo)
      })
      .then(response => response.json())
      .then(data => {
        if (data.user) {
            localStorage.setItem('userInfo', JSON.stringify(data.user));
            setTimeout(() => {
                document.getElementById('my_modal_3').close();
            }, 200);
            toast(data.message);
            setTimeout(() => {
                window.location.reload();
            }, 700);
        } else {
            toast.error(data.message);
        }
        
      })
      .catch(error => {
        toast.error(error);
      });
      };
    

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <button 
                        onClick={handleModal}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                        <h3 className="font-bold text-lg">Login</h3>
                        <div className='space-y-5 mt-5'>
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
                                <input type="email" className="grow" placeholder="Email"  required 
                                {...register("email", { required: true })}
                                />
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
                                <input type="password" className="grow" placeholder='password'  required
                                {...register("password", { required: true })}
                                />
                            </label>
                            <div className='flex justify-between'>
                                <button className='bg-pink-500 rounded-md hover:bg-700 text-white px-4 py-2 '>Login</button>

                                <p className='mt-2'>Not Registered? <Link to="/signup"> <span className='text-pink-700 cursor-pointer'>Sign up</span></Link></p>
                            </div>

                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login
