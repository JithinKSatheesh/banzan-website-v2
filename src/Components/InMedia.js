import React,{useRef} from 'react'
import {useSpring} from 'react-spring'
import { ZenBg } from './DummyBg';

import { InMeidaHeroPage } from './InMeidaHeroPage';




export default function Inmedia(props) {

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
        console.log("calling",)
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
                <InMeidaHeroPage scrollPos={scrollPos}  />
            </div>
        </div>   
        </>
    )
}


