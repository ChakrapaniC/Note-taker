import { createSlice } from "@reduxjs/toolkit";

export const stateSlice = createSlice({
    name:'toggle',
    initialState:{
        editNote: false,
        addNote:false,
    },
    reducers:{
        editNoteToggle:(state)=>{
            state.editNote = !state.editNote
        },
        addNoteToggle:(state)=>{
            state.addNote = !state.addNote
        }

    }
});
 
export const {editNoteToggle, addNoteToggle} = stateSlice.actions;
