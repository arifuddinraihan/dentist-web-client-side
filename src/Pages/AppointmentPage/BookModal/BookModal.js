import React from 'react';
import { format } from 'date-fns';
import toast from 'react-hot-toast';

const BookModal = ({ treatment, selectDate, setTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selectDate, "PP")

    const bookingSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const date = form.date?.value;
        const slot = form.slot?.value;
        const patient = form.patient?.value;
        const email = form.email?.value;
        const phone = form.phone?.value;

        const bookingInfo = {
            patient,
            appointmentDate: date,
            slot,
            careFor: name,
            email,
            phone
        }
        console.log(bookingInfo)
        form.reset()
        toast.success("Your Appointment is received!")
        setTreatment(null)
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom md:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2 bg-gradient-to-r from-primary to-secondary border-0 text-slate-800">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={bookingSubmit}
                        className='grid grid-cols-1 gap-4 my-4'>
                        <input name="date" type="text" disabled value={date} className="input input-bordered input-accent w-full" />
                        <select name="slot" className="select select-accent w-full">
                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name="patient" type="text" placeholder="Your Name" className="input input-bordered input-accent w-full" />
                        <input name="email" type="text" placeholder="Your Email" className="input input-bordered input-accent w-full" />
                        <input name="phone" type="text" placeholder="Your Phone Number" className="input input-bordered input-accent w-full" />
                        <input type="Submit" value="Submit" className="btn btn-accent w-full text-slate-100" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookModal;