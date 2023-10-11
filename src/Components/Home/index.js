import React,{useRef} from 'react'
import ScrollBox from 'Components/ScrollBox'

import {useSpring} from 'react-spring'
import {Helmet} from "react-helmet";



import _home_piller_1 from 'Assets/home_piller_1.png'
import _home_sky from 'Assets/home_sky.svg'
// import _home_ground from '../Assets/home_ground.svg'
import { HomeHeroScreen } from './HomeHeroScreen';
import Promo from './Promo';
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
            <Helmet>
                <title>Banzan Studios - New Age Digital Entertainment   </title>
                <link rel="canonical" href="https://www.banzan.co/" />
            </Helmet>  
            <h1 style={{display:'none'}}> Banzan Studios - India's finest original Comics & Game Studios. </h1>
            <h2 style={{display:'none'}} >New Age Digital Entertainment </h2>
            <h3 style={{display:'none'}} >
                Creators of BaBlah Comic Strips and other IP Content. 
                Original Indian Character based Comics, Games and Quirky Merchandise.
            </h3>
            {/* <HomeHeroScreen scrollPos={scrollPos} /> */}
           <Promo />
           
            {/* ============= */}
            {/* <ScrollBox/>
            <ScrollBox/>
            <ScrollBox/> */}
        </div>             
        </>
    )
}



