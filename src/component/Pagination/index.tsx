import axios from "axios";
import qs from "qs";
import { useState } from "react";
import { useQuery } from "react-query";
import { NumberPages } from "./NumberPages";



export function Pagination(){
    const [ offset, setOffset ] = useState(0)
    const LIMIT = 12

    const { data } = useQuery("pagination", async () => {
        const queryString = {
            page:{
                limit: LIMIT,
                offset
            }
        }
        const response = await axios.get(`https://kitsu.io/api/edge/anime?${qs.stringify(queryString)}`)
        return response.data
    })
    
    console.log(data)
   
    return(
        <>
            <ul>
                <NumberPages 
                limit={LIMIT} 
                total={data.meta.count} 
                offset={offset} 
                setOffset={setOffset} 
                />
            </ul>
        </>
    )
    
}