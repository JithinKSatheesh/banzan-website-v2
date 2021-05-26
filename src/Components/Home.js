import React from 'react'
import ScrollBox from './ScrollBox'

import Fade from 'react-reveal/Fade';

const theme_mode = 'yellow'

export default function Home(props) {
    
    const _style = {
        theme1 : {
            backgroundColor :'#f9c847',
            color : '#c42f48',
        },
        theme2 : {
            backgroundColor :'#c42f48',
            color : '#0f302d'
        }
    }

    return (
        <>
        <div 
            // style={theme_mode=== 'yellow' ? _style.theme1:_style.theme2} 
            className="Maincontainer">
        
            <HomeHeroScreen/>
           
            {/* ============= */}
            <ScrollBox/>
            <ScrollBox/>
            <ScrollBox/>
        </div>             
        </>
    )
}


const HomeHeroScreen = ()=>{

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
            paddingTop:'50px',
            border:'20px solid #c42f48',
            boxShadow: '0px 0px 5px 5px #21212127',
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
                <div style={_style.hero_screen_inner_box} >
                    <div className="text-center">
                    Under construction
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    )
}