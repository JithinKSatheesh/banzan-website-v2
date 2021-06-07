import React,{useRef} from 'react'
import ScrollBox from './ScrollBox'

import {useSpring} from 'react-spring'



import _home_piller_1 from '../Assets/home_piller_1.png'
import _home_sky from '../Assets/home_sky.svg'
// import _home_ground from '../Assets/home_ground.svg'
import { HomeHeroScreen } from './HomeHeroScreen';
// import _home_piller_1 from '../Assets/home_piller.svg'



export default function Home(props) {
   
    const homeRef = useRef('')

    const[{scrollPos},setSpringVal] = useSpring(()=>({
        scrollPos : 0,
        // config: { mass: 5, tension: 350, friction: 40 }
    }))

    const handleScroll = ()=>{
        const scrollPos = homeRef.current.scrollTop;
        setSpringVal({scrollPos})

    }

    return (
        <>
        <div 
            onScroll={handleScroll}
            ref={homeRef}
            className="Maincontainer">
            <HomeHeroScreen scrollPos={scrollPos} />
           
            {/* ============= */}
            <ScrollBox/>
            <ScrollBox/>
            <ScrollBox/>
        </div>             
        </>
    )
}



