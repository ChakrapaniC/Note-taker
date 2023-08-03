import { createSlice } from "@reduxjs/toolkit";

export const stateSlice = createSlice({
    name:'toggle',
    initialState:{
        editNote: false,
        addNote:false,
        sidebar: false,
    },
    reducers:{
        editNoteToggle:(state)=>{
            state.editNote = !state.editNote
        },
        addNoteToggle:(state)=>{
            state.addNote = !state.addNote
        },
        sidebar:(state)=>{
            state.sidebar = !state.sidebar;
            console.log(state.sidebar);
        }

    }
});
 
export const {editNoteToggle, addNoteToggle, sidebar} = stateSlice.actions;
