import axios from "axios"
import { useEffect } from "react"

const Convertion = () =>{
    useEffect(()=>{
        console.log("concertion psge loadded")

        axios({
            method: 'get',
            // url: 'http://api.freecurrencyapi.com/v1/currencies?apikey=gmMxjjMOD9yFLhQKDk8RKaQng3DSsCDh9TJEXnYs&currencies=EUR%2CUSD%2CCAD',
        }).then((response)=>{
            console.log(response.data)
        }).catch((error) => {
            console.error(error);
        });
        
    },[])
    
    return(
    <div className="bg-neutral-very-light-gray">
        
    </div>
    )
}
export {Convertion}