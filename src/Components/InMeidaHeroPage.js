import React from 'react';
import { animated,useSpring } from 'react-spring';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

import _inmedia_insta from '../Assets/inmedia_insta.png';
import _inmeida_downloads from '../Assets/inmeida_downloads.png';
import _inmeida_news_icon from '../Assets/inmedia_news_icon.png';
import _ellipse from '../Assets/Ellipse.png';

export const InMeidaHeroPage = () => {

    const mouseXY = (x,y)=>([ (x - window.innerWidth / 2) / 10, -(y - window.innerHeight / 2) / 10 ])
    const changePos = (x,y) => (`translate(${-x}px,${y}px)`)
    const changePosNeg = (x,y) => (`translate(${x * 0.5}px,${-y * 0.5}px)`)

    const [{xy},setSpringVal] = useSpring(()=>({
        xy:[0,0]
    }))


    const _style = {
        _hero_container: {
            position: "relative",
            margin: 'auto',
            maxWidth: '850px',
            width: '95%',
        },
        _img_container: {
            height: '300px',
            width: '100%',
            paddingLeft: '100px',
        }
    };


    const RenderCard = ({ children }) => {
        return (
            <Zoom>
                <div style={{
                    width: '100%',
                    border: '10px solid #c42f48',
                    borderRadius: '10px',
                    backgroundColor: '#c42f48',
                    color: 'white',
                    margin: '20px 0px'
                }}>
                    {children}
                </div>
            </Zoom>
        );
    };

    return (
        <div 
            onMouseMove={({ clientX:x, clientY:y }) => setSpringVal( {xy : mouseXY(x,y) })}
            style={_style._hero_container}>
            <div className="row">
                <div className="col-12">
                    <div className="space-100"></div>
                </div>
                <div className="col-12">
                    <Slide top>
                        <div className="h1 text-bold text-now">
                           In media
                        </div>
                    </Slide>
                        
                </div>
                <div className="col-12 col-md-6">
                    <div className="space-50"></div>

                    <RenderCard>
                        <img className='img-fluid' src={_inmedia_insta} alt="" />
                    </RenderCard>
                    <RenderCard>
                        <img className='img-fluid' src={_inmeida_downloads} alt="" />
                    </RenderCard>
                    <RenderCard>
                        <div className="space-20"></div>
                         <div className="text-center h5">
                         News artice 1
                         </div>
                        <div className="space-20"></div>
                    </RenderCard>
                </div>
                <div className="col-12 col-md-6">
                    <Fade>
                        <div
                            className="d-none d-md-block"
                            style={_style._img_container}>

                            <animated.img
                                style={{
                                    transform: xy.to(changePosNeg),
                                    position: 'absolute',
                                }}
                                src={_ellipse} alt="" />
                            <animated.img
                                style={{
                                    transform: xy.to(changePos),
                                    position: 'absolute',
                                    marginLeft: '40px',
                                    marginTop: '100px',
                                }}
                                src={_inmeida_news_icon} alt="" />

                        </div>
                    </Fade>
                </div>
                <div className="col-12">
                    <div className="space-100"></div>
                    <div className="space-100"></div>
                    <div className="space-100"></div>
                </div>
            </div>
        </div>
    );
};
