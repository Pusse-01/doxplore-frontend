import React from 'react'
import PersistentDrawerLeft from '../../sidebar';
import Box from '@mui/material/Box';
import './styles.css'
export default function synacal() {
  return (
<Box sx={{display:"flex"}}>
    <PersistentDrawerLeft/>
    <h1 class='content_body'>Synacal</h1>
</Box>


  )
}
