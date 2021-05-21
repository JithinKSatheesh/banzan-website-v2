import React from 'react';
import { animated,useSpring } from 'react-spring';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';


import _ellipse from '../Assets/Ellipse.png';
import _test_tube from '../Assets/test_tube.png';
import _scroll from '../Assets/scroll.png';
// import { ArrowDown } from './ArrowDown/ArrowDown';

export const LabsHeroPage = ({ scrollPos }) => {

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
            width: '100%',
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
                </div>
                <div className="col-12 col-md-6">
                    <Slide top >
                        <div className="display-2 text-bold text-white">
                            LABS
                        </div>
                    </Slide>
                    <div className="space-50"></div>
                    <Slide bottom >
                        <div 
                            style={{lineHeight:'30px'}}
                            className="h6 text-bold text-light  p-2">
                            When we aren’t working on a serious product or a client project, we end up creating more awesomeness…highlighting a few concepts that we ended up with. Wanna know more about these? Kick us up through a note, who knows together we can redefine awesomeness!
                        </div>
                    </Slide>
                </div>
                <div className="col-12 col-md-6 ">
                    <Fade>
                        <div
                            className="d-none d-md-block"
                            style={_style.labs_hero_img_box}>
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
                    <div className="space-100"></div>
                    <div className="space-20"></div>
                    <img src={_scroll} alt="" />
                    <div className="space-20"></div>
                    <div className="small text-white">Scroll Down</div>
                    {/* <ArrowDown/> */}
                </div>
            </div>
        </div>
    );
};


