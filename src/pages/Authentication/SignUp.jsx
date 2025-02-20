import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUser, googleLogin } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        if (data.get('password') !== data.get('confirm_pass')) {
            Swal.fire({
                title: "Password Mismatch!",
                text: "Password and Confirm Password must be same!",
                icon: "warning"
            });
            return;
        }
        const userinfo = {
            name: data.get('name'),
            email: data.get('email'),
            photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
            password: data.get('password'),
            provider: null,
            role: 'general',
            createdAt: new Date().toISOString(),
            // profile_img
        };
        axiosPublic.post('/users', userinfo)
            .then(res => {
                // console.log(res.data);
                if(res.data.exists){
                    console.log('User Exists');
                    Swal.fire({
                        icon: 'error',
                        title: 'SignUp Failed',
                        text: 'User already Exists with this email',
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else if (res.data.insertedId) {
                    createUser(userinfo.email, userinfo.password)
                        .then(res => {
                            // console.log(res);
                            updateUser(userinfo.name, userinfo?.photo)
                                .then(() => {
                                    // console.log('profile updated successfully!!');
                                    Swal.fire({
                                        title: "Great job!",
                                        text: "User Created Successfully!",
                                        icon: "success",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                })
                                .catch(error => {
                                    // console.log(error.message);
                                    Swal.fire({
                                        title: "User Created But!",
                                        text: error.message,
                                        icon: "warning"
                                    });
                                })
                        })
                        .catch(error => {
                            // console.log(error.message);
                            Swal.fire({
                                title: "Unfortunately firebase Error!",
                                text: error.message,
                                icon: "warning"
                            });
                            axiosPublic.delete(`/users?email=${userinfo?.email}`)
                            .then(res=>{
                                console.log('inaccurate user deleted ' + userinfo?.email);
                            })
                            .catch(er=>{
                                console.log("error occured!!");
                            })
                        })
                }
            })
            .catch(err=>{
                console.log(err?.message);
            })
    }
    
    const handleGoogleSignIn = () => {
        googleLogin()
            .then(res => {
                // console.log(res);
                const user = {
                    email: res.user.email,
                    name: res.user.displayName,
                    photo: res.user.photoURL,
                    provider: 'google',
                    role: 'general',
                    createdAt: new Date().toISOString().slice(0, 10),
                }
                axiosPublic.post('/users', user)
                .then(res2=>{
                    console.log(res2.data);
                    if(res2.data.insertedId){
                        console.log('User Inserted');
                        Swal.fire({
                            icon: 'success',
                            title: 'User Creation Successful',
                            text: 'You have successfully logged in',
                            confirmButtonText: 'Okay'
                        });
                    }else if(res2.data.exists){
                        console.log('User Exists');
                        Swal.fire({
                            icon: 'success',
                            title: 'Login Successful',
                            text: 'You have successfully logged in',
                            confirmButtonText: 'Okay'
                        });
                    }
                    navigate('/');
                })
                .catch(err=>{
                    console.log(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Login Failed',
                        text: 'Please check your gmail account',
                        confirmButtonText: 'Okay'
                    });
                });
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Please check your gmail account',
                    confirmButtonText: 'Okay'
                });
            });
        console.log('Google Sign In');
    }
    return (
        <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <div class="flex justify-center mx-auto">
                <img class="w-auto h-7 sm:h-8" src="https://cdn-icons-png.flaticon.com/128/3798/3798305.png" alt="" />
            </div>
            <h2 className='w-full text-center'>Easy Bank</h2>

            <p class="mt-3 text-xl text-center text-gray-600">
                Welcome Here!
            </p>

            <a onClick={handleGoogleSignIn} href="#" class="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-gray-50">
                <div class="px-4 py-2">
                    <svg class="w-6 h-6" viewBox="0 0 40 40">
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                        <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                        <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                    </svg>
                </div>

                <span class="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
            </a>

            <div class="flex items-center justify-between mt-4">
                <span class="w-1/5 border-b lg:w-1/4"></span>

                <a href="#" class="text-xs text-center text-gray-500 uppercase hover:underline">or Create Your Account</a>

                <span class="w-1/5 border-b lg:w-1/4"></span>
            </div>

            <form class="mt-4" onSubmit={handleSubmit}>
                <div class="relative flex items-center mt-8">
                    <span class="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>

                    <input name='name' type="text" class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" />
                </div>

                {/* <label for="dropzone-file" class="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>

                    <h2 class="mx-3 text-gray-400">Profile Photo</h2>

                    <input name='profile' id="dropzone-file" type="file" class="hidden" />
                </label> */}

                <div class="relative flex items-center mt-6">
                    <span class="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </span>

                    <input name='email' type="email" class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                </div>

                <div class="relative flex items-center mt-4">
                    <span class="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </span>
                    <input name='password' type="password" class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                </div>

                <div class="relative flex items-center mt-4">
                    <span class="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </span>
                    <input name='confirm_pass' type="password" class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Confirm Password" />
                </div>

                <div class="mt-6">
                    <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        Sign Up
                    </button>
                </div>
            </form>

            <div class="flex items-center justify-between mt-4">
                <span class="w-1/5 border-b md:w-1/4"></span>

                <a href="#" class="text-xs text-gray-500 uppercase">or
                    <Link to={'/auth'} class="text-blue-500 hover:underline">
                        sign in
                    </Link> manually</a>

                <span class="w-1/5 border-b md:w-1/4"></span>
            </div>
        </div>
    );
};

export default SignUp;