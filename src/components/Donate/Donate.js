import React from 'react';
import AddDoner from '../Add-doner/AddDoner';
import './Donate.css';

const Donate = (props) => {
    // console.log(props);
    const { donate } = props || {};
    let totalDonation = 0;
    for (const donation of donate) {
        totalDonation = parseInt(totalDonation) + parseInt(donation.given);
    }
    return (
        <div>
            <h2>Doner Information <i class="fas fa-people-carry"></i></h2>
            <h2>Add doner: {props.donate.length}</h2>
            <h1> Total Donate: {totalDonation}</h1>
            {
                donate.map(doner => <AddDoner doner={doner} key={doner.id}></AddDoner>)
            }
            <button className=" btn-lg common-btn mt-3 btn-outline-success text-light">Submit</button>
        </div>
    );
};

export default Donate;