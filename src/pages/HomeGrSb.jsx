import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';

import axios from '../axios';
import { useParams  } from "react-router-dom";
import { Post } from '../components/Post';
import { SubjBlock } from '../components/SubjBlock';
import { CommentsBlock } from '../components/CommentsBlock';
import { fetchPostsF, fetchSubj, fetchPostsGr } from '../redux/slices/posts';

export const HomeGrSb = () => {
  const dispatch = useDispatch();
  const { posts, subj, grade, } = useSelector(state => state.posts);
  const isPostLoading = posts.status === 'loading';
  const isSubjLoading = subj.status === 'loading';
  
  const { subjN } = useParams();
  const { gradeN } = useParams();
  
  React.useEffect(() => {
  
    dispatch(fetchPostsGr( [gradeN, subjN] ));
   
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
             
              imageUrl={obj.imageUrl ? `${process.env.REACT_APP_API_URL}${obj.imageUrl}` : ''}
              user={obj.user}
              createdAt={obj.createdAt}
              viewsCount={obj.viewsCount}
              commentsCount={3}
              subj={obj.subj}
              grade={obj.grade}
            
              isEditable
            />
          ),
          )}
        </Grid>
        
      </Grid>
    </>
  );
};
