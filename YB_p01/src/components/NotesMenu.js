import React, { useState } from 'react';
import { Blob } from './Blob';
import { Plus } from './sub/Icon';

const NotesMenu = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="flex flex-row-reverse md:flex-col items-center">
            <button onClick={() => setShowMenu(!showMenu)} className="focus:outline-none focus:ring-8 focus:ring-coolGray-300 bg-coolGray-900 w-12.4 h-12.4 rounded-full flex items-center justify-center transition duration-300 ease-in-out" style={{ transform: (showMenu ? "rotate(45deg)" : "rotate(0deg)") }}>
                <Plus iconstyle="h-8 w-8 text-white" />
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