import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

 export const notesApi = createApi({
    reducerPath:"notesApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000/api/v1"}),
    tagTypes: ['Notes'],
    endpoints: (builder) =>({
        getNotes: builder.query({
           query: (id)=> `/notes/${id}`,
           transformResponse: (response) => {
            if (Array.isArray(response)) {
              response.reverse();
              return response;
            } else {
              // Handle the case where response is not an array
              console.error('API response is not an array:', response);
              return response;
            }
          },
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
            query: (id) =>({
                url:`/delete/${id}`,
                method:'DELETE',
                body:id,
            }),
            invalidatesTags: ['Notes']
        }),
        updateNote: builder.mutation({
            query: (note)=>({
                url:`/update/${note.id}`,
                method:"PUT",
                body: note
            }),
            invalidatesTags:["Notes"]
        }),
        updateFavorite: builder.mutation({
            query: (note)=>({
                url:`/updateFav/${note.id}`,
                method:"PUT",
                body: note
            }),
            invalidatesTags:["Notes"]
        }),
        setArcheive: builder.mutation({
            query: (note)=>({
                url:`/updateArchive/${note.id}`,
                method:"PUT",
                body: note,
               
            }),
            invalidatesTags:["Notes"],
        }),
        login: builder.mutation({
            query:(data)=>({
                url:`/login`,
                method:"POST",
                body:data
            })
        }),
        tokenVerify: builder.mutation({
            query:(token)=>({
                url: '/authentication',
                method: 'POST', // Specify the HTTP method
                headers: {
                    Authorization: `${token}`, // Include the token in the Authorization header
                    'Content-Type': 'application/json', // Set the content type if needed
                },
            }),
        }),
        getUser: builder.mutation({
            query:(token)=>({
                url:'/userProfile',
                method:"GET",
                headers: {
                    Authorization: `${token}`, // Include the token in the Authorization header
                    'Content-Type': 'application/json', // Set the content type if needed
                },
            })
        })
    })
})

export const {useGetNotesQuery, useAddNoteMutation ,useDeleteNoteMutation, useUpdateNoteMutation, useUpdateFavoriteMutation, useSetArcheiveMutation ,useLoginMutation, useTokenVerifyMutation,useGetUserMutation } = notesApi;
