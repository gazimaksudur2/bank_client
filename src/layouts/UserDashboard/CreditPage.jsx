import React from 'react';
import CreditRequest from './CreditRequest';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import TabPane from 'antd/es/tabs/TabPane';
import CreditHistory from './CreditHistory';

const CreditPage = () => {
    const [activeTab, setActiveTab] = React.useState('credit_req');

    return (
        <div>
            <div>
                <div class="flex items-center gap-x-3">
                    <h2 class="text-lg font-medium text-gray-800">Your Transactions</h2>

                    <span class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">240 vendors</span>
                </div>

                <p class="mt-1 text-sm text-gray-500">These companies have purchased in the last 12 months.</p>
            </div>
            <Tabs>
                <div class="mt-6 md:flex md:items-center md:justify-between">
                    <TabList>
                        <div class="inline-flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse">
                            <Tab>
                                <button onClick={() => setActiveTab('credit_req')} class={activeTab === 'credit_req' ? "px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm" : "px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm hover:bg-gray-100"}>
                                    Credit Request
                                </button>
                            </Tab>

                            <Tab>
                                <button onClick={() => setActiveTab('credit_his')} class={activeTab === 'credit_his' ? "px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm" : "px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm hover:bg-gray-100"}>
                                    Credit History
                                </button>
                            </Tab>
                        </div>
                    </TabList>
                </div>
                <TabPanel>
                    <CreditRequest />
                </TabPanel>
                <TabPanel>
                    <CreditHistory />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CreditPage;