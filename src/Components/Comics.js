import React from 'react'
import {useSpring} from 'react-spring'

export default function Comics(props) {
    
    const _style ={
        comics_container:{
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
            <div style={_style.comics_container}>
                <ComicsHeroPage/>
            </div>
        </div>
            
        </>
    )
}

const ComicsHeroPage = ()=>{

    const _style = {
        comics_hero_container: {
            position: "relative",
            margin: 'auto',
            maxWidth: '850px',
            width: '100%',
          
        },
    };

    return(
        <div style={_style.comics_hero_container}>
            <div className="row">
                <div className="col-12">
                    <div className="space-50"></div>
                </div>
            </div>
            <div className="display-3">
                COMICS
            </div>
        </div>

    )
}
