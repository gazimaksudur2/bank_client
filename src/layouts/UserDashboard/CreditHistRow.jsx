import React from 'react';

const CreditHistRow = () => {
    return (
        <tr>
            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div class="inline-flex items-center gap-x-3">
                    <div class="flex items-center gap-x-2">
                        <div class="flex items-center justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        </div>

                        <div>
                            <h2 class="font-normal text-gray-800 ">Account Holder Name</h2>
                            <p class="text-xs font-normal text-gray-500">Account Number</p>
                        </div>
                    </div>
                </div>
            </td>
            <td class="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                {new Date().toLocaleString()}
            </td>
            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">$220</td>
            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <h2 class="text-sm font-normal">Paid</h2>
                </div>
            </td>
            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                {new Date().toLocaleDateString()}
            </td>
        </tr>
    );
};

export default CreditHistRow;