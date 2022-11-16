import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AppointmentTypes from '../AppointmentTypes/AppointmentTypes';

const AppointmentMain = () => {
    return (
        <div>
            <AppointmentBanner></AppointmentBanner>
            <AppointmentTypes></AppointmentTypes>
        </div>
    );
};

export default AppointmentMain;