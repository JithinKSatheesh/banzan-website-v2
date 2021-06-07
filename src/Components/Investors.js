import React from 'react'

import Fade from 'react-reveal/Fade';
import { Footer } from './Footer';
import { ZenBg } from './DummyBg';


export default function Investors(props) {


    const _style ={
        investors_container:{
            position: 'fixed',
            width: '100%',
            marginTop: '50px',
            height: '100%',
            overflowY: 'scroll',
            overflowX:'hidden'
        }
    }
    

    return (
        <>
        <div className="Maincontainer">
            <ZenBg/>
            <div 
                style={_style.investors_container}>
                <InverstorHeroPage/>
            </div>
        </div> 
            
        </>
    )
}

const InverstorHeroPage = ()=>{

    const _linkedin_icon = <svg fill='#c42f48' width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>


    const _style = {
        investor_hero_container: {
            position: "relative",
            margin: 'auto',
            maxWidth: '850px',
            width: '95%',
        },
    };
    return(
        <div style={_style.investor_hero_container} >
            <div className="row">
                <div className="col-12">
                    <div className="space-100"></div>
                </div>
                <div className="col-12">
                    <Fade top delay={500} >
                        <div className="display-2 text-dark text-bold text-center text-md-start">
                            Investors & <br /> Partnerships
                        </div>
                    </Fade>
                </div>
                <Fade bottom delay={500} >
                    <div 
                        style={{lineHeight:'30px'}}
                        className="col-12 col-md-8 offset-md-3 text-dark text-bold text-center text-md-start">
                        <div className="space-50"></div>

                        If you believe in our story and vision and would like to play an impactful role together, please do get in touch with the Founder 
                        
                        &nbsp;<a className='text-decoration-none' href="https://www.linkedin.com/in/mukeshdev/" rel='noreferrer' target="_blank" > 
                            <span className="text-now text-bold " >
                                here
                                &nbsp;
                                {_linkedin_icon}
                            </span> </a>
                        
                        
                    </div>
                </Fade>
                <div className="col-12">
                    <Footer/>
                </div>

            </div>
        </div>
    )
}
