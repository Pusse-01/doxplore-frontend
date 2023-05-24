import React from 'react'
import PersistentDrawerLeft from '../../sidebar';
import Box from '@mui/material/Box';
import UploadFile from '../components/upload_file';
import FileList from '../components/files';
import './styles.css'

import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";

const Uploads = () => (
  <Uploady destination={{ url: "https://my-server.com/upload" }}>
    <UploadButton />
  </Uploady>
);

export default function documents() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>

      <PersistentDrawerLeft />
      {/* <div></div>
    <div className='content_body'>Documents</div>
    <Uploads/> */}
      <div>
        <UploadFile />
        <FileList />
      </div>

    </Box>


  )
}
