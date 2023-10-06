import React,{useRef,useState} from 'react'

// import { GameHeroPage } from './GameHeroPage'
// import { GamesShowCasePage } from './GamesShowCasePage'
// import GameShowCase from './GameShowCase'

import {useSpring} from 'react-spring'
import {Helmet} from "react-helmet";

// import Popup from 'Components/Popup';
import { Footer } from 'Components/Footer';
import SnackRcontent from './SnackRcontent';



export default function Games(props) {

    const gameRef = useRef(null)
    

    const[{scrollPos},setSpringVal] = useSpring(()=>({
        scrollPos : 0,
        // config: { mass: 5, tension: 350, friction: 40 }
    }))

    const _style = {
        theme1: {
            backgroundColor: '#f9c847',
            color: '#c42f48',
        },
        theme2: {
            backgroundColor: '#c42f48',
            color: '#0f302d'
        },
        game_container: {
            position: 'fixed',
            width: '100%',
            marginTop: '50px',
            height: '100%',
            overflowY: 'scroll',
            overflowX:'hidden'
            // backgroundColor:'#c42f48',
        },
    }



    const handleScroll = ()=>{

        const scrollPos = gameRef.current.scrollTop;
        setSpringVal({scrollPos})

    }


    return (
        <div className="Maincontainer">
            <Helmet>
                <title>Banzan Studios - SnackR  </title>
                <link rel="canonical" href="https://www.banzan.co/games" />
            </Helmet>  
            <div 
                ref={gameRef}
                onScroll={handleScroll}
                style={_style.game_container}>
                {/* <GameHeroPage scrollPos={scrollPos}  /> */}
                <SnackRcontent />
                {/* <GameShowCase selectGame={selectGame} /> */}
                {/* <GamesShowCasePage scrollPos={scrollPos} /> */}
            <Footer />
            </div>
            {/* <Popup item={selectedGame} onClose={unselectGame} /> */}
            {/* ======== */}
           

        </div>
    )
}



