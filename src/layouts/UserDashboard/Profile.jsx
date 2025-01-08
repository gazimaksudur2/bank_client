import React from 'react';
import { CiEdit } from 'react-icons/ci';

const Profile = () => {
    return (
        <div>
            <div class="">
                <h1 class="text-lg font-semibold">My Profile</h1>
                <div className='mt-10 p-2 space-y-5'>
                    <div class="border-[1px] border-gray-400 bg-white rounded-lg p-5 flex items-center gap-5">
                        <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                        <div className=''>
                            <h1 class="text-lg font-semibold">Michael Simbal</h1>
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
                                <p class="text-sm text-gray-500">Michael</p>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h3 class="text-sm font-semibold">Last Name</h3>
                                <p class="text-sm text-gray-500">Simbal</p>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h3 class="text-sm font-semibold">Email</h3>
                                <p class="text-sm text-gray-500">michaelsimbal@gmail.com</p>
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
                        <div class="max-w-xl grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 justify-between items-center">
                            <div className='flex flex-col gap-1'>
                                <h3 class="text-sm font-semibold">Account Holder Name</h3>
                                <p class="text-sm text-gray-500">michaelsimbal</p>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h3 class="text-sm font-semibold">Account Number</h3>
                                <p class="text-sm text-gray-500">7512 0231 6329</p>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h3 class="text-sm font-semibold">Account Created</h3>
                                <p class="text-sm text-gray-500">Apr 08, 2022</p>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h3 class="text-sm font-semibold">Account Status</h3>
                                <p class="text-sm text-gray-500">Active</p>
                            </div>
                        </div>
                        <div className='absolute right-4 top-4 flex items-center justify-center gap-1 border-[1px] border-gray-400 p-2 rounded-lg hover:bg-gray-100 active:scale-95 delay-100'>
                            <CiEdit size={17} />
                            <h4>Edit</h4>
                        </div>
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