import "./index.css"
import Logo from "../../img/logo.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export function NavBar(){
    return(
        <>
            <nav className="container--nav">
                <div className="nav--left">
                    <div className="logo">
                        <a>
                            <img src={Logo}/>  
                        </a>
                    </div>

                    <ul className="menu">
                        <li style={{position: "relative"}} className="submenu">
                            <a>Animes <ArrowDropDownIcon/></a>  
                            <ul className="hiddenList">
                                <li><a>  <ArrowRightIcon />  Legendados </a></li>
                                <li><a> <ArrowRightIcon /> Dublados </a></li>
                                <li><a> <ArrowRightIcon /> Donghua </a></li>
                                <li><a> <ArrowRightIcon /> Filmes </a></li>
                            </ul>
                        </li>
                        <li><a>Calendário</a> </li>
                        <li style={{position: "relative"}} className="submenu">
                            <a>Gêneros <ArrowDropDownIcon/></a> 
                             <ul className="hiddenList">
                                <li> <ArrowRightIcon /><a> Ação</a></li>
                                <li> <ArrowRightIcon /><a> Artes</a></li>
                                <li> <ArrowRightIcon /><a> Marciais</a></li>
                                <li> <ArrowRightIcon /><a> Aventura</a></li>
                                <li> <ArrowRightIcon /><a> Comédia</a></li>
                                <li> <ArrowRightIcon /><a> Crime</a></li>
                                <li> <ArrowRightIcon /><a> Demônio</a></li>
                                <li> <ArrowRightIcon /><a> Drama</a></li>
                                <li> <ArrowRightIcon /><a> Ecchi</a></li>
                                <li> <ArrowRightIcon /><a> Escolar</a></li>
                                <li> <ArrowRightIcon /><a> Esporte</a></li>
                                <li> <ArrowRightIcon /><a>Fantasia</a> </li>
                                <li> <ArrowRightIcon /><a>Ficção Cientifica</a> </li>
                                <li> <ArrowRightIcon /><a> Histórico</a></li>
                                <li> <ArrowRightIcon /><a> Josei</a></li>
                                <li> <ArrowRightIcon /><a> Magia</a></li>
                                <li> <ArrowRightIcon /><a> Mecha</a></li>
                                <li> <ArrowRightIcon /><a> Militar</a></li>
                                <li> <ArrowRightIcon /><a> Mistério</a></li>
                                <li> <ArrowRightIcon /><a> Terror</a></li>
                                <li> <ArrowRightIcon /><a> Romance</a></li>
                                <li> <ArrowRightIcon /><a> Seinen</a></li>
                                <li> <ArrowRightIcon /><a>Shoujo</a></li>
                                <li> <ArrowRightIcon /><a> Shounen</a></li>
                                <li> <ArrowRightIcon /><a> Shounen Ai</a></li>
                                <li> <ArrowRightIcon /><a> Slice of Life</a></li>
                            </ul> 
                        </li>
                        <li><a>Discord</a> </li>
                    </ul>
                </div>
                <div className="nav--right">
                    <div className="nav--search">
                        <input type="text" placeholder="Pesquisar..." />
                        <a><SearchIcon style={{
                            height: 20,
                            width: 20
                        }}/></a>
                    </div>
                    
                    <a className="nav--user">
                        <AccountCircleIcon/>
                    </a>
                    
                </div>
            </nav>
        </>
    )
}

 