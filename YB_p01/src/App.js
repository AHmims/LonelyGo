import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';
import { NotesContext } from './NotesContext';

const App = () => {
  const [notes, setNotes] = useState([]);
  const addNotes = (note) => {
    setNotes([...notes, note]);
  }
  return (
    <div className="bg-white h-screen max-h-screen min-h-screen w-full flex flex-col-reverse md:flex-row">
      <NotesContext.Provider value={{ notes, addNotes }}>
        <Sidebar />
        <Content />
      </NotesContext.Provider>
    </div>
  );
}

export default App;