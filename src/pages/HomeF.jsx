import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import { useParams  } from "react-router-dom";
import { Post } from '../components/Post';
import { fetchPostsF, fetchSubj } from '../redux/slices/posts';

export const HomeF = () => {
  const dispatch = useDispatch();
  const { posts, subj, } = useSelector(state => state.posts);
  const isPostLoading = posts.status === 'loading';
  const isSubjLoading = subj.status === 'loading';
  
  const { subjN } = useParams();
  React.useEffect(() => {
    dispatch(fetchPostsF(subjN));
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
              //Sorry, I can't show all code. But don't worry, it works! 
            />
          ),
          )}
        </Grid>
        
      </Grid>
    </>
  );
};
