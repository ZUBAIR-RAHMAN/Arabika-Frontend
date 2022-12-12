import React from 'react';
import Header from '../components/menuDetails/Header';
import Sidebar from '../components/menuDetails/Sidebar';
import FoodDetails from '../components/menuDetails/FoodDetails';
import FoodOption from '../components/menuDetails/FoodOption';

const Menu = () => {
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
                    marginLeft:'100px',

                    paddingTop: '30px',
                }}>
                    <Header />
                    <FoodDetails />
                    <div className='row g-5'>
                        <div className='col-6'>
                            <FoodOption
                                header={'Food'}
                                header1={'Option'}
                                header2={'Title'}
                                header3={'Price'}
                                header4={'Avg. Quantity'}
                                subHeader1={'Cappuccino'}
                                subHeader2={'Cappuccino'}
                                subHeader3={'215'}
                                subHeader4={'244'}
                                subHeader5={'1'}
                                subHeader6={'2'}

                            />
                        </div>
                        <div className='col-6'>
                            <FoodOption
                                header={'Food'}
                                header1={'Add-ons'}
                                header2={'Title'}
                                header3={'Price'}
                                subHeader1={'Cappuccino'}
                                subHeader2={'Cappuccino'}
                                subHeader3={'215'}
                                subHeader4={'244'}


                            />
                        </div>

                    </div>
                </div>

            </div>
        </>

    );
};

export default Menu;