import React from 'react';
import Header from '../components/menuDetails/Header';
import Sidebar from '../components/menuDetails/Sidebar';

const Order = () => {
    return (
        <>
            <div style={{
                display: 'flex',
                overflow: 'hidden'
            }}>
                <div style={{
                    width: '20%'
                }}>
                    <Sidebar />
                </div>

                <div style={{
                    width: '100%',
                    marginLeft: '100px',
                    paddingTop: '30px'
                }}>
                    <Header />
                </div>
            </div>

        </>
    );
};

export default Order;