import React from 'react';
import Editable from './Editable.jsx';
import Note from './Note.jsx';

export default ({notes, onValueClick, onEdit, onDelete}) => {
    var notesElements = notes.map(note => 
                <Note className="note" key={note.id} className="note">
                    <Editable
                        editing={note.editing} 
                        value={note.task} 
                        onValueClick={onValueClick.bind(null, note.id)} 
                        onEdit={onEdit.bind(null, note.id)} 
                        onDelete={onDelete.bind(null, note.id)} />
                </Note> 
            );
        
    return( 
        <ul className="notes">
            {notesElements}
        </ul>
    )
}