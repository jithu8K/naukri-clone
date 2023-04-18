import React from 'react'
import './index.css'
import { Divider } from '@mui/material'
import Paper from '@mui/material/Paper';

const SideNav = () => {
  return (
    <Paper className='sub-nav' elevation={4}>
            <div style={{padding:"15px"}}>
            <h3 style={{padding:"8px",height:"25px"}}>Quick Links</h3>
            <Divider/>
            <div className='sub-nav-list' id='fix'>
              <a>Resume</a>
              </div >
            <div className='sub-nav-list'>
              <a>Resume Heading</a>
              <a id='side-btn'>ADD</a>
              </div >
            <div className='sub-nav-list'>
              <a>Key Skills</a>
              <a id='side-btn'>ADD</a>
              </div >
            <div className='sub-nav-list'>
              <a>Education</a>
              <a id='side-btn'>ADD</a>
              </div >
            <div className='sub-nav-list'>
              <a>IT Skills</a>
              <a id='side-btn'>ADD</a>
              </div >
            <div className='sub-nav-list'>
              <a>Projects</a>
              <a id='side-btn'>ADD</a>
              </div >
            <div className='sub-nav-list'>
              <a>Profile Summary</a>
              <a id='side-btn'>ADD</a>
              </div >
            <div className='sub-nav-list'>
              <a>Accompdiv</a>
               </div >
            <div className='sub-nav-list'>
              <a>career</a>
            </div >
            <div className='sub-nav-list'>
              <a>Personal</a>
            </div >
            </div>
    </Paper>
  )
}

export default SideNav