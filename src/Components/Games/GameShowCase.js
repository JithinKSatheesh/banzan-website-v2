import React, { useRef, useState } from 'react'

// swiper
import Swiper from 'react-id-swiper';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css/bundle';

import {data} from 'data'
import {RenderCard} from 'Components/RenderCard'

const _style = {
    showcase_container: {
        width: '90%',
        maxWidth: '850px',
        margin: 'auto',
    },
    image_card: {
        border: '20px solid white',
        borderRadius: '10px',
    },
    img_container: {
        // position:'relative',
        width: '100%',
        height: '200px'
    }
};


export default function Contents(props) {

    const {selectGame} = props
    
    const swiperRef = useRef(null);
    SwiperCore.use([Autoplay, Navigation]);

    const [imageIndex, setImageIndex] = useState(0)

    // const goNext = () => {
    //     if (swiperRef.current && swiperRef.current.swiper) {
    //         swiperRef.current.swiper.slideNext();
    //     }
    // };

    // const goPrev = () => {
    //     if (swiperRef.current && swiperRef.current.swiper) {
    //         swiperRef.current.swiper.slidePrev();
    //     }
    // };

    const params = {
        // slidesPerView: 'auto',
        // centeredSlides: true,
        slidesPerView: 2,
        // loop: true,
        observer: true,
        spaceBetween: 10,
        on: {
            realIndexChange: (swiper) => setImageIndex(swiper.realIndex)
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev'
        //   },
        breakpoints: {
            550: {
                // slidesPerView: 3,
            }
        }

    }
    // console.log(data)

    const RenderCard_ = (item, index) => {
        return(
            <div key={item?.id} >
               <RenderCard  item={item} onClick={selectGame}/>
            </div>
        )
    }


    return (
        <>
        <div style={_style.showcase_container} >
            <div className="text-[24px] font-bold pt-[32px] font-bold ">
                BaBlah
            </div>   
            <div className="pt-[12px]">
                <div className="overflow-hidden ">
                    { data?.featured.length > 0 && 
                      <Swiper {...params} ref={swiperRef}>
                          {data?.featured?.map(RenderCard_)}
                      </Swiper>
                    }
                </div>
            </div>
        </div>
        {/* <div className="pt-[20px]"></div> */}
        <div style={_style.showcase_container} >
            <div className="text-[24px] font-bold pt-[32px] font-bold ">
            Casual
            </div>   
            <div className="pt-[12px]">
                <div className="overflow-hidden ">
                    { data?.casual.length > 0 && 
                      <Swiper {...params} ref={swiperRef}>
                          {data?.casual?.map(RenderCard_)}
                      </Swiper>
                    }
                </div>
            </div>
        </div>
        <div className="pt-[100px]"></div>
        </>
    )
}
