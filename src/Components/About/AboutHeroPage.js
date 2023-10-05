import React from 'react';
import { animated } from 'react-spring';
import Fade from 'react-reveal/Fade';
import _callout_banzan from 'Assets/callout_banzan.png';
import _callout_bablah from 'Assets/callout_bablah.png';
import _trophy from 'Assets/trophy.png';
import { Footer } from 'Components/Footer';

import _emoji_bablah_love from 'Assets/emoji_bablah_love.png'

import _jithin from "./jithin.png"
import _nirmal from "./nirmal.png"
import _praveen from "./praveen.png"
import _sourav from "./sourav.png"
import _yash from "./yash.png"
import _mukesh from "./mukesh.png"
import _kc from "./kc.png"
import _disha from "./disha.png"


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

    const _memberData = [
        {
            name : "Mukesh Dev",
            position : "Founder & CEO",
            image : _mukesh
        },
        {
            name : "Sourav Paul",
            position : "Product Head",
            image : _sourav
        },
        {
            name : "Nirmal Justin",
            position : "Lead Artsit",
            image : _nirmal
        },
        {
            name : "Krishnachandran",
            position : "Lead Design & UX",
            image : _kc
        },
        {
            name : "Praveen Madhavan",
            position : "VP - Operations",
            image : _praveen
        },
        {
            name : "Jithin K Satheesh",
            position : "Game Developer",
            image : _jithin
        },
        {
            name : "Yash Patel",
            position : "Game Developer",
            image : _yash
        },
        {
            name : "Disha Chakraborty",
            position : "Associate - Artist",
            image : _disha
        },
    ]

    const MemberCard = ({member = {}}) => {

        return(<div className='bg-white rounded-xl p-[20px] '>
            <div className="">
                <img src={member?.image} alt="" />
            </div>
            <div className="text-center font-bold">
                {member?.name}
            </div>
            <div className="text-center font-bold text-[12px] text-[#c42f48]">
                {member?.position}
            </div>


        </div>)
    }

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
                            About
                        </div>
                    </Fade>
                </div>
                <div className=" pt-[30px]"></div>
                <div className="col-12">
                    <div className="font-bold">
                    Banzan Studios is an indie entertainment studio building a global character TRANSMEDIA from India. We are creators of BaBlah®, a first of its kind Virtual Monk, who has been entertaining global mobile audiences since its origin in June 2020 through a One-of-a-Kind Facts based Daily Comic Strips & a bouquet of Casual & Hyper Casual games, available on multiple platforms. We are creating a one of a kind Character based Entertainment universe. 

                    </div>
                    <div className="font-bold pt-[30px]">
                    Over the past years, we have built over 50+ games and 1000+ pieces of Comic Strips, entertaining over 150 million folks around the globe. 

                    </div>

                    {/* <animated.div
                        style={{ transform: scrollPos.to(transfromSlide_N3) }}
                        className="max-w-[600px]">
                        <RenderCalloutList
                            text={`
                            `}
                            image={_callout_banzan}
                            invert={true} />
                    </animated.div> */}


                </div>
                <div className="pt-[60px]">
                    <div className="font-bold text-[30px] text-center ">
                        Meet the core team
                    </div>
                    {/* <div className="flex flex-col items-center text-white justify-center  border-[12px] border-[#f8d249] shadow rounded-2xl  w-full text-[24px] font-bold bg-[#c52f48]">
                        <img src={"/assets/team/team.png"} alt="Banzan core team" className='w-full pt-[24px]' />
                    </div> */}
                    <div className="pt-[50px]">
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4  gap-[10px]">
                            {
                                _memberData?.map(item => {
                                    return(
                                        <div key={item?.id}>
                                            <MemberCard member={item} />
                                        </div>
                                    )
                                })
                            }
                            {/* <MemberCard /> */}
                           
                        </div>
                    </div>
                </div>
                {/* <div className="w-full pt-[50px]">
                    <Fade delay={500} top>
                        <div className="display-3 text-dark text-bold text-right">
                            What are we doing?
                        </div>
                    </Fade>
                </div> */}
                {/* <div className="w-full pt-[50px]">
                    <animated.div
                        style={{ transform: scrollPos.to(transfromSlide_N3) }}
                        className="w-fit max-w-[600px] ml-auto">
                        <RenderCalloutList
                            text={`Building World’s FINEST TRANSMEDIA through World’s FIRST Virtual Actor 
                            `}
                            image={_callout_banzan}
                            invert={true} />
                    </animated.div>

                </div> */}
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
