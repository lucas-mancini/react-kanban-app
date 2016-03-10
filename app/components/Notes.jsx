import React from 'react';
import Editable from './Editable.jsx';

export default ({notes, onValueClick, onEdit, onDelete}) => {
    var notesElements = notes.map(note => 
                <li key={note.id} className="note">
                    <Editable
                        editing={note.editing} 
                        value={note.task} 
                        onValueClick={onValueClick.bind(null, note.id)} 
                        onEdit={onEdit.bind(null, note.id)} 
                        onDelete={onDelete.bind(null, note.id)} />
                </li> 
            );
        
    return( 
        <ul className="notes">
            {notesElements}
        </ul>
    )
}