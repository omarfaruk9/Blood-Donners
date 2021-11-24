import React from 'react';
import './AddDoner.css'

const AddDoner = (props) => {
    const { name, img, age, blood_group } = props.doner;
    console.log(props);
    return (
        <div className="doner-info-add py-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Age: {age}</h5>
            <h5>Blood Group: {blood_group}</h5>
            <button className=" btn-lg common-btn mt-3 btn-outline-success text-light">Submit</button>
        </div>
    );
};

export default AddDoner;