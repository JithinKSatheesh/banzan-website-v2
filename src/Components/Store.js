import React,{useRef} from 'react'
import {useSpring,animated} from 'react-spring'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

import {Link} from 'react-router-dom'

import _store_cup from '../Assets/store_cup.png'
import _store_shirt_1 from '../Assets/store_shirt_1.png'
import _store_shirt_2 from '../Assets/store_shirt_2.png'
import _store_book from '../Assets/store_book.png'
import { Footer } from './Footer'

const _right_icon = <svg fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M24 12l-9-8v6h-15v4h15v6z"/></svg>
const _coffee_icon = <svg fill='#f8d249' width="104" height="104" viewBox="0 0 24 24"><path d="M13 24h-7c-1.857-3.32-3.742-8.431-4-16h15c-.255 7.504-2.188 12.781-4 16zm5.088-14c-.051.688-.115 1.355-.192 2h1.707c-.51 1.822-1.246 3.331-2.539 4.677-.283 1.173-.601 2.25-.939 3.229 3.261-2.167 5.556-6.389 5.875-9.906h-3.912zm-7.714-3.001c4.737-4.27-.98-4.044.117-6.999-3.783 3.817 1.409 3.902-.117 6.999zm-2.78.001c3.154-2.825-.664-3.102.087-5.099-2.642 2.787.95 2.859-.087 5.099z"/></svg>
// const _shop_icon = <svg fill='#f8d249' width="74" height="74" viewBox="0 0 24 24"><path d="M9.939 0l-.939 4.971v1.098c0 1.066-.933 1.931-2 1.931s-2-.865-2-1.932v-1.097l2.996-4.971h1.943zm-3.052 0l-2.887 4.971v1.098c0 1.066-.933 1.931-2 1.931s-2-.865-2-1.932v-1.097l4.874-4.971h2.013zm17.113 6.068c0 1.067-.933 1.932-2 1.932s-2-.933-2-2v-1.098l-2.887-4.902h2.014l4.873 4.971v1.097zm-10-1.168v1.098c0 1.066-.933 2.002-2 2.002s-2-.933-2-2v-1.098l1.047-4.902h1.905l1.048 4.9zm2.004-4.9l2.993 5.002v1.098c.001 1.067-.93 1.9-1.997 1.9s-2-.933-2-2v-1.098l-.939-4.902h1.943zm-15.004 10v14h10v-2h-8v-10h18v12h2v-14h-22zm18 4h-6v10h6v-10z"/></svg>


const transfromSlide_S1 = (val) => (`translate(0px,${val * 0.1}px)`);
const transfromSlide_N1 = (val) => (`translate(0px,-${val * 0.1}px)`);
const transfromSlide_NN1 = (val) => (`translate(0px,-${val * 0.5}px)`);
const transfromSlide_NN2 = (val) => (`translate(0px,-${val * 0.3}px)`);
const transfromSlide_N2 = (val) => (`translate(0px,-${val * 0.2}px)`);

export default function Store(props) {

    const storeRef = useRef()
    
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
        const scrollPos = storeRef.current.scrollTop;
        console.log("calling",)
        setSpringVal({scrollPos})

    }


    return (
        <>
        <div className="Maincontainer">
            <div    
                onScroll={handleScroll}
                ref={storeRef}
                style={_style._container}>
                <StoreHeroPage scrollPos={scrollPos} />
            </div>
        </div>   
        </>
    )
}

const StoreHeroPage=({scrollPos})=>{
    const _style = {
        _hero_container: {
            position: "relative",
            margin: 'auto',
            maxWidth: '850px',
            width: '90%',
        },
        img_style:{
            border:'10px solid #c42f48',
            borderRadius:'20px',
            boxShadow: '0px 0px 5px 5px #21212127',
            height:'150px',
            margin:'10px'
        }
        
    };


    const RenderImage=({image})=>{

        return(
            <img style={_style.img_style} src={image} alt="" />
        )
    }


    return(
        <div 
            style={_style._hero_container}
            className="row">
                <div className="col-12">
                    <div className="space-50"></div>
                    <div className="space-20"></div>
                </div>
                <div className="col-12 col-md-6">
                    <Slide top >
                        <animated.div style={{ transform: scrollPos.to(transfromSlide_N1)}}
                            className="display-3 text-bold" >
                            Store
                        </animated.div>
                    </Slide>
                    <div className="space-50"></div>
                    <Slide bottom >
                        <animated.div style={{ transform: scrollPos.to(transfromSlide_S1)}} className="h5 text-bold ">
                        We run a line of merchandise with our Comic hero. Check out his store
                        </animated.div>
                    </Slide>
                </div>
                <div className="col-12 col-md-6">
                    <div className="space-50"></div>
                    <animated.div style={{ transform: scrollPos.to(transfromSlide_N1)}}>
                        <a href="" rel='noreferrer' target='_blank' className='text-decoration-none' >
                            <div className="col-8 col-md-6 offset-3 p-3 bg-now text-white text-bold shadow ">
                                Visit store&nbsp;{_right_icon}
                            </div>
                               
                        </a>
                    </animated.div>
                </div>

                <Fade>
                <animated.div 
                    style={{ transform: scrollPos.to(transfromSlide_N1)}}
                    className="col-12 text-center">
                        <div className="space-100"></div>
                        <RenderImage image={_store_cup}/>
                        <RenderImage image={_store_shirt_1}/>
                        <RenderImage image={_store_shirt_2}/>
                        <RenderImage image={_store_book}/>
                </animated.div>
                </Fade>
                <div className="col-12">
                    <div className="space-100"></div>
                    <animated.div 
                         style={{ transform: scrollPos.to(transfromSlide_N1)}}
                        className="h6 text-center text-bold">
                        Get in touch in case you need any help with launching your Merchandise
                        
                    </animated.div>
                    <div className="space-20"></div>
                    <div className='text-center' >
                            <span className='bg-now p-1 shadow'>
                                < Link to="/contact" className='text-white text-decoration-none text-bold' > 
                                    Contact us &nbsp; {_right_icon}
                                </Link>
                            </span>
                        </div>
                    
                    <div className="space-100"></div>
                </div>
                <div className="col-12">
                
                    <animated.div
                        style={{ 
                            position:'absolute',
                            transform: scrollPos.to(transfromSlide_NN1)}}
                     >
                        {_coffee_icon}
                    </animated.div>
                </div>
                <div className="col-12">
                    <Footer/>
                    <div className="space-100"></div>
                </div>
        </div>
    )
}

