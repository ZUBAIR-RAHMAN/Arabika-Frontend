import React from "react";
import "./FoodOption.css";
import "../../Global_variable/variable.css";

const FoodOption = ({
    header,
    header1,
    header2,
    header3,
    header4,
    subHeader1,
    subHeader2,
    subHeader3,
    subHeader4,
    subHeader5,
    subHeader6,
}) => {
    return (
        <div className="food-option-container">
            
            <h2
                style={{
                    color: "var(--secondary-color)",
                    padding: "40px 40px 45px 0",
                    textAlign: "center",
                }}
            >
                {header}
                <span className="option"> {header1}</span>
            </h2>
            <div className="sub-section">
                <table class="table table-borderless">
                    <thead>
                        <tr className="heading">
                            <th scope="col"></th>
                            <th scope="col">{header2}</th>
                            <th scope="col">{header3}</th>
                            <th scope="col">{header4}</th>
                        </tr>
                    </thead>
                    <tbody className="table-data">
                        <tr>
                            <th scope="row"></th>
                            <td>{subHeader1}</td>
                            <td>{subHeader3}</td>
                            <td className="quantity">{subHeader5}</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>{subHeader2}</td>
                            <td>{subHeader4}</td>
                            <td className="quantity">{subHeader6}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FoodOption;
