import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        isSaving: false,
        notes: [],
    },
    reducers: {
        savingNewNote: ( state ) => {
            state.isSaving = true;
        },
        addNewEmptyNote: ( state, { payload }) => {
            state.notes = [...state.notes, payload],
            
            // state.notes.push( payload );
            state.isSaving = false;
        }
    }
});


// Action creators are generated for each case reducer function
export const { savingNewNote, addNewEmptyNote } = notesSlice.actions;