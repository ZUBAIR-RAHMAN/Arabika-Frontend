import { faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Header.css"
import logo from '../../images/m header.png'


const Header = () => {
    return (
        <>
            <div className='container p-0'>
                <div className='row'>
                    <div className='col-lg-8 col-4'>
                        <h2 style={{color:'var(--secondary-color)'}}>CLOUD <span className='cafe'>CAFE</span></h2>
                    </div>
                    <div className="col-lg-4 col-8">
                        <FontAwesomeIcon className='search' icon={faMagnifyingGlass} />
                        <FontAwesomeIcon  className='bell' icon={faBell} />
                        <span className='devider'></span>
                        <span className='cafe1'>Cloud Cafe-1</span>
                        <img className='logo' src={logo} alt="" />

                    </div>
                </div>
            </div>

            {/* <div style={{
                display: 'flex',
                width: '100%',
                justifyContent: "space-between",
                marginTop: "30px",
                paddingBottom: "62px"

            }}>
                <div className='menu-header'>
                    <h1 className='cloudColor'>CLOUD<span className='cafeColor'> CAFE</span></h1>
                </div>
                <div className='menu-header-side-content' style={{
                    display: 'flex'
                }} >
                    <div className='icons'>
                        <i><FaSearch /></i>
                        <span>

                        </span>
                        <span>
                            <i className='faBell'
                                style={{
                                    cursor: 'pointer'
                                }}
                            ><FaBell /></i>
                        </span>
                    </div>
                    <div className='devider'>

                    </div>
                    <div className='top-right-content'>
                        <span className='cloudColor'>Cloud Cafe-1</span>
                        <img style={{
                            marginLeft: "5px",
                            marginRight: "23.33px",
                            borderRadius: "50%",
                            border: "1.5px solid #DFE0EB"
                        }} src={bell} alt="" />
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Header;


