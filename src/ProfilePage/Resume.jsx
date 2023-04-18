import React from 'react'
import './index.css'
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
const Resume = () => {
  return (
    <Paper className='Resume' elevation={4} square>
        <div style={{height:"80px"}} > 
        <h3 style={{color:"#666666"}}>Resume</h3>
        <p>Resume is the most important document recruiters look for. Recruiters generally do not look at profiles without resumes.</p>
        </div>
        <div className='upload-content'>
        <Button variant="contained" component="label">
        Upload Resume
        <input hidden accept="image/*" multiple type="file" />
      </Button>
       <p>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>

        </div>
      </Paper>
  )
}

export default Resume