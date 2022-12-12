import React from 'react';
import Table from 'react-bootstrap/Table';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './CurrentYear.css'
const CurrentYear = () => {
    const data = [
        {
            month: 'Jan',
            amount: 4000,
        },
        {
            month: 'Feb',
            amount: 3000,
        },
        {
            month: 'Mar',
            amount: 3000,
        },
        {
            month: 'Mar',
            amount: 2000,
        },
        {
            month: 'Apr',
            amount: 2780,
        },
        {
            month: 'May',
            amount: 1890,
        },
        {
            month: 'Jun',
            amount: 2390,
        },
        {
            month: 'Jul',
            amount: 3490,
        },
        {
            month: 'Aug',
            amount: 3490,
        },
        {
            month: 'Sep',
            amount: 3490,
        },
        {
            month: 'Oct',
            amount: 3490,
        },
        {
            month: 'Nov',
            amount: 3490,
        },
        {
            month: 'Dec',
            amount: 3490,
        },
    ];
    return (
        <div style={{ marginTop: "62px" }}>
            <div className='row g-0'>
                <div className='col-12 col-lg-5 table1'>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >

                            <XAxis  dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="amount" stroke="var(--primary-color)" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className='col-12  col-lg-3 table2' style={{ textAlign: 'center' }}>
                    <h5
                        style={{
                            color: "var(--secondary-color)",
                        }}
                    >
                        Top Selled
                        <span className="option"> Food</span>
                    </h5>
                    <Table borderless className='Table'>
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cappuccino</td>
                                <td>500</td>
                            </tr>
                            <tr>
                                <td>Cappuccino</td>
                                <td>500</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className='col-12 col-lg-3 table3' style={{ textAlign: 'center' }}>
                    <h5
                        style={{
                            color: "var(--secondary-color)",
                        }}
                    >
                        Top
                        <span className="option"> Delivery-Man</span>
                    </h5>
                    <Table borderless hover className='Table'>
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Kiki</td>
                                <td>500</td>
                            </tr>
                            <tr>
                                <td>Kiki</td>
                                <td>500</td>
                            </tr>
                        </tbody>
                    </Table>

                </div>
                <div className='col-lg-12 col-md-12 col-12'>
                    <Table className='info' borderless hover style={{ marginTop: '30px' }}>
                        <thead>
                            <tr className='info-heading'>
                                <th>Order No</th>
                                <th>Customer amount</th>
                                <th>Phone</th>
                                <th>Total Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#1234</td>
                                <td>Devid</td>
                                <td>01711112323</td>
                                <td>1200</td>
                                <td><a href="...">Details</a></td>
                            </tr>
                            <tr>
                                <td>#1234</td>
                                <td>Devid</td>
                                <td>01711112323</td>
                                <td>1200</td>
                                <td><a href="...">Details</a></td>
                            </tr>
                            <tr>
                                <td>#1234</td>
                                <td>Devid</td>
                                <td>01711112323</td>
                                <td>1200</td>
                                <td><a href="...">Details</a></td>
                            </tr>
                            <tr>
                                <td>#1234</td>
                                <td>Devid</td>
                                <td>01711112323</td>
                                <td>1200</td>
                                <td><a href="...">Details</a></td>
                            </tr>
                            <tr>
                                <td>#1234</td>
                                <td>Devid</td>
                                <td>01711112323</td>
                                <td>1200</td>
                                <td><a href="...">Details</a></td>
                            </tr>
                            <tr>
                                <td>#1234</td>
                                <td>Devid</td>
                                <td>01711112323</td>
                                <td>1200</td>
                                <td><a href="...">Details</a></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

            </div>
        </div>
    );
};

export default CurrentYear;