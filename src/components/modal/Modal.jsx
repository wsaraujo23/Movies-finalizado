import { useEffect, useState } from 'react'
import api from '../../services/Api'
import { Background, Caixa, Btnx } from './style'



function Modaal({ movieId, setModalTrue }) {

    const [modal, setMOdal] = useState()




    useEffect(() => {

        async function modalMovies() {

            const { data: { results } } = await api.get(`/movie/${movieId}/videos`)

            setMOdal(results[0])

            console.log(results);

        }

        modalMovies()

    }, [])




    return (

        <Background  >
            {
                //trava de segurança
                modal && (
                    <>

                        <Caixa >
                            <Btnx onClick={() => setModalTrue(false)}>x</Btnx>
                            <iframe src={`https://www.youtube.com/embed/${modal.key}`} title='filmes' width='500px' height='300px' >

                            </iframe>
                        </Caixa >

                    </>
                )
            }


        </Background>

    )
}

export default Modaal