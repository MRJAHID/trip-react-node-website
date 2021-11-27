import React from 'react';
import './Specialities.css';
const Specialities = () => {
    return (
        <div className="container my-5 specialities">
            <div className="">
                <img
                    className="img-fluid"
                    src="https://pages.trip.com/images/home-background/bg-default.webp"
                    alt=""
                />
            </div>
            <hr className="w-50 mx-auto" />
            <div className="row my-5">
                <div className="col-md-6">
                    <img
                        className="img-fluid"
                        src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                        alt=""
                    />
                </div>
                <div className="col-md-6">
                    <h1 className="display-6">A global collective, local at heart.</h1>
                    <p className="lead">
                        {' '}
                        Our local leaders are all in. They’re inspired by the idea that our style of
                        travel can change the world – all while showing you an incredible time.
                    </p>
                    <button className="btn btn-outline-dark py-2 px-3">Meet our leaders</button>
                </div>
            </div>
        </div>
    );
};

export default Specialities;
