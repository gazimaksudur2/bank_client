import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import SendMoney from './SendMoney';
import RequestMoney from './RequestMoney';
import WithdrawMoney from './WithdrawMoney';
import Payment from './Payment';
import Requests from './Requests';

const AccountFeatures = () => {
    const [activeTab, setActiveTab] = React.useState('send_money');
    return (
        <div className='container mx-auto mt-10'>
            <section>
                <Tabs>
                    <div class="mt-6 md:flex md:items-center md:justify-between">
                        <TabList>
                            <div class="inline-flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse">
                                <Tab>
                                    <button onClick={() => setActiveTab('send_money')} class={activeTab === 'send_money' ? "px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm" : "px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm hover:bg-gray-100"}>
                                        Send Money
                                    </button>
                                </Tab>

                                <Tab>
                                    <button onClick={() => setActiveTab('req_money')} class={activeTab === 'req_money' ? "px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm" : "px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm hover:bg-gray-100"}>
                                        Request Money
                                    </button>
                                </Tab>

                                <Tab>
                                    <button onClick={() => setActiveTab('withdraw')} class={activeTab === 'withdraw' ? "px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm" : "px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm hover:bg-gray-100"}>
                                        Withdraw Money
                                    </button>
                                </Tab>

                                <Tab>
                                    <button onClick={() => setActiveTab('payment')} class={activeTab === 'payment' ? "px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm" : "px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm hover:bg-gray-100"}>
                                        Make Payment
                                    </button>
                                </Tab>

                                <Tab>
                                    <button onClick={() => setActiveTab('requests')} class={activeTab === 'requests' ? "px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm" : "px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm hover:bg-gray-100"}>
                                        Others Requests
                                    </button>
                                </Tab>
                            </div>
                        </TabList>
                    </div>

                    <div class="mt-10 flex flex-col">
                        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div class="overflow-hidden border border-gray-200 md:rounded-lg">
                                    <TabPanel>
                                        <SendMoney />
                                    </TabPanel>
                                    <TabPanel>
                                        <RequestMoney/>
                                    </TabPanel>
                                    <TabPanel>
                                        <WithdrawMoney/>
                                    </TabPanel>
                                    <TabPanel>
                                        <Payment/>
                                    </TabPanel>
                                    <TabPanel>
                                        <Requests/>
                                    </TabPanel>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </section>
        </div>
    );
};

export default AccountFeatures;