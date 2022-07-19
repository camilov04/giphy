import React from 'react'
import useApi from '../hooks/useApi'
import { imageItem } from './imageItem'


export const DisplayGifs = ({category}) => {
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=xZkU6poNBP6x6Rf8Rgs4a9PlKGUFKY2M&q=${category}&limit=5'
    const {loading, data} = useApi(url)
    return (
    <div className='container-gif'>
       <h1>displayGifs</h1>
       {
        loading ? 
        data.map(img=>{
            <imageItem key={img.id} title={img.title} url={img.images.downsized_medium.url}/>
        })
        : ''
       }
       
        {category} 
    </div>
    
  )
}

