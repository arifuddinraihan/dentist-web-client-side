import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AppointmentTypes from '../AppointmentTypes/AppointmentTypes';

const AppointmentMain = () => {
    const [selectDate, setSelectDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner selectDate={selectDate} setSelectDate={setSelectDate}   ></AppointmentBanner>
            <AppointmentTypes selectDate={selectDate} setSelectDate={setSelectDate}   ></AppointmentTypes>
        </div>
    );
};

export default AppointmentMain;