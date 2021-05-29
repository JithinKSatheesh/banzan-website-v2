import React from 'react';

import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import {animated} from 'react-spring'

import { Footer } from './Footer';
import _career_img from '../Assets/careers_img_.png';
import { CareerFormPage } from './CareerFormPage';

const _work_icon = <svg fill='#fbe05a' width="104" height="104" viewBox="0 0 24 24"><path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24zm-4 7h-8v1h8v-1zm0 5h-8v1h8v-1zm0 5h-8v1h8v-1zm-10.516-11.304l-.71-.696-2.553 2.607-1.539-1.452-.698.71 2.25 2.135 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304z"/></svg>

export const CareersHeroPage = ({ scrollPos }) => {

    const transfromSlide_S1 = (val) => (`translate(0px,${val * 0.1}px)`);
    const transfromSlide_N1 = (val) => (`translate(0px,-${val * 0.1}px)`);
    const transfromSlide_NN1 = (val) => (`translate(0px,-${val * 0.5}px)`);

    const _style = {
        _hero_container: {
            position: "relative",
            margin: 'auto',
            maxWidth: '850px',
            width: '95%',
        },
        img_style: {
            border: '10px solid #c42f48',
            borderRadius: '20px',
            boxShadow: '0px 0px 5px 5px #21212127',
        }
    };



    return (
        <div style={_style._hero_container}>
            <div className="row">
                <div className="col-12">
                    <div className="space-50"></div>
                    <div className="space-20"></div>
                    <Slide top>
                        <animated.div 
                            style={{transform:scrollPos.to(transfromSlide_NN1)}}
                            className="display-4 text-bold text-dark">
                            Careers
                        </animated.div>
                    </Slide>
                    <div className="space-50"></div>
                </div>
                <div className="col-12 p-2">
                    <Fade>
                        <img style={_style.img_style} className="img-fluid" src={_career_img} alt="" />
                    </Fade>
                </div>
                <div className="col-12">
                    <div className="space-50"></div>

                </div>
                <div className="col-12">
                    <animated.div 
                        style={{transform:scrollPos.to(transfromSlide_S1)}}
                        className="h1 text-bold text-dark">
                        Let’s see <span className='text-now'>what you got?!</span>
                        <div className="space-50"></div>
                    </animated.div>
                </div>
                <animated.div 
                    style={{transform:scrollPos.to(transfromSlide_S1)}}
                    className="col-12 col-md-6">
                        <CareerFormPage />
                </animated.div>
                <animated.div 
                    style={{transform:scrollPos.to(transfromSlide_N1)}}
                    className="offset-6 col-md-6 text-center">
                    {_work_icon}
                </animated.div>    
                <div className="col-12">
                    <div className="space-100"></div>
                    <div className="space-100"></div>
                    <Footer />
                    <div className="space-100"></div>
                </div>
            </div>

        </div>
    );
};



