import React, { useState } from 'react';
import { SetBackground } from '../util/ApplyColor';
import CardButton from './Button';

export const NoteCard = (props) => {
    const [note, setNote] = useState(props.text);
    return (
        <div className={"h-57.5 flex flex-col overflow-hidden rounded-2xl " + SetBackground(props.color)}>
            <textarea value={note} onChange={e => setNote(e.target.value)} className="w-full py-6.5 px-5.75 flex-1 bg-transparent font-PlusJakarta text-base text-trueGray-800 placeholder-trueGray-700 font-medium focus:outline-none resize-none" placeholder="Note text">
            </textarea>
            <div className={"w-full px-5.75 py-3 flex-none flex justify-between items-center " + SetBackground(props.color)}>
                <span className="font-PlusJakarta font-medium text-trueGray-700">May 21, 2020</span>
                <div>
                    <CardButton />
                </div>
            </div>
        </div>
    );
}