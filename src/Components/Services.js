import React,{useRef} from 'react'
import {useSpring} from 'react-spring'

// import _service_img_3 from '../Assets/service_img_3.png'
import { ServicesFormPage } from './ServicesFormPage';
import { ServicesHeroPage } from './ServicesHeroPage';

export default function Services(props) {

    const serviceRef = useRef(null)

    const[{scrollPos},setSpringVal] = useSpring(()=>({
        scrollPos : 0,
        // config: { mass: 5, tension: 350, friction: 40 }
    }))
    
    const _style ={
        services_container:{
            position: 'fixed',
            width: '100%',
            marginTop: '50px',
            height: '100%',
            overflowY: 'scroll',
            overflowX:'hidden'
        },
       
    }


    const handleScroll = ()=>{

        const scrollPos = serviceRef.current.scrollTop;
        console.log("calling",)
        setSpringVal({scrollPos})

    }

    

    return (
        <>
         <div className="Maincontainer">
            <div 
                ref={serviceRef}
                onScroll={handleScroll}
                style={_style.services_container}>
                <ServicesHeroPage scrollPos={scrollPos} />
                <ServicesFormPage scrollPos={scrollPos}/>
            </div>
        </div>
               
        </>
    )
}



