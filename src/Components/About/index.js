import React,{useRef} from 'react'
import {useSpring} from 'react-spring'
import {Helmet} from "react-helmet";


import { AboutHeroPage } from './AboutHeroPage';
import { ZenBg } from '../DummyBg';

export default function About(props) {

    
    const aboutRef = useRef()
    
    
    const _style ={
        about_container:{
            position: 'fixed',
            width: '100%',
            marginTop: '50px',
            height: '100%',
            overflowY: 'scroll',
            overflowX:'hidden'
        }
    }

    const[{scrollPos},setSpringVal] = useSpring(()=>({
        scrollPos : 0,
        // config: { mass: 5, tension: 350, friction: 40 }
    }))

    const handleScroll = ()=>{
        const scrollPos = aboutRef.current.scrollTop;
        setSpringVal({scrollPos})

    }


    return (
        <>
        <div className="Maincontainer">
            <Helmet>
                <title>Banzan Studios - About - Games studio in India | Kerala | kochi  </title>
                <link rel="canonical" href="https://www.banzan.co/about" />
            </Helmet>  
            <ZenBg/>
            <div 
                onScroll={handleScroll}
                ref={aboutRef}
                style={_style.about_container}>
                <AboutHeroPage scrollPos={scrollPos} />
            </div>
        </div> 
        </>
    )
}


