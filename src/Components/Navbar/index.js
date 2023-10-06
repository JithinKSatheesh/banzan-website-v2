import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { animated, useSpring } from 'react-spring'


import _logo from 'Assets/logo.png'
import _logo2 from 'Assets/logo2.png'
import { NavMenu } from './NavMenu';

const _NavData = [
    {
        id: 100,
        name: "PRODUCTS",
        child: [

            {
                id: '6',
                name: 'BABLAH',
                to: '/bablah'
            },
            {
                id: '2',
                name: 'GAMES',
                to: '/games'
            },
            {
                id: '1',
                name: 'COMICS',
                to: '/comics'
            },
            {
                id: '3',
                name: 'SNACKR',
                to: '/snackr'
            },

        ]
    },


    {
        id: '3',
        name: 'SERVICES',
        to: '/services'
    },
    {
        id: '5',
        name: 'LABS',
        to: '/labs'
    },

    {
        id: '4',
        name: 'PARTNERS',
        to: '/partners'
    },
    {
        id: '5',
        name: 'ABOUT',
        to: '/about'
    },

    {
        id: '6',
        name: 'CAREERS',
        to: '/careers'
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
    // {
    //     id:'12',
    //     name:'ABOUT',
    //     to:'/about'
    // },
    {
        id: '13',
        name: 'CAREERS',
        to: '/careers'
    },
    {
        id: '14',
        name: 'CONTACT',
        to: '/contact/us'
    },
]



export default function Navbar(props) {

    let location = useLocation().pathname

    const [yellowTheme, setTheme] = useState(true)
    const [yellowTheme_nav, setThemeNav] = useState(true)
    const [toggleMenu, setToggleMenu] = useState(false)

    useEffect(() => {
        if (
            location === '/comics'
            || location === '/services'
            || location === '/investors'
            || location === '/contact'
        ) {

            setTheme(false)
            setThemeNav(false)
        }
        else if (location === '/labs' || location === '/careers' || location === '/store') {
            setTheme(false)
            setThemeNav(true)
        }
        else {
            setTheme(true)
            setThemeNav(true)

        }

    }, [location])

    const RenderSubLinks = ({ data }) => {

        return (<div className=''>
            <div className="flex items-center group ">

                {data?.name}
                <svg className='w-[20px] h-[20px]' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z" /></svg>
                <div className="div absolute top-[45px] hidden group-hover:block w-[200px] bg-[#c42f48] shadow-xl rounded-xl overflow-hidden">
                    {
                        data?.child?.map(item => {

                            return (
                                <Link
                                    key={item.id}
                                    className={`no-underline  text-dark 
                          
                        text-bold `}
                                    to={item?.to || ""} >
                                    <div className='py-[10px] text-center border-b-2 border-red-400 text-white hover:bg-red-800'>
                                        {item?.name}
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>

        </div>)
    }

    const RenderNavList = ({ data }) => {
        return (
            data.map(value => (
                // <div className=''>
                <div className={`${value.to === location && 'bg-white  shadow '} text-[14px] px-[20px] py-[10px]   hover:bg-white/30 rounded-2xl `}>
                    <Link
                        key={value.id}
                        className={`no-underline  text-dark 
                      
                    text-bold `}
                        to={value?.to || ""} >
                        {
                            value?.child ?
                                <RenderSubLinks data={value} />
                                :
                                <div >
                                    {value.name}

                                </div>
                        }

                    </Link>

                </div>
            ))
        )
    }




    return (
        <>
            <div className="_navbar ">
                {/* <div className="space-20"></div> */}
                <div className="container">
                    <div className=" flex items-center justify-between max-w-[890px] mx-auto  ">

                    <div className="logo   flex flex-col items-center justify-center">
                        <Link to='/'>
                            <img style={{ height: '30px' }} src={_logo} alt="banzan studios brand logo" />
                        </Link>
                    </div>
                    <div className=" ">
                        <div className="d-none d-md-flex justify-between w-full ">
                            <RenderNavList data={_NavData} />
                        </div>
                        <div className="d-block d-md-none">
                            <div className='' onClick={() => setToggleMenu(true)}>
                                <NavHarmBurger _color={'#c42f48'} />
                            </div>
                        </div>

                    </div>
                    </div>

                    {toggleMenu && <NavMenu toggle={setToggleMenu} NavList={[..._NavData, ..._NavData_bottom]} />}
                </div>
            </div>
        </>
    )
}

const NavHarmBurger = ({ _color = 'black' }) => {

    const _style = {
        box: {
            // position:'absolute',
            width: '50px',
            height: '25px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            zIndex: '10000000',
            transform: 'rotateZ(-30deg)'
            // backgroundColor:'red',

        },
        stipe: {
            height: '3px',
            backgroundColor: _color,
            borderRadius: '3px'
        }
    }

    const changeAngleN = (o) => `rotateZ(${-o}deg)`
    const changeAngleP = (o) => `rotateZ(${o}deg)`

    const [{ angle }, setSpringVal] = useSpring(() => ({
        angle: 0,
    }))


    return (
        <div
            onClick={() => { setSpringVal({ angle: 30 }) }}
            onMouseEnter={() => { setSpringVal({ angle: 30 }) }}
            onMouseLeave={() => { setSpringVal({ angle: 0 }) }}
            className='align-items-center' style={_style.box}>
            <animated.div style={{ ..._style.stipe, width: '20px', transform: angle.to(changeAngleP) }}></animated.div>
            <animated.div style={{ ..._style.stipe, width: '30px', transform: angle.to(changeAngleP) }}></animated.div>
            <animated.div style={{ ..._style.stipe, width: '20px', transform: angle.to(changeAngleP) }}></animated.div>
        </div>
    )
}


