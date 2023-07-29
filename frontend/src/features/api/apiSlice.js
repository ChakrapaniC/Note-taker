import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

 export const notesApi = createApi({
    reducerPath:"notesApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000/api/v1"}),
    tagTypes: ['Notes'],
    endpoints: (builder) =>({
        getNotes: builder.query({
           query: ()=> `/notes`,
           transformResponse: res => res.sort((a,b)=> b.id - a.id),
           providesTags: ['Notes']
        }),
        addNote: builder.mutation({
            query: (note)=>({
                url:'/add',
                method:'POST',
                body: note
            }),
            invalidatesTags: ['Notes']
        }),
        deleteNote: builder.mutation({
            query: ({id})=>({
                url:`/delete/${id}`,
                method:'DELETE',
                body:id
            }),
            invalidatesTags: ['Notes']
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
