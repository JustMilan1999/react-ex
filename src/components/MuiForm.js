import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import {
  muiform,
  mainBox,
  muiFormLabel,
  formControlRadio,
  HoobieText,
  hobbieCheckBox,
} from "../Styles/MuiForm1.style";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const MuiForm = () => {
  const [age, setAge] = React.useState("selectYourAge");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box sx={mainBox}>
        <Box sx={muiform}>
          <FormLabel sx={muiFormLabel}>Name:-</FormLabel>
          <TextField
            label=""
            placeholder="Name"
            variant="outlined"
            fullWidth="true"
          />
        </Box>
        <Box sx={muiform}>
          <FormLabel sx={muiFormLabel}>Gender:-</FormLabel>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="male"
              name="radio-buttons-group"
              sx={formControlRadio}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box sx={muiform}>
          <FormLabel sx={muiFormLabel}>Age:-</FormLabel>
          <FormControl fullWidth>
            {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              // label="selectYourAge"
              onChange={handleChange}
            >
              <MenuItem disabled="true" value={"selectYourAge"}>
                Select Your Age
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={muiform}>
          <FormLabel sx={muiFormLabel}>Hobbies:-</FormLabel>
          <Box sx={hobbieCheckBox}>
            <Checkbox {...label} />
            <FormLabel sx={HoobieText}>Cricket</FormLabel>
            <Checkbox {...label} />
            <FormLabel sx={HoobieText}>FootBall</FormLabel>
            <Checkbox {...label} />
            <FormLabel sx={HoobieText}>Chess</FormLabel>
          </Box>
        </Box>
        <Button variant="contained">Submit</Button>
      </Box>
    </>
  );
};

export default MuiForm;
