import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';
const Header = () => {
    const { user, logOut } = useAuth();
    const handleLogOut = () => {
        logOut().then(() => {});
    };
    return (
        <header className="container  header">
            <div className="header__container ">
                <div className="header__left">
                    <picture className="header__logo">
                        <img
                            src="https://ak-s.tripcdn.com/modules/ibu/online-home/2781390998158135e8ce45b612797c58.2781390998158135e8ce45b612797c58.jpeg"
                            alt=""
                        />
                    </picture>
                    <nav className="header__nav">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/home#service">Hotels</Link>
                            </li>

                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/home#team">Flights</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header__right ">
                    <div className="">
                        <NavLink style={{ color: '#333' }} to="/mybooking">
                            {user?.displayName ? 'My booking' : ''}
                        </NavLink>
                    </div>
                    <div className="header__login">
                        <NavLink to="/manage" style={{ color: '#333' }}>
                            {user?.displayName ? ' Manage all booking' : ''}
                        </NavLink>
                    </div>
                    <div>
                        <NavLink style={{ color: '#333' }} to="/addnew">
                            {user?.displayName ? 'Add A New Trip' : ''}
                        </NavLink>
                    </div>
                    <div className="header__login" style={{ width: '35px', marginRight: '4px' }}>
                        <NavLink to="/login">
                            {user?.photoURL ? (
                                <img
                                    width="100%"
                                    className="rounded-circle border border-2"
                                    src={user.photoURL}
                                    alt=""
                                />
                            ) : (
                                ''
                            )}
                        </NavLink>
                    </div>
                    <div className="header__login">
                        <NavLink to="/login">{user?.displayName || user?.email}</NavLink>
                    </div>
                    <div className="header__signup">
                        {user?.email || user?.displayName ? (
                            <button className="logout-btn" onClick={handleLogOut} id="logoutBtn">
                                Logout
                            </button>
                        ) : (
                            <NavLink to="/login">
                                <button
                                    style={{
                                        border: 'navajowhite',
                                        background: 'transparent',
                                        color: 'white',
                                        fontWeight: 500,
                                    }}>
                                    Signin
                                </button>
                            </NavLink>
                        )}
                    </div>
                </div>
            </div>
        </header>
        // ice
    );
};

export default Header;
