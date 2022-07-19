import { FormControl, OutlinedInput } from '@mui/material'
import {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const InputSearch = ({setSearch}) => {

    const [value, setValue] = useState('')
    const[error, setError] = useState(false)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(value === ""){
            setError(true)
            return
        }setError(false)
        setSearch(value)
    }


  return (
    <>
        <form onSubmit={handleSubmit}>
            <FormControl variant='outlined' sx={{m:1, width:'25ch'}}>
                <OutlinedInput
                    onChange={handleChange}
                    value={value}
                    type='text'
                    placeholder='Buscar'
                    inputProps={{style:{color:'white'}}}
                    startAdornment={
                         <SearchIcon sx={{mr:1, my:0.5}} color='secondary'/>
                     }
                     endAdornment={
                          <KeyboardArrowDownIcon sx={{mr:1, my:0.5, cursor:'pointer'}} color='secondary'/>
                      }
                /> 
            </FormControl>
        </form>
        { error ? <p className='error'>campo vacio</p> : ""}
    </>
    )
}
