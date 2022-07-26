import React from 'react';
import { useState } from 'react';
import "./huki.css"

export function Huki() {
    const [caunt, setCaunt] = useState(0)


    function inc() {
        if (caunt > 0) {
            setCaunt(caunt - 1);
        }
    }
    function res() {
        setCaunt(0)
    }
    function dic() {
        setCaunt(caunt + 1)
    }
    return (
        <div className='Butun'>
            <button className='btn' onClick={inc}>-</button>
            <p>{caunt}</p>
            <button className='btn' onClick={dic}>+</button>
            <div className="btn2">
                <button  onClick={res}> qaytish</button>
            </div>
        </div>
    );
}

