import React from 'react';
import {Link} from 'react-router-dom';

import ScrollMenu from 'react-horizontal-scrolling-menu';
import _leftarrow_img from '../Assets/leftarrow.png';
import _rightarrow_img from '../Assets/rightarrow.png';

import Zoom from 'react-reveal/Zoom'

import {animated} from 'react-spring'
import { Footer } from './Footer';

// const transfromSlide_S1 = (val)=>(`translate(0px,${val * 0.1}px)`) 
const transfromSlide_N1 = (val)=>(`translate(0px,-${val * 0.1}px)`)
const transfromSlide_NN1 = (val)=>(`translate(0px,-${val * 0.5}px)`)
const transfromSlide_NN2 = (val)=>(`translate(0px,-${val * 0.3}px)`)

const _rightSwipeIcon = <svg fill='#1b1d1c' width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
const _lab_bottole = <svg fill='#fbe05a'  width="200" height="200" viewBox="0 0 24 24"><path d="M20.759 20.498l-3.743-7.856c-1.041-2.186-2.016-4.581-2.016-7.007v-2.635h-2c0 3.391-.083 5.188 2.21 10.502l3.743 7.854c.143.302-.068.644-.377.644h-1.246l-4.88-10h-2.984c1.795-4.183 1.528-5.963 1.534-9h-2v2.635c0 2.426-.975 4.82-2.016 7.006l-3.743 7.856c-.165.348-.241.708-.241 1.058 0 1.283 1.023 2.445 2.423 2.445h13.153c1.4 0 2.424-1.162 2.424-2.446 0-.35-.076-.709-.241-1.056zm-13.259 1.502c-.829 0-1.5-.671-1.5-1.5s.671-1.5 1.5-1.5 1.5.671 1.5 1.5-.671 1.5-1.5 1.5zm2.5-4c-.553 0-1-.447-1-1 0-.553.447-1 1-1 .552 0 1 .447 1 1 0 .553-.448 1-1 1zm3 3c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm-5-20c0-.552.448-1 1-1h6c.553 0 1 .448 1 1s-.447 1-1 1h-6c-.552 0-1-.448-1-1z"/></svg>
const _labs_bottle2 = <svg  fill='#fbe05a'  width="100" height="100" viewBox="0 0 24 24"><path d="M17.465 8.364l1.414 1.414-12.051 12.051c-1.562 1.562-4.095 1.562-5.657-.001-1.562-1.562-1.562-4.094 0-5.656l12.051-12.051 1.414 1.414-5.465 5.465h5.658l2.636-2.636zm2.828 0c.634.634 1.707.174 1.707-.707 0-.256-.098-.512-.293-.707l-5.657-5.658c-.195-.194-.451-.292-.707-.292-.889 0-1.333 1.081-.707 1.707l5.657 5.657zm3.707 7.153c0 1.363-1.106 2.483-2.47 2.483-2.991 0-4.06-4.22.912-8-.058 2.365 1.558 3.302 1.558 5.517zm-2.371-3.466c-.346.189-.856.698-.934 1.333-.115.95.867 1.23.953-.044.04-.537 0-.794-.019-1.289z"/></svg>

const _ideaList = [
    {
        id: 1,
        topic: 'Bartex',
        desc: ' © 2021',
    },
    {
        id: 2,
        topic: 'Smash',
        desc: ' © 2021',
    },
    {
        id: 3,
        topic: 'Dev/Asur',
        desc: ' © 2021',
    },
    {
        id: 4,
        topic: 'Runner',
        desc: ' © 2021',
    },
    {
        id: 5,
        topic: 'TriQz',
        desc: ' © 2021',
    },
];




export const LabsIdeasShowcase = ({scrollPos}) => {

    let isMobile = window.innerWidth < 400;

    const _style = {
        labs_hero_container: {
            position: "relative",
            margin: 'auto',
            maxWidth: '850px',
            width: '90%',
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
                <div className='shadow' style={_style.lab_idea_inner}>
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
                    <div className="space-20"></div>
                    <div className="space-20"></div>
                    <animated.div 
                        style={{transform: scrollPos.to(transfromSlide_N1)}}
                        className="text-left small text-white">
                        <span className="bg-dark p-2"> Drag to left or right</span> 
                    </animated.div>
                    <div className="space-20"></div>

                </div>
                <Zoom>
                    <div className="col-12"  style={_style.labs_ideas_container}>
                        <ScrollMenu
                            hideSingleArrow={false}
                            arrowLeft={<Leftarrow />}
                            arrowRight={<Rightarrow />}
                            inertiaScrolling={true}
                            transition={1.5}
                            wheel={false}
                            data={ideacardsdata} />
                    </div>
                </Zoom>
                <div className="col-12 ">
                    <div className="space-100"></div>
                    <div className="space-100"></div>
                    <div className="space-100"></div>
                    <animated.div 
                        style={{
                            transform: scrollPos.to(transfromSlide_N1),
                            cursor:'pointer'
                        }}
                        className=" ">
                        <Link to={'/contact/labs'} className=" h1 text-dark text-bold text-decoration-none" >
                        Share your idea
                        &nbsp;
                        {_rightSwipeIcon}
                        </Link>
                    </animated.div>
                </div>
                <div className="col-12 col-md-6 offset-md-6 text-center">
                   <animated.span 
                    style={{
                        position:'absolute',
                        marginTop:'300px',
                        marginLeft:'20px',
                        transform:scrollPos.to(transfromSlide_NN1)
                        }} >
                        {_lab_bottole}
                    </animated.span> 
                   <animated.span 
                    style={{
                        position:'absolute',
                        marginTop:'300px',
                        marginLeft:'200px',
                        transform:scrollPos.to(transfromSlide_NN2)
                        }} >
                        {_labs_bottle2}
                    </animated.span> 
                </div>
                <div className="col-12">
                    <Footer/>
                    <div className="space-100"></div>
                </div>
            </div>
        </div>
    );
};
