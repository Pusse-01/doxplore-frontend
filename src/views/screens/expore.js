import React from 'react'
import PersistentDrawerLeft from '../../sidebar';
import Box from '@mui/material/Box';
import ChatInterface from './../components/chat'
import './styles.css'
import PolicyPage
  from './search';
export default function explore() {
  return (
    <Box sx={{ display: "flex" }}>



      <PersistentDrawerLeft />
      <PolicyPage />



    </Box>


  )
}
