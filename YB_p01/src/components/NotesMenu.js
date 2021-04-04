import React, { useState } from 'react';
import { Blob } from './Blob';

const NotesMenu = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="flex flex-row-reverse md:flex-col items-center">
            <button onClick={() => setShowMenu(!showMenu)} className="focus:outline-none focus:ring-8 focus:ring-coolGray-300 bg-coolGray-900 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 ease-in-out" style={{ transform: (showMenu ? "rotate(45deg)" : "rotate(0deg)") }}>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9375 8.75C15.9375 8.23223 15.5178 7.8125 15 7.8125C14.4822 7.8125 14.0625 8.23223 14.0625 8.75V14.0625H8.75C8.23223 14.0625 7.8125 14.4822 7.8125 15C7.8125 15.5178 8.23223 15.9375 8.75 15.9375H14.0625V21.25C14.0625 21.7678 14.4822 22.1875 15 22.1875C15.5178 22.1875 15.9375 21.7678 15.9375 21.25V15.9375H21.25C21.7678 15.9375 22.1875 15.5178 22.1875 15C22.1875 14.4822 21.7678 14.0625 21.25 14.0625H15.9375V8.75Z" fill="white" />
                </svg>
            </button>
            { showMenu ? <Menu /> : null}
        </div >
    );
}

const Menu = () => {
    const colors = ["orange", "red", "pink", "green", "blue", "violet", "black"];
    return (
        <div className="flex md:flex-col space-x-4 md:space-y-4 md:space-x-0 mr-5 md:mt-5 md:mr-0">
            {
                colors.map(color => <Blob key={color} color={color} />)
            }
        </div>
    );
}

export default NotesMenu;