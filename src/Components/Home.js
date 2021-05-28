import React,{useRef} from 'react'
import ScrollBox from './ScrollBox'

import {animated,useSpring} from 'react-spring'

import Fade from 'react-reveal/Fade';


import _home_piller_1 from '../Assets/home_piller_1.png'
import _home_sky from '../Assets/home_sky.svg'
import _home_mountain from '../Assets/home_mountain.png'
import _home_grass_small from '../Assets/home_grass_small.svg'
import _home_grass_big from '../Assets/home_grass_big.png'
import _home_tree_1 from '../Assets/home_tree_1.png'
import _home_tree_2 from '../Assets/home_tree_2.png'
import _home_tree_3 from '../Assets/home_tree_3.png'
import _home_tree_4 from '../Assets/home_tree_4.png'
import _home_bablah from '../Assets/home_bablah.png'
import _home_building from '../Assets/home_building.png'
import _home_leaf_left from '../Assets/home_leaf_left.png'
import _home_leaf_right from '../Assets/home_leaf_right.png'
import _home_leaf_center from '../Assets/home_leaf_center.png'
import _home_leaf_big_left from '../Assets/home_leaf_big_left.png'
import _home_leaf_big_right from '../Assets/home_leaf_big_right.png'
// import _home_ground from '../Assets/home_ground.svg'
import _home_ground from '../Assets/home_ground.png'
// import _home_piller_1 from '../Assets/home_piller.svg'



export default function Home(props) {
   
    const homeRef = useRef('')

    const[{scrollPos},setSpringVal] = useSpring(()=>({
        scrollPos : 0,
        // config: { mass: 5, tension: 350, friction: 40 }
    }))

    const handleScroll = ()=>{
        const scrollPos = homeRef.current.scrollTop;
        console.log("calling",)
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


const HomeHeroScreen = ({scrollPos})=>{



    const transfromSlide_S1 = (val)=>(`translate(0px,${val * 0.1}px)`) 
    const transfromSlide_N1 = (val)=>(`translate(0px,-${val * 0.1}px)`) 
    const transfromSlide_S2 = (val)=>(`translate(0px,${val * 0.05}px)`) 
    const transfromSlide_N2 = (val)=>(`translate(0px,-${val * 0.05}px)`) 
    const transfromSlide_NN1 = (val)=>(`translate(0px,-${val * 0.5}px)`)
    const transfromZoom4N = (val)=>(`scale(${1 + (val * 0.0001 )})  translate(0px,-${val * 0.05}px)`)
    
    const transfromL2 = (val)=>(` translate(-${val * 0.1}px,0px)`)
    const transfromL3 = (val)=>(` translate(-${val * 0.08}px,0px)`)
    const transfromL4 = (val)=>(` translate(-${val * 0.05}px,0px)`)
    
    const transfromZoom1 = (val)=>(`scale(${1 + (val * 0.0001 )})  translate(0px,${val * 0.01}px)`)
    const transfromZoomL1 = (val)=>(`scale(${1 + (val * 0.0001 )})  translate(-${val * 0.3}px,${val * 0.3}px)`)
    const transfromZoomL2 = (val)=>(`scale(${1 + (val * 0.0001 )})  translate(-${val * 0.1}px,${val * 0.1}px)`)
    const transfromZoomL3 = (val)=>(`scale(${1 + (val * 0.0001 )})  translate(-${val * 0.08}px,${val * 0.08}px)`)
    const transfromZoomL4 = (val)=>(`scale(${1 + (val * 0.0001 )})  translate(-${val * 0.05}px,${val * 0.05}px)`)
    const transfromZoomL5 = (val)=>(`scale(${1 + (val * 0.0001 )})  translate(-${val * 0.02}px,${val * 0.02}px)`)

    const transfromZoomR1 = (val)=>(`scale(${1 + (val * 0.0001 )})  translate(${val * 0.3}px,${val * 0.3}px)`)
    const transfromZoomR2 = (val)=>(`scale(${1 + (val * 0.0001 )})  translate(${val * 0.1}px,${val * 0.1}px)`)
    const transfromZoomR3 = (val)=>(`scale(${1 + (val * 0.0001 )})  translate(${val * 0.08}px,${val * 0.08}px)`)
    const transfromZoomR4 = (val)=>(`scale(${1 + (val * 0.0001 )})  translate(${val * 0.05}px,${val * 0.05}px)`)
    const transfromZoomR5 = (val)=>(`scale(${1 + (val * 0.0001 )})  translate(${val * 0.02}px,${val * 0.02}px)`)
    const transfromZoomR4N = (val)=>(`scale(${1 + (val * 0.0001 )})  translate(${val * 0.05}px,-${val * 0.05}px)`)
    
    const _style = {
        hero_screen_container:{
            position:'fixed',
            width:'100%',
            // maxWidth : '850px',
            // backgroundColor:'#c42f48',
            // margin:'auto',
            marginTop:'100px',
            height:'100%',
            
        },
        hero_screen_Outter_box:{
            position:"relative",
            margin:'auto',
            maxWidth : '850px',
            width:'90%',
            backgroundColor:'white',
            height:'70%',
            borderRadius:'20px',
            // paddingTop:'50px',
            border:'20px solid #c42f48',
            boxShadow: '0px 0px 5px 5px #21212127',
            overflow:'hidden',
        },
        hero_screen_inner_box:{
            height:'100%',
            width:'100%',
            margin:'auto',
        }
    }

    return(
        <div style={_style.hero_screen_container}>
             <Fade>
            <div style={_style.hero_screen_Outter_box}>
                <animated.div style={{position:'absolute',width:'100%',height:'100%',backgroundColor:'#b9d9ea'}}  >
                    {/* {scrollPos} */}
                </animated.div>
                <animated.img src={_home_mountain} 
                    style={{
                            position:'absolute',textAlign:'center',
                            width:'100%',minWidth:'700px',height:'70%',minHeight:'300px',
                            transform :scrollPos.to(transfromZoom1)
                            }} alt="" />
                <img src={_home_ground} style={{position:'absolute',width:'100%',minWidth:'1000px',height:'60%',bottom:'0px'}} alt="" />
                <animated.img src={_home_tree_1} style={{
                        transform:scrollPos.to(transfromZoomL5),
                        position:'absolute',height:'60%',bottom:'40%',right:'80%'}} alt="" />

                <animated.img src={_home_tree_2} style={{
                    transform:scrollPos.to(transfromZoomR5),
                    position:'absolute',height:'60%',bottom:'40%',right:'30%'}} alt="" />
                
                <animated.img src={_home_tree_3} style={{
                    transform:scrollPos.to(transfromZoomR5),
                    position:'absolute',height:'60%',bottom:'40%',right:'20%'}} alt="" />
                
                <animated.img src={_home_tree_3} style={{
                    // transform:scrollPos.to(transfromZoomL5),
                    position:'absolute',height:'50%',bottom:'50%',right:'70%'}} alt="" />
                
                <animated.img src={_home_tree_4} style={{
                    // transform:scrollPos.to(transfromZoomL5),
                    position:'absolute',height:'60%',bottom:'40%',right:'50%'}} alt="" />
                
                <animated.img src={_home_building} style={{
                    // transform:scrollPos.to(transfromZoomL5),
                    position:'absolute',width:'200px',bottom:'40%',right:'50%'}} alt="" />
                
                <animated.img src={_home_grass_small} style={{
                    transform:scrollPos.to(transfromZoomL5),
                    position:'absolute',width:'100px',bottom:'30%'}} alt="" />
                
                <animated.img src={_home_grass_big} style={{
                    transform:scrollPos.to(transfromZoomR5),
                    position:'absolute',width:'400px',bottom:'30%',right:'0%'}} alt="" />
                
                <animated.img src={_home_grass_big} style={{
                    transform:scrollPos.to(transfromZoomR5),
                    position:'absolute',width:'300px',bottom:'30%',right:'10%'}} alt="" />
                
                <animated.img src={_home_grass_big} style={{
                    transform:scrollPos.to(transfromZoomL5),
                    position:'absolute',width:'300px',bottom:'30%',right:'80%'}} alt="" />
                
                <animated.img src={_home_bablah} style={{
                    transform:scrollPos.to(transfromSlide_N2),
                    position:'absolute',width:'250px',bottom:'-20%',right:'30%'}} alt="" />

                <animated.div style={{
                         transform:scrollPos.to(transfromSlide_N1),
                        position:'absolute',width:'100%',top:'40%'}}
                        className='text-center text-bold small text-dark'>
                   <span className='bg-now shadow p-2 bg-white' >
                        WELCOME TO 
                        BANZAN STUDIOS
                    </span> 
                </animated.div>
                
                <animated.img src={_home_grass_big} style={{
                    transform:scrollPos.to(transfromZoomR4),
                    position:'absolute',width:'200px',bottom:'5%',right:'10%'}} alt="" />
                
                <animated.img src={_home_leaf_left} style={{
                    transform:scrollPos.to(transfromZoomL4),
                    position:'absolute',width:'200px',bottom:'0%',left:'0%'}} alt="" />
                
                <animated.img src={_home_leaf_right} style={{
                    transform:scrollPos.to(transfromZoomR4),
                    position:'absolute',width:'200px',bottom:'0%',right:'0%'}} alt="" />
                
                <animated.img src={_home_leaf_center} style={{
                    transform:scrollPos.to(transfromZoomR5),
                    position:'absolute',width:'300px',bottom:'0%',right:'10%'}} alt="" />
                
                <animated.img src={_home_leaf_center} style={{
                     transform:scrollPos.to(transfromZoomL5),
                    position:'absolute',width:'300px',bottom:'0%',right:'60%'}} alt="" />
                
                <animated.img src={_home_leaf_big_left} style={{
                        transform:scrollPos.to(transfromZoomL1),
                        position:'absolute',width:'400px',bottom:'-10%',left:'10%'}} alt="" />
                
                <animated.img src={_home_leaf_big_right} style={{
                         transform:scrollPos.to(transfromZoomR1),
                        position:'absolute',width:'400px',bottom:'-10%',right:'10%'}} alt="" />

                <animated.div style={{
                         transform:scrollPos.to(transfromSlide_S1),
                        position:'absolute',width:'100%',bottom:'10%'}}
                        className='text-center text-bold small text-dark'>
                   <span className='bg-now shadow p-2 bg-now' >
                        <svg fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M17 22v2h-10v-2h10zm0-4h-10v2h10v-2zm-10-7v5h10v-5h6l-11-11-11 11h6z"/></svg>
                    </span> 
                </animated.div>
               
            </div>
            </Fade>
        </div>
    )
}

