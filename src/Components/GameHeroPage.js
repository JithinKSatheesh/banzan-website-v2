import React from 'react';
import Fade from 'react-reveal/Fade';
// import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
// import _game_logo from '../Assets/game_logo.png';
import _games_console from '../Assets/games_console.png';
import _games_ellipse_small from '../Assets/games_ellipse_small.png';
import _games_ellipse from '../Assets/games_ellipse.png';
import _down_arrow_big from '../Assets/down_arrow_big.png';

// import { Parallax, ParallaxLayer } from 'react-spring'
import {animated} from 'react-spring'

const _round_icon_down = <svg fill='#1b1d1c' width="24" height="24" viewBox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z"/></svg>

export const GameHeroPage = ({scrollPos}) => {

    const transfromSlide_S1 = (val)=>(`translate(0px,${val * 0.1}px)`) 
    const transfromSlide_SS1 = (val)=>(`translate(0px,${val * 0.5}px)`) 
    const transfromSlide_NN1 = (val)=>(`translate(0px,-${val * 0.5}px)`) 
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
                                className=" text-dark text-bold text-md-right">
                                We build casual, fun, addictive, yet productive and sometimes educational games for Family audiences.
                            </animated.div>
                        </Fade>
                        
                        <div className="space-20"></div>
                </div>
                <div className="col-12 col-md-6 text-center">

                    <div className="space-20"></div>
                    <Fade>
                        <div 
                            style={{height:'350px'}}
                            className="d-none d-md-block">
                                <animated.img 
                                    style={{
                                        transform:scrollPos.to(transfromSlide_NN1), 
                                        position:'absolute',marginTop:'300px'}}
                                    className='img-fluid d-none d-md-block' src={_games_ellipse_small} alt="" />
                                <animated.img 
                                    style={{
                                        transform:scrollPos.to(transfromSlide_N1), 
                                        position:'absolute',marginTop:'50px',marginLeft:'400px'}}
                                    className='img-fluid d-none d-md-block' src={_games_ellipse_small} alt="" />
                                <animated.img 
                                    style={{
                                        transform:scrollPos.to(transfromSlide_S1), 
                                        position:'absolute',marginLeft:'50px'}}
                                    className='img-fluid d-none d-md-block' src={_games_ellipse} alt="" />
                                <animated.img 
                                    style={{
                                        transform:scrollPos.to(transfromSlide_N1), 
                                        position:'absolute',marginLeft:'50px',marginTop:'50px'}}
                                    className='img-fluid d-none d-md-block' src={_games_console} alt="" />

                        </div>
                    </Fade>
                </div>
            </div>
            <div className="space-20"></div>
            {_round_icon_down}&nbsp; scroll down
            <div className="space-20"></div>
            <div className='hr-dash' />
            <div className="space-20"></div>
            <div className="row">
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
