import React from "react";
import List from "@mui/material/List";
import Skeleton from "@mui/material/Skeleton";
import styles from './GradeBl.module.scss';
import { Link } from 'react-router-dom';
// import { Link } from '@mui/material';
import { SideBlock } from "./SideBlock";


export const GradeBlock = ({ items, isLoading = true }) => {
  return (
    <SideBlock title="КЛАСИ">
       
      <List>
        {(isLoading ? [...Array()] : items).map((name, i) => (
          <a
            style={{ textDecoration: "none", color: "black" }}
            href={`/grade/${name}`}
          >
            
            <li >
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <ul className={ styles.grade }>{name}</ul>
                )}
            </li>
           
          </a>
        ))}
      </List>
    </SideBlock>
  );
};
