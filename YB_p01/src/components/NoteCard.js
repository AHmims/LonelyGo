import React, { useState } from 'react';

export const NoteCard = (props) => {
    const [note, setNote] = useState(props.text);
    return (
        <div className={"h-80 rounded-2xl p-9 " + props.color}>
            <textarea value={note} onChange={e => setNote(e.target.value)} className="w-full h-full bg-transparent font-Inter text-xl text-coolGray-900 font-medium focus:outline-none placeholder-white" placeholder="Note text">
            </textarea>
        </div>
    );
}