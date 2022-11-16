import React from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectDate, setSelectDate }) => {
    return (
        <header className=''>
            <div className="hero my-40">
                <div className="flex flex-col lg:flex-row-reverse justify-around">
                    <img src={chair} alt="Dentist Chair" className="w-60 lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className=''>
                        <h1 className="text-lg font-bold text-center text-primary">Select Appointment Date</h1>
                        <div className='text-sm ml-0 text-slate-600'>
                            <DayPicker
                                mode="single"
                                selected={selectDate}
                                onSelect={setSelectDate}
                            ></DayPicker>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;