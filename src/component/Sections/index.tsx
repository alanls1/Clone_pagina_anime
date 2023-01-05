import { Launch } from "./Launch";
import { Animes } from "./Animes";
import { Mangas } from "./Mangas";

export function Sections() {
    return(
        <div>
            <Launch />
            <Animes/>
            <Mangas/>
        </div>
    )
}