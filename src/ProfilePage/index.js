import React from 'react'
import PersonalDetails from './PersonalDetails'
import './index.css'
import SideNav from './SideNav'
import Resume from './Resume'
import ResumeHeading from './ResumeHeading'
import KeySkills from './KeySkills'
import Employment from './Employment'
import ITskills from './ITskills'
import Projects from './Projects'
const HomeComponent = () => {
  return (
    <div className='Main-container'>
        <div className='profile'></div>
        <div className='last-updated'>last update Today</div>
        <div className='sub-main'>
       <SideNav/>
        <div className='sub-center'>
          <Resume/>
          <ResumeHeading/>
          <KeySkills/>
          <Employment/>
          <ITskills/>
          <Projects/>
          <PersonalDetails/>
        </div>
        </div>
    </div>
  ) 
}
export default HomeComponent