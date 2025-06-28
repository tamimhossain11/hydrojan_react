import React from 'react';
import LeaderData from '../Json Data/LeaderData.json'
import SingleLeader from './SingleLeader';

const Leader = () => {
    return (
        <>
            <section className="speakers-section" style={{ backgroundImage: "url(images/background/6.jpg)" }}>
                <div className="auto-container">
                    <div className="sec-title light text-center">
                        <span className="title">Team</span>
                        <h2>Our Leaders</h2>
                    </div>
                    <div className="row">
                        {LeaderData.map(speaker =>
                            <div className="speaker-block col-lg-3 col-md-6 col-sm-12" key={speaker.id}>
                                <SingleLeader speaker={speaker} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Leader;