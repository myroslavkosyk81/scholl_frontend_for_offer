import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';

import axios from '../axios';

import { Post } from '../components/Post';
import { SubjBlock } from '../components/SubjBlock';
import { CommentsBlock } from '../components/CommentsBlock';
import { fetchPosts, fetchSubj } from '../redux/slices/posts';

export const All = () => {
  const dispatch = useDispatch();
  const { posts, subj, grade} = useSelector(state => state.posts);

  const isPostLoading = posts.status === 'loading';
  const isSubjLoading = subj.status === 'loading';
console.log(posts)

  React.useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchSubj());
    
  }, [])

  return (
    <>
      
      <Grid container spacing={4}>
        <Grid xs={12} item>
          {(isPostLoading ? [...Array(5)] : posts.items).map((obj, index) => isPostLoading ? (
            <Post key={index} isLoading={true}/>
          ) : (
            <Post
              id={obj._id}
              title={obj.title}
              // imageUrl={obj.imageUrl ? `http://localhost:4444${obj.imageUrl}` : ''}
             //Sorry, I can't show all code. But don't worry, it works! 
            />
          ),
          )}
        </Grid>
       
      </Grid>
    </>
  );
};
