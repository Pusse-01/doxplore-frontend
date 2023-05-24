import React from 'react'
import PersistentDrawerLeft from '../../sidebar';
import backgroundImage from './../../assets/bg.svg';
import Box from '@mui/material/Box';
import './styles.css'
import HomePage from '../components/home';
import Navbar from '../components/navbar';

export default function home() {
  return (
    <Box
    // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* <Navbar /> */}
      <HomePage />
    </Box>


  )
}
