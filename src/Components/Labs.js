import React,{useRef} from 'react'
import {useSpring} from 'react-spring'

import { LabsHeroPage } from './LabsHeroPage'
import { LabsIdeasShowcase } from './LabsIdeasShowcase'


export default function Labs(props) {

    const labRef = useRef(null)

    const[{scrollPos},setSpringVal] = useSpring(()=>({
        scrollPos : 0,
        // config: { mass: 5, tension: 350, friction: 40 }
    }))
    
    const _style ={
        labs_container:{
            position: 'fixed',
            width: '100%',
            marginTop: '50px',
            height: '100%',
            overflowY: 'scroll',
            overflowX:'hidden'
        },
       
    }


    const handleScroll = ()=>{

        const scrollPos = labRef.current.scrollTop;
        setSpringVal({scrollPos})

    }

    return (
        <>
        <div className="Maincontainer">
            <div 
                ref={labRef}
                onScroll={handleScroll}
                style={_style.labs_container}>
                <LabsHeroPage scrollPos={scrollPos} />
                <LabsIdeasShowcase  scrollPos={scrollPos} />
            </div>
        </div>
            
        </>
    )
}


