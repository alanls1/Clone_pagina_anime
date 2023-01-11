import { useQuery } from "react-query";
import axios from "axios";
import ListItem from "../ListItem";


export function Animes(){
    const { data, isFetching } = useQuery("anime", async() => {
        const response = await axios.get("https://kitsu.io/api/edge/anime")

        return response.data
    })


    return (
        <>
            <ListItem 
                list={data} 
                isFetching={isFetching}
                type="Animes" 
            />
        </>
    )
}

 