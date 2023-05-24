import React from 'react'
import PersistentDrawerLeft from '../../sidebar';
import Box from '@mui/material/Box';
import './styles.css'
export default function resources() {
  return (
<Box sx={{display:"flex"}}>
    <PersistentDrawerLeft/>
    <h1 class='content_body'>Resources</h1>
</Box>


  )
}
