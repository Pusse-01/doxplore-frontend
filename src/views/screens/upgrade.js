import React from 'react'
import PersistentDrawerLeft from '../../sidebar';
import Box from '@mui/material/Box';
import './styles.css'

export default function upgrade() {
  return (
<Box sx={{display:"flex"}}>

    <PersistentDrawerLeft/>
    <div></div>
    <h1 className='content_body'>Upgrade</h1>
    
</Box>


  )
}
