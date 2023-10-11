import React from 'react';

import Fade from 'react-reveal/Fade';
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
                    <Fade top delay={500} >
                        <animated.div 
                            style={{transform:scrollPos.to(transfromSlide_NN1)}}
                            className="display-4 text-bold text-dark text-center text-md-start">
                            Careers
                        </animated.div>
                    </Fade>
                    <div className="space-50"></div>
                </div>
                {/* <div className="col-12 col-md-6 p-2">
                    <CardApply 
                        text='Illustration/Comic Art work from home job/internship'
                        link='https://internshala.com/internship/detail/illustration-comic-art-work-from-home-job-internship-at-banzan-ventures1626613639'
                        />
                </div> */}
                {/* <div className="col-12 col-md-6 p-2">
                    <CardApply 
                        text='Unity 3d Developer - Full time'
                        link='https://www.linkedin.com/jobs/view/2721146823/'
                        />
                </div>
                <div className="col-12 col-md-6 p-2">
                    
                </div> */}
                
                {/* <div className="col-12">
                    <div className="space-50"></div>
                </div> */}
                <div className="font-bold">
                We are always on the lookout for fresh & creative folks. We welcome Misfits & Crazy in the Head nerds & artists who think & act outside the box. If you are an artist, designer, content writer with a 200% HQ (Humor Quotient), developer, marketer, social media animal or don’t fit into any of these categories but see yourself adding value at Banzan, go ahead, write to us!

                </div>

                {/* <div className="col-12 p-2">
                    <Fade >
                        <img style={_style.img_style} className="img-fluid" src={_career_img} alt="" />
                    </Fade>
                </div> */}
                <div className="col-12">
                    <div className="space-50"></div>

                </div>
                <div className="col-12">
                    <a href="https://linktr.ee/BanzanStudios" target='_blank' className='no-underline'>

                    <animated.div 
                        style={{transform:scrollPos.to(transfromSlide_S1)}}
                        className="text-[20px] text-bold text-[#fcc812] text-center text-md-start bg-[#c42f48] w-fit rounded-xl p-[10px]">
                        Current Openings 
                        
                    </animated.div>
                            </a>
                        <div className="space-50"></div>
                </div>
                <div className="">
                If you cannot find an open role, that aligns with your skills, <br/>
                 get in touch with your resumes/portfolio at <span className='text-red-900 font-bold'>  careers@banzan.co  </span>

                </div>
                {/* <animated.div 
                    style={{transform:scrollPos.to(transfromSlide_S1)}}
                    className="col-12 col-md-6">
                        <CareerFormPage />
                </animated.div> */}
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

// const _jump  = <svg fill='#c42f48' width="24" height="24" viewBox="0 0 24 24"><path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/></svg>

const CardApply = ({text,link})=>{


    return(
        <>
        <Fade>
        <div style={{minHeight:'100px'}} className="shadow p-3 bg-white border-10 pointer d-flex justify-content-between">
           {text}&nbsp; 
           <a href={`${link}`}  target="_blank" >
           <div className="btn bg-now text-white">Apply</div>
           </a>
        </div>
        </Fade>
        </>
    )
}
