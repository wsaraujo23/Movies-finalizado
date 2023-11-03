
import { useEffect, useState } from "react";
import { Box } from "./Style"
import { seriesAr, topSeri } from "../../services/getData";
import Slider from "../../components/slider/Slider";

function Series() {

    const [topSeriee, settopSeriee] = useState()
    const [serieNoar, setserieNoar] = useState()





    useEffect(() => {

        async function dataSeriee() {

            Promise.all([

                topSeri(),
                seriesAr()

                // aqui estou chamando minhas fuction para dentro dos hoocks, sempre colocar o array
            ]).then(([topSeri, seriesAr]) => {
                // nao precisa de virgula

                settopSeriee(topSeri)
                setserieNoar(seriesAr)

            })
                //catch serve para ver o erro
                .catch((error) => console.error(error))




        }

        dataSeriee()
    }, [])


    return (
        <Box>
            <h2>series</h2>
            {
                topSeriee &&
                <Slider info={topSeriee} title={'seire'} />
            }
            {
                serieNoar &&
                <Slider info={serieNoar} title={'no ar'} />
            }
        </Box>
    )
}

export default Series