import React, { useEffect, useState } from 'react';
import { BsBank } from 'react-icons/bs';
import { CiLogout } from 'react-icons/ci';
import { FaCreditCard, FaUsers } from 'react-icons/fa';
import { GrTransaction } from 'react-icons/gr';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const AdminNavigator = () => {
    const { logOut, user } = useAuth();
    const [activeTab, setActiveTab] = useState('profile');
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const path = window.location.pathname;
        if (path.includes('profile')) {
            setActiveTab('profile');
        } else if (path.includes('bank_status')) {
            setActiveTab('bank_status');
        } else if (path.includes('users')) {
            setActiveTab('users');
        } else if (path.includes('credit_reqs')) {
            setActiveTab('credit_reqs');
        } else if (path.includes('transactions')) {
            setActiveTab('transactions');
        }
        // console.log(activeTab);
    }, [clicked]);

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will be logged out!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log out!"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        // console.log(res);
                        // console.log(result);
                        Swal.fire({
                            title: "logged out!",
                            text: "Your account successfully logged out.",
                            icon: "success"
                        });
                        navigate('/');
                    })
                    .catch(err => {
                        console.log(err)
                        if (err) {
                            Swal.fire({
                                title: "error occured!",
                                text: err?.message,
                                icon: "error"
                            });
                        }
                    });
            }
        });
    }

    return (
        <div>
            <aside class="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l">
                <div class="flex flex-col items-center justify-center mb-8 space-x-2">
                    <Link to={'/'}>
                        <div class="flex justify-center mx-auto">
                            <img class="w-auto h-7 sm:h-8" src="https://cdn-icons-png.flaticon.com/128/3798/3798305.png" alt="" />
                        </div>
                        <h2 className='w-full text-center'>Easy Bank</h2>
                    </Link>
                </div>

                <div class="relative mt-6">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </span>

                    <input type="text" class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Search" />
                </div>

                <div class="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        <Link to={'/admin/profile'} onClick={() => setClicked(!clicked)} className={activeTab === 'profile' ? "flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-100 rounded-md" : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md hover:bg-gray-100 hover:text-gray-700"} href="#">
                            <MdOutlineAdminPanelSettings size={25} />

                            <span class="mx-4 font-medium">Admin Profile</span>
                        </Link>

                        <Link to={'/admin/bank_status'} onClick={() => setClicked(!clicked)} className={activeTab === 'bank_status' ? "flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-100 rounded-md" : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md hover:bg-gray-100 hover:text-gray-700"} href="#">
                            <BsBank size={25} />

                            <span class="mx-4 font-medium">Bank Status</span>
                        </Link>

                        <Link to={'/admin/users'} onClick={() => setClicked(!clicked)} className={activeTab === 'users' ? "flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-100 rounded-md" : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md hover:bg-gray-100 hover:text-gray-700"} href="#">
                            <FaUsers size={25} />

                            <span class="mx-4 font-medium">Users</span>
                        </Link>

                        <Link to={'/admin/credit_reqs'} onClick={() => setClicked(!clicked)} className={activeTab === 'credit_reqs' ? "flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-100 rounded-md" : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md hover:bg-gray-100 hover:text-gray-700"} href="#">
                            <FaCreditCard size={20} />

                            <span class="mx-4 font-medium">Credit Requests</span>
                        </Link>

                        <Link to={'/admin/transactions'} onClick={() => setClicked(!clicked)} className={activeTab === 'transactions' ? "flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-100 rounded-md" : "flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md hover:bg-gray-100 hover:text-gray-700"} href="#">
                            <GrTransaction size={20} />

                            <span class="mx-4 font-medium">Transactions</span>
                        </Link>

                        {/* <hr class="my-6 border-gray-200" /> */}

                        {/* <a className={activeTab==='profile'?"flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-100 rounded-md":"flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md hover:bg-gray-100 hover:text-gray-700"} href="#">
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span class="mx-4 font-medium">Tickets</span>
                        </a>

                        <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md hover:bg-gray-100 hover:text-gray-700" href="#">
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span class="mx-4 font-medium">Settings</span>
                        </a> */}
                    </nav>

                    <div className='flex flex-col items-start gap-6'>
                        <a href="#" class="flex items-center px-4 -mx-2">
                            <img class="object-cover mx-2 rounded-full h-9 w-9" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="avatar" />
                            <span class="mx-2 font-medium text-gray-800">Michael Simbal</span>
                        </a>
                        <button onClick={handleLogout} class="btn w-full btn-ghost border-2 border-gray-400">
                            <CiLogout size={25} />
                            <h2>Logout</h2>
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default AdminNavigator;