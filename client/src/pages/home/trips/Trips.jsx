import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { domain } from '../../../hooks/useDomain';
import Loader from '../../shared/loader/Loader';
import Trip from './trip/Trip';
const Trips = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        const getData = async () => {
            await axios
                .get(`${domain}/trips`)
                .then((res) => setTrips(res.data))
                .catch((err) => console.log(err.message));
        };
        getData();
    }, []);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
                    <div className="section-title text-center pos-rel mb-75">
                        <div className="section-text pos-rel">
                            <h5 className="pink-color">Our Offers</h5>
                            <h1 style={{ fontSize: '1.8rem' }}>Our Best Travel Destination's</h1>
                        </div>
                        <div className="section-line pos-rel">
                            <img
                                src="http://themepure.net/template/medidove-prv/medidove/img/shape/section-title-line.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 justify-content-center row-cols-md-3 g-4">
                {trips.length === 0 ? (
                    <Loader />
                ) : (
                    trips.map((trip, index) => <Trip key={index} trip={trip} />)
                )}
            </div>
            <button
                style={{ borderRadius: '20px' }}
                className="btn btn-dark py-2 fw-bolder px-5 mx-auto my-4 d-block">
                LOAD MORE
            </button>
        </div>
    );
};

export default Trips;
