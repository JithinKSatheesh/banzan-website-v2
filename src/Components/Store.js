import React from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

import {Link} from 'react-router-dom'

import _store_cup from '../Assets/store_cup.png'
import _store_shirt_1 from '../Assets/store_shirt_1.png'
import _store_shirt_2 from '../Assets/store_shirt_2.png'
import _store_book from '../Assets/store_book.png'

const _right_icon = <svg fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M24 12l-9-8v6h-15v4h15v6z"/></svg>



export default function Store(props) {
    
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


    return (
        <>
        <div className="Maincontainer">
            <div 
                style={_style._container}>
                <StoreHeroPage/>
            </div>
        </div>   
        </>
    )
}

const StoreHeroPage=()=>{
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
                        <div className="display-3 text-bold">
                            Store
                        </div>
                    </Slide>
                    <div className="space-50"></div>
                    <Slide bottom >
                        <div 
                            style={{lineHeight:'30px'}}
                            className="h5 text-bold ">
                        We run a line of merchandise with our Comic hero. Check out his store
                        </div>
                    </Slide>
                </div>
                <div className="col-12 col-md-6">
                    <div className="space-50"></div>
                    <div className="row">
                        <a href="" rel='noreferrer' target='_blank' className='text-decoration-none' >
                            <div 
                                style={{boxShadow: '0px 0px 5px 5px #21212127',}}
                                className="col-6 offset-3 p-3 bg-now text-white text-bold ">
                                Visit store&nbsp;{_right_icon}
                            </div>
                        </a>
                    </div>
                </div>

                <Fade>
                <div className="col-12 text-center">
                        <div className="space-100"></div>
                        <RenderImage image={_store_cup}/>
                        <RenderImage image={_store_shirt_1}/>
                        <RenderImage image={_store_shirt_2}/>
                        <RenderImage image={_store_book}/>
                </div>
                </Fade>
                <div className="col-12">
                    <div className="space-100"></div>
                    <div className="h6 text-center text-bold">
                        Get in touch in case you need any help with launching your Merchandise
                        
                    </div>
                    <div className='text-center' >
                            <span 
                                style={{boxShadow: '0px 0px 5px 5px #21212127',}}
                                className='bg-now p-1'>
                                < Link to="/contact" className='text-white text-decoration-none text-bold' > 
                                    Contact us &nbsp; {_right_icon}
                                </Link>
                            </span>
                        </div>
                    
                    <div className="space-100"></div>
                    <div className="space-100"></div>
                    <div className="space-100"></div>
                </div>
        </div>
    )
}

