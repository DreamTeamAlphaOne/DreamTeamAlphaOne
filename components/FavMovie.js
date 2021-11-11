import { useState } from 'react';
import useResource from '../hooks/useResource';

export default function FavMovie(props) {

    const [favMovieInputs, setFavMovieInputs] = useState({});
    const { createReesource } = useResource();

   const handleChange = (event) => {
       const newFavMovieInputs = {
           ...favMovieInputs,
           [event.target.name]: event.target.value,
       };
       setFavMovieInputs(newFavMovieInputs);
   };

   const handleSubmit = (event) => {
       event.preventDefault();
       createReesource(formInputs);
   };

   return (
       <form
            onSubmit={handleSubmit}
            className="items-center w-3/4 mx-auto bg-purple-500 border-4 border-purple-700">
            
            <label>Movie To Be Saved</label>
            <button className=""></button>
       </form>
   )
}