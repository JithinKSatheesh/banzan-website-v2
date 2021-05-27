import React, { useEffect } from 'react';
import {animated,useSpring} from 'react-spring'
import {useLocation} from 'react-router-dom'



export const YellowBg = () => {


  let location = useLocation()
 
  const [{width},setSpringVal] = useSpring(()=>({
    width : '100%'
  }))

  useEffect(()=>{
    
    if(location.pathname === '/games'){
      setSpringVal({width : '40%'})
    }
    else if(location.pathname === '/services'){
      setSpringVal({width : '45%'})
    }
    else if(location.pathname === '/store'){
      setSpringVal({width : '60%'})
    }
    else{
      setSpringVal({width : '50%'})
    }
  

  },[location])

 

  const _style = {
    bg_container:{
      position:'fixed',
      width: width,
      height:'100%',
      top:'0',
      left:'0',
      // backgroundColor:'#f9c847',
      backgroundColor:'#fbe05a',
      zIndex : 10,
    }
  }

  return (
    <animated.div  style={_style.bg_container}>

    </animated.div>
  );
};


export const WhiteBg = () => {

  let location = useLocation()
 
  const [{width},setSpringVal] = useSpring(()=>({
    width : '0%',
    config: { mass: 2, tension: 120, friction: 50 },
  }))

  useEffect(()=>{

    if(location.pathname === '/store'){
      setSpringVal({width : '35%'})
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
      // backgroundColor:'#c42f48',
      backgroundColor:'white',
      zIndex : 20
    }
  }

  return (
    <animated.div className='shadow' style={_style.bg_container}>
      
    </animated.div>
  );
};



export const ZenBg = () => {

 
  const [{width,right},setSpringVal] = useSpring(()=>({
    width : '0%',
    right:'',
    from:{width:'0%',right:''},
    to:async(next)=>{
      await next({width:'100%'})
      await next({width:'0%'})
      
    },
    // config: { mass: 2, tension: 120, friction: 50 },
  }))

 

  const _style = {
    bg_container:{
      position:'fixed',
      width: width,
      height:'100%',
      top:'0',
      // backgroundColor:'#c42f48',
      backgroundColor:'#c42f48',
      zIndex : 1000
    }
  }

  return (
    <animated.div className='shadow' style={_style.bg_container}>
      
    </animated.div>
  );
};
