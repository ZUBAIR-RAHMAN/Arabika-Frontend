import React from 'react';
import coffeeMug from "../../images/Rectangle 3777.png"
import './FoodDetals.css'
import "../../Global_variable/variable.css"

const foodDetails = () => {
    return (
        <div className='food-container' >
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                </div>
                <div className='food-details'>
                    <h2 style={{ color: "var(--secondary-color)" }}>Food <span className='details'>Details</span></h2>
                </div>
                <div style={{ display: "flex" }}>
                    <div >
                        <img className='coffeeImg' src={coffeeMug} alt="" />
                    </div>
                    <div>
                        <div>
                            <p style={{ color: "var(--secondary-color)" }}>Title:</p>
                            <p style={{ color: "var(--secondary-color)" }}>Category:</p>
                            <p style={{ color: "var(--secondary-color)" }}>Description:</p>
                        </div>
                    </div>
                    <div>
                        <p className='innerText'>Cappuccino</p>
                        <p className='innerText'>Hot Drinks</p>
                        <p className='innerText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta necessitatibus quaerat et, esse nihil ullam, velit quasi est architecto impedit, distinctio ipsam! Tempora consequatur blanditiis molestiae error fugiat eveniet commodi.</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default foodDetails;
