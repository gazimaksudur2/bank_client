import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut()
            .then(res => {
                console.log(res);
            })
            .catch(err => { console.log(err) });
    }

    return (
        <div className='w-[90%] mx-auto mt-10'>
            <div className="navbar bg-base-200 rounded">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg> */}
                            <img className='h-8 w-8' src="https://cdn-icons-png.flaticon.com/128/3798/3798305.png" alt="bank logo" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Homepage</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl">Easy Bank PLC</a>
                </div>
                {
                    user ?
                        <div className="navbar-end">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="avatar">
                                    <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li><a>{user.displayName}</a></li>
                                    <li><a>
                                        <Link to={'/dashboard/profile'}>
                                            User Dashboard
                                        </Link>
                                    </a></li>
                                    <li><a>
                                        <Link to={'/admin/profile'}>
                                            Admin Dashboard
                                        </Link>
                                    </a></li>
                                    <li><a onClick={handleLogout}>Logout</a></li>
                                </ul>
                            </div>

                        </div>
                        :

                        <div className="navbar-end gap-4">
                            <Link to={'auth'}>
                                <button className="btn btn-primary">LogIn</button>
                            </Link>
                            <Link to={'auth/signup'}>
                                <button className="btn btn-secondary">SignUp</button>
                            </Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;