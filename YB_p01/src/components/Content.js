import React, { useContext } from 'react';
import { NotesContext } from '../NotesContext';
import { NoteCard } from './NoteCard';

export const Content = () => {
    const manager = useContext(NotesContext);

    return (
        <div className="flex-1 bg-red-100 flex flex-col overflow-hidden">
            <div className="py-7.5 px-10 w-full h-auto border-b-2 border-coolGray-100 bg-white">
                <h1 className="font-Inter font-bold text-5xl text-blueGray-900">Notes</h1>
            </div>
            <div className="flex-1 bg-white grid grid-cols-cards grid-rows-cards gap-10 p-10 overflow-y-auto">
                {
                    [...manager.notes].reverse().map((note, i) => <NoteCard key={note.color + i} color={note.color} text={note.text} />)
                }
                <div className="h-80 rounded-2xl p-9 red">
                    <textarea className="w-full h-full bg-transparent font-Inter text-xl text-coolGray-900 font-medium focus:outline-none placeholder-white" placeholder="Note text">
                    </textarea>
                </div>
                <div className="h-80 rounded-2xl p-9 green">
                    <textarea className="w-full h-full bg-transparent font-Inter text-xl text-coolGray-900 font-medium focus:outline-none placeholder-white" placeholder="Note text">
                    </textarea>
                </div>
                <div className="h-80 rounded-2xl p-9 orange">
                    <textarea className="w-full h-full bg-transparent font-Inter text-xl text-coolGray-900 font-medium focus:outline-none placeholder-white" placeholder="Note text">
                    </textarea>
                </div>
                <div className="h-80 rounded-2xl p-9 blue">
                    <textarea className="w-full h-full bg-transparent font-Inter text-xl text-coolGray-900 font-medium focus:outline-none placeholder-white" placeholder="Note text">
                    </textarea>
                </div>
                <div className="h-80 rounded-2xl p-9 violet">
                    <textarea className="w-full h-full bg-transparent font-Inter text-xl text-coolGray-900 font-medium focus:outline-none placeholder-white" placeholder="Note text">
                    </textarea>
                </div>
            </div>
        </div>
    );
}