import React, { useEffect, useState } from 'react'
import {Link,useLocation} from 'react-router-dom'


import _logo from '../Assets/logo.png'
import _logo2 from '../Assets/logo2.png'



export default function Navbar(props) {
    
    let location = useLocation().pathname

    const [yellowTheme,setTheme] = useState(true)
    const [yellowTheme_nav,setThemeNav] = useState(true)

    useEffect(()=>{
        if(location === '/comics'||location === '/services' ||location === '/investors' ){
            setTheme(false)
            setThemeNav(false)
        }
        else if(location === '/labs'){
            setTheme(false)
            setThemeNav(true)
        }
        else{
            setTheme(true)
            setThemeNav(true)
            
        }

    },[location])    

    return(
        <>
        <div className="_navbar">
            <div className="space-20"></div>
            <div className="nav-container">
                <div className="logo">
                    <Link to='/'>
                    <img style={{height:'30px'}} src={yellowTheme?_logo:_logo2} alt="" />
                    </Link>
                </div>
                <div className="nav-links ">
                    <div className="d-none d-md-block">
                        {/* <Link to='/' className="links text-dark">Home</Link> */}
                        <Link to='/comics' className={`links ${yellowTheme_nav?'text-dark': 'text-white'} `}>COMICS</Link>
                        <Link to='/games' className={`links ${yellowTheme_nav?'text-dark': 'text-white'} `}>GAMES</Link>
                        <Link to='/services' className={`links ${yellowTheme_nav?'text-dark': 'text-white'} `}>SERVICES</Link>
                        <Link to='/store' className={`links ${yellowTheme_nav?'text-dark': 'text-white'} `}>STORE</Link>
                        <Link to='/labs' className={`links ${yellowTheme_nav?'text-dark': 'text-white'} `}>LABS</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
