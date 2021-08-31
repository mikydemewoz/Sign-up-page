import logo from '../images/Group 8.svg'



function Navbar (){
    return (
        <div>
            <nav class="bg-white">
                <div class="container px-6 py-3 mx-auto">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center w-10 h-8">
                                {/* <a class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a> */}
                                <svg width="48" height="38" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="42" height="38" rx="10" fill="#ECB2DE"/>
                                    <circle cx="34.5" cy="19.5" r="12" fill="#C0DFDD" stroke="white" stroke-width="3"/>
                                </svg>

                            </div>

                            {/* <!-- Mobile menu button --> */}
                            <div class="flex md:hidden">
                                <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                    <logo/>
                                </button>
                            </div>
                        </div>

                        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                        <div class="items-center md:flex">
                            <div class="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                                <a class="my-1 mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-color_pink dark:hover:text-indigo-400 md:mx-4 md:my-0" href="#">How it works</a>
                                <a class="my-1 mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-color_pink dark:hover:text-indigo-400 md:mx-4 md:my-0" href="#">Payment</a>
                                <a class="my-1 mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-color_pink dark:hover:text-indigo-400 md:mx-4 md:my-0" href="#">Help</a>
                                <a class="my-1 mx-4 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-color_pink dark:hover:text-indigo-400 md:mx-4 md:my-0" href="#">Blog</a>
                            </div>

                            <div class="flex items-center py-2 -mx-1 md:mx-0">
                                <a href="/" class="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-black1 
                                transition-colors duration-200 transform bg-transparent rounded-md 
                                hover:bg-black hover:text-white1 hover:border-transparent md:mx-2 
                                md:w-auto border-4 border-light-blue-500 border-opacity-75">
                                    SIGN UP</a>
                                <a class="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center
                                 text-white1 transition-colors duration-200 transform bg-black rounded-md 
                                 hover:bg-white hover:text-black1 hover:border-4 hover:border-light-blue-500 hover:border-opacity-75 md:mx-2 md:w-auto" href="/">
                                     LOGIN</a>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>


        </div>
    );
}

export default Navbar;