import React, { useRef, useState } from 'react'


// swiper
import Swiper from 'react-id-swiper';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css/bundle';


function Partners() {


    const swiperRef = useRef(null);
    SwiperCore.use([Autoplay, Navigation]);

    const params = {
        slidesPerView: 'auto',
        centeredSlides: true,
        slidesPerView: 3,
        loop: true,
        observer: true,
        spaceBetween: 40,
        // on: {
        //     realIndexChange: (swiper) => setImageIndex(swiper.realIndex)
        // },
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

    const RenderPartnerCard = (item) => {

        return(<div key={item.id} className='w-full w-[200px]'>
            <div className="border-[12px] border-white h-[150px] rounded-xl bg-white shadow  flex flex-col justify-center">
                <img src={item.imageURL} className=' max-h-[100px] mx-auto ' />
            </div>

        </div>)
    }

    const _list = [
        {
            id : 1,
            imageURL : "assets/partners/stpi.JPG"
        },
        {
            id : 2,
            imageURL : "assets/partners/image.png"
        },
        {
            id : 3,
        },
        {
            id : 4,
        },
        {
            id : 5,
        },
    ]



    return (<div className='w-full container mx-auto min-w-[300px] overflow-hidden  p-[30px]'>
            
        <div className="max-w-[850px] mx-auto   overflow-hidden">
            {_list.length > 0 &&
                <Swiper {...params} ref={swiperRef}>
                    {_list?.map(RenderPartnerCard)}
                </Swiper>
            }
        </div>

    </div>);
}

export default Partners;