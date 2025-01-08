import React from 'react';
import { Bounce, toast } from 'react-toastify';

const CreditRequest = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        // console.log(data);
        const name = data.get('name');
        const account_no = data.get('account_no');
        const password = data.get('password');
        const amount = data.get('amount');
        console.log(name, account_no, password, amount);
        toast.success('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }
    return (
        <div className='p-6'>
            <h4 className='text-lg font-medium text-gray-800'>Let's credit your account</h4>
            <div className='p-6'>
                <section class="flex flex-col max-w-4xl bg-white rounded-lg shadow-lg md:flex-row">
                    <div class="md:flex md:items-center md:justify-center md:bg-gray-700 rounded-l-lg">
                        <div class="px-6 py-6 md:px-8 md:py-0">
                            <h2 class="text-lg font-bold text-gray-700 md:text-gray-100">Credit on your own <span class="text-blue-600 md:text-blue-300">Pace</span> whenever you want</h2>

                            <p class="mt-2 text-sm text-gray-600 md:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur obcaecati odio</p>
                        </div>
                    </div>

                    <div class="w-full flex items-center justify-center p-6 md:py-0 rounded-r-lg">
                        <form className='py-5 w-[70%]' onSubmit={handleSubmit}>
                            <div class="">
                                <div>
                                    <label class="text-gray-700" for="username">Account Holder Name</label>
                                    <input name="name" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label class="text-gray-700" for="emailAddress">Account No.</label>
                                    <input name="account_no" type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label class="text-gray-700" for="password">Password</label>
                                    <input name="password" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label class="text-gray-700" for="password">Credit Amount</label>
                                    <input name="amount" type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                </div>
                            </div>
                            <div class="flex flex-col border rounded-lg mt-10">
                                <button class="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">Request</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CreditRequest;