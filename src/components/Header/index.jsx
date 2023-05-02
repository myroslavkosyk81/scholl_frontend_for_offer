import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import logoFile from './LGheader_Grey2.png'
import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuth } from '../../redux/slices/auth';

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onClickLogout = () => {
    if (window.confirm('Ви дійсно бажаєте вийти?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  };

  return (
    
    <div >
      {/* <div className={styles.logofile}> */}
      <div className={styles.logofilediv}>
        <Link to="/"  >
          <img src={logoFile} alt="Головна" className={styles.logofile} />
        </Link>
      </div>
      
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <div className={styles.buttons}>
           
          <Link to="/">
            
            <Button sx={{lineHeight: 0.9, fontSize: '8px', fontSize: '3vw' }}>Головна</Button>
            
          </Link>
          
          <Link  to="/all">
            <Button sx={{lineHeight: 0.9, fontSize: '8px', fontSize: '3vw' }} >Всі статті</Button>
           
          </Link>
          </div>
          
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Link to="/add-post">
                  <Button sx={{lineHeight: 0.9, fontSize: '8px', fontSize: '3vw' }} >Написати</Button>
                </Link>
                //Sorry, I can't show all code. But don't worry, it works!
                  Вийти
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  
                  <Button sx={{lineHeight: 0.9, fontSize: '8px', fontSize: '3vw' }}>Увійти</Button>
                </Link>
                
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

