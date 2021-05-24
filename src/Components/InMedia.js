import React from 'react'

import { InMeidaHeroPage } from './InMeidaHeroPage';




export default function Inmedia(props) {

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
                <InMeidaHeroPage  />
            </div>
        </div>   
        </>
    )
}


