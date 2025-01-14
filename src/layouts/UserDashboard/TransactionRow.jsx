import React, { useEffect, useState } from 'react';
import { CiInboxIn, CiInboxOut } from 'react-icons/ci';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const TransactionRow = ({ transaction }) => {
    const [person, setPerson] = useState();
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        if (transaction?.txn_type == 'send_money' || transaction?.txn_type == 'payment') {
            axiosPublic.get(`/users?account_no=${transaction?.receiver}`)
                .then(res => setPerson(res.data))
        } else setPerson({
            name: transaction?.sender,
            email: 'easybank@services.com',
            photo: 'https://cdn-icons-png.flaticon.com/128/3798/3798305.png'
        })
    }, []);

    return (
        <tr>
            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div class="inline-flex items-center gap-x-3">
                    <span>{transaction?.txnID}</span>
                </div>
            </td>
            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">${transaction?.amount}</td>
            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{new Date(transaction?.txn_date).toLocaleString()}</td>
            <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div class="inline-flex items-center px-3 py-1 text-gray-500 rounded-full gap-x-2 bg-gray-100/60">
                    {/* <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 7L2 4.5M2 4.5L4.5 2M2 4.5H8C8.53043 4.5 9.03914 4.71071 9.41421 5.08579C9.78929 5.46086 10 5.96957 10 6.5V10" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> */}

                    <h2 class="text-sm font-normal">{transaction?.txn_type}</h2>
                </div>
            </td>
            <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                <div class="flex items-center gap-x-2">
                    <img class="object-cover w-8 h-8 rounded-full" src={person?.photo} alt="dp photo" />
                    <div>
                        <h2 class="text-sm font-medium text-gray-800">{person?.name}</h2>
                        <p class="text-xs font-normal text-gray-600">{person?.email}</p>
                    </div>
                </div>
            </td>
            {
                (transaction?.txn_type == 'send_money' || transaction?.txn_type == 'payment') ? <>
                    <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div class="inline-flex items-center px-3 py-1 text-red-500 rounded-full gap-x-2 bg-red-100/60">
                            <CiInboxOut size={25} />

                            <h2 class="text-sm font-normal">Out</h2>
                        </div>
                    </td>
                </> : <>
                    <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60">
                            <CiInboxIn size={25} />

                            <h2 class="text-sm font-normal">In</h2>
                        </div>
                    </td>
                </>
            }
            <td class="px-4 py-4 text-sm whitespace-nowrap">
                <div class="flex items-center gap-x-6">
                    <button class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                        Download Here
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default TransactionRow;