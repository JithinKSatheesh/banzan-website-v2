import React from 'react';
import { animated } from 'react-spring';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import _callout_banzan from '../Assets/callout_banzan.png';
import _callout_bablah from '../Assets/callout_bablah.png';
import _trophy from '../Assets/trophy.png';

const _right_arrow = <svg fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M24 12l-9-8v6h-15v4h15v6z"/></svg>

export const AboutHeroPage = ({ scrollPos }) => {

    const isMobile = window.innerWidth < 400;

    const transfromSlide_S1 = (val) => (`translate(0px,${val * 0.1}px)`);
    const transfromSlide_N1 = (val) => (`translate(0px,-${val * 0.1}px)`);
    const transfromSlide_N3 = (val) => (`translate(0px,-${val * 0.05}px)`);
    const transfromSlide_S3 = (val) => (`translate(0px,${val * 0.05}px)`);

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
                            <div className="col-10  text-white p-3 ">
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
                    <Slide top>
                        <div className="display-3 text-dark text-bold">
                            ABOUT
                        </div>
                    </Slide>
                </div>
                <div className="space-20"></div>
                <animated.div
                    style={{ transform: scrollPos.to(transfromSlide_N3) }}
                    className="col-10">
                    <RenderCalloutList
                        text={`Isn't’ it strange that a land of culture & treasure trove of stories doesn’t have a global story icon of its own in the comic world?`}
                        image={_callout_banzan}
                        invert={true} />
                </animated.div>
                <div className="space-20"></div>
                <animated.div
                    style={{ transform: scrollPos.to(transfromSlide_S3) }}
                    className="col-4 offset-8">
                    <RenderCalloutList
                        text={`Yes! 🧐`}
                        image={_callout_bablah}
                        invert={true} />
                </animated.div>
                <div className="space-50"></div>
                <animated.div
                    style={{ transform: scrollPos.to(transfromSlide_N3) }}
                    className="col-10">
                    <RenderCalloutList
                        text={`It felt bad to us and that’s how Banzan was born!🎉`}
                        image={_callout_banzan}
                        invert={true} />
                </animated.div>

                <animated.div
                    style={{ transform: scrollPos.to(transfromSlide_S3) }}
                    className="col-4 offset-8">
                    <RenderCalloutList
                        text={`Wow...🙌`}
                        image={_callout_bablah}
                        invert={true} />
                </animated.div>

            </div>
            <div className="row">
                <div className="col-12">
                    <div className="space-20"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <animated.img 
                        style={{transform:scrollPos.to(transfromSlide_S3)}}
                        src={_trophy} alt="" />
                    
                    <div style={{width:'100%',height:'10px',backgroundColor:'#c42f48'}}></div>
                    <div className="space-20"></div>
                    <div 
                        style={{
                            lineHeight:'30px',
                            // fontSize:'1.3em',
                        }}
                        className="h6 text-bold">
                        Banzan Studios is Kerala’s 1st and soon to be India’s finest Character based Digital Entertainment startup.
                        We are building a Global comic/cartoon franchise from India. 
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="space-50"></div>
                    <div className="h4 text-white">
                        
                        <animated.div style={{
                            width:'100px',
                            height:'30px',
                            backgroundColor:'#212529',
                            transform:scrollPos.to(transfromSlide_S3),
                            textAlign:'center',
                            marginLeft:'30px'
                        }}>
                            {_right_arrow}
                        </animated.div>
                        <span 
                            style={{backgroundColor:'#c42f48',padding:'10px'}}
                         >
                            TEAM
                        </span> 
                    </div>
                    <div className="space-50"></div>
                    <div 
                        style={{
                            lineHeight:'30px',
                            // fontSize:'1.3em',
                        }}
                        className="h6 text-bold">
                        The team comes with over 30+ years of experience across Education, Entertainment, E-commerce & many other B2C businesses. Banzan 2.0 was born during the eventful year of 2020 and has since entertained lakhs of audience, every single day, through multiple channels and content formats.
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="space-100"></div>
                    <div className="space-100"></div>
                    <div className="space-100"></div>
                    
                </div>
            </div>
        </div>
    );
};
