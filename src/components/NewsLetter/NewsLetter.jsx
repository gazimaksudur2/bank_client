import React from 'react';

const NewsLetter = () => {
    return (
        <section className='bg-white'>
            <div class="container px-6 py-16 mx-auto">
                <div class="items-center lg:flex">
                    <div class="w-full lg:w-1/2">
                        <div class="lg:max-w-lg">
                            <h1 class="text-3xl font-semibold text-gray-800 lg:text-4xl">Subscribe To The <span class="text-blue-500">Newsletter</span></h1>

                            <p class="mt-3 text-gray-600">be the first to knows when our <span class="font-medium text-blue-500">Brand</span> is live</p>

                            <div class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                                <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />

                                    <button class="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                        Subscribe
                                    </button>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img class="w-full h-full max-w-md" src="https://merakiui.com/images/components/Email-campaign-bro.svg" alt="email illustration vector art" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;