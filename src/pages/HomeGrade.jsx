import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import { useParams  } from "react-router-dom";
import { SubjBlock } from '../components/SubjBlock';
import { fetchSubjGr } from '../redux/slices/posts';
export const HomeGrade = () => {
  const dispatch = useDispatch();
  const { posts, subj, grade,} = useSelector(state => state.posts);

  //Sorry, I can't show all code. But don't worry, it works! 
// console.log(subj)
  const { gradeN } = useParams();
  React.useEffect(() => {
    
    dispatch(fetchSubjGr(gradeN));
   
  }, [])

  return (
    <>
   
      
      <Grid container spacing={4}>
       
        <Grid xs={12} item>
          <SubjBlock gradeN ={gradeN} items={subj.items} isLoading={isSubjLoading} />
          
        </Grid>
      </Grid>
    </>
  );
};
