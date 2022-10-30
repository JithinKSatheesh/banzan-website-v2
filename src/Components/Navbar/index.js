import React, { useEffect, useState } from 'react'
import {Link,useLocation} from 'react-router-dom'

import {animated,useSpring} from 'react-spring'


import _logo from 'Assets/logo.png'
import _logo2 from 'Assets/logo2.png'
import { NavMenu } from './NavMenu';

const _NavData = [
 
    {
        id:'1',
        name:'COMICS',
        to:'/comics'
    },
    {
        id:'2',
        name:'GAMES',
        to:'/games'
    },
    // {
    //     id:'3',
    //     name:'SERVICES',
    //     to:'/services'
    // },
    {
        id:'6',
        name:'BABLAH',
        to:'/bablah'
    },
    {
        id:'4',
        name:'PARTNERS',
        to:'/partners'
    },
    {
        id:'5',
        name:'LABS',
        to:'/labs'
    },
]

const _NavData_bottom = [
    // {
    //     id:'10',
    //     name:'INVESTORS',
    //     to:'/investors'
    // },
    // {
    //     id:'11',
    //     name:'IN MEDIA',
    //     to:'/inmedia'
    // },
    {
        id:'12',
        name:'ABOUT',
        to:'/about'
    },
    {
        id:'13',
        name:'CAREERS',
        to:'/careers'
    },
    {
        id:'14',
        name:'CONTACT',
        to:'/contact/us'
    },
]



export default function Navbar(props) {
    
    let location = useLocation().pathname

    const [yellowTheme,setTheme] = useState(true)
    const [yellowTheme_nav,setThemeNav] = useState(true)
    const [toggleMenu,setToggleMenu] = useState(false)

    useEffect(()=>{
        if( 
            location === '/comics'
            ||location === '/services' 
            ||location === '/investors'
            ||location === '/contact'  
            ){

            setTheme(false)
            setThemeNav(false)
        }
        else if(location === '/labs'||location === '/careers'||location === '/store'){
            setTheme(false)
            setThemeNav(true)
        }
        else{
            setTheme(true)
            setThemeNav(true)
            
        }

    },[location])  
    
    const RenderNavList = ({data})=>{
        return(
            data.map(value=>(
                <Link 
                    key={value.id} 
                    className={`links text-dark
                    ${value.to === location && 'nav-select shadow'}  
                    text-bold `}
                    to={value.to} >
                            {value.name}</Link> 
            ))
        )
    }


   

    return(
        <>
        <div className="_navbar">
            <div className="space-20"></div>
            <div className="nav-container">
                <div className="logo ">
                    <Link to='/'>
                    <img style={{height:'30px'}} src={_logo} alt="banzan studios brand logo" />
                    </Link>
                </div>
                <div className="nav-links  pt-2 ">
                    <div className="d-none d-md-block">
                        <RenderNavList data={_NavData} />
                    </div>
                    <div className="d-block d-md-none">
                           <div className='' onClick={()=>setToggleMenu(true)}>   
                                <NavHarmBurger _color={'#c42f48'} />
                            </div> 
                    </div>
                    
                </div>
                {toggleMenu && <NavMenu toggle={setToggleMenu} NavList={[..._NavData,..._NavData_bottom]} />}
            </div>
        </div>
        </>
    )
}

const NavHarmBurger = ({_color='black'})=>{

    const _style = {
        box:{
            // position:'absolute',
            width:'50px',
            height:'25px',
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            zIndex:'10000000',
            transform:'rotateZ(-30deg)'
            // backgroundColor:'red',
            
        },
        stipe:{
            height:'3px',
            backgroundColor:_color,
            borderRadius:'3px'
        }
    }

    const changeAngleN = (o)=>`rotateZ(${-o}deg)`
    const changeAngleP = (o)=>`rotateZ(${o}deg)`

    const [{angle},setSpringVal] = useSpring(()=>({
        angle:0,
    }))


    return(
        <div 
            onClick={()=>{setSpringVal({angle:30})}}
            onMouseEnter={()=>{setSpringVal({angle:30})}}
            onMouseLeave={()=>{setSpringVal({angle:0})}}
            className='align-items-center' style={_style.box}>
            <animated.div style={{..._style.stipe, width:'20px',transform:angle.to(changeAngleP)}}></animated.div>
            <animated.div style={{..._style.stipe,width:'30px',transform:angle.to(changeAngleP)}}></animated.div>
            <animated.div style={{..._style.stipe,width:'20px',transform:angle.to(changeAngleP)}}></animated.div>
        </div>
    )
}


