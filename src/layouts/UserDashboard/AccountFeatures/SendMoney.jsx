import React, { useState } from 'react';
import { CiPaperplane } from 'react-icons/ci';
import Swal from 'sweetalert2';
import useClockLoader from '../../../hooks/useClockLoader';

const SendMoney = () => {
    const [info, setInfo] = useState({});
    const setLoader = useClockLoader();
    
    const handleSubmit = e => {
        e.preventDefault();
        const data = new FormData(e.target);
        const recipent = data.get('name');
        const email = data.get('email');
        const account_no = data.get('account_no');
        const amount = data.get('amount');
        setInfo({ recipent, email, account_no, amount });
        document.getElementById('my_modal_1').showModal()
    }

    const handleSendMoney = () => {
        // e.preventDefault();
        // const security = new FormData(e.target).get('security');
        // console.log("Security Key: ", info?.security);
        console.log(info);

        setLoader(true);
        setTimeout(()=>{
            setLoader(false);
            if (!true) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Send Money Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
            }else {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Transaction Failed!!",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        },3000);
    }

    const modalDialog = <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Hello User!</h3>
            <p className="py-4">{`Your are sending $` + `${info?.amount} to ${info?.recipent} with account no. of ${info?.account_no}`}</p>
            <div>
                <label class="text-gray-700 font-medium" for="security_key">Enter your Bank Security Key</label>
                <input onChange={e => { setInfo({ ...info, security: e.target.value }) }} name="security" type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
            </div>
            <div className="modal-action">
                <form method="dialog" onSubmit={handleSendMoney}>
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-outline">Confirm Submit</button>
                </form>
            </div>
        </div>
    </dialog>;

    return (
        <div>
            {modalDialog}
            <div className="hero h-[50vh] bg-white">
                <div className="w-[80%] mx-auto flex justify-between items-center flex-col lg:flex-row-reverse">
                    <div className='flex flex-col items-center gap-4'>
                        <img className="w-52 mask mask-pentagon " src="https://img.freepik.com/free-vector/transfer-money-concept-illustration_114360-3762.jpg?uid=R113556208&ga=GA1.1.1491027022.1736420044&semt=ais_hybrid" />
                        <h4 className='text-lg font-medium'>Easily send money to friends or family</h4>
                    </div>
                    <div className='w-[60%]'>
                        <h2 class="text-xl font-semibold text-gray-700 capitalize">Transfer Your Funds seamlessly</h2>

                        <form onSubmit={handleSubmit} className='mt-6'>
                            {/* <h3 className='text-lg font-medium'>Recipent info</h3> */}
                            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label class="text-gray-700 font-medium" for="name">Recipent's Account Holder Name</label>
                                    <input name="name" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label class="text-gray-700 font-medium" for="emailAddress">Recipent's Email Address</label>
                                    <input name="email" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label class="text-gray-700 font-medium" for="account_no">Recipent's Account No.</label>
                                    <input name="account_no" type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label class="text-gray-700 font-medium" for="amount">Send Amount</label>
                                    <input name="amount" type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                </div>
                            </div>

                            <div class="flex justify-end mt-6">
                                <button class="px-8 py-2.5 leading-5 text-white flex items-center justify-center gap-3 transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                    <CiPaperplane size={25} />
                                    <h2 className='pb-[2px]'>Send</h2>
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendMoney;