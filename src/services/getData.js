import api from "./Api"

// api da pagina inicio
export async function getMovies() {

    const { data: { results } } = await api.get('/movie/popular')

    return (

        results[0]

    )
}
// api dos files do cards
export async function topMovis() {

    const { data: { results } } = await api.get('/movie/top_rated')
    return (

        results

    )
}
// api das series do cards
export async function topSeri() {

    const { data: { results } } = await api.get('tv/top_rated')

    return (

        results

    )
}
// api da  filmes do dia 
export async function topTodayy() {

    const { data: { results } } = await api.get('tv/airing_today')

    return (

        results

    )
}

// filmes por vir
export async function moviePorVir() {

    const { data: { results } } = await api.get('movie/upcoming')

    return (
        results
    )

}



// filmes  de  serie
export async function seriesAr() {

    const { data: { results } } = await api.get('tv/on_the_air')

    return (
        results
    )

}