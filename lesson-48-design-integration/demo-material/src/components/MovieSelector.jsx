import Autocomplete from '@mui/material/Autocomplete';
import movies from '../data/moviesDb.js';
import { TextField } from '@mui/material';
import { useState } from 'react';

export default function MovieSelector() {
  const [selectedMovie, setSelectedMovie] = useState();

  const handleMovieSelect = (event, value) => {
    console.log('value', value);
    setSelectedMovie(value);
  }

  return (
    <>
      {
        selectedMovie?.label && (
          <div>
            <div>Title: {selectedMovie.label}</div>
            <div>Year: {selectedMovie.year}</div>
          </div>
        )
      }
      <Autocomplete
        onChange={handleMovieSelect}
        getOptionKey={(option) => option.label}
        getOptionLabel={(option) => `${option.label} (${option.year})`}
        disablePortal
        options={movies}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </>
  )
}