import { Route, Routes } from 'react-router-dom'
import Home from '../container/Home/Home'
import Movies from '../container/movies/Movis'
import Series from '../container/series/Series'
import Layout from '../layout/Layout'

function Rota() {


    return (
        <div>
            <Routes>

                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/filmes' element={<Movies />} />
                    <Route path='/series' element={<Series />} />
                </Route>

            </Routes>



        </div>
    )
}

export default Rota