import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import './MainNavigation.css';
import SideDrawer from './SideDrawer';
import NavLinks from './NavLinks';
import BackDrop from '../UIElements/Backdrop';


const MainNavigation = props => {
    
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    };

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };

    return (
        <React.Fragment>
            { drawerIsOpen ? <BackDrop onClick={closeDrawerHandler}/> : null }
            <MainHeader>
                <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                    <nav className="main-navigation__drawer-nav">
                        <NavLinks/>
                    </nav>
                </SideDrawer>
                <div>
                    <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
                        <span/>
                        <span/>
                        <span/>
                    </button>
                </div>
                <h1 className="main-navigation__title">
                    <Link to="/">YourPlaces</Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks/> 
                </nav>
            </MainHeader>
        </React.Fragment>
    )};

export default MainNavigation;