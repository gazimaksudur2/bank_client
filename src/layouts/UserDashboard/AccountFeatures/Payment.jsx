import React, { useState } from 'react';
import { FaAmazonPay } from "react-icons/fa";
import Swal from 'sweetalert2';
import useAuthDB from '../../../hooks/useAuthDB';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const Payment = () => {
    const [info, setInfo] = useState({});
    const { userDB, refetch } = useAuthDB();
    const axiosPublic = useAxiosPublic();
    const handleSubmit = e => {
        e.preventDefault();
        const data = new FormData(e.target);
        const receiver_account_name = data.get('receiver_account_name');
        const receiver_email = data.get('receiver_email');
        const sender_account_no = data.get('sender_account_no');
        const amount = data.get('amount');
        setInfo({ receiver_account_name, receiver_email, sender_account_no, sender_email: userDB?.email, amount, security: info.security });
        document.getElementById('my_modal_1').showModal();
    }

    const handlePayment = () => {
        if (parseInt(info?.security) != parseInt(userDB?.accountInfo?.security)) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Failed!!",
                text: "Security Key invalid",
                showConfirmButton: false,
                timer: 1500
            });
        } else if (info?.account_no === userDB?.accountInfo?.account_no) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Failed!!",
                text: "Invalid marchant Account",
                showConfirmButton: false,
                timer: 1500
            });
        } else if (info?.amount <= 0) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Failed!!",
                text: "This amount is not applicable",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            axiosPublic.post('/account/payment', info)
                .then(res => {
                    // console.log(res);
                    if (res?.data?.message) {
                        Swal.fire({
                            position: "center",
                            icon: "error",
                            title: "Transaction Failed!!",
                            text: res?.data?.message,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    } else if (res?.data?.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Good job!!",
                            text: "Payment Successful",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })
                .catch(err => {
                    console.log("from error " + err?.response);
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Transaction Failed!!",
                        text: "Server having issues with transaction",
                        showConfirmButton: false,
                        timer: 1500
                    });
                })
        }
    }

    const modalDialog = <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Hello User!</h3>
            <p className="py-4">{`Your are sending $` + `${info?.amount} to ${info?.receiver_account_name} with email address of ${info?.receiver_email}`}</p>
            <div>
                <label class="text-gray-700 font-medium" for="security_key">Enter your Bank Security Key</label>
                <input onChange={e => { setInfo({ ...info, security: e.target.value }) }} name="security" type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
            </div>
            <div className="modal-action">
                <form method="dialog" onSubmit={handlePayment}>
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
                        <img className="w-52 mask mask-squircle" src="https://img.freepik.com/free-vector/payment-information-concept-illustration_114360-2886.jpg?uid=R113556208&ga=GA1.1.1491027022.1736420044&semt=ais_hybrid" />
                        <h4 className='text-lg font-medium'>Instantly pay bills or merchants securely</h4>
                    </div>
                    <div className='w-[60%]'>
                        <h2 class="text-xl font-semibold text-gray-700 capitalize">Pay Securely</h2>

                        <form onSubmit={handleSubmit} className='mt-6'>
                            {/* <h3 className='text-lg font-medium'>Recipent info</h3> */}
                            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label class="text-gray-700 font-medium" for="name">Marchant Account Name</label>
                                    <input name="receiver_account_name" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label class="text-gray-700 font-medium" for="emailAddress">Receiver's Email Address</label>
                                    <input name="receiver_email" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label class="text-gray-700 font-medium" for="account_no">Sender's Account No.</label>
                                    <input name="sender_account_no" type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label class="text-gray-700 font-medium" for="amount">Payment Amount</label>
                                    <input name="amount" type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                </div>
                            </div>

                            <div class="flex justify-end mt-6">
                                <button class="px-8 py-2.5 leading-5 text-white flex items-center justify-center gap-3 transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                    <FaAmazonPay size={25} />
                                    <h2 className='pb-[2px]'>Now</h2>
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;