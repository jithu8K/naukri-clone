import React from "react";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import Paper from '@mui/material/Paper';
import { IconButton } from "@mui/material";

const Projects = () => {
  return (
          <Paper className='Resume'  elevation={4} square>
          <div className="heading-row">
            <h2>Projects</h2>
          <IconButton color="primary">
            <ModeEditOutlineOutlinedIcon/>
          </IconButton>
          </div>
          <p>
          Add details about projects you have done in college, internship or at work.
         </p>
        </Paper>
  );
};

export default Projects;
