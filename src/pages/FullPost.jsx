import React from "react";
import { useParams  } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import 'katex/dist/katex.min.css';
import axios from '../axios';
import { Post } from "../components/Post";
export const FullPost = () => {
const [data, setData] = React.useState();
const [isLoading, setLoading] = React.useState(true);
const { id } = useParams();

React.useEffect(() => {
  //Sorry, I can't show all code. But don't worry, it works! 
if (isLoading) {
  return <Post isLoading={isLoading} isFullPost/>;
}

  return (
    <>
      <Post
        id={data._id}
        title={data.title}
        // imageUrl={data.imageUrl ? `http://localhost:4444${data.imageUrl}` : ''}
       //Sorry, I can't show all code. But don't worry, it works! 
        <ReactMarkdown remarkPlugins={[gfm, remarkParse, remarkMath, ]} rehypePlugins={[remarkRehype, rehypeKatex, rehypeStringify ]} children={data.text} />
        
        
      </Post>
      //Sorry, I can't show all code. But don't worry, it works! 
    </>
  );
};
