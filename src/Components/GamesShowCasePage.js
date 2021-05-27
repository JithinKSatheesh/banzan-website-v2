import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

import _numzy_page from '../Assets/numzy_app.png';
import _numzy_icon from '../Assets/numzy_icon.png';
import _bablah_icon from '../Assets/bablah_game_icon.png';
import _bablah_app from '../Assets/bablah_game_app.png';

import {animated} from 'react-spring'

const _right_icon = <svg fill='#1b1d1c'  width="14" height="14" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
const _circle = <svg fill='#c42f48' width="14" height="14" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12"/></svg>



const transfromSlide_S1 = (val)=>(`translate(0px,${val * 0.1}px)`) 
const transfromSlide_N1 = (val)=>(`translate(0px,-${val * 0.1}px)`) 
const transfromSlide_S2 = (val)=>(`translate(0px,${val * 0.05}px)`) 
const transfromSlide_N2 = (val)=>(`translate(0px,-${val * 0.05}px)`) 


export const GamesShowCasePage = ({scrollPos}) => {

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

    return (
        <div style={_style.showcase_container}>
            <ShowCaseApps
                scrollPos={scrollPos}
                _style={_style}
                app_image={_bablah_icon}
                app_icon={_bablah_app}
                heading={"Yes/No with BaBlah"}
                desc={"Yes/No with BaBlah is a fun Q&A game that rejuvenates your mood with quirky Q’s! BaBlah is a cute Monk who lives in the virtual world of Instagram as a daily comic strip."} />
            
            <ShowCaseApps
                scrollPos={scrollPos}
                _style={_style}
                app_image={_numzy_page}
                app_icon={_numzy_icon}
                heading={"NUMZY"}
                desc={"NUMZY is our first baby out!It’s a simple, crazy number game that apart from being fun, tests your agility, vision,speed, simple calculations and brain power.It’s timeless fun for all ages."} />
         
            <div className="row">
                <div className="col-12">
                    <div className="space-100"></div>
                    <div className="text-center">
                        <span className="m-1"> {_circle} </span>
                        <span className="m-1"> {_circle} </span>
                        <span className="m-1"> {_circle} </span>

                    </div>
                    <div className="space-100"></div>
                    <div className="text-center  text-dark">
                        Banzan Studios © 2021
                    </div>
                    <div className="space-100"></div>
                </div>
            </div>

        </div>
    );
};


const ShowCaseApps = ({ _style, app_image, app_icon, heading, desc,scrollPos }) => {

    return (<div className="row">
        <div className="col-12">
            <div className="space-50"></div>
        </div>
        <div className="col-12 col-md-6 p-3">
            <Zoom>
                <div style={_style.img_container}>
                    <div style={{ position: 'absolute', width: '200px', height: '200px' }}>
                        <animated.img 
                            style={{    ..._style.image_card, 
                                            height: '200px',
                                        
                                    }} 
                            className='img-fluid shadow' 
                            src={app_image} alt="" />
                    </div>
                    <div style={{ position: 'absolute', width: '100px', height: '100px', transform: 'translate(150px,150px)' }}>
                        <animated.img 
                            style={{ ..._style.image_card, 
                                        height: '100px' ,
                                        transform:scrollPos.to(transfromSlide_N1)
                                    }} 
                            className='img-fluid shadow' 
                            src={app_icon} alt="" />
                    </div>
                </div>
            </Zoom>

        </div>

        <div className="col-12 col-md-6">
            <div className="space-100"></div>
            <Slide top>
                <animated.div 
                    style={{transform: scrollPos.to(transfromSlide_N2) }}
                    className="h1 text-bold text-dark ">
                    {heading}
                </animated.div>
            </Slide>
            <Slide bottom>
                <div className=" text-dark text-bold">
                    {desc}
                </div>
            </Slide>
            <animated.div style={{transform: scrollPos.to(transfromSlide_S2)}}>
                <div className="" >
                    <a  href="" 
                        target="_blank" rel='noreferrer'
                        className='text-decoration-none text-bold button-box'>
                    Check out
                    &nbsp;
                    {_right_icon}
                    </a> 
                </div>
            </animated.div>

        </div>
        <div className="col-12 ">
            <div className="space-50"></div>

        </div>
    </div>)
}
