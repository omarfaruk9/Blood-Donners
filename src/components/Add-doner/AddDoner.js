import React from 'react';
import './AddDoner.css'

const AddDoner = (props) => {
    const { name, img } = props.doner;
    console.log(props);
    return (
        <div className="doner-info-add">
            <h3>{name}</h3>
            <img src={img} alt="" />
        </div>
    );
};

export default AddDoner;