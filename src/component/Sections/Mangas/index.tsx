import axios from "axios";
import { useQuery } from "react-query";
import ListItem from "../ListItem";


export function Mangas(){
    const { data, isFetching} = useQuery("manga", async() => {
        const response = await axios.get("https://kitsu.io/api/edge/manga")
    
        return response.data
    })

    return(

        <>
            <ListItem 
                list={data} 
                isFetching={isFetching}
                type="manga"  
            />
        </>
    )
}