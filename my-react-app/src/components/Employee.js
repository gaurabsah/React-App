import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const Employee = (props) => {
    Employee.propTypes={
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }
    const [count,setCount]=useState(0);

    const [employees]=useState(
        ["Gaurab","Saurab","Ram","Shyam"]
    )

    function increment(){
        setCount(count + 1);
    }

    function decrement(){
        // if count is less or equal to zero then return 0 else count-1  ----> ternary operation 
        setCount(count <= 0 ? 0 : count-1);
    }

    function reset(){
        setCount(0);
    }

  return (
    <div>
        Employee Details
        <h3>Welcome {props.name}</h3>
       <ul>
        {employees.map((employee,index)=>(
            <li key={index}>{employee}</li>
        ))}
       </ul>
        <h3> Employee ID: {props.id}</h3>
        <button onClick={increment}>+</button>
        <span>Count: {count}</span>
        <button onClick={decrement}>-</button>
        <div style={{textAlign: 'Center'}}>
        <button onClick={reset}>Reset</button>
        </div>
    </div>

  );
}
