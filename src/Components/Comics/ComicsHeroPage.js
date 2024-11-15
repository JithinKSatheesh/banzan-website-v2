import React from 'react';
import { Link } from 'react-router-dom'
import { animated } from 'react-spring';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';



// importing images
import _comic_bg from 'Assets/comic_collage.png';
import _bablah from 'Assets/bablah.png';
import _pop_stick from 'Assets/pop_stick.png';
import _bablah_ferrari from 'Assets/bablah_ferrari_chase.png';
import _icon_bablah from 'Assets/icon_bablah.png';
import _icon_twitter from 'Assets/icon_twitter.png';
import _icon_facebook from 'Assets/icon_facebook.png';
import _icon_instgram from 'Assets/icon_instgram.png';
import _icon_webtoons from 'Assets/icon_webtoons.png';
import _icon_strippy from 'Assets/icon_strippy.png';
import _icon_youtube from 'Assets/icon_youtube.png';
import _icon_amazon from './amazon.png';

import _comic_1 from './1.jpeg';
import _comic_2 from './2.jpeg';
import _comic_Cover from './facttales.jpg';



import { Footer } from 'Components/Footer';

const _arrow_down = <svg fill='#1b1d1c' width="24" height="24" viewBox="0 0 24 24"><path d="M12 24l-8-9h6v-15h4v15h6z" /></svg>
const _rightSwipeIcon = <svg fill='#1b1d1c' width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg>


export const ComicsHeroPage = ({ scrollPos }) => {

    const isMobile = window.innerWidth < 400;

    const transfromSlide_S1 = (val) => (`translate(0px,${val * 0.1}px)`);
    const transfromSlide_N1 = (val) => (`translate(0px,-${val * 0.1}px)`);
    const transfromSlide_NN1 = (val) => (`translate(0px,-${val * 0.3}px)`);
    const transfromSlide_N2 = (val) => (`translate(0px,-${val * 0.2}px)`);

    const _style = {
        comics_hero_container: {
            position: "relative",
            margin: 'auto',
            maxWidth: '850px',
            width: '90%',
        },
        comic_cartoons_container: {
            position: "relative",
            width: '100%',
            height: '100%',
            maxHeight: '450px',
            overflow: 'hidden',
            // border: '20px solid white',
            borderRadius: '10px',
            margin: 'auto'
        },
        comic_overlay: {
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            height: "100%",
            width: "100%",
            opacity: 0.004,
            backgroundColor: "black",
        },
        comic_overlay_2: {
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            height: "100%",
            width: "50%",
            opacity: 0.3,
            backgroundColor: "black",
        }


    };



    const RenderSocialLink = ({ link, image_url }) => (
        <a href={link} rel="noreferrer" target="_blank" className='m-2' >
            <img
                style={{ width: isMobile ? '40px' : '70px' }}
                src={image_url} alt="" />
        </a>
    )

    return (
        <div style={_style.comics_hero_container}>
            <div className="row">
                <div className="col-12">
                    <div className="space-50"></div>
                    <div className="space-20"></div>
                </div>
            </div>
            <Slide top>
                <animated.h1
                    style={{ transform: scrollPos.to(transfromSlide_NN1) }}
                    className="display-3 text-bold text-dark text-center">
                    Comics
                </animated.h1>
            </Slide>
            <div className="row">
                <div className="col-12 col-md-6 _offset-md-2">
                    <div className="pt-[50px]"></div>
                    <Slide bottom >
                        <animated.h2
                            style={{ transform: scrollPos.to(transfromSlide_N1) }}
                            className="text-dark text-[18px] line-25 text-bold text-center text-lg-left	">
                            {/* BaBlah is a multi-tasker and a multi-entertainer. He also features in Comic strips where he entertains the comic lovers through his wit, wisdom & 100% sarcastic humor laced with Facts, Current Affairs, Pop Culture & everything that means FUN! */}
                            We have published   <br /> 1000+ comic strips across platforms.
                        </animated.h2>
                    </Slide>
                    {/* <div className="space-50"></div> */}
                    <div className="relative pt-[30px] w-fit mx-auto lg:mx-0">
                        <img src={_comic_2} alt="" className='max-w-[200px] border-[10px] border-white _rotate-[-20deg]' />
                        <img src={_comic_1} alt="" className='max-w-[200px] border-[10px] border-white rotate-[10deg] absolute left-0 top-0 translate-y-[50px] translate-x-[50px]' />
                    </div>

                    <div className="col-12  pt-[50px]">

                        <animated.div
                            // style={{transform: scrollPos.to(transfromSlide_N2)}}
                            className=" text-center text-bold">
                            {/* <div className="space-20"></div> */}
                            Check out his Webcomics at
                            {/* <div className="space-20"></div> */}
                            <div className="flex justify-center items-center pt-[50px]">
                                <RenderSocialLink image_url={_icon_twitter} link="https://twitter.com/BaBlahComics" />
                                <RenderSocialLink image_url={_icon_facebook} link="https://www.facebook.com/gobablah" />
                                <RenderSocialLink image_url={_icon_instgram} link="https://www.instagram.com/gobablah/" />
                                <RenderSocialLink image_url={_icon_youtube} link="https://www.youtube.com/channel/UC-spq1K0Qm3MZoKq9q9hMzQ/featured" />
                                <RenderSocialLink image_url={_icon_webtoons} link="https://www.webtoons.com/en/challenge/funshots-by-bablah/list?title_no=640899" />
                                <RenderSocialLink image_url={_icon_strippy} link="https://strippy.app/web/profile/BaBlah" />
                            </div>
                        </animated.div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="text-[16px] pt-[40px] text-center font-bold">
                        Grab the Collectible Edition Comic Book
                    </div>
                    <div className="pt-[40px]">
                        <img src={_comic_Cover} className='max-w-[170px] mx-auto border-grey border-[5px]' alt="" />
                    </div>
                    <div className="w-fit mx-auto pt-[20px]">
                        <div className="font-bold text-[16px]">
                            Available on Amazon Kindle 
                        </div>
                        <div className="max-h-[20px] mx-auto w-fit pt-[55px]">
                            <a href="https://www.amazon.in/FACTALES-Vol-1-Mukesh-Dev-ebook/dp/B0CK52G78J/ref=sr_1_1?keywords=banzan+studios&nsdOptOutParam=true&sr=8-1" target='_blank'>
                                <img src={_icon_amazon} alt="" className='max-w-[50px]' />
                            </a>
                            {/* <RenderSocialLink image_url={_icon_amazon} link="https://strippy.app/web/profile/BaBlah" /> */}
                        </div>
                    </div>

                </div>

                {/* <div className="col-12">
                    <Zoom>
                        <div className="text-center">
                            <animated.img 
                                style={{
                                    transform: scrollPos.to(transfromSlide_N2),
                                    width:'200px'
                                }}
                                className='img-fluid' 
                                src={_bablah} alt="" />
                        </div>
                        <div className="text-center">
                            <animated.img 
                                style={{transform: scrollPos.to(transfromSlide_S1)}}
                                className='img-fluid' 
                                src={_pop_stick} alt="" />
                        </div>
                    </Zoom>
                    <Fade>
                        <animated.div 
                            style={{transform: scrollPos.to(transfromSlide_N1)}}
                            className="h1 text-center text-dark text-bold">
                            Presenting BaBlah!
                        </animated.div>
                    </Fade>
                    
                </div> */}

                {/* <div className="col-12">
                 
                    <Fade>
                        <div className='shadow' style={_style.comic_cartoons_container}>
                            <img style={{ width: '100%', height: isMobile?'100%':'' }} src={_comic_bg} alt="bablah comics" />
                            <div style={_style.comic_overlay}></div>
                            <div style={_style.comic_overlay_2}></div>
                        </div>
                    </Fade>
                </div>
                 */}

                <div className="col-12 pt-[80px] ">
                    {/* <div className="space-100"></div>
                    <div className="space-100"></div> */}
                    <div className="h4 text-dark text-center">
                        The monk who needs the Ferrari!
                    </div>
                    <div className="space-100"></div>
                    {/* <div className="space-50"></div> */}

                    <div className="text-center">
                        <animated.img
                            className='img-fluid mx-auto'
                            style={{ transform: scrollPos.to(transfromSlide_N1) }}
                            src={_bablah_ferrari} alt="bablah chasing ferrari" />
                    </div>
                    {/*                    
                    <div className="space-100"></div> */}
                    {/* <div className="space-50"></div> */}
                </div>


                <div className="col-12 pt-[50px]">
                    <animated.div
                        style={{
                            // transform: scrollPos.to(transfromSlide_N1),
                            cursor: 'pointer'
                        }}
                        className="text-center mx-auto w-fit ">
                        <Link to={'/contact/comics'} className="flex items-center h3 text-dark text-decoration-none text-bold " >
                            For In Comic Promotions
                            &nbsp;
                            {_rightSwipeIcon}
                        </Link>
                    </animated.div>
                    <Footer />

                </div>

            </div>
        </div>

    );
};
