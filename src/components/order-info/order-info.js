import React from 'react';
import {Box} from '@material-ui/core';
import {Tab, Tabs,TabList,TabPanel} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import {CustomerDetails} from '../customer-details/customer-details';
import {BookingDetails} from '../booking-details/booking-details';


export const OrderInfo = () =>{
    return(
        <Box m={2}>
            <Tabs>
                <TabList>
                    <Tab>Customer Details</Tab>
                    <Tab>Booking Details</Tab>
                </TabList>
                <TabPanel>
                    <CustomerDetails />
                </TabPanel>
                <TabPanel>
                    <BookingDetails />
                </TabPanel>
            </Tabs>
        </Box>
    )
}
