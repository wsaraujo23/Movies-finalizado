import { useState, useEffect } from 'react';
import { Container, Info, Poste, LogoOne, Caixa } from './Style.js'
import BtnnLef from '../../components/button/index.jsx'
import Slide from '../../components/slider/Slider.jsx';
import { getImg } from '../../utils/getImg.js';
import Modal from '../../components/modal/Modal.jsx';
import { topSeri, getMovies, topMovis, topTodayy, moviePorVir } from '../../services/getData.js';
import Footer from '../../components/footer/Footer.jsx';
function Home() {
    // hooks para gurdar os dados do filmes
    const [movies, setMovies] = useState()
    // estado do top movis
    const [topMovies, setTopMovies] = useState()
    // topSeries
    const [topSeries, setTopSeries] = useState()
    // exibidos hojes
    const [today, setToday] = useState()
    // modal
    const [modalTrue, setModalTrue] = useState(false)
    // filems por vir
    const [moiviPorvir, setMoviPorvir] = useState()

    // ussando o fect para controlar a entrada de filmes pois vem varios em repetiçao
    useEffect(() => {

        // // === este e o primeiro jeito de criar o codigo ele fuciona mais demora para chamar api==//

        // // aqui je uma fuction vazia onde guardo os hook e as fuction exportado,,, depois  chamndo a fuctio dando sainda de todos os dados para seis devidos lugares

        // =========================================================================//

        // async function dataGet() {
        //     // aqui estou chmando o sethoock  e exportando as fuction criada onde esta api chamando os dados de filmes e series  para guardar dentro do novo hoocks
        //     setMovies(await getMovies())
        //     setTopMovies(await topMovis())
        //     setTopSeries(await topSeri())
        //     setToday(await topTodayy())


        // }

        // dataGet()

        //=======================================================================//

        //=========== este segundo modo eu uso para melhor o code e a chegada da ap mais rapido 
        async function dataGet() {
            // chamando a promes para trazer todos fuctio de data 
            Promise.all([
                // tem que usar virgula
                getMovies(),
                topMovis(),
                topSeri(),
                topTodayy(),
                moviePorVir()

                // aqui estou chamando minhas fuction para dentro dos hoocks, sempre colocar o array
            ]).then(([getMovies, topMovis, topSeri, topTodayy, moviePorVir]) => {
                // nao precisa de virgula
                setMovies(getMovies)
                setTopMovies(topMovis)
                setTopSeries(topSeri)
                setToday(topTodayy)
                setMoviPorvir(moviePorVir)

            })
                //catch serve para ver o erro
                .catch((error) => console.error(error))




        }


        dataGet()


    }, [])



    return (

        <>
            {/* trava para rodar se for true */}
            {
                movies && (
                    // {/* usando o getimg importado la do utils */}

                    <Container img={getImg(movies.backdrop_path)}>


                        {/* modal do treller */}
                        {modalTrue && (
                            //enviando tudo para o modal
                            <Modal movieId={movies.id} setModalTrue={setModalTrue} />
                        )

                        }

                        <Caixa>
                            {/* informaçao dos titulos do filmes=== uso dos butao para ver os treler */}
                            <Info>
                                <h1>{movies.title}</h1>
                                <p >{movies.overview}</p>
                                {/* caixa de butoes  */}
                                <div>
                                    <BtnnLef onClick={() => setModalTrue(true)}>assistir-Trailer</BtnnLef>

                                </div>
                            </Info>
                            {/* caixa do card da direita para receber imagem */}
                            <Poste>
                                {/* usando o getimg importado la do utils */}
                                <LogoOne src={getImg(movies.poster_path)} alt="capa do filme" />
                            </Poste>
                        </Caixa>
                    </Container >
                    // sim da minha tela inicial  abaixo do menu
                )
            } {/* fim do codigo js  da minha capa de filme */}

            {/* ============================================================================================ */}

            {/* inicio da meu box de slider  */}
            {/* // inico da trava que eu quero que slide so roda se for verdadeiro */}
            {today && < Slide info={today} title={'Top de Hoje'} />} {/* fim da trava */}
            {topMovies && < Slide info={topMovies} title={' Filmes'} />} {/* fim da trava */}
            {topSeries && < Slide info={topSeries} title={' Series'} />} {/* fim da trava */}
            {moiviPorvir && < Slide info={moiviPorvir} title={' Por vir'} />} {/* fim da trava */}


            <Footer />

        </>





    )
}

export default Home