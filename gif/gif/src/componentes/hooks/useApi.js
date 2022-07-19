import { useEffect, useState } from "react"

const useApi = (url) =>{
    const [data, setData] = useState(null)
    const [loading, setloading] = useState(false)

    const fetchApi = () => {
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(respuestaJson =>{
            setloading(true)
            setData(respuestaJson.data)
        })
        .catch(error => console.log(error))
    }
    useEffect(() =>{
        fetchApi()
    }, [url])
    return (loading, data)
}


export default useApi;