'use strict'
import React, { useState } from 'react';

const superagent = require('superagent');
//require('dotenv').config();
const MOVIECACHE = {};
//const { REACT_APP_MY_ENV } = process.env;

export default function ShowMovie(){
  
  function get_movie(movie_name){
    const movie = movie_name;

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
        const movie_title = movie.title
        const movie_overview = movie.overview
        console.log(movieArray)
        console.log(movie)
        console.log(movie_title)
        console.log(movie_overview)
      })
  };
  
  
  return (
    <div>
      {get_movie('toy story')}
    </div>
  )
}