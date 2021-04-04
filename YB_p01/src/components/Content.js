import React, { useContext } from 'react';
import { NotesContext } from '../NotesContext';
import { NoteCard } from './NoteCard';

export const Content = () => {
    const manager = useContext(NotesContext);

    return (
        <div className="flex-1 bg-red-100 flex flex-col overflow-hidden">
            <div className="py-7.5 px-10 w-full h-auto border-b-2 border-coolGray-100 bg-white">
                <h1 className="font-PlusJakarta font-bold text-5xl text-blueGray-900">Notes</h1>
            </div>
            <div className="flex-1 bg-white grid grid-cols-cardsMobile md:grid-cols-cards grid-rows-cards gap-6 p-6 md:gap-10 md:p-10 overflow-y-auto">
                {
                    [...manager.notes].reverse().map((note, i) => <NoteCard key={note.color + i} color={note.color} text={note.text} />)
                }
            </div>
        </div>
    );
}