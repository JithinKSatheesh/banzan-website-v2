import React from 'react';
import { animated } from 'react-spring';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';



// importing images
import _comic_bg from '../Assets/comic_bg.png';
import _bablah from '../Assets/bablah.png';
import _pop_stick from '../Assets/pop_stick.png';
import _bablah_ferrari from '../Assets/bablah_ferrari.png';
import _icon_bablah from '../Assets/icon_bablah.png';
import _icon_twitter from '../Assets/icon_twitter.png';
import _icon_facebook from '../Assets/icon_facebook.png';
import _icon_instgram from '../Assets/icon_instgram.png';

const _arrow_down = <svg fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M12 24l-8-9h6v-15h4v15h6z"/></svg>

export const ComicsHeroPage = ({ scrollPos }) => {

    const isMobile = window.innerWidth < 400;

    const transfromSlide_S1 = (val) => (`translate(0px,${val * 0.1}px)`);
    const transfromSlide_N1 = (val) => (`translate(0px,-${val * 0.1}px)`);
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
            maxHeight: '400px',
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
            opacity: 0.60,
            backgroundColor: "#0c0c0c",
        },
        comic_overlay_text: {
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            height: "100%",
            width: "100%",
            color: 'white',
            margin:'10px',
            lineHeight: isMobile ? '30px' : '50px',
            // fontSize: isMobile ? '1em' : '1.5em'
            // backgroundColor: "#0c0c0c",
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
                <div className="col-12 ">
                    <Slide top>
                        <animated.div
                            style={{ transform: scrollPos.to(transfromSlide_N1) }}
                            className="display-3 text-bold text-white">
                            Comics
                        </animated.div>
                    </Slide>
                    <div className="space-50"></div>
                    <Slide bottom >
                        <div className="h5 text-white">
                            We are building a global Comic franchise from India. Our hero doesn’t fight villains, doesn’t kill anyone, doesn’t have a romantic partner but he’s still fun & pure joy to hang around with.
                        </div>
                    </Slide>
                </div>
                <div className="col-12">
                    <div className="space-50"></div>
                    <Fade>
                        <div style={_style.comic_cartoons_container}>
                            <img style={{ width: '100%', height: isMobile?'100%':'' }} src={_comic_bg} alt="" />
                            <div style={_style.comic_overlay}></div>
                            <div
                                className=" p-2 h5 text-bold"
                                style={_style.comic_overlay_text}>
                               
                            </div>

                        </div>
                    </Fade>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="space-100"></div>
                    <div className="space-50"></div>
                    <div className="text-center">
                        {_arrow_down}
                    </div>
                    <div className="space-50"></div>
                    <div className="space-100"></div>
                </div>
                <div className="col-12">
                   
                    <Zoom>
                        <div className="text-center">
                            <animated.img 
                                style={{transform: scrollPos.to(transfromSlide_S1)}}
                                className='img-fluid' 
                                src={_pop_stick} alt="" />
                        </div>
                        <div className="text-center">
                            <animated.img 
                                style={{
                                    transform: scrollPos.to(transfromSlide_N2),
                                    width:'200px'
                                }}
                                className='img-fluid' 
                                src={_bablah} alt="" />
                        </div>
                       
                    </Zoom>
                    
                    <Fade>
                        <animated.div 
                            style={{transform: scrollPos.to(transfromSlide_N1)}}
                            className="h1 text-center text-white text-bold">
                            Presenting Bablah!
                        </animated.div>
                    </Fade>
                    <div className="space-20"></div>
                    <div className="h4 text-white text-center">
                        The monk who need the Ferrari!
                    </div>
                    <div className="space-50"></div>
                    <div className="text-center">
                        <animated.img 
                            className='img-fluid'
                            style={{transform: scrollPos.to(transfromSlide_N1)}}
                            src={_bablah_ferrari} alt="" />
                    </div>
                    <div className="space-100"></div>
                    <animated.div 
                        style={{transform: scrollPos.to(transfromSlide_N2)}}
                        className=" text-center">
                        <RenderSocialLink image_url={_icon_bablah} link="" />
                        <RenderSocialLink image_url={_icon_twitter} link="" />
                        <RenderSocialLink image_url={_icon_facebook} link="" />
                        <RenderSocialLink image_url={_icon_instgram} link="" />
                    </animated.div>
                </div>
                <div className="col-12">
                    <div className="space-100"></div>
                 
                </div>
            </div>
        </div>

    );
};
