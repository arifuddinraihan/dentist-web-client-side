import React from 'react';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';

const AppointmentOptions = ({ option, setTreatment }) => {
    const { name, slots } = option;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[1] : "All slots booked for the day."}</p>
                <p>{slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE</p>
                <div className="card-actions justify-center mt-4">
                    <label htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(option)}
                        className="btn text-md font-bold py-4 px-8 rounded-xl border-0 hover:text-gray-100 bg-gradient-to-r from-primary to-secondary text-white">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;