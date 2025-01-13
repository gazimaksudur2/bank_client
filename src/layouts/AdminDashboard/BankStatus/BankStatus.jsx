import React from 'react';
import { BsPiggyBank } from 'react-icons/bs';
import { FaEye, FaEyeSlash, FaUsers } from 'react-icons/fa';
import { GiProfit } from 'react-icons/gi';
import { TbTransactionDollar } from 'react-icons/tb';

const BankStatus = () => {
    const [viewable, setViewable] = React.useState(false);
    const [viewable2, setViewable2] = React.useState(false);
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
    const handleViewable2 = () => {
        setViewable2(true);
        setTimeout(() => {
            setViewable2(false);
        }, 3000);
    }
    return (
        <div>
            <h1 className='text-lg font-semibold'>Bank Status & statistics</h1>
            <div className='mt-10 grid grid-cols-4'>
                <div className="max-w-72 h-24 bg-base-100 flex items-center justify-between p-6 rounded-lg">
                    <BsPiggyBank size={35} />
                    <div className='flex flex-col'>
                        <div className='flex items-center justify-between gap-2'>
                            <h2 className='text-2xl font-semibold '>$ {viewable ? 405 : <span className='text-lg '>****</span>}</h2>
                            {
                                !viewable ? <FaEye size={20} onClick={handleViewable} className='' /> : <FaEyeSlash size={22} onClick={() => setViewable(false)} className='' />
                            }
                        </div>
                        <p className='text-sm'>Total Volt Amount</p>
                    </div>
                </div>
                <div className="max-w-72 h-24 bg-base-100 flex items-center justify-between p-6 rounded-lg">
                    <TbTransactionDollar size={30} />
                    <div>
                        <h2 className='text-2xl font-semibold'>104 <span className='text-lg font-medium'>times</span></h2>
                        <h2 className='text-sm'>Total Bank transactions </h2>
                    </div>
                </div>
                <div className="max-w-72 h-24 bg-base-100 flex items-center justify-between p-6 rounded-lg">
                    <GiProfit size={30} />
                    <div className='flex flex-col'>
                        <div className='flex items-center justify-between gap-2'>
                            <h2 className='text-2xl font-semibold '>$ {viewable2 ? 405 : <span className='text-lg '>****</span>}</h2>
                            {
                                !viewable2 ? <FaEye size={20} onClick={handleViewable2} className='' /> : <FaEyeSlash size={22} onClick={() => setViewable2(false)} className='' />
                            }
                        </div>
                        <h2 className='text-sm'>Total Bank Profit</h2>
                    </div>
                </div>
                <div className="max-w-72 h-24 bg-base-100 flex items-center justify-between p-6 rounded-lg">
                    <FaUsers size={30} />
                    <div>
                        <h2 className='text-2xl font-semibold'>104 <span className='text-lg font-medium'>persons</span></h2>
                        <h2 className='text-sm'>Total Bank User</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BankStatus;