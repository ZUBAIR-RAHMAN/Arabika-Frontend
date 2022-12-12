import React from 'react';
import { Table } from 'react-bootstrap';

const OrderDetails = () => {
    return (
        <>
            <div className='row'>
                <div className="col-lg-12 col-md-12 col-12">
                    <div>
                        <Table borderless >
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
                    <div>
                        <p>Delivery Boy Name:       Devid</p>
                        <p>User Id:     </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderDetails;