import React from 'react';

export default function CardButton(props) {
    return (
        <button className={`h-7.5 w-7.5 rounded-full ${props.buttonStyle === 1 ? 'bg-coolGray-900' : 'bg-white'} flex items-center justify-center`}>
            {props.type}
        </button>
    );
}