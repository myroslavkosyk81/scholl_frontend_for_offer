import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import { GradeBlock } from '../components/GradeBlock';
import { fetchPosts, fetchSubj, fetchGrade } from '../redux/slices/posts';


export const Home = () => {
  const dispatch = useDispatch();
  const { posts, subj, grade} = useSelector(state => state.posts);

  const isPostLoading = posts.status === 'loading';
  const isSubjLoading = subj.status === 'loading';
  const isGradeLoading = grade.status === 'loading';
// console.log(subj)

  React.useEffect(() => {
    
    dispatch(fetchGrade());
    
  }, [])

  return (
    <>
   
    
      <Grid container spacing={4}>
        
        <Grid xs={12} item>
          
          <GradeBlock items={grade.items} isLoading={isGradeLoading} />
         
        </Grid>
      </Grid>
    </>
  );
};
