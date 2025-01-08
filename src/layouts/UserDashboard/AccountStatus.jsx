import React from 'react';
import { CiDollar } from 'react-icons/ci';
import { TbTransactionDollar } from 'react-icons/tb';

const AccountStatus = () => {
    return (
        <div>
            <h1 className='text-lg font-semibold'>Account Status</h1>
            <div className='mt-10 grid grid-cols-4'>
                <div className="max-w-72 h-24 bg-base-100 flex items-center justify-between p-6 rounded-lg">
                    <CiDollar size={35} />
                    <div>
                        <h2 className='text-2xl font-semibold'>$ 405</h2>
                        <p className='text-sm'>Current Balance</p>
                    </div>
                </div>
                <div className="max-w-72 h-24 bg-base-100 flex items-center justify-between p-6 rounded-lg">
                    <TbTransactionDollar size={30} />
                    <div>
                        <h2 className='text-2xl font-semibold'>104 <span className='text-lg font-medium'>times</span></h2>
                        <h2 className='text-sm'>Total transactions </h2>
                    </div>
                </div>
                <div className="max-w-72 h-24 bg-base-100 flex items-center justify-between p-6 rounded-lg">
                    <CiDollar size={35} />
                    <div>
                        <h2 className='text-2xl font-semibold'>$ 405</h2>
                        <p className='text-sm'>Current Balance</p>
                    </div>
                </div>
                <div className="max-w-72 h-24 bg-base-100 flex items-center justify-between p-6 rounded-lg">
                    <TbTransactionDollar size={30} />
                    <div>
                        <h2 className='text-2xl font-semibold'>104 <span className='text-lg font-medium'>times</span></h2>
                        <h2 className='text-sm'>Total transactions </h2>
                    </div>
                </div>
                {/* <div className='container w-1/2 bg-green-300 rounded-lg p-5'>
                    <div className='flex justify-between font-medium'>
                        <h3>Your Current Balance: </h3>
                        <h4 className='font-bold'>$600</h4>
                    </div>
                </div>
                <div className='container w-1/2 bg-green-300 rounded-lg p-5'>
                    <div className='flex justify-between font-medium'>
                        <h3>Credit Your Balance </h3>
                        <CiCirclePlus size={30}/>
                    </div>
                </div>
                <div className='container w-1/2 bg-green-300 rounded-lg p-5'>
                    <div className='flex justify-between font-medium'>
                        <h3>Your Current Balance: </h3>
                        <h4 className='font-bold'>$600</h4>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default AccountStatus;