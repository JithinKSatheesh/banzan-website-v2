import React from 'react';
import {Link} from 'react-router-dom'
import { animated } from 'react-spring';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';



// importing images
import _comic_bg from '../Assets/comic_collage.png';
import _bablah from '../Assets/bablah.png';
import _pop_stick from '../Assets/pop_stick.png';
import _bablah_ferrari from '../Assets/bablah_ferrari_chase.png';
import _icon_bablah from '../Assets/icon_bablah.png';
import _icon_twitter from '../Assets/icon_twitter.png';
import _icon_facebook from '../Assets/icon_facebook.png';
import _icon_instgram from '../Assets/icon_instgram.png';
import _icon_webtoons from '../Assets/icon_webtoons.png';
import _icon_strippy from '../Assets/icon_strippy.png';
import { Footer } from './Footer';

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
                        <animated.div
                            style={{ transform: scrollPos.to(transfromSlide_NN1) }}
                            className="display-3 text-bold text-dark text-center">
                            Comics
                        </animated.div>
                    </Slide>
                    <div className="space-20"></div>
                    <Slide bottom >
                        <animated.div 
                            style={{ transform: scrollPos.to(transfromSlide_N1) }}
                            className="text-dark text-bold text-center">
                        We are building a global Comic franchise from India.  Our hero doesn’t fight villains, doesn’t kill anyone, doesn’t have a romantic partner but he’s still fun & pure joy to hang around with.
                        </animated.div>
                    </Slide>
                    <div className="space-50"></div>
                </div>

                <div className="col-12">
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
                    
                </div>

                <div className="col-12">
                    <div className="space-100"></div>
                    <Fade>
                        <div className='shadow' style={_style.comic_cartoons_container}>
                            <img style={{ width: '100%', height: isMobile?'100%':'' }} src={_comic_bg} alt="" />
                            <div style={_style.comic_overlay}></div>
                            <div style={_style.comic_overlay_2}></div>
                        </div>
                    </Fade>
                </div>
                
                    
                <div className="col-12 ">
                    <div className="space-100"></div>
                    <div className="space-100"></div>
                    <div className="h4 text-dark text-center">
                        The monk who needs the Ferrari!
                    </div>
                    <div className="space-100"></div>
                    <div className="space-50"></div>
                   
                    <div className="text-center">
                        <animated.img 
                            className='img-fluid'
                            style={{transform: scrollPos.to(transfromSlide_N1)}}
                            src={_bablah_ferrari} alt="" />
                    </div>
                   
                    <div className="space-100"></div>
                    <div className="space-50"></div>
                </div>
                <div className="col-12">
                    
                    <animated.div 
                        style={{transform: scrollPos.to(transfromSlide_N2)}}
                        className=" text-center text-bold">
                        <div className="space-20"></div>
                        Check out his WebComics
                        <div className="space-20"></div>
                        <RenderSocialLink image_url={_icon_twitter} link="https://twitter.com/BaBlahComics" />
                        <RenderSocialLink image_url={_icon_facebook} link="https://www.facebook.com/gobablah" />
                        <RenderSocialLink image_url={_icon_instgram} link="https://www.instagram.com/gobablah/" />
                        <RenderSocialLink image_url={_icon_webtoons} link="https://www.webtoons.com/en/challenge/funshots-by-bablah/list?title_no=640899" />
                        <RenderSocialLink image_url={_icon_strippy} link="https://strippy.app/web/profile/BaBlah" />
                    </animated.div>
                </div>
           
                <div className="col-12">
                    <animated.div 
                        style={{
                            transform: scrollPos.to(transfromSlide_N1),
                            cursor:'pointer'
                        }}
                        className="text-center  ">
                        <Link to={'/contact/comics'} className=" h3 text-dark text-decoration-none text-bold " >
                            For In Comic Promotions 
                            &nbsp;
                            {_rightSwipeIcon}
                        </Link>
                    </animated.div>
                    <Footer/>
                   
                </div>
                
            </div>
        </div>

    );
};
