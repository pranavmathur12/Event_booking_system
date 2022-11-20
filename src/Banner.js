import React, { useState } from 'react'
import './Banner.css'
import Button from '@mui/material/Button';
// import { Button } from "@material-ui/core";
//import {Link} from "react-router-dom"
import Search from './Search';
import { useHistory } from "react-router-dom";

function Banner() {
  const [showSearch, setShowSearch] = useState(false); 
  let history = useHistory();
  return (
    <div className='banner'>
      <div className='banner__search'>
                {showSearch && <Search />}
                <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
      <div className='banner__info'>
                <h1>Accelerate the way we deliver progress</h1>
                <h5>
                    An ethos within an organisation.
                </h5>
                  <Button onClick={() => history.push('/book')} className='explore_button' variant='outlined'>Explore Nearby</Button>
            </div>
    </div>
  )
}

export default Banner
