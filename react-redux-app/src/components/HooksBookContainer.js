import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyBook } from '../redux';

const HooksBookContainer = () => {
    const numberOfBooks = useSelector(state=>state.numberOfBooks);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Hooks Container</h1>
            <h1>Number Of Books: {numberOfBooks}</h1>
            <button onClick={()=>dispatch(buyBook())}>Buy Book</button>
        </div>
    )
}

export default HooksBookContainer