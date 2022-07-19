import {useState} from 'react'
import Grid from '@mui/material/Grid';
import { Navbar } from './Navbar';
import { displayGifs } from './displayGifs';


export const Gridd = () => {

  const [search, setSearch] = useState ('')

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Navbar setSearch={setSearch}/>
      </Grid>
      <Grid height={220} item xs={12}>
        Trending Gifs
      </Grid>
      <Grid height={335} item xs={12}>
        {
          <h1>{search}</h1>
        }
      </Grid>
    </Grid>

  )
}
