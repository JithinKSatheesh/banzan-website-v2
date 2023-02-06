import React, { useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";


import _store_cup from 'Assets/store_cup.png'
import _store_cup_2 from 'Assets/store_cup_2.png'
import _store_shirt_1 from 'Assets/store_shirt_1.png'
import _store_shirt_2 from 'Assets/store_shirt_2.png'
import _store_shirt_3 from 'Assets/store_shirt_3.png'
import _store_shirt_4 from 'Assets/store_shirt_4.png'
import _store_shirt_5 from 'Assets/store_shirt_5.png'
import _store_shirt_6 from 'Assets/store_shirt_6.png'
import _store_shirt_7 from 'Assets/store_shirt_7.png'
import _store_shirt_8 from 'Assets/store_shirt_8.png'
import _store_book from 'Assets/store_book.png'
import _store_book_2 from 'Assets/store_book_2.png'
import _store_badge from 'Assets/store_badge.png'
import _store_fans_collage from 'Assets/store_fans_collage.png'
import { Footer } from 'Components/Footer'

const _right_icon = <svg fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M24 12l-9-8v6h-15v4h15v6z" /></svg>
const _coffee_icon = <svg fill='#f8d249' width="104" height="104" viewBox="0 0 24 24"><path d="M13 24h-7c-1.857-3.32-3.742-8.431-4-16h15c-.255 7.504-2.188 12.781-4 16zm5.088-14c-.051.688-.115 1.355-.192 2h1.707c-.51 1.822-1.246 3.331-2.539 4.677-.283 1.173-.601 2.25-.939 3.229 3.261-2.167 5.556-6.389 5.875-9.906h-3.912zm-7.714-3.001c4.737-4.27-.98-4.044.117-6.999-3.783 3.817 1.409 3.902-.117 6.999zm-2.78.001c3.154-2.825-.664-3.102.087-5.099-2.642 2.787.95 2.859-.087 5.099z" /></svg>
const _download_icon = <svg fill='#c42f48' width="18" height="18" viewBox="0 0 24 24"><path d="M16 11h5l-9 10-9-10h5v-11h8v11zm3 8v3h-14v-3h-2v5h18v-5h-2z" /></svg>
// const _shop_icon = <svg fill='#f8d249' width="74" height="74" viewBox="0 0 24 24"><path d="M9.939 0l-.939 4.971v1.098c0 1.066-.933 1.931-2 1.931s-2-.865-2-1.932v-1.097l2.996-4.971h1.943zm-3.052 0l-2.887 4.971v1.098c0 1.066-.933 1.931-2 1.931s-2-.865-2-1.932v-1.097l4.874-4.971h2.013zm17.113 6.068c0 1.067-.933 1.932-2 1.932s-2-.933-2-2v-1.098l-2.887-4.902h2.014l4.873 4.971v1.097zm-10-1.168v1.098c0 1.066-.933 2.002-2 2.002s-2-.933-2-2v-1.098l1.047-4.902h1.905l1.048 4.9zm2.004-4.9l2.993 5.002v1.098c.001 1.067-.93 1.9-1.997 1.9s-2-.933-2-2v-1.098l-.939-4.902h1.943zm-15.004 10v14h10v-2h-8v-10h18v12h2v-14h-22zm18 4h-6v10h6v-10z"/></svg>


const transfromSlide_S1 = (val) => (`translate(0px,${val * 0.1}px)`);
const transfromSlide_N1 = (val) => (`translate(0px,-${val * 0.1}px)`);
const transfromSlide_NN1 = (val) => (`translate(0px,-${val * 0.5}px)`);
const transfromSlide_NN2 = (val) => (`translate(0px,-${val * 0.3}px)`);
const transfromSlide_N2 = (val) => (`translate(0px,-${val * 0.2}px)`);

export default function Store(props) {

    const storeRef = useRef()

    const _style = {
        _container: {
            position: 'fixed',
            width: '100%',
            marginTop: '50px',
            height: '100%',
            overflowY: 'scroll',
            overflowX: 'hidden'
        }
    }

    const [{ scrollPos }, setSpringVal] = useSpring(() => ({
        scrollPos: 0,
        // config: { mass: 5, tension: 350, friction: 40 }
    }))

    const handleScroll = () => {
        const scrollPos = storeRef.current.scrollTop;
        setSpringVal({ scrollPos })

    }


    return (
        <>
            <div className="Maincontainer">
                <Helmet>
                    <title>Banzan Studios - Partners - | Glance |  Jio | KSUM  </title>
                    <link rel="canonical" href="https://www.banzan.co/store" />
                </Helmet>
                <div
                    onScroll={handleScroll}
                    ref={storeRef}
                    style={_style._container}>
                    <StoreHeroPage scrollPos={scrollPos} />
                </div>
            </div>
        </>
    )
}

const StoreHeroPage = ({ scrollPos }) => {
    const _style = {
        _hero_container: {
            position: "relative",
            margin: 'auto',
            maxWidth: '850px',
            width: '90%',
        },
        img_style: {
            // border:'10px solid #c42f48',
            border: '10px solid white',
            borderRadius: '10px',
            boxShadow: '0px 0px 5px 5px #21212127',
            height: '150px',
            margin: '10px'
        },
        img_fan: {
            width: '100%',
            maxWidth: '550px',
            border: '10px solid white',
            borderRadius: '10px',
            boxShadow: '0px 0px 5px 5px #21212127',

        }

    };


    const RenderImage = ({ image, alt }) => {

        return (
            <Fade>
                <img className='bg-white' style={_style.img_style} src={image} alt={alt} />
            </Fade>
        )
    }


    return (
        <div
            style={_style._hero_container}
            className="row">
            <div className="col-12">
                <div className="space-50"></div>
                <div className="space-20"></div>
            </div>
            <div className="col-12 col-md-6">
                <Slide top >
                    <animated.h1 style={{ transform: scrollPos.to(transfromSlide_N1) }}
                        className="display-3 text-bold text-center text-md-start" >
                        Partners
                    </animated.h1>
                </Slide>
                {/* <div className="space-50"></div>
                    <Slide bottom >
                        <animated.h2 style={{ transform: scrollPos.to(transfromSlide_S1)}} className=" h6 line-25 text-bold text-center text-md-start ">
                        We run a line of merchandise with our Comic hero. Check out his store
                        </animated.h2>
                    </Slide> */}
            </div>

            {/* <div className=" w-full pt-[50px]">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div className="border-[12px] border-white  rounded-xl bg-white mx-[8px] flex flex-col justify-center">
                            <img src="assets/partners/ksum.jpg" className='max-h-[100px] mx-auto' />
                        </div>
                        <div className="border-[12px] border-white  rounded-xl bg-white mx-[8px] flex flex-col justify-center">
                            <img src="assets/partners/glance.png" className='max-h-[100px] mx-auto' />
                        </div>
                        <div className="border-[12px] border-white  bg-red-200 rounded-xl bg-white mx-[8px] flex flex-col justify-center">
                            <img src="assets/partners/jio.png" className='max-h-[100px] mx-auto' />
                        </div>
                    </div>
                    
                </div> */}
            <div>
                <div className="w-full h-[5px] bg-[#c52f48] mt-[50px]"></div>
            </div>
            <div className='flex flex-wrap justify-between'>
                <div className="w-full md:w-fit md:max-w-[250px] bg-slate-100/80 p-3 rounded-xl mt-[20px]">
                    <div className="pt-[40px] text-[18px] font-bold ">
                        Accelerated by:
                    </div>
                    <div className=" pt-[24px] ">
                        <div className="border-[12px] border-white h-[150px] w-full rounded-xl bg-white shadow  flex flex-col justify-center">
                            <img src="assets/partners/image.png" className=' max-h-[100px] mx-auto ' />
                        </div>
                    </div>
                    <div className=" pt-[24px] ">
                        <div className="border-[12px] border-white h-[150px] w-full rounded-xl bg-white shadow  flex flex-col justify-center">
                            <img src="assets/partners/ngis_logo.png" className=' max-h-[100px] mx-auto ' />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-full md:max-w-[250px] ">
                    <div className="bg-yellow-100/80 p-3 rounded-xl mt-[20px]">

                    <div className="pt-[40px] text-[18px] font-bold ">
                        Supported by:
                    </div>
                    <div className=" pt-[24px]">
                        <div className="border-[12px] border-white h-[150px] w-full  rounded-xl bg-white shadow  flex flex-col justify-center">
                            <img src="assets/partners/ksum.jpg" className='max-h-[100px]   mx-auto' />
                        </div>
                    </div>
                    </div>
                    <div className="bg-yellow-100/80 p-3 rounded-xl mt-[20px]">

                    <div className="pt-[40px] text-[18px] font-bold ">
                        Member of:
                    </div>
                    <div className=" pt-[24px]">
                        <div className="border-[12px] border-white h-[150px] w-full  rounded-xl bg-white shadow  flex flex-col justify-center">
                            <img src="assets/partners/AIGF Logo.png" className='max-h-[100px]   mx-auto' />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="w-full md:w-full md:max-w-[250px] bg-yellow-100/80 p-3 rounded-xl mt-[20px]">
                    <div className="pt-[40px] text-[18px] font-bold ">
                        Game&nbsp;Publishing&nbsp;Partners:
                    </div>
                    <div className=" pt-[24px]">
                        <div className="border-[12px] border-white h-[150px] w-full  rounded-xl bg-white shadow  flex flex-col justify-center">
                            <img src="assets/partners/glance.png" className=' max-h-[100px] mx-auto' />
                        </div>
                        <div className="mt-[24px] border-[12px] border-white h-[150px] w-full  bg-red-200 rounded-xl bg-white shadow  flex flex-col justify-center">
                            <img src="assets/partners/jio_games.png" className=' max-h-[100px] mx-auto' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <Footer />
                <div className="space-100"></div>
            </div>
            <div className="col-12">

                <animated.div
                    style={{
                        position: 'absolute',
                        // left : '250px',
                        transform: scrollPos.to(transfromSlide_NN1)
                    }}
                    className="opacity-[0.2]"
                >
                    {_coffee_icon}
                </animated.div>
            </div>
        </div>
    )
}

