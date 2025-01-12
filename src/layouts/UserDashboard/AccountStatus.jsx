import React, { useEffect } from 'react';
import { CiDollar } from 'react-icons/ci';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { TbTransactionDollar } from 'react-icons/tb';
import AccountFeatures from './AccountFeatures/AccountFeatures';

const AccountStatus = () => {
    const [viewable, setViewable] = React.useState(false);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setViewable(false);
    //     }, 3000);
    // }, [viewable]);
    const handleViewable = () => {
        setViewable(true);
        setTimeout(() => {
            setViewable(false);
        }, 3000);
    }

    return (
        <div>
            <h1 className='text-lg font-semibold'>Account Status & statistics</h1>
            <div className='mt-10 grid grid-cols-4'>
                <div className="max-w-72 h-24 bg-base-100 flex items-center justify-between p-6 rounded-lg">
                    <CiDollar size={35} />
                    <div className='flex flex-col'>
                        <div className='flex items-center justify-between gap-2'>
                            <h2 className='text-2xl font-semibold '>$ {viewable ? 405 : <span className='text-lg '>****</span>}</h2>
                            {
                                !viewable ? <FaEye size={20} onClick={handleViewable} className='' /> : <FaEyeSlash size={22} onClick={() => setViewable(false)} className='' />
                            }
                        </div>
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
            </div>
            <div>
                <AccountFeatures />
            </div>
        </div>
    );
};

export default AccountStatus;