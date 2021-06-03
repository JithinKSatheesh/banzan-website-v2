import React from 'react';
import { animated,useSpring } from 'react-spring';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';


import _ellipse from '../Assets/Ellipse.png';
import _test_tube from '../Assets/test_tube.png';
import _games_ellipse_small from '../Assets/games_ellipse_small.png';
import _scroll from '../Assets/scroll.png';
// import { ArrowDown } from './ArrowDown/ArrowDown';

const _round_icon_down = <svg fill='#1b1d1c' width="24" height="24" viewBox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z"/></svg>

const transfromSlide_S1 = (val)=>(`translate(0px,${val * 0.1}px)`) 
const transfromSlide_NN1 = (val)=>(`translate(0px,-${val * 0.5}px)`)

export const LabsHeroPage = ({ scrollPos }) => {

    const isMobile = window.innerWidth < 400

    const mouseXY = (x,y)=>([ (x - window.innerWidth / 2) / 10, -(y - window.innerHeight / 2) / 10 ])
    const changePos = (x,y) => (`translate(${-x}px,${y}px)`)
    const changePosNeg = (x,y) => (`translate(${x * 0.5}px,${-y * 0.5}px)`)

    const [{xy},setSpringVal] = useSpring(()=>({
        xy:[0,0]
    }))

    const _style = {
        labs_hero_container: {
            position: "relative",
            margin: 'auto',
            maxWidth: '850px',
            width: '90%',
        },
        labs_hero_img_box: {
            height: '300px',
            width: '100%',
            paddingLeft: '100px',
        }
    };

    return (
        <div 

            onMouseMove={({ clientX:x, clientY:y }) => setSpringVal( {xy : mouseXY(x,y) })}
            style={_style.labs_hero_container}>
            <div className="row">
                <div className="col-12">
                    <div className="space-50"></div>
                    <div className="space-20"></div>
                </div>
                <div className="col-12 col-md-6">
                    <Slide top >
                        <div className="display-3 text-bold text-dark text-center text-md-start">
                            Labs
                        </div>
                    </Slide>
                    <div className="space-50"></div>
                    <Slide bottom >
                        <animated.div 
                            style={{
                                lineHeight:'30px',
                                transform: scrollPos.to(transfromSlide_S1)
                            }}
                            className={`text-bold   text-center text-md-start  `} >
                            When we aren’t working on a serious product or a client project, we end up creating more awesomeness…highlighting a few concepts that we ended up with. Wanna know more about these? Kick us up through a note, who knows together we can redefine awesomeness!
                        </animated.div>
                    </Slide>
                </div>
                <div className="col-12 col-md-6 ">
                    <Fade>
                        <div
                            className="d-none d-md-block"
                            style={_style.labs_hero_img_box}>
                            <animated.img 
                                style={{
                                    transform:scrollPos.to(transfromSlide_NN1), 
                                    position:'absolute',marginTop:'300px',marginLeft:'-50px'}}
                                className='img-fluid d-none d-md-block' src={_games_ellipse_small} alt="" />
                            <animated.img 
                                style={{
                                    transform:scrollPos.to(transfromSlide_NN1), 
                                    position:'absolute',marginTop:'100px',marginLeft:'350px'}}
                                className='img-fluid d-none d-md-block' src={_games_ellipse_small} alt="" />
                            
                            <animated.img
                                style={{ 
                                    position: 'absolute', 
                                    transform: xy.to(changePosNeg)
                                }}
                                src={_ellipse}
                                className="img-fluid" alt="" />
                            <animated.img
                                style={{ 
                                    position: 'absolute' ,
                                    transform: xy.to(changePos)
                                }}
                                src={_test_tube}
                                className="img-fluid" alt="" />
                        </div>
                    </Fade>
                </div>
                <div className="col-12">
                    <div className="space-50"></div>
                    
                    {/* <img src={_scroll} alt="" /> */}
                    
                    {_round_icon_down}&nbsp; 
                    <div className="space-20"></div>
                    <div className='hr-dash' />
                    <div className="space-20"></div>
                    {/* <div className="small text-white">Scroll Down</div> */}
                    {/* <ArrowDown/> */}
                </div>
            </div>
        </div>
    );
};


