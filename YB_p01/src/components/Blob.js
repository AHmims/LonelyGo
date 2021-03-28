import React, { useContext } from 'react';
import { NotesContext } from '../NotesContext';

export const Blob = props => {
    const manager = useContext(NotesContext);
    function createNote(color) {
        manager.addNotes({ color, text: '' });
    }
    return (
        <button type="button" className="blob" onClick={() => createNote(props.color)}>
            <div className={props.color}></div>
        </button>
    );
}