import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import { SubjBlock } from '../components/SubjBlock';
import { fetchPosts, fetchSubj } from '../redux/slices/posts';


export const Grade8 = () => {
  const dispatch = useDispatch();
  const { posts, subj,} = useSelector(state => state.posts);

  const isPostLoading = posts.status === 'loading';
  const isSubjLoading = subj.status === 'loading';
// console.log(subj)

  React.useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchSubj());
    
  }, [])

  return (
    <>
   
      
      <Grid container spacing={4}>
       
        <Grid xs={12} item>
          <SubjBlock items={subj.items} isLoading={isSubjLoading} />
          
        </Grid>
      </Grid>
    </>
  );
};
