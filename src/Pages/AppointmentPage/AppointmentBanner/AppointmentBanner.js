import React from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = () => {
    return (
        <div className=''>
            <div className="hero my-6">
                <div className="flex flex-col lg:flex-row-reverse justify-around">
                    <img src={chair} alt="Dentist Chair" className="w-60 lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className=''>
                        <h1 className="text-lg font-bold text-center text-primary">Select Appointment</h1>
                        <div className='text-sm ml-0 text-slate-600'>
                            <DayPicker></DayPicker>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;