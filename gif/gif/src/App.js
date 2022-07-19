import './App.css';
import { Gridd } from './componentes/layout/Grid';
import { ThemeProvider } from '@mui/material/styles';
import { tema } from './helpers/tema';
import { useState } from 'react';
import { DisplayGifs } from './componentes/layout/displayGifs';


function App() {
  const [category, setCategory]  = useState("")


  return (
    <ThemeProvider theme={tema}>
      <Gridd setCategory={setCategory}/>
      <DisplayGifs category={category}/>
    </ThemeProvider>
  );
}

export default App;
