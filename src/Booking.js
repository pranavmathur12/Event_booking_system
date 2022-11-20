import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Booking.css";
import { useHistory } from "react-router-dom";

export default function Booking() {
  const [name, setName] = useState("");
  const [people, setPeople] = useState();
  const [email, setEmail] = useState("");
  let history = useHistory();

  const openPopup = (e) => {
    e.preventDefault();
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
  };

  const handleClick = (e) => {
    e.preventDefault();
    const booking = { name, people, email };
    console.log(booking);
    fetch("http://localhost:8080/booking/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    }).then(() => {
      console.log("New Student added");
    });
  };
  // useEffect(() => {
  //   fetch("http://localhost:8080/booking/getAll")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setBookings(result);
  //     });
  // }, []);
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="main">
        <div className="details">
          <h2>Fill in your details </h2>
          <div className="textfield">
            <TextField
              id="outlined-basic"
              label="Your Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br></br>
            <TextField
              id="outlined-basic"
              label="No. of people"
              variant="outlined"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
            />
            <br></br>
            <TextField
              id="outlined-basic"
              label="Email_Id"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br></br>
          <Button variant="contained" color="secondary" onClick={handleClick}>
            Save
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="contained" color="secondary" onClick={openPopup}>
            Submit
          </Button>
        </div>
      </div>
      <div className="popup" id="popup">
        {/* <img
          className="header_icon"
          src="https://1000logos.net/wp-content/uploads/2021/09/HCL-Logo.png"
          alt=""
        /> */}
        <h2>Thank you!</h2>
        <p>Your details are sucessfully submitted</p>
        <button onClick={() => history.push("/")}>Ok</button>
      </div>
    </Box>
  );
}
