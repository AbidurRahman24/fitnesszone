import { useEffect, useState } from "react"

const useServices = () =>{
    const [product, setProduct] = useState([])
    
    useEffect(() => {
        fetch('https://fitnesszone-server.vercel.app/order')
            .then(response => response.json())
            .then(data => {
                setProduct(data)
            })
    }, [])
    return [product, setProduct]
}
export default useServices;