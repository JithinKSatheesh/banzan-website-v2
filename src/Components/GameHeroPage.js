import React from 'react';
import Fade from 'react-reveal/Fade';
// import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import _game_logo from '../Assets/game_logo.png';
import _down_arrow_big from '../Assets/down_arrow_big.png';

// import { Parallax, ParallaxLayer } from 'react-spring'
import {animated} from 'react-spring'

export const GameHeroPage = ({scrollPos}) => {

    const transfromSlide_S1 = (val)=>(`translate(0px,${val * 0.1}px)`) 
    const transfromSlide_N1 = (val)=>(`translate(0px,-${val * 0.1}px)`) 

    const _style = {
        game_hero_container: {
            position: "relative",
            margin: 'auto',
            maxWidth: '850px',
            width: '90%',
          
        },
    };

    return (
        <div style={_style.game_hero_container}>
            <div className="row ">
                <div className="col-12">
                    <div className="space-20"></div>
                </div>
                <div className="col-12 col-md-6">
                        <div className="space-50"></div>
                        
                        <Fade top>
                            <animated.div  
                                style={{transform: scrollPos.to(transfromSlide_N1) }}
                                className=" display-1 text-dark text-bold  text-md-left">
                                Games
                            </animated.div>
                        </Fade>
                        
                        <div className="space-20"></div>
                        <Fade bottom>
                            <animated.div 
                                style={{transform: scrollPos.to(transfromSlide_S1) }}
                                className="h5 text-dark text-bold text-md-right">
                                We build casual, fun, addictive, yet productive and sometimes educational games for Family audiences.
                            </animated.div>
                        </Fade>
                        <div className="space-50"></div>
                </div>
                <div className="col-12 col-md-6 text-center">

                    <div className="space-20"></div>
                    <Fade>
                        <img className='img-fluid d-none d-md-block' src={_game_logo} alt="" />
                    </Fade>
                </div>
            </div>
            <div className="row">
                <div className="space-50"></div>
                <div className="col-12">
                    <div className="d-flex align-items-end">
                        <Slide>
                            <animated.img 
                                style={{ width: '150px', transform:scrollPos.to(transfromSlide_S1) }} 
                                src={_down_arrow_big} alt="" />
                        </Slide>
                        <Slide top>
                            <animated.div 
                                style={{transform: scrollPos.to(transfromSlide_N1) }}
                                className="h1 text-bold">
                                SEE OUR GAMES
                            </animated.div>
                        </Slide>
                    </div>
                    <div className="space-50"></div>
                </div>
            </div>

        </div>
        
    );
};
