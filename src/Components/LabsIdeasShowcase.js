import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import _leftarrow_img from '../Assets/leftarrow.png';
import _rightarrow_img from '../Assets/rightarrow.png';

import Zoom from 'react-reveal/Zoom'

import {animated} from 'react-spring'


const _ideaList = [
    {
        id: 1,
        topic: 'Bartex',
        desc: 'Sed ut perspiciatis',
    },
    {
        id: 2,
        topic: 'Smash',
        desc: 'Some desc',
    },
    {
        id: 3,
        topic: 'Dev/Asur',
        desc: 'Some desc',
    },
    {
        id: 4,
        topic: 'Runner',
        desc: 'Some desc',
    },
];


const transfromSlide_S1 = (val)=>(`translate(0px,${val * 0.1}px)`) 
const transfromSlide_N1 = (val)=>(`translate(0px,-${val * 0.1}px)`)

export const LabsIdeasShowcase = ({scrollPos}) => {

    let isMobile = window.innerWidth < 400;

    const _style = {
        labs_hero_container: {
            position: "relative",
            margin: 'auto',
            maxWidth: '850px',
            width: '100%',
        },
        labs_ideas_container: {
            // overflowX:'scroll',
            height: '300px'
        },
        labs_idea_box: {
            height: isMobile ? '300px' : '400px',
            width: isMobile ? '200px' : '350px',
            padding: '20px',
        },
        lab_idea_inner: {
            borderRadius: '5px',
            border: '20px solid white',
            height: '100%',
            backgroundColor: ''
        },
        idea_inner_head: {
            position: 'absolute',
            top: '100px',
            width: isMobile?'50px':'150px',
            height: '50px',
            transform: 'translate(-30px,-5px)'
        },
        idea_inner_desc: {
            position: 'absolute',
            top: '250px',
            width: isMobile?'100px':'250px',
            height: '30px',
            transform: 'translate(-20px,-5px)'
        }
    };

    

    // const _leftarrow = <svg fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l9-8v6h15v4h-15v6z"/></svg>
    // const _rightarrow = <svg fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M24 12l-9-8v6h-15v4h15v6z"/></svg>
    const Leftarrow = () => (
        <img style={{ width: isMobile ? '50px' : '100px', padding: '10px' }} src={_leftarrow_img} alt="" />
    );

    const Rightarrow = () => (
        <img style={{ width: isMobile ? '50px' : '100px', padding: '10px' }} src={_rightarrow_img} alt="" />
    );


    const IdeaCardsList = (list) => (
        list.map(ele => (
           
            <div style={_style.labs_idea_box}>
                <div style={_style.lab_idea_inner}>
                    <div style={_style.idea_inner_head} className="bg-dark"></div>
                    <div
                        className="h1 text-white"
                        style={{ position: 'absolute', top: '100px' }}>
                        {ele.topic}
                    </div>
                    <div style={_style.idea_inner_desc} className="bg-dark"></div>
                    <p
                        style={{ position: 'absolute', top: '250px', width: '200px', height: '200px', }}
                        className=" text-white">
                        {ele.desc}

                    </p>
                </div>
            </div>
           

        ))
    );

    const ideacardsdata = IdeaCardsList(_ideaList);

    return (
        <div style={_style.labs_hero_container}>
            <div className="row">
                <div className="col-12">
                    <div className="space-100"></div>
                    <div className="space-20"></div>
                    <animated.div 
                        style={{transform: scrollPos.to(transfromSlide_N1)}}
                        className="text-left h6 text-white">
                        Drag to left or right
                    </animated.div>
                    <div className="space-20"></div>

                </div>
                <Zoom>
                    <div className="col-12" style={_style.labs_ideas_container}>
                        <ScrollMenu
                            hideSingleArrow={true}
                            arrowLeft={<Leftarrow />}
                            arrowRight={<Rightarrow />}
                            inertiaScrolling={true}
                            transition={1.5}
                            wheel={false}
                            data={ideacardsdata} />
                    </div>
                </Zoom>
                <div className="col-12">
                    <div className="space-100"></div>
                    <div className="space-100"></div>
                    <div className="space-100"></div>
                    <animated.div 
                        style={{transform: scrollPos.to(transfromSlide_N1)}}
                        className="h1 text-white">
                        Share your idea
                    </animated.div>
                    <div className="space-100"></div>
                    <div className="space-100"></div>
                    <div className="space-100"></div>
                    
                </div>
            </div>
        </div>
    );
};
