import React from 'react';
import './Doner.css';

const Doner = (props) => {
    // console.log(props);
    const { name, age, blood_group, address, phone, img, given } = props.doner;
    return (
        <div className="">
            <div class="col doner-info">
                <div class="card h-100 back">
                    <img src={img} class="card-img-top w-50 mx-auto" alt="..." />
                    <div class="card-body">
                        <h4 class="card-title">Name: {name}</h4>
                        <h5>Age: {age}</h5>
                        <h2>Blood Given: {given}</h2>
                        <p class="card-text">Blood Group: <span className="fw-bold">{blood_group}</span></p>
                        <p>Phone: {phone}</p>
                        <p>Address: <span className="mute">{address}</span></p>
                    </div>
                    <div class="card-footer border-0">
                        <button
                            onClick={() => props.handleToDoner(props.doner)}
                            className="common-btn btn-outline-success "
                        ><i class="fas fa-plus py-2"></i> Add to doner</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doner;