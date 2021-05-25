import React,{useState,useEffect} from 'react';
import Zoom from 'react-reveal/Zoom';
import {Link,useLocation} from 'react-router-dom'

import {useSpring,animated} from 'react-spring'

 export default function LeftSideMenu() {
     
    let mediaQuery = window.innerWidth
    let location = useLocation().pathname
    const _slideto = (x)=> `translateX(${x}px)`


    const [show,setShow] = useState(false)
    const [yellowTheme,setTheme] = useState(true)
    const [{posX},setSpringVal] = useSpring(()=>({
        posX : -280,
        
    }))
    

    
    
    const _bg = yellowTheme?'#c42f48' : '#fcc812'
    const _color = yellowTheme?'#fcc812' : '#c42f48'


    const _style = {
        pop_menu_container: {
            position: 'fixed',
            zIndex: '100000',
            // top: 'calc(50% - 155px)',
            top: mediaQuery<= '400'? '50%':'calc(50% - 155px)',
            display: 'flex',
            // transform: `${show? 'translateX(-150px)' : 'translateX(-280px)'} `,
            transform: posX.to(_slideto),

            // left:'300px' //proudction
            
            
        },
        menu_handle: {
            width: '50px',
            height: mediaQuery<= '400'? '50px':'150px' ,
            backgroundColor:  _bg,
            borderRadius: '10px',
            transform: 'translateX(-30px)',
            display: 'flex',
            alignSelf: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            boxShadow: '0px 0px 5px 5px #21212127',
            cursor:'pointer',
        },
        menu_button_box: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        menu_list_box: {
            height: '300px',
            width: '300px',
            backgroundColor: _bg,
            boxShadow: '0px 0px 5px 5px #21212127',
            borderRadius: '50%',
            
            display:'flex',
            flexDirection: 'column',
            justifyContent :'center',


        },
        menu_list_items:{
            color:'#fcc812',
            textAlign:'right',
            paddingRight:'50px',
            height:'40px',
            fontWeight:'bold',
        }
    };

    const _svg_media = <svg fill={_color} width="14" height="14" viewBox="0 0 24 24"><path d="M11.266 7l12.734-2.625-.008-.042-1.008-4.333-21.169 4.196c-1.054.209-1.815 1.134-1.815 2.207v14.597c0 1.657 1.343 3 3 3h18c1.657 0 3-1.343 3-3v-14h-12.734zm8.844-5.243l2.396 1.604-2.994.595-2.398-1.605 2.996-.594zm-5.898 1.169l2.4 1.606-2.994.595-2.401-1.607 2.995-.594zm-5.904 1.171l2.403 1.608-2.993.595-2.406-1.61 2.996-.593zm-2.555 5.903l2.039-2h3.054l-2.039 2h-3.054zm4.247 10v-7l6 3.414-6 3.586zm4.827-10h-3.054l2.039-2h3.054l-2.039 2zm6.012 0h-3.054l2.039-2h3.054l-2.039 2z" /></svg>;
    // const _svg_invest = <svg fill={_color} width="14" height="14" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.947v1.053h-1v-.998c-1.035-.018-2.106-.265-3-.727l.455-1.644c.956.371 2.229.765 3.225.54 1.149-.26 1.384-1.442.114-2.011-.931-.434-3.778-.805-3.778-3.243 0-1.363 1.039-2.583 2.984-2.85v-1.067h1v1.018c.724.019 1.536.145 2.442.42l-.362 1.647c-.768-.27-1.617-.515-2.443-.465-1.489.087-1.62 1.376-.581 1.916 1.712.805 3.944 1.402 3.944 3.547.002 1.718-1.343 2.632-3 2.864z" /></svg>;
    const _svg_media2 = <svg fill={_color} width="14" height="14" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" /></svg>;
    const _svg_arrow_right = <svg fill={_color} width="14" height="14" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
    const _svg_arrow_left = <svg fill={_color} width="14" height="14" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>



    useEffect(()=>{
        if(location === '/comics'||location === '/services'||location === '/store'||location === '/labs'||location === '/investors'||location === '/contact' ){
            setTheme(false)
        }
        else{
            setTheme(true)
            
        }

    },[location])  

    const RenderListItems = ({name,url,style})=>{

        return(
            <div style={style} >
                <Link 
                    className='link-hover'
                    to={url} style={{color:_color,}} >
                    {name}
                </Link>
            </div>
        )
    }
    

    return (
        <animated.div 
            className="d-none d-md-flex"
            onMouseEnter={()=>{setSpringVal({posX: -150})}}
            onMouseLeave={()=>{setSpringVal({posX: -280})}}
            style={_style.pop_menu_container}>
            {/* --menu---- */}
            <div style={_style.menu_list_box}>
                <RenderListItems style={_style.menu_list_items} name={"INVESTORS"} url='/investors'  />
                <RenderListItems style={_style.menu_list_items} name={"IN MEDIA"} url='/inmedia'  />
            </div>
            {/* --pull handle---- */}
            <div  
                
                style={_style.menu_handle}>
                <div style={_style.menu_button_box}></div>
                <Zoom><div className="text-center p-1">{_svg_media}</div></Zoom>
                {
                    show?
                        <Zoom><div className="text-center p-1">{_svg_arrow_left}</div></Zoom>
                        :
                        <Zoom><div className="text-center p-1">{_svg_arrow_right}</div></Zoom>
                }
                <Zoom><div className="text-center p-1">{_svg_media2}</div></Zoom>
            </div>
        </animated.div>
    );
};
