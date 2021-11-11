'use strict'
import React, { useState } from 'react';

const superagent = require('superagent');
//require('dotenv').config();
const MOVIECACHE = {};
//const { REACT_APP_MY_ENV } = process.env;

export default function ShowMovie(){
  const [movie, setMovie] = useState('');
  const [movie_title, setMovie_title] = useState('')
  const [movie_overview, setMovie_overview] = useState('')
  const [poster_path, setPoster_path] = useState('')
  

  const url = 'https://api.themoviedb.org/3/search/movie';

  const query = {
    api_key: '055363d78c322852d440e2af58b1a388',
    query: movie
  }

  superagent
    .get(url)
    .query(query)
    .then(movieResults => {
      const movieArray = movieResults.body.results
      const movie = movieArray[0]
      const movie_title = setMovie_title(movie.title)
      const movie_overview = setMovie_overview(movie.overview)
      const poster_path = setPoster_path("https://image.tmdb.org/t/p/w300"+movie.poster_path)
      // console.log(movieArray)
    })
  
  function handleChange(event) {
    const movie = setMovie(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  
  return (
    <div className="pt-3">
      <img src={poster_path} />
      <h1>{movie_title}</h1>
      <p>{movie_overview}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Movie: 
          <input type="text" onChange={handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}