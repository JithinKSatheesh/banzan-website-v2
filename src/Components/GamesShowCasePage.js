import React from 'react';
import {Link} from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

import _numzy_page from '../Assets/numzy_game_app.jpg';
import _numzy_icon from '../Assets/numzy_game_icon.png';
import _bablah_icon from '../Assets/bablah_game_icon.png';
import _bablah_app from '../Assets/bablah_game_icon.png';
import _tympass_app from '../Assets/tympass_game_app.png';
import _tympass_icon from '../Assets/tympass_game_icon.png';

import { Footer } from './Footer';

import {animated} from 'react-spring'

const _right_icon = <svg fill='#1b1d1c'  width="14" height="14" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
const _circle = <svg fill='#c42f48' width="14" height="14" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12"/></svg>
const _puzzle_icon = <svg fill='#fbe05a' width="100" height="100" viewBox="0 0 24 24"><path d="M2.479 18c.978 0 1.309-.524 1.708-.922.813-.816 1.813-.469 1.813.847v6.075h6.075c1.315 0 1.663-1 .847-1.813-.398-.399-.922-.73-.922-1.708 0-1.087 1.108-2.479 3-2.479s3 1.392 3 2.479c0 .978-.524 1.309-.922 1.708-.816.813-.469 1.813.847 1.813h6.075v-6.075c0-1.315-1-1.663-1.813-.847-.399.398-.73.922-1.708.922-1.087 0-2.479-1.108-2.479-3s1.392-3 2.479-3c.978 0 1.309.524 1.708.922.813.816 1.813.469 1.813-.847v-6.075h-6.075c-1.315 0-1.663-1-.847-1.813.398-.399.922-.73.922-1.708 0-1.087-1.108-2.479-3-2.479s-3 1.392-3 2.479c0 .978.524 1.309.922 1.708.816.813.469 1.813-.847 1.813h-6.075v6.075c0 1.315-1 1.663-1.813.847-.399-.398-.73-.922-1.708-.922-1.087 0-2.479 1.108-2.479 3s1.392 3 2.479 3z"/></svg>
const _rightSwipeIcon = <svg fill='#1b1d1c' width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>

// const transfromSlide_S1 = (val)=>(`translate(0px,${val * 0.1}px)`) 
const transfromSlide_N1 = (val)=>(`translate(0px,-${val * 0.1}px)`) 
const transfromSlide_S2 = (val)=>(`translate(0px,${val * 0.05}px)`) 
const transfromSlide_N2 = (val)=>(`translate(0px,-${val * 0.05}px)`) 
const transfromSlide_NN1 = (val)=>(`translate(0px,-${val * 0.5}px)`)


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
                app_image={_tympass_icon}
                app_icon={_tympass_app}
                heading={"Tympass with BaBlah"}
                link={"https://play.google.com/store/apps/details?id=games.banzan.timepass"}
                desc={"Anti-stress, quirky & relaxation games with Happy Monk Play this time-killer and anti-stress game suite with multiple mini-games that guarantee relaxation, diversion, or just a moment of distraction when you need it the most. "} 
                
                />
            
            <ShowCaseApps
                scrollPos={scrollPos}
                _style={_style}
                app_image={_bablah_icon}
                app_icon={_bablah_app}
                heading={"Yes/No with BaBlah"}
                link={"https://play.google.com/store/apps/details?id=games.banzan.yesorno"}
                desc={"Yes/No with BaBlah is a fun Q&A game that rejuvenates your mood with quirky Q’s! It’s a great time-killer and stress-reliever content based Game for ones who love trivia, silly Q&A and just casual fun!. "} 
                
                />
            
            <ShowCaseApps
                scrollPos={scrollPos}
                _style={_style}
                app_image={_numzy_page}
                app_icon={_numzy_icon}
                heading={"NUMZY"}
                desc={"NUMZY is a simple, crazy number game that apart from being fun, tests your agility, vision,speed, simple calculations and brain power.It’s timeless fun for all ages. "} 
                link={"https://play.google.com/store/apps/details?id=games.banzan.numzy"}
                />
         
            <div className="row">
                
                <div className="col-12 col-md-8">
                    <Fade>

                    <div className="space-100"></div>
                    <div className="space-100"></div>
                    <div className="text-center text-md-start text-bold">
                        We believe that an idea grows into useful products when shared with good folks. We are that good folks. 😁
                    </div>
                    <div className="space-20"></div>
                    <div className="text-center text-md-start text-bold">
                        If you have any ideas for a Game, App or creating a Digital Asset, do sound us the same. Let’s make this world a better Game, eh, a better place!
                    </div>
                    <div className="space-20"></div>
                    <div className="text-center text-md-start text-bold">
                        What more? If our brains are blown away with it and we indeed decide to make that game, YOU could be REWARDED with some cool goodies & a Credit on our Social Media for the idea!
                    </div>
                    </Fade>

                </div>
                <div className="col-12 col-md-6 offset-md-6">
                    <animated.span
                        style={{
                            position:'absolute',
                            marginLeft:'200px',
                            marginTop:'700px',
                            transform:scrollPos.to(transfromSlide_NN1),
                        }}
                    >
                        {_puzzle_icon}
                    </animated.span>
                </div>
                <div className="col-12 text-center text-md-start">
                    <div className="space-50"></div>
                    <Link to='/contact/games' className="h3 text-dark text-decoration-none text-bold">
                        Share a Game Idea &nbsp; {_rightSwipeIcon}
                    </Link>
                    <div className="space-100"></div>
                    <Fade>
                        <Footer/>
                    </Fade>
                    <div className="space-100"></div>
                </div>
            </div>

        </div>
    );
};


const ShowCaseApps = ({ _style, app_image, app_icon, heading, desc,link,scrollPos }) => {

    return (<div className="row">
        <div className="col-12">
            <div className="space-50"></div>
        </div>
        <div className="col-12 col-md-6 p-3">
            <Zoom>
                <div style={_style.img_container}>
                    <div  style={{ position: 'absolute', width: '200px', height: '200px' }}>
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
                    className="h1 text-bold text-dark text-center text-md-start ">
                    {heading}
                </animated.div>
            </Slide>
            <Slide bottom>
                <div className=" text-dark text-bold text-center text-md-start">
                    {desc}
                </div>
            </Slide>
            <animated.div style={{transform: scrollPos.to(transfromSlide_S2)}}>
                <div className=" text-center text-md-start" >
                    <a  href={link}
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
