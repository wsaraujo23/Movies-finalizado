
import { getImg } from '../../utils/getImg'
import { Caixa } from './Style/'

function Cards({ item }) {


    return (
        <Caixa>

            <img src={getImg(item.poster_path)} alt="" />
            {/* <h3>{item.release_date}</h3> */}
            <h3>{item.title || item.name || ''}</h3>
        </Caixa>
    )
}


export default Cards