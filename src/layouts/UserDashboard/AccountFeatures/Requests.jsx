import React from 'react';
import RequestRow from './RequestRow';

const Requests = () => {
    const rows = 10;
    const noRequests = <>
        <div class="flex items-center text-center h-80">
            <div class="flex flex-col w-full max-w-sm px-4 mx-auto">
                <div class="p-3 mx-auto text-blue-500 bg-blue-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
                <h1 class="mt-3 text-lg text-gray-800">No requests found</h1>
                <p class="mt-2 text-gray-500">Your search "Request" did not match any Requests. Please try again or wait for a new request.</p>
                <div class="flex items-center mt-4 sm:mx-auto gap-x-3">
                    <button class="w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg sm:w-auto hover:bg-gray-100">
                        Clear Search
                    </button>

                    <button class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <span>Leave Now</span>
                    </button>
                </div>
            </div>
        </div>
    </>

    const allRows = <>
        <section class="container p-4 mx-auto">
            <div class="flex flex-col">
                <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div class="overflow-hidden border border-gray-200 md:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                                            <div class="flex items-center gap-x-3">
                                                    <button class="flex items-center gap-x-2">
                                                        <span>Invoice</span>

                                                        <svg class="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                            <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                            <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                                                        </svg>
                                                    </button>
                                            </div>
                                        </th>

                                        <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                            Date
                                        </th>

                                        <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                            Status
                                        </th>

                                        <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                            Customer
                                        </th>

                                        <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                            Purchase
                                        </th>

                                        <th scope="col" class="relative py-3.5 px-4">
                                            <span class="sr-only">Actions</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <RequestRow/>
                                    <RequestRow/>
                                    <RequestRow/>
                                    <RequestRow/>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-between mt-6">
                <a href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>

                    <span>
                        previous
                    </span>
                </a>

                <div class="items-center hidden md:flex gap-x-3">
                    <a href="#" class="px-2 py-1 text-sm text-blue-500 rounded-md bg-blue-100/60">1</a>
                    <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">2</a>
                    <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">3</a>
                    <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">...</a>
                    <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">12</a>
                    <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">13</a>
                    <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">14</a>
                </div>

                <a href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100">
                    <span>
                        Next
                    </span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </a>
            </div>
        </section>
    </>

    return (
        <div className='bg-base-100'>
            <div className='p-6'>
                <div class="flex items-center gap-x-3">
                    <h2 class="text-lg font-medium text-gray-800">Send Money Requests</h2>

                    <span class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">0 found</span>
                </div>

                <p class="mt-1 text-sm text-gray-500">These guys have requests for funds from you.</p>
            </div>
            <div>
                {
                    rows > 0 ? allRows : noRequests
                }
            </div>
        </div>
    );
};

export default Requests;