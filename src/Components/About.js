import React,{useRef} from 'react'
import {useSpring} from 'react-spring'




import { AboutHeroPage } from './AboutHeroPage';

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
        console.log("calling",)
        setSpringVal({scrollPos})

    }


    return (
        <>
        <div className="Maincontainer">
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


