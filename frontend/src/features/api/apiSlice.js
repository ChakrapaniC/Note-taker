import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

 export const notesApi = createApi({
    reducerPath:"notesApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000/api/v1"}),
    endpoints: (builder) =>({
        getNotes: builder.query({
           query: ()=> '/notes',
        }),
        addNote: builder.mutation({
            query: (note)=>({
                url:'/add',
                method:'POST',
                body: note
            })
        }),
        deleteNote: builder.mutation({
            query: ({id})=>({
                url:`/delete/${id}`,
                method:'DELETE',
                body:id
            })
        }),
        updateNote: builder.mutation({
            query: (note)=>({
                url:`/update/${note.id}`,
                method:"PUT",
                body: note
            })
        })
    })
})

export const {useGetNotesQuery, useAddNoteMutation ,useDeleteNoteMutation, useUpdateNoteMutation} = notesApi;
