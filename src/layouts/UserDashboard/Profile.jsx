import React from 'react';
import { CiEdit } from 'react-icons/ci';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuthDB from '../../hooks/useAuthDB';

const Profile = () => {
    const { user } = useAuth();
    const { userDB, refetch } = useAuthDB();
    const axiosPublic = useAxiosPublic();
    const f_name = user?.displayName?.split(' ')[0];
    const s_name = user?.displayName?.split(' ')?.length>1 ? user?.displayName?.split(' ')[1] : 'not available';

    console.log(user?.photoURL, userDB?.photo);

    const handleAccountSetUp = e => {
        e.preventDefault();
        const data = new FormData(e.target);
        const account_holder_name = data.get('name').trim();
        const email = data.get('email');
        const security = data.get('security');
        const security_conf = data.get('security_conf');

        if (email != user?.email) {
            Swal.fire({
                title: "Try again!!",
                text: "Your account email mismatched!",
                icon: "error",
                showConfirmButton: false,
                timer: 2000
            });
            return;
        } else if (security !== security_conf) {
            Swal.fire({
                title: 'Try again!!',
                text: 'Security Key mismatched!',
                icon: 'error',
                showConfirmButton: false,
                timer: 2000,
            });
            return;
        }
        axiosPublic.post('/account/setup', { email, account_holder_name, security })
            .then(res => {
                // console.log(res.data);
                if (res.data.modifiedCount) {
                    Swal.fire({
                        title: 'Good job!!',
                        text: "Your account set up successful",
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    refetch();
                }
            })
            .catch(err => {
                console.log(err?.message);
            })
    }

    const accountInfo = <>
        <div class="max-w-xl grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 justify-between items-center">
            <div className='flex flex-col gap-1'>
                <h3 class="text-sm font-semibold">Account Holder Name</h3>
                <p class="text-sm text-gray-500">{userDB?.accountInfo?.account_holder_name}</p>
            </div>
            <div className='flex flex-col gap-1'>
                <h3 class="text-sm font-semibold">Account Number</h3>
                <p class="text-sm text-gray-500">{userDB?.accountInfo?.account_no}</p>
            </div>
            <div className='flex flex-col gap-1'>
                <h3 class="text-sm font-semibold">Account Created</h3>
                <p class="text-sm text-gray-500">{userDB?.accountInfo?.account_setup_on? new Date(userDB?.accountInfo?.account_setup_on).toLocaleString() :'not initialized'}</p>
            </div>
            <div className='flex flex-col gap-1'>
                <h3 class="text-sm font-semibold">Account Status</h3>
                <p class="text-sm text-gray-500 capitalize">{userDB?.accountInfo?.account_status}</p>
            </div>
        </div>
    </>;
    const noAccountInfo = <>
        <div className='mt-2'>
            {/* <h2 className='text-sm'>Set up your account with Required info.</h2> */}

            <form onSubmit={handleAccountSetUp}>
                <div class="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-2">
                    <div>
                        <label class="text-gray-700 text-sm" for="username">Account Holder Name</label>
                        <input name="name" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label class="text-gray-700 text-sm" for="emailAddress">Email Address</label>
                        <input name="email" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label class="text-gray-700 text-sm" for="password">Security Key</label>
                        <input name="security" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label class="text-gray-700 text-sm" for="passwordConfirmation">Security Key Confirmation</label>
                        <input name="security_conf" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                    </div>
                </div>

                <div class="flex justify-end mt-6">
                    <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                </div>
            </form>
        </div>
    </>;
    // ? (user.photoURL) : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
    return (
        <div>
            <div class="">
                <h1 class="text-lg font-semibold">My Profile</h1>
                <div className='mt-3 p-2 space-y-3'>
                    <div class="border-[1px] border-gray-400 bg-white rounded-lg p-5 flex items-center gap-5">
                        <img class="h-16 w-16 rounded-full" src={user?.photoURL} alt="profile_img" />
                        <div className=''>
                            <h1 class="text-lg font-semibold">{user?.displayName}</h1>
                            <h3 class="text-sm font-semibold">Marketing Exec. at Denva Corp</h3>
                            <p class="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, placeat!</p>
                        </div>
                    </div>
                    <div class="relative border-[1px] border-gray-400 bg-white rounded-lg p-5">
                        <h1 class="text-lg font-semibold ">Personal Information</h1>
                        <div class="max-w-xl grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 justify-between items-center">
                            {/* <div className='flex gap-5 mt-5  justify-between items-center'> */}
                            <div className='flex flex-col gap-1'>
                                <h3 class="text-sm font-semibold">First Name</h3>
                                <p class="text-sm text-gray-500">{f_name}</p>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h3 class="text-sm font-semibold">Last Name</h3>
                                <p class="text-sm text-gray-500">{s_name}</p>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h3 class="text-sm font-semibold">Email</h3>
                                <p class="text-sm text-gray-500">{user?.email}</p>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h3 class="text-sm font-semibold">Phone</h3>
                                <p class="text-sm text-gray-500">+8801731013276</p>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h3 class="text-sm font-semibold">My Bio</h3>
                                <p class="text-sm text-gray-500">There goes my bio. I am a web specialist. I've built multiple projects on my own.</p>
                            </div>
                            {/* </div> */}

                        </div>
                        <div class="mt-5">
                            <h3 class="text-sm font-semibold">Skills</h3>
                            <div class="flex items-center gap-2 mt-2">
                                <span class="px-2 py-1 bg-gray-200 rounded-lg text-xs">Marketing</span>
                                <span class="px-2 py-1 bg-gray-200 rounded-lg text-xs">SEO</span>
                                <span class="px-2 py-1 bg-gray-200 rounded-lg text-xs">Digital Marketing</span>
                                <span class="px-2 py-1 bg-gray-200 rounded-lg text-xs">Content Writing</span>
                            </div>
                        </div>
                        <div className='absolute right-4 top-4 flex items-center justify-center gap-1 border-[1px] border-gray-400 p-2 rounded-lg hover:bg-gray-100 active:scale-95 delay-100'>
                            <CiEdit size={17} />
                            <h4>Edit</h4>
                        </div>
                    </div>
                    <div class="relative border-[1px] border-gray-400 bg-white rounded-lg p-5">
                        <h1 class="text-lg font-semibold ">Account Information</h1>
                        {
                            userDB?.accountInfo ? accountInfo : noAccountInfo
                        }
                        {/* <div className='absolute right-4 top-4 flex items-center justify-center gap-1 border-[1px] border-gray-400 p-2 rounded-lg hover:bg-gray-100 active:scale-95 delay-100'>
                            <CiEdit size={17} />
                            <h4>Edit</h4>
                        </div> */}
                    </div>
                </div>
                {/* <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
                    <h1 class="my-1 text-center text-xl font-bold leading-8 text-gray-900">Michael Simbal</h1>
                    <h3 class="font-lg text-semibold text-center leading-6 text-gray-600">Marketing Exec. at Denva Corp</h3>
                    <p class="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, placeat!</p>
                    <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                        <li class="flex items-center py-3 text-sm">
                            <span>Status</span>
                            <span class="ml-auto"><span class="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">Open for side gigs</span></span>
                        </li>
                        <li class="flex items-center py-3 text-sm">
                            <span>Joined On</span>
                            <span class="ml-auto">Apr 08, 2022</span>
                        </li>
                    </ul>
                </div> */}
            </div>

        </div>
    );
};

export default Profile;