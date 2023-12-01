import { Box, Divider, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { formSideSectionsContainers,glassmorphismStyle } from '../assets/styles';

function AddImageSidebar() {
  return (
    <Box sx={{...formSideSectionsContainers,...glassmorphismStyle}} minHeight={'301px'} >
    <Typography variant="h5" component="h5">
    Add Image
    </Typography>
    <Divider/>
    <Box>
    <Paper
      variant="outlined"
      style={{
        border: true ? '2px dashed #979797' : '2px dashed #979797',
        padding: 20,
        textAlign: 'center',
        cursor: 'pointer',
        background: true ? '#fff' : '#fafafa',
      }}
    >
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="raised-button-file"
        multiple
        type="file"
      />
      <label htmlFor="raised-button-file">
        <Box display="flex" flexDirection="column" alignItems="center">
          <IconButton color="primary" aria-label="upload picture" component="span">
            <CloudUploadIcon style={{ fontSize: 60 }} />
          </IconButton>
          <Typography>Drage & Drop Image here</Typography>
        </Box>
      </label>
    </Paper>
    </Box>
</Box>
  )
}

export default AddImageSidebar