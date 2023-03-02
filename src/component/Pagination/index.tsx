import axios from "axios";
import qs from "qs";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { NumberPages } from "./NumberPages";

import "./index.css";


export function Pagination(){
    const [ offset, setOffset ] = useState(0)
    const [ itemData, setItemData] = useState([])

    const LIMIT = 12
        
    const { data, isFetching } = useQuery("pagination", async () => {
        const queryString = {
            page:{
                limit: LIMIT,
                offset
            }
        }
        const response = await axios.get(`https://kitsu.io/api/edge/anime?${qs.stringify(queryString)}`)
        return response.data
    })

    useEffect(() => setItemData(data?.data), [])
    console.log(itemData)
    return(
        <>
            <section>
                <h2>Anime</h2>
                <div className="listAnime">
                    <h3>Adicionado recentemente</h3>
                    <div>
                        {isFetching && <p>Carregando...</p>}
                    </div>
                </div>
            </section>

            <ul className="pagination">
                <NumberPages 
                limit={LIMIT} 
                total={data} 
                offset={offset} 
                setOffset={setOffset} 
                />
            </ul>
        </>
    )
    
}