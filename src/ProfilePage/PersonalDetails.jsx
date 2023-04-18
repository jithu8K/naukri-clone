import React from "react";
import "./index.css";
import { string, object, array, boolean } from "yup";
import { IconButton, Paper, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { useState } from "react";
import { Modal } from "../components/Modal";
import { Formik, useFormik } from "formik";
import { ButtonSelector } from "../components/ButtonSelector";
import DatePicker from "../components/DatePicker";
import "react-datepicker/dist/react-datepicker.css";




const INITIAL_USERDATA = {
  gender: "",
  more_information: [],
  marital_status: "",
  date_of_birth: {
    date: "",
    mounth: "",
    year: "",
  },
  category: null,
  abled: null,
  is_career_break: null,
  permit_usa: null,
  permit_for_other_countries: [],
  permanent_address: "",
  home_town: "",
  pincode: null,
  languages: [],
};
const personal_information_schema = object().shape({
  gender: string().required("Please select gender"),
  more_information: array().of(string()),
  marital_status: string().required("Please select any one"),
  date_of_birth: object().shape({
    date: string().required("Date is required"),
    month: string().required("Mounth is required"),
    year: string().required("Year is required"),
  }),
  category: string().nullable(),
  abled: boolean().required("Please fill this field"),
  is_career_break: boolean().required("Please fill this field"),
  permit_usa: string().nullable(),
  permit_for_other_countries: array().of(string()).nullable(),
  permanent_address: string().required("please provaid address"),
  home_town: string().required("* required field"),
  pincode: string().required("* required field"),
  languages: array().of(
    object().shape({
      language_name: string().required("please enter language"),
      level: string().required("select proficiency"),
      ability: array().of(string()),
    })
  ),
});


const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "transgender", label: "Transgender" },
];
// const moreInfoOptions = [{ value: "" , label : ""}];
const moreInfoOptions = [
  { value: "single parent", label: "Single Parent" },
  { value: "Working mother", label: "Working Mother" },
  { value: "Served in military", label: "Served in militry" },
  { value: "Retired(60+)", label: "Retired(60+)" },
  { value: "LGBTQ", label: "LGBTQ" },
];
const maritalStatus = [
  { value: "Single/unmarried", label: "Single/unmarried" },
  { value: "married", label: "married" },
  { value: "Widowed", label: "widowed" },
  { value: "divorced", label: "divorced" },
  { value: "separated", label: "separated" },
  { value: "other", label: "other" },
];


const Category = [
  { value: "General", label: "general" },
  { value: "Scheduled Caste(SC)", label: "Scheduled caste(SC)" },
  { value: "Scheduled Tribe(ST)", label: "Scheduled Tribed(ST)" },
  { value: "OBC-Creamy", label: "OBC-creamy" },
  { value: "OBC-Non creamy", label: "OBC-non creamy" },
  { value: "other", label: "other" },
];
const PersonalDetailsForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Formik initialValues={INITIAL_USERDATA}>
      {({ values, setFieldValue }) => (
        <form>
          <div
            className="box"
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {console.log("tejas", values)}
            <h2>Personal Details</h2>
            <ButtonSelector
              options={genderOptions}
              isMulti={false}
              onClick={(value) => {
                setFieldValue("gender", value);
                console.log(value);
              }}
              value={values.gender}
            />
            <div className="more-info-box">
              <div>
                <div className="heading">More Information</div>
                <p>
                  Companies are focusing on equal opportunities and might be
                  looking for candidates from diverse backgrounds.
                </p>
              </div>
              <div className="more-info-btn">
                <ButtonSelector
                  isMulti={true}
                  options={moreInfoOptions}
                  onClick={(value) => setFieldValue("more_information", value)}
                  value={values.more_information}
                />
              </div>
            </div>
            {/* marital_status_box */}
            <div className="more-info-box">
              <div className="heading">Marital Status</div>
              <ButtonSelector
                isMulti={false}
                options={maritalStatus}
                onClick={(value) => setFieldValue("marital_status", value)}
                value={values.marital_status}
              />
            </div>
            {/* Date_of_birth_box */}
            <div>
              <div className="heading">Date of Birth </div>
              <div className="more_info_btn">
              <DatePicker selectDate={values.date_of_birth} onSelectDate={({ field, value}) => {
                setFieldValue("date_of_birth",{...values.date_of_birth,[field] : value})
              }} />
              </div>
            </div>
            {/* Category_box */}
            <div className="more-info-box">
              <div>
                <div className="heading">Category</div>
                <p>
                  Companies welcome people from various categories to bring
                  equality among all citizens
                </p>
              </div>
              <div className="more-info-btn">
                <ButtonSelector
                  isMulti={false}
                  options={Category}
                  onClick={(value) => setFieldValue("Category", value)}
                  value={values.Category}
                />
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};
const PersonalDetails = () => {
  const [Open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handelClose = () => setOpen(false);


  return (
    <>
      <Paper className="Resume" elevation={4} square>
        <div className="heading-row">
          <h2>Personal Details</h2>
          <IconButton color="primary" onClick={handleOpen}>
            <ModeEditOutlineOutlinedIcon />
          </IconButton>
        </div>
        <div className="box-split">
          {/* box split 1 */}
          <div className="box-split-box">
            <div className="box-split-item">
              <div className="heading">Personal Details</div>
              <span>Info..</span>
            </div>
            <div className="box-split-item">
              <div className="heading">Date of Birth</div>
              <span>Info..</span>
            </div>
            <div className="box-split-item">
              <div className="heading">Category</div>
              <span>Info..</span>
            </div>
            <div className="box-split-item">
              <div className="heading">Differently Abled</div>
              <span>Info..</span>
            </div>
          </div>
          {/* box split 2 */}
          <div className="box-split-box">
            <div className="box-split-item">
              <div className="heading">Career Bank</div>
              <span>Info</span>
            </div>
            <div className="box-split-item">
              <div className="heading">Work Permit</div>
              <span>Info</span>
            </div>
            <div className="box-split-item">
              <div className="heading">Address</div>
              <span>Info</span>
            </div>
          </div>
        </div>


        <Modal isOpen={Open} onClose={handelClose}>
          <PersonalDetailsForm />
        </Modal>
      </Paper>
    </>
  );
};


export default PersonalDetails;



