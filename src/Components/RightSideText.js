import React,{useState,useEffect} from 'react';

import Zoom from 'react-reveal/Zoom';
import {useSpring,animated} from 'react-spring'

export default function RightSideText() {

    // let isMobile = window.innerWidth < 400
    // const [show,setShow] = useState(false)


    // const _slideto = (x)=> `translateX(${x}px)`
    
    
    
    // const [yellowTheme,setTheme] = useState(true)
    // const [{posX},setSpringVal] = useSpring(()=>({
    //     posX : 280,
    //     from:{posX:280},
    //     to: async (next) =>{
    //         await next({posX:150})
    //         await next({posX:280})
    //     },
    //     config: { mass: 10, tension: 850, friction: 100 },
       
    // }))

    const _bg = '#c42f48' 
    const _color = '#fcc812' 

    const _style = {
        pop_menu_container: {
            position: 'fixed',
            right:'0',
            zIndex: '100000',
            top: 'calc(50% - 100px )',
            display: 'flex',
            writingMode:'vertical-rl',
            // transform:'rotateZ(180deg)'
           
        },
        menu_handle: {
            width: '50px',
            height: '100px',
            backgroundColor: _bg,
            borderRadius: '10px',
            display: 'flex',
            alignSelf: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            boxShadow: '0px 0px 5px 5px #21212127',
          
        },
        

    };


    return (
        <animated.div 
            className="d-none d-md-flex text-bold"
            style={_style.pop_menu_container}>
                Banzan Studio © 2021
        </animated.div>
    );
};
