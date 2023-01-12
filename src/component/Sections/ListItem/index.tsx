import { useState } from "react";
import { Link, Outlet } from "react-router-dom"

import "./index.css"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';



interface item {
    data: any[],
    meta: {
        count: number
    }
}

const ListItem = ({list, isFetching, type}: {list: item, isFetching: boolean, type: string} ) => {
    const [moveDiv, setMoveDiv] = useState(0)

    
    const listItem = list
    let lengthArray = listItem?.data.length

    const handleMoveRight = () => { 
        let move = moveDiv - Math.round(window.innerWidth / 2)
        let widthDiv = lengthArray * 180
        if((window.innerWidth - widthDiv) > move){
            move = (window.innerWidth - widthDiv) 
        }
        setMoveDiv(move) 
    }

    const handleMoveLeft = () => { 
       let move = moveDiv + Math.round(window.innerWidth / 2)
        if(move > 0 ){
             move = 0
        }
        setMoveDiv(move)
    }

    return (
        <section className="container--anime"> 
                <div className="titleAnimes">
                    <h3>
                       {type}
                    </h3>
                    <div className="rows">
                        <p>
                            {listItem?.meta.count}
                        </p>
                        <Link to="/pagination">
                            SEE ALL
                        </Link>
                        <div className="rowLeft" onClick={handleMoveLeft}>
                            <ArrowLeftIcon style={{
                                fontSize: 40
                            }}/>
                        </div>

                        <div className="rowRight" onClick={handleMoveRight}>
                            <ArrowRightIcon style={{
                                fontSize: 40
                            }}/>
                        </div>
                       
                    </div>
                </div>
                
                <div>
                    {isFetching && <p>Carregando...</p>}
                    <div 
                        className="animes" 
                        style={{
                            width: lengthArray * 170,
                            left: moveDiv
                    }}>

                         {listItem && listItem?.data.map((item: any) => {
                            
                            return (
                                <div key={item.id} className="anime">
                                    <a>
                                        <img src={item.attributes.posterImage.original} alt="thumbnail" />

                                        <h3>{item.attributes.canonicalTitle}</h3>     
                                    </a>
                                </div>
                                )
                        })} 
                   </div>         
                </div> 
            <Outlet/>
        </section>
    )
}

export default ListItem ;
