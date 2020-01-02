import React from 'react';

const Total = props => {
    const parts = props.parts;
    const number = [
        parts.map(item => item.exercises)
    ]
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return (
        <div>
           <b>Total : {number[0].reduce(reducer)}</b> 
        </div>
    );
};

export default Total;