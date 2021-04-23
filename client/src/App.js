import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import { Route, Switch } from "react-router-dom";
import MovieCard from "./Movies/MovieCard";
// BROWSER=chrome npm start

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies;

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          // Study this response with a console log
          // and set the response data to the 'movielist' state
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (

    

    <div>

      <SavedList list={[ /* This is stretch */]} />

      <div>

        <Switch>
          <Route path="/movie-list/:id">

            <MovieCard movie={movieList}/>

          </Route>
          <Route path="/">

        <MovieList movies={movieList}/>

        </Route>
        </Switch>
        
        
      </div>
    </div>
  );
}
