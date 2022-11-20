import React  from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";

function Signup() {
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const [data,setData]=useState( 
    {
      name :'',
      email:'',
      phone:'',
      password:'',
      conf:'',
    }
  )

  const handleChange=(event)=>{
    console.log("name changed");
  }
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form>
          <TextField fullWidth label="Name" placeholder="Enter your name" id="name" onChange={(e)=>handleChange(e)}/>
          <TextField fullWidth label="Email" placeholder="Enter your email" id="email" />
          {/* <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl> */}
          <TextField
            fullWidth
            label="Phone Number"
            placeholder="Enter your phone number"
            id="phone"
          />
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
            id="password"
          />
          <TextField
            fullWidth
            label="Confirm Password"
            placeholder="Confirm your password"
            id="conf"
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
          />
          <Button type="submit" variant="contained" color="primary">
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}

export default Signup;
