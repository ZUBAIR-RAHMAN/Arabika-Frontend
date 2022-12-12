import React from 'react';
import CurrentYear from '../components/All Report/CurrentYear';
import Header from '../components/menuDetails/Header';
import Sidebar from '../components/menuDetails/Sidebar';

const AllReports = () => {
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
                    <CurrentYear />
                </div>
            </div>

        </>
    );
};

export default AllReports;