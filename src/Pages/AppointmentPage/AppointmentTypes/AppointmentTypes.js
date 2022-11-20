import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOptions from './AppointmentOptions';
import BookModal from '../BookModal/BookModal';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../components/Spinner/Spinner';

const AppointmentTypes = ({ selectDate }) => {
    const [treatment, setTreatment] = useState(null)
    const date = format(selectDate, 'PP');
    const { data: optionArray = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <section className='grid grid-cols-1 text-center my-56 mx-auto'>
            <h2 className='text-2xl text-secondary'>Available Appointments on {format(selectDate, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-9'>
                {
                    optionArray.map(option => <AppointmentOptions key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppointmentOptions>)
                }
            </div>
            {treatment &&
                <BookModal
                    treatment={treatment}
                    selectDate={selectDate}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookModal>
            }
        </section>
    );
};

export default AppointmentTypes;