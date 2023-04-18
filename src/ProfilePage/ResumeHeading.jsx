import React from "react";

import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton,Paper, Button } from "@mui/material";
import { useState } from "react";
import { Modal } from "../components/Modal";

import "./index.css";
const ResumeHeading = () => {
  const [Open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handelClose = () => setOpen(false);
  return (
    <Paper className="Resume" elevation={4} square>
      <div className="heading-row">
        <h2>Resume Heading</h2>
        <IconButton onClick={handleOpen} color={"primary"}>
          <ModeEditOutlineOutlinedIcon /> 
        </IconButton>
      </div>
      <p>
        It is the first thing recruiters notice in your profile. Write concisely
        what makes you unique and right person for the job you are looking for.
      </p>
      <Modal isOpen={Open} onClose={handelClose}>
        <div className="box" style={{ gridTemplateRows:"var(--resume-heading)"}}>
          <div>
            <h2>Resume Heading</h2>
            <p>
              It is the first thing recruiters notice in your profile. Write
              concisely what makes you unique and right person for the job you
              are looking for.
            </p>
            
          </div>
          <textarea />

          <div className="modal-button">
            <Button>Cancel</Button>
            <Button variant="contained">Save</Button>
          </div>
        </div>
      </Modal>
    </Paper>
  );
};

export default ResumeHeading;
