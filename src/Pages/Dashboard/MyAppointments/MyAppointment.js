import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Spinner from '../../../components/Spinner/Spinner';
import { AuthContext } from '../../../context/AuthProvider';
import { TbEdit } from "react-icons/tb";
import { ImCancelCircle } from "react-icons/im";

const MyAppointment = () => {
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    const { data: bookings = [] , isLoading} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })
    if (isLoading){
        return <Spinner></Spinner>
    }
    // console.log(bookings)
    return (
        <div>
            <h3 className="text-3xl mb-5">My Appointments</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.patient}</td>
                                <td>{booking.careFor}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                                {/* <td><TbEdit className='btn btn-xs btn-outline btn-primary'></TbEdit></td> */}
                                <td><button><TbEdit></TbEdit></button></td>
                                <td><button><ImCancelCircle></ImCancelCircle></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;