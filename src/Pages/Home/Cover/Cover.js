import React from 'react';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';
import chair from '../../../assets/images/chair.png'
import backgroundChair from '../../../assets/images/bg.png'


const Cover = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse"
                style={{ backgroundImage: `url(${backgroundChair})` }}
            >
                <img src={chair} alt="chair" className="w-full md:w-1/2 rounded-lg shadow-2xl mb-14 md:mb-0" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6 text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton classes="btn border-none shadow-lg">
                        Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Cover; <h2>This is Cover</h2>