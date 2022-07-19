import React from 'react'

export const ImageItem = (title,url) => {
  return (
    <div>
        {title}
<br/>    
        {url}
        <img src={url} alt={title} />
        <p>{title}</p>
</div>
  )
}
