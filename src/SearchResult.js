import './SearchResult.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import { useHistory } from "react-router-dom";
import React, { useState } from 'react';

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    book,
}) {
   let history = useHistory();
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="searchResult__heart" />
      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>

        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon className="searchResult__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResults__book">
            <p>{book}</p>
          </div>
          <div className="searchResults__room">
            <Button onClick={() => history.push("/final")} variant="outlined">
              Book Room
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult
