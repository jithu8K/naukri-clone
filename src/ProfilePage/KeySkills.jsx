import React from 'react'
import CloseIcon from "@mui/icons-material/Close";

import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
// import Paper from '@mui/material/Paper';
import { IconButton , Paper , Button,Modal } from '@mui/material';
import { useState } from 'react';
const KeySkills = () => {
  const [Open, setOpen] = useState(false)
  const handleOpen=()=>setOpen(true)
  const handleClose=()=>setOpen(false)


  return (
    <Paper className='Resume' elevation={4} square>
    <div className='heading-row'>
     <h2>Key Skills</h2>
     <IconButton color='primary' onClick={handleOpen}>
      <ModeEditOutlineOutlinedIcon/>
     </IconButton>
    </div>
    <p>
    Tell recruiters what you know or what you are known for e.g. Direct Marketing, Oracle, Java etc. We will send you job recommendations based on these skills.
    </p>
    <Modal className='modal' open={Open}>
      <div className='box'>
        <div className='close-btn'>
          <h1>KeySkills</h1>
          <IconButton>
            <CloseIcon onClick={handleClose}/>
          </IconButton>
        </div>
      </div>
    </Modal>
    </Paper>
  )
}

export default KeySkills