import React from "react";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import Paper from '@mui/material/Paper';
import { IconButton } from "@mui/material";

const ITskills = () => {
  return (
      <Paper className="Resume" elevation={4} square>
        <div className="heading-row">
          <h2>IT Skills</h2>
          
        <IconButton color="primary" >
          <ModeEditOutlineOutlinedIcon/>
        </IconButton>
        </div>
        <p>
        Specify details about programming languages (such as Java, Python, C/C++, Oracle, SQL etc), softwares (Microsoft Word, Excel, Tally etc) or any other software related knowledge.
        </p>
      </Paper>
  );
};

export default ITskills;
