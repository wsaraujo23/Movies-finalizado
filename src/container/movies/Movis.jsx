

import { useEffect, useState } from "react"
import Slider from "../../components/slider/Slider"
import { Box } from "./Style"
import { moviePorVir, topMovis } from "../../services/getData"


function Movis() {

    const [moiviPorvir, setMoviPorvir] = useState()

    const [movieJG, setmoviJG] = useState()

    console.log(movieJG);



    useEffect(() => {

        async function dataPorvir() {

            Promise.all([

                moviePorVir(),
                topMovis()

                // aqui estou chamando minhas fuction para dentro dos hoocks, sempre colocar o array
            ]).then(([moviePorVir, topMovis]) => {
                // nao precisa de virgula

                setMoviPorvir(moviePorVir)

                setmoviJG(topMovis)

            })
                //catch serve para ver o erro
                .catch((error) => console.error(error))




        }


        dataPorvir()


    }, [])





    return (
        <Box>
            <h2>filmes</h2>
            {moiviPorvir &&

                < Slider info={moiviPorvir} title={' Por vir'} />

            } {/* fim da trava */}

            {movieJG &&

                < Slider info={movieJG} title={''} />

            } {/* fim da trava */}

        </Box>
    )
}

export default Movis