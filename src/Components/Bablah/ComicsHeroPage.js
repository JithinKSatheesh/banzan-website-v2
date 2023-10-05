import React from 'react';
import {Link} from 'react-router-dom'
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
import { Footer } from 'Components/Footer';

const _arrow_down = <svg fill='#1b1d1c' width="24" height="24" viewBox="0 0 24 24"><path d="M12 24l-8-9h6v-15h4v15h6z"/></svg>
const _rightSwipeIcon = <svg fill='#1b1d1c' width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>


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
            margin:'auto'
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



    const RenderSocialLink = ({link,image_url})=>(
        <a href={link} rel="noreferrer" target="_blank" className='m-2' >
            <img 
                style={{width: isMobile?'40px' :'70px'}}
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
            <div className="row">
                <div className="col-12 col-md-8 offset-md-2">
                    <Slide top>
                        <animated.h1
                            style={{ transform: scrollPos.to(transfromSlide_NN1) }}
                            className="display-3 text-bold text-dark text-center">
                            <img src="assets/bablah/BablahLogo.png" alt="BaBlah logo" className='w-[200px] mx-auto' />
                        </animated.h1>
                    </Slide>
                    <div className="space-20"></div>
                    <Slide bottom >
                        <animated.h2 
                            style={{ transform: scrollPos.to(transfromSlide_N1) }}
                            className="text-dark h6 line-25 text-bold text-center">
                            We met BaBlah in a chance  encounter and soon realised that we can work together, create together & win together. 
                            BaBlah is India’s first Transmedia character, and World’s First Virtual Actor.

                        </animated.h2>
                        <animated.h2 
                            style={{ transform: scrollPos.to(transfromSlide_N1) }}
                            className="text-dark text-[14px] italic line-25 text-bold text-center mt-[20px]">
                           * In his REAL VIRTUAL life, <span className='text-red-500'>BaBlah</span>  is a Part time monk with a crazy aspiration to become an Actor and get that 
                           <span className='text-red-500'> “Ferrari” </span>   that was sold by the other Monk!


                        </animated.h2>
                    </Slide>
                    {/* <Slide bottom >
                        <animated.h2 
                            style={{ transform: scrollPos.to(transfromSlide_N1) }}
                            className=" text-[16px] text-[#c52f48] line-25 text-bold text-center pt-[50px]">
                          BaBlah is World's FIRST VIRTUAL ACTOR. 

                        </animated.h2>
                    </Slide>
                    <Slide bottom >
                        <animated.h2 
                            style={{ transform: scrollPos.to(transfromSlide_N1) }}
                            className=" text-[16px] text-[#c52f48]  line-25 text-bold text-center pt-[24px]">
                          BaBlah is also India’s FIRST TRANSMEDIA, built ground up.

                        </animated.h2>
                    </Slide> */}
                    <div className="space-50"></div>
                </div>

                <div className="col-12">
                    {/* <div className="space-100"></div> */}
                    <Fade>
                        {/* <div className="w-full max-w-[350px] rounded-xl mx-auto border-[12px] border-[#c52f48]  bg-[#c52f48] flex-col flex">
                            <img src={"/assets/bablah/parttime.jpg"} alt="" className='mx-auto'/>
                        </div> */}
                        <div className="pt-[0px] px-[10px]">
                            <div className="container-video bg-black">
                                <iframe src="https://drive.google.com/file/d/15vxi5txopm8TNzWJG4ycB1BP-H7BdIMU/preview" sandbox="allow-same-origin allow-scripts" className='responsive-iframe' allow="autoplay"></iframe>
                            </div>
                        </div>
                    </Fade>
                </div>
                
           
                <div className="col-12 pt-[50px]">
                    <Footer/>
                   
                </div>
                
            </div>
        </div>

    );
};
