import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../axios";


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const { data } = await axios.get('/posts');
    return data;
});
export const fetchPostsF = createAsyncThunk('subj/fetchPostsF', async (subjN) => {
    
   //Sorry, I can't show all code. But don't worry, it works! 
});
    
export const fetchPostsGr = createAsyncThunk('grade/fetchPostsGr', async ( params, ) => {
    //Sorry, I can't show all code. But don't worry, it works! 
});

export const fetchSubj = createAsyncThunk('posts/fetchSubj', async () => {
    //Sorry, I can't show all code. But don't worry, it works! 
});
export const fetchSubjGr = createAsyncThunk('grade/fetchSubjGr', async (gradeN) => {
    //Sorry, I can't show all code. But don't worry, it works! 
});

export const fetchGrade = createAsyncThunk('posts/fetchGrade', async () => {
    //Sorry, I can't show all code. But don't worry, it works! 
});


export const fetchRemovePost = createAsyncThunk('posts/fetchRemovePost', async (id) => 
    axios.delete(`/posts/${id}`),
    
);

const initialState = {
    posts: {
        items: [],
        status: 'loading',
    },
    subjN: {
        items: [],
        status: 'loading',
    },
    grade: {
        items: [],
        status: 'loading',
    },
    gradeN: {
        items: [],
        status: 'loading',
    },
    subj: {
        items: [],
        status: 'loading',
    },
};

const postSlice = createSlice({ 
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.posts.items = [];
            state.posts.status = 'loading';
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.posts.items = action.payload;
            state.posts.status = 'loaded';
        },
        [fetchPosts.rejected]: (state) => {
            state.posts.items = [];
            state.posts.status = 'error';
        },
        //Sorry, I can't show all code. But don't worry, it works! 

    },
});

export const postsReducer = postSlice.reducer;