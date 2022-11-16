import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOptions from './AppointmentOptions';
import BookModal from '../BookModal/BookModal';

const AppointmentTypes = ({ selectDate }) => {
    const [optionArray, setOptionArray] = useState([])
    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setOptionArray(data))
    }, [])
    return (
        <section className='grid grid-cols-1 text-center my-56 mx-auto'>
            <h2 className='text-2xl text-secondary'>Available Appointments on {format(selectDate, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-9'>
                {
                    optionArray.map(option => <AppointmentOptions key={option._id}
                        option={option}
                    ></AppointmentOptions>)
                }
            </div>
            <BookModal></BookModal>
        </section>
    );
};

export default AppointmentTypes;