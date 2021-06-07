import React,{useRef} from 'react'

import {useSpring} from 'react-spring'
import { CareersHeroPage } from './CareersHeroPage'
import { ZenBg } from './DummyBg'

export const _send_icon = <svg fill='#1b1d1c' width="20" height="20" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg>

export default function Careers(props) {
    
    const comicRef = useRef()


    const _style ={
        _container:{
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
        const scrollPos = comicRef.current.scrollTop;
        setSpringVal({scrollPos})

    }
    return (
        <>
        <div className="Maincontainer">
            <ZenBg/>
            <div 
                onScroll={handleScroll}
                ref={comicRef}
                style={_style._container}>
                <CareersHeroPage scrollPos={scrollPos}/>
            </div>
        </div>   
        </>
    )
}

