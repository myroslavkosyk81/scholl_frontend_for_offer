import React from "react";
import styles from "./SideBlock.module.scss";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export const SideBlock = ({ title, children }) => {
  return (
   
    <Paper classes={{ root: styles.titleAll }}>
        <div className={ styles.title }>
          {title}
        </div>
        <div>
          {children}
        
        </div>
    </Paper>
   
  );
};
