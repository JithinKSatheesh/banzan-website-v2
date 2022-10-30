import React from 'react';
import {Link} from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

import _numzy_page from 'Assets/numzy_game_app.jpg';
import _numzy_icon from 'Assets/numzy_game_icon.png';
import _bablah_icon from 'Assets/bablah_game_icon.png';
import _bablah_app from 'Assets/bablah_game_app.png';
import _tympass_app from 'Assets/tympass_game_app.png';
import _tympass_icon from 'Assets/tympass_game_icon.png';

import _bottle_icon from 'Assets/games/unnamed.webp';
import _astro_icon from 'Assets/games/unnamed-7.webp';
import _jungle_icon from 'Assets/games/unnamed-5.webp';
import _squishy_icon from 'Assets/games/unnamed-8.webp';
import _cat_icon from 'Assets/games/unnamed-4.webp';
import tapDj from 'Assets/games/tapDj.webp';
import worm from 'Assets/games/worm.webp';



import _emoji_bablah from 'Assets/emoji_bablah.png'

import { Footer } from 'Components/Footer';

import {animated} from 'react-spring'

const _right_icon = <svg fill='#1b1d1c'  width="14" height="14" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
// const _circle = <svg fill='#c42f48' width="14" height="14" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12"/></svg>
const _puzzle_icon = <svg fill='#c42f48' width="100" height="100" viewBox="0 0 24 24"><path d="M2.479 18c.978 0 1.309-.524 1.708-.922.813-.816 1.813-.469 1.813.847v6.075h6.075c1.315 0 1.663-1 .847-1.813-.398-.399-.922-.73-.922-1.708 0-1.087 1.108-2.479 3-2.479s3 1.392 3 2.479c0 .978-.524 1.309-.922 1.708-.816.813-.469 1.813.847 1.813h6.075v-6.075c0-1.315-1-1.663-1.813-.847-.399.398-.73.922-1.708.922-1.087 0-2.479-1.108-2.479-3s1.392-3 2.479-3c.978 0 1.309.524 1.708.922.813.816 1.813.469 1.813-.847v-6.075h-6.075c-1.315 0-1.663-1-.847-1.813.398-.399.922-.73.922-1.708 0-1.087-1.108-2.479-3-2.479s-3 1.392-3 2.479c0 .978.524 1.309.922 1.708.816.813.469 1.813-.847 1.813h-6.075v6.075c0 1.315-1 1.663-1.813.847-.399-.398-.73-.922-1.708-.922-1.087 0-2.479 1.108-2.479 3s1.392 3 2.479 3z"/></svg>
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
                app_image={_bablah_app}
                app_icon={_bablah_icon}
                heading={"Yes/No with BaBlah"}
                link={"https://play.google.com/store/apps/details?id=games.banzan.yesorno"}
                desc={"Yes/No with BaBlah is a fun Q&A game that rejuvenates your mood with quirky Q’s! It’s a great time-killer and stress-reliever content based Game for ones who love trivia, silly Q&A and just casual fun! "} 
                
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
         
            <ShowCaseApps
                scrollPos={scrollPos}
                _style={_style}
                app_image={_squishy_icon}
                app_icon={_squishy_icon}
                heading={"Squishy Cube (Beta version)"}
                link={"https://play.google.com/store/apps/details?id=com.BanzanStudios.Squishy"}
                desc={"Control the cube as you squish it to various shapes and sizes to go through different obstacles. In this endless runner you are the master of transformation. Guide the cube to collect all the gold and navigate through various and difficult obstacles"} 
                
                />
            <ShowCaseApps
                scrollPos={scrollPos}
                _style={_style}
                app_image={_jungle_icon}
                app_icon={_jungle_icon}
                heading={"BaBlah JungleHop (Beta version)"}
                link={"https://play.google.com/store/apps/details?id=com.banzan.JungleHop"}
                desc={"Play as BaBlah who's donned a primitive jungle attire for sliding across an insanely long and crooked branch with his trusty hoop. Touch the branch and you'll lose"} 
                
                />
            <ShowCaseApps
                scrollPos={scrollPos}
                _style={_style}
                app_image={_cat_icon}
                app_icon={_cat_icon}
                heading={"BaBlah CatEscape (Beta version)"}
                link={"https://play.google.com/store/apps/details?id=games.banzan.catescape"}
                desc={"Help! Your favourite character BaBlah is stuck in a building with lots of cats! He needs to escape the building because he’s afraid of cats and the cats in this building are suspicious as well. 😨"} 
                
                />
            <ShowCaseApps
                scrollPos={scrollPos}
                _style={_style}
                app_image={_astro_icon}
                app_icon={_astro_icon}
                heading={"BaBlah AstroDodge (Beta version)"}
                link={"https://play.google.com/store/apps/details?id=games.banzan.astrododge"}
                desc={"Help BaBlah hover 🚀 from one platform to another in this touch-based game that has extremely simple aesthetics and the single mechanic of pressing 👆 on the screen to make BaBlah hover from one platform to the next."} 
                
                />
            <ShowCaseApps
                scrollPos={scrollPos}
                _style={_style}
                app_image={_bottle_icon}
                app_icon={_bottle_icon}
                heading={"BaBlah BottleShooter (Beta version)"}
                link={"https://play.google.com/store/apps/details?id=games.banzan.bottleshooter"}
                desc={"BaBlah BottleShooter has you shoot up a gazillion bottles and the occasional soda can for points and coins before you run out of ammo or hit a bad bottle!"} 
                
                />
           
            <ShowCaseApps
                scrollPos={scrollPos}
                _style={_style}
                app_image={tapDj}
                app_icon={tapDj}
                heading={"TapDJ (Beta version)"}
                link={"https://play.google.com/store/apps/details?id=com.BanzanVentures.OsuDJ"}
                desc={"TapDJ is a mobile rhythm game where you take it up with the musical beats and try to land hits with your fingertips at the right time. Experience music like never before with a mix and match of different mechanics to keep you enticed through and through."} 
                
                />
            <ShowCaseApps
                scrollPos={scrollPos}
                _style={_style}
                app_image={worm}
                app_icon={worm}
                heading={"Worm Wars (Beta version)"}
                link={"https://play.google.com/store/apps/details?id=com.BanzanVentures.WormWars"}
                desc={"Play as Worms that duke it out in a literal War with each other in order to survive the onslaught of the bombs that are timely deployed by the crazy Chicken. Play with friends or with your family by sticking with one of the Crazy Worms and controlling it in order to deflect bombs as they drop on you."} 
                
                />
           
            <div className="row">
                
                <div className="col-12 col-md-8">
                    <Fade>

                    <div className="space-100"></div>
                    <div className="space-100"></div>
                    <div className="text-center text-md-start text-bold">
                        We believe that an idea grows into useful products 
                        when shared with good folks. We are that good folks.&nbsp; &nbsp; 
                        <img src={_emoji_bablah} alt="" />
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
                    {/* <animated.span
                        style={{
                            position:'absolute',
                            marginLeft:'200px',
                            marginTop:'700px',
                            transform:scrollPos.to(transfromSlide_NN1),
                        }}
                    >
                        {_puzzle_icon}
                    </animated.span> */}
                </div>
                <div className="col-12 text-center text-md-start">
                    <div className="space-50"></div>
                    <Link to='/contact/games' className="h6 text-dark bg-white border-10 shadow p-2 text-decoration-none text-bold">
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
        <div itemscope itemtype="https://www.banzan.co/games" className="col-12 col-md-6 p-3">
            <Zoom>
                <div style={_style.img_container}>
                    <div  style={{ position: 'absolute', width: '200px', height: '200px' }}>
                        <animated.img 
                            itemprop="game icon"
                            style={{    ..._style.image_card, 
                                            height: '200px',
                                        
                                    }} 
                            className='img-fluid shadow' 
                            src={app_image} alt="banzan game" />
                    </div>
                    <div style={{ position: 'absolute', width: '100px', height: '100px', transform: 'translate(150px,150px)' }}>
                        <img 
                            style={{ ..._style.image_card, 
                                        height: '100px' ,
                                        transform:scrollPos.to(transfromSlide_N1)
                                    }} 
                            className='img-fluid shadow' 
                            src={app_icon} alt="banzan game" />
                    </div>
                </div>
            </Zoom>

        </div>

        <div className="col-12 col-md-6">
            <div className="space-100"></div>
            <Slide top>
                <animated.div 
                    // style={{transform: scrollPos.to(transfromSlide_N2) }}
                    className="h1 text-bold text-dark text-center text-md-start pb-4 ">
                    {heading}
                </animated.div>
            </Slide>
            <Slide bottom>
                <div className=" text-dark text-bold text-center text-md-start">
                    {desc}
                </div>
            </Slide>
            <animated.div 
                // style={{transform: scrollPos.to(transfromSlide_S2)}}
                >
                <div 
                    // style={{marginTop : '50px'}}
                    className=" text-center text-md-start pt-4" >
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
