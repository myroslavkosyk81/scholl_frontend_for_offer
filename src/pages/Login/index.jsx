import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useForm } from 'react-hook-form';

import styles from "./Login.module.scss";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";

export const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    //Sorry, I can't show all code. But don't worry, it works! 
  } = useForm({
    //Sorry, I can't show all code. But don't worry, it works! 
  });
  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    //Sorry, I can't show all code. But don't worry, it works! 
  };
  if (isAuth) {
    return <Navigate to='/' />;
  }

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Вхід в акаунт
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="E-Mail"
          //Sorry, I can't show all code. But don't worry, it works! 
        />
        <TextField 
          className={styles.field} 
          label="Пароль"
         //Sorry, I can't show all code. But don't worry, it works! 
        <Button type="submit" size="large" variant="contained" fullWidth>
          Увійти
        </Button>
      </form>
    </Paper>
  );
};
