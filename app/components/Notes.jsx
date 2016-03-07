import React from 'react';
import Note from './Note.jsx';

export default ({notes, onEdit, onDelete}) => {
    var notesElements = notes.map(note => 
            <li key={note.id} className="note">
                <Note task={note.task} 
                    onEdit={onEdit.bind(null, note.id)} 
                    onDelete={onDelete.bind(null, note.id)} />
            </li>);
        
    return( 
        <ul className="notes">
            {notesElements}
        </ul>
    )
}