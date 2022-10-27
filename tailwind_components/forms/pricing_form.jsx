import {stripIndent} from "react-codepen-prefill-embed";

const pricingForm = stripIndent`
<div class="border-box font-sans text-gray-900 h-screen text-base bg-gray-200">
        <div class="sm:mx-auto mb-16 sm:my-0 sm:max-w-screen-lg">
            <div class="bg-gray-200 px-6 py-4 sm:px-16 sm:py-8 divide-y divide-gray-400">
                <div class="flex flex-col items-between sm:flex-row sm:justify-between sm:items-end mb-4">
                    <h2 class="mb-4 mt-2 sm:mr-auto text-gray-900 text-center sm:text-left text-xl sm:text-2xl font-light leading-tight tracking-wide">
                        Choose the amount of storage
                        <br>that's right for you.
                    </h2>

                    <div class="flex justify-center items-end">
                        <span class="inline-block text-xs text-gray-700 mr-2">Bill yearly</span>
                        <label for="toggle" class="mt-3 inline-flex items-center cursor-pointer">
                            <span class="relative">
                              <span class="block w-10 h-5 rounded-full shadow-inner bg-indigo-600 "></span>
                              <span class="absolute block w-3 h-3 mt-1 ml-1 bg-white rounded-full shadow inset-y-0 left-0">
                                <input id="toggle" type="checkbox" class="absolute opacity-0 w-0 h-0" />
                              </span>
                            </span>
                          </label>
                        <span class="inline-block text-xs text-gray-700 ml-2">Bill monthly</span>
                    </div>
                </div>

                <div class="flex flex-col-reverse sm:flex-row justify-between">
                    <div class="w-full sm:w-1/2 mt-6 mr-6">

                        <div class="flex items-center mb-6 sm:hidden text-gray-600">
                            <span class="h-px flex-grow bg-gray-400"></span>
                             <span class="w-24 text-sm ml-1 -mr-1">Pay with card</span>
                            <span class="h-px flex-grow bg-gray-400"></span>
                        </div>

                        <form method="post" action="#">
                            <input type="text" name="name" placeholder="Full name" class="py-3 px-4 mb-5 rounded font-normal text-md w-full text-gray-600 focus:outline-none" required>
                            <input type="email" name="email" placeholder="Email" class="py-3 px-4 mb-5 rounded font-normal text-md w-full text-gray-600 focus:outline-none" required>
                            <input type="password" name="password" placeholder="Password" class="py-3 px-4 mb-5 rounded font-normal text-md w-full text-gray-600 focus:outline-none" required>

                            <input type="text" name="name" placeholder="Card number" maxlength="16" class="py-3 px-4 mb-5 mr-3 rounded font-normal text-md w-full sm:w-7/12 text-gray-600 focus:outline-none" required>
                            <input type="text" name="name" placeholder="MM / YY" class="py-3 px-4 mb-5 rounded font-normal text-md w-1/3 sm:w-24 text-gray-600 focus:outline-none" required>
                            <input type="text" name="name" maxlength="3" placeholder="CVV" class="py-3 px-4 mb-5 rounded font-normal text-md w-1/4 sm:w-16 text-gray-600 focus:outline-none" required>

                            <button class="w-full focus:outline-none mt-3">
                               <span class="block uppercase bg-indigo-600 py-3 px-4 rounded text-white  hover:bg-indigo-700">Create account</span>
                            </button>
                        </form>

                    </div>
                    <div class="w-full sm:w-1/2 mt-6 mb-6">
                        <a href="#" class="block w-full border-solid border-2 border-indigo-500 border-opacity-50 py-3 px-4 mb-4 rounded-lg bg-white">
                            <div class="flex justify-between mb-2">
                                <span class="uppercase text-gray-600 font-semibold text-sm">Essential</span>
                                <svg class="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9
                                     10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                            </div>

                            <div class="flex justify-between items-baseline">
                                <h2>
                                    <span class="text-3xl text-gray-700 font-semibold mr-1">200</span>
                                    <span class="text-gray-700 font-semibold">GB</span>
                                    <span class="font-light text-gray-700">of storage</span>
                                </h2>

                                <span class="inline-block text-gray-700 font-semibold mr-2">$10 / mo</span>
                            </div>
                        </a>

                        <a href="#" class="block w-full py-3 px-4 mb-4 rounded-lg bg-white">
                            <div class="flex justify-between mb-2">
                                <span class="uppercase text-gray-600 font-semibold text-sm">Pro</span>
                                <!-- <svg class="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9
                                     10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg> -->
                            </div>

                            <div class="flex justify-between items-baseline">
                                <h2>
                                    <span class="text-3xl text-gray-700 font-semibold mr-1">1</span>
                                    <span class="text-gray-700 font-semibold">TB</span>
                                    <span class="font-light text-gray-700">of storage</span>
                                </h2>

                                <span class="inline-block text-gray-700 font-semibold mr-2">$20 / mo</span>
                            </div>
                        </a>

                        <a href="#" class="block w-full  py-3 px-4 rounded-lg bg-white">
                            <div class="flex justify-between mb-2">
                                <span class="uppercase text-gray-600 font-semibold text-sm">Premium</span>
                                <!-- <svg class="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9
                                     10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg> -->
                            </div>

                            <div class="flex justify-between items-baseline">
                                <h2>
                                    <span class="text-3xl text-gray-700 font-semibold mr-1">2</span>
                                    <span class="text-gray-700 font-semibold">TB</span>
                                    <span class="font-light text-gray-700">of storage</span>
                                </h2>

                                <span class="inline-block text-gray-700 font-semibold mr-2">$40 / mo</span>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    </div> 
`

export default pricingForm;