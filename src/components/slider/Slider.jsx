import { Container } from './Style'
import { Swiper, SwiperSlide } from 'swiper/react';
import Cards from '../cards/Cards';

function Slider({ info, title }) {



    return (

        <Container >
            <h1>{title}</h1>
            {/* caixa do slider */}
            <Swiper grabCursor spaceBetween={10} slidesPerView={'6'}>
                {
                    info.map((item, index) => (

                        <SwiperSlide key={index}>

                            <Cards item={item} />

                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </Container >

    )
}

export default Slider