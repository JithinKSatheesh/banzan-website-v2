import React,{useRef} from 'react'
import {useSpring} from 'react-spring'

import { ComicsHeroPage } from './ComicsHeroPage'

export default function Comics(props) {

    const comicRef = useRef()
    
    const _style ={
        comics_container:{
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
            <div 
                onScroll={handleScroll}
                ref={comicRef}
                style={_style.comics_container}>
                <ComicsHeroPage scrollPos={scrollPos} />
            </div>
        </div>
            
        </>
    )
}


