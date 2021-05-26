import React, { useEffect } from 'react';
import {animated,useSpring} from 'react-spring'
import {useLocation} from 'react-router-dom'



export const YellowBg = () => {


  let location = useLocation()
 
  const [{width},setSpringVal] = useSpring(()=>({
    width : '100%'
  }))

  // useEffect(()=>{
    
  //   if(location.pathname === '/store'){
  //     setSpringVal({width : '100%'})
  //   }
  //   else{
  //     setSpringVal({width : '100%'})
  //   }
  

  // },[location])

 

  const _style = {
    bg_container:{
      position:'fixed',
      width: width,
      height:'100%',
      top:'0',
      left:'0',
      backgroundColor:'#f9c847',
      zIndex : 10,
    }
  }

  return (
    <animated.div style={_style.bg_container}>

    </animated.div>
  );
};


export const ZenBg = () => {

  let location = useLocation()
 
  const [{width},setSpringVal] = useSpring(()=>({
    width : '0%',
    config: { mass: 2, tension: 120, friction: 50 },
  }))

  useEffect(()=>{

    if(location.pathname === '/labs'||location.pathname === '/careers'){
      setSpringVal({width : '50%'})
    }
    else if(location.pathname === '/comics'||location.pathname === '/services'||location.pathname === '/investors'){
      setSpringVal({width : '100%'})
    }
    else if(location.pathname === '/contact'){
      setSpringVal({width : '100%'})
    }
    else if(location.pathname === '/store'){
      setSpringVal({width : '40%'})
    }
    else{
     
      setSpringVal({width : '0%'})
    }
  

  },[location])

  const _style = {
    bg_container:{
      position:'fixed',
      width: width,
      height:'100%',
      top:'0',
      left:'0',
      backgroundColor:'#c42f48',
      zIndex : 20
    }
  }

  return (
    <animated.div style={_style.bg_container}>
      
    </animated.div>
  );
};
