import React from 'react';
import { Link } from 'react-router-dom';
import coffeeIcon from '../../assets/coffee.svg'
import useTitle from '../../Hook/useTitle';
const ErrorPage = () => {
    useTitle("Error Page")
    return (
        <div>
            <div class="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
                <div class="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
                    <div class="w-full md:w-1/2">
                        <div class="mb-10 md:mb-20 text-gray-600 font-light">
                            <h1 class="font-black uppercase text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-10">You seem to be lost!</h1>
                            <p>The page you're looking for isn't available.</p>
                            <p>Try searching again or use the Go Back button below.</p>
                        </div>
                        <div class="mb-20 md:mb-0">
                            <Link to={'/'}>
                                <button class="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent"><i class="mdi mdi-arrow-left mr-2"></i>Go Back</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
                <div class="w-96 h-full bg-cyan-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
            </div>
            <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <div>
                    <a title="Buy me a coffee" href="" target="_blank" class="bg-gradient-to-r from-primary to-secondary block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                        <img class="object-contain p-3 object-center" src={coffeeIcon} alt="Icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;