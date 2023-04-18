import React from 'react'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';

const Employment = () => {
  return (
    <Paper className='Resume' elevation={4}>
    <div className='heading-row'>
     <h2>Employment</h2>
    <IconButton color='primary'>
      <ModeEditOutlineOutlinedIcon/>
    </IconButton>
    </div>
    <p>
    Mention your employment details including your current and previous company work experience.
    </p>
    </Paper>
  )
}

export default Employment