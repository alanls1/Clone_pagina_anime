import axios from "axios"
import { useQuery } from "react-query"

import "./index.css"

interface item{
    data: any[]
}

export function Launch(){
    const { data, isFetching  } = useQuery<item>('episodes', async () => {
        const response = await axios.get("https://kitsu.io/api/edge/episodes")

        return response.data
    })


    return(
        <section>
            <h2 className="lancamentos">
                Lançamentos
            </h2>
            <div className="container--eps">
                {isFetching && <p> Carregando... </p>}
                {data?.data.map((item) => {
                    return (
                        <div key={item.id} className="anime-eps">
                            <a href={item.links.self}>
                                <img src={item.attributes.thumbnail?.original} alt="thumbnail" />
                                <h3>
                                    {item.attributes.canonicalTitle}
                                </h3>
                            </a>
                            
                        </div>
                    )
                })}
            </div>
        </section>
    )
}


