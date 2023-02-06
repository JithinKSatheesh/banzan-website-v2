import React from 'react';
import { animated } from 'react-spring';
import Fade from 'react-reveal/Fade';
import _callout_banzan from 'Assets/callout_banzan.png';
import _callout_bablah from 'Assets/callout_bablah.png';
import _trophy from 'Assets/trophy.png';
import { Footer } from 'Components/Footer';

import _emoji_bablah_love from 'Assets/emoji_bablah_love.png'

const Emoji_smile = () => (<> Awww... <img src={_emoji_bablah_love} alt='emoji love' /></>)

// const _right_arrow = <svg fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M24 12l-9-8v6h-15v4h15v6z" /></svg>

export const AboutHeroPage = ({ scrollPos }) => {

    // const isMobile = window.innerWidth < 400;

    // const transfromSlide_S1 = (val) => (`translate(0px,${val * 0.1}px)`);
    // const transfromSlide_S2 = (val) => (`translate(0px,${val * 0.08}px)`);
    // const transfromSlide_S3 = (val) => (`translate(0px,${val * 0.05}px)`);
    const transfromSlide_N1 = (val) => (`translate(0px,-${val * 0.1}px)`);
    const transfromSlide_NN1 = (val) => (`translate(0px,-${val * 0.3}px)`);
    const transfromSlide_N3 = (val) => (`translate(0px,-${val * 0.05}px)`);

    const _style = {
        about_hero_container: {
            position: "relative",
            margin: 'auto',
            maxWidth: '850px',
            width: '90%',
        },
    };

    const RenderCalloutList = ({ image, text, invert = false }) => {

        return (
            <Fade>
                <div className="row">
                    <div className="col-12">
                        <div className="space-20"></div>
                    </div>
                    <div className={"bg-dark "} style={{
                        borderRadius: '20px',
                        boxShadow: '0px 0px 5px 5px #21212127',
                    }}>
                        <div className="row">
                            {!invert &&
                                <div className="col-12 p-2  ">
                                    <img style={{ width: '50px', height: '50px' }} src={image} alt="" />
                                </div>}
                            <div className=" text-white p-3 ">
                                {text}

                            </div>
                            {invert &&
                                <div className="col-6 p-2 ">
                                    <img style={{ width: '50px', height: '50px' }} src={image} alt="" />
                                </div>}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="space-20"></div>
                    </div>
                </div>
            </Fade>
        );
    };

    return (
        <div style={_style.about_hero_container}>
            <div className="row">
                <div className="col-12">
                    <div className="space-50"></div>
                    <div className="space-20"></div>
                </div>
                <div className="col-12">
                    <Fade delay={500} top>
                        <div className="display-3 text-dark text-bold">
                            Who are we?
                        </div>
                    </Fade>
                </div>
                <div className="space-20"></div>
                <div className="col-12">

                    <animated.div
                        style={{ transform: scrollPos.to(transfromSlide_N3) }}
                        className="max-w-[600px]">
                        <RenderCalloutList
                            text={`We are a kick-ass team of dreamers, doers & magic makers!
                            We are building the blocks of India’s finest Entertainment brand, more than one product at a time!
                            `}
                            image={_callout_banzan}
                            invert={true} />
                    </animated.div>


                </div>
                <div className="pt-[24px]">
                    <div className="flex flex-col items-center text-white justify-center  border-[12px] border-[#f8d249] shadow rounded-2xl  w-full text-[24px] font-bold bg-[#c52f48]">
                        <img src={"/assets/team/team.png"} alt="Banzan core team" className='w-full pt-[24px]' />
                    </div>
                </div>
                <div className="w-full pt-[50px]">
                    <Fade delay={500} top>
                        <div className="display-3 text-dark text-bold text-right">
                            What are we doing?
                        </div>
                    </Fade>
                </div>
                <div className="w-full pt-[50px]">
                    <animated.div
                        style={{ transform: scrollPos.to(transfromSlide_N3) }}
                        className="w-fit max-w-[600px] ml-auto">
                        <RenderCalloutList
                            text={`Building World’s FINEST TRANSMEDIA through World’s FIRST Virtual Actor 
                            `}
                            image={_callout_banzan}
                            invert={true} />
                    </animated.div>

                </div>
                <div className="pt-[24px]">
                    <div className="flex flex-col items-center text-white justify-center  border-[12px] border-[#f8d249] shadow rounded-2xl  w-full text-[24px] font-bold bg-[#c52f48]">
                        <img src={"/assets/bablah/about.png"} alt="Banzan core team" className='w-full' />
                    </div>
                </div>
                <div className="space-20"></div>
                <div style={{ width: '100%', height: '10px', backgroundColor: '#c42f48' }}></div>


            </div>
    
            {/* <div className="row">
                <div className="col-12">
                    <animated.img
                        style={{
                            // transform: scrollPos.to(transfromSlide_NN1),
                            position: 'absolute',
                            marginLeft: '-20px',
                            // marginTop: '200px'
                        }}
                        src={_trophy} alt="" />
                </div>
            </div> */}
            <div className="row">
                <div className="col-12">
                    <Footer />
                </div>
            </div>
            
            <div className="space-100"></div>
        </div>
    );
};
