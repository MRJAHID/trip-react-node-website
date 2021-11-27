import React from 'react';
import './Newsletter.css';
const Newsletter = () => {
    return (
        <div>
            <section className="team-area pt-180 pb-65" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
                            <div className="section-title text-center pos-rel mb-75">
                                <div className="section-text pos-rel">
                                    <h5 className="pink-color">Our Team</h5>
                                    <h1 style={{ fontSize: '2rem' }}>
                                        A Professional &amp; Care Provider
                                    </h1>
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
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="team-box text-center mb-60">
                                <div className="team-thumb h4team-thumb mb-25 pos-rel">
                                    <img
                                        src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
                                        alt=""
                                    />
                                </div>
                                <div className="team-content h4team-content mb-15">
                                    <h3>Rosalina William</h3>
                                    <h6>Founder</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="team-box text-center mb-60">
                                <div className="team-thumb h4team-thumb mb-25 pos-rel">
                                    <img
                                        src="https://images.unsplash.com/photo-1586682643135-060f061868b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=371&q=80"
                                        alt=""
                                    />
                                </div>
                                <div className="team-content h4team-content mb-15">
                                    <h3>Tarana Halim</h3>
                                    <h6>Manager</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="team-box text-center mb-60">
                                <div className="team-thumb h4team-thumb mb-25 pos-rel">
                                    <img
                                        src="https://images.unsplash.com/photo-1614831707626-9999e6cf4554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
                                        alt=""
                                    />
                                </div>
                                <div className="team-content h4team-content mb-15">
                                    <h3>Hekim D. Rswana</h3>
                                    <h6>Advertiser</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="team-box text-center mb-60">
                                <div className="team-thumb h4team-thumb mb-25 pos-rel">
                                    <img
                                        src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
                                        alt=""
                                    />
                                </div>
                                <div className="team-content h4team-content mb-15">
                                    <h3>Kelian M. Habblu</h3>
                                    <h6>Trip Operator</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Newsletter;
