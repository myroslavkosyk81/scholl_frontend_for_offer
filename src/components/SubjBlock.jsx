import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from "@mui/material/Skeleton";
import styles from './SubjBl.module.scss';
import { SideBlock } from "./SideBlock";
export const SubjBlock = ({ items, gradeN, isLoading = true }) => {
  return (
    <SideBlock title="ПРЕДМЕТИ">
        
      <List>
        {(isLoading ? [...Array()] : items).map((name, i) => (
          <a
            style={{ textDecoration: "none", color: "black" }}
            href={`/grade/${gradeN}/${name}`}
          >
           
           
            <li >
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <ul className={ styles.subject }>{name}</ul>
                )}
            </li>
            
          </a>
        ))}
      </List>
    </SideBlock>
  );
};
