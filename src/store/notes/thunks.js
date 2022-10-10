import { addNewEmptyNote, savingNewNote } from "./notesSlice"
export const startNewNote = ( newNote ) => {

    return async( dispatch ) => {
        dispatch( savingNewNote() );
        dispatch( addNewEmptyNote( newNote ) );
    }    
}