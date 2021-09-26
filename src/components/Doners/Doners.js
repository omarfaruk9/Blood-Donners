import React, { useEffect, useState } from 'react';
import './Doners.css'
import Doner from '../Doner/Doner';
import Donate from '../Donate/Donate';

const Doners = () => {
    const [doners, setDoner] = useState([]);
    useEffect(() => {
        fetch('./doner.JSON')
            .then(res => res.json())
            .then(data => setDoner(data));
    }, []);

    const [donate, setDonate] = useState([]);
    const handleToDoner = doner => {
        const newDonate = [...donate, doner];
        setDonate(newDonate);
        console.log(newDonate);
    }
    return (

        <div className="row px-4 doners-container">

            <div class="row col-lg-9 col-sm-12 row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    doners.map(doner => <Doner
                        doner={doner}
                        key={doner.id}
                        handleToDoner={handleToDoner}>

                    </Doner>)
                }
            </div>
            <div className="doners-info col-lg-3 col-sm-12 mt-5">
                <Donate donate={donate}></Donate>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Doners;