import React from 'react'
import {Helmet} from "react-helmet";


// import Fade from 'react-reveal/Fade';
// import { Footer } from './Footer';
// import { ZenBg } from './DummyBg';


export default function Error(props) {


    const _style ={
        error_container:{
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
            <Helmet>
                <title>404 - page not found  </title>
            </Helmet>  
            <div 
                style={_style.error_container}>
                <ErrorHeroPage/>
            </div>
        </div> 
            
        </>
    )
}

const ErrorHeroPage = ()=>{



    const _style = {
        error_hero_container: {
            position: "relative",
            margin: 'auto',
            maxWidth: '850px',
            width: '95%',
        },
    };
    return(
        <div style={_style.error_hero_container} >
            <div className="row">
                <div className="col-12">
                    <div className="space-100"></div>
                    <div className="text-center h1">
                        404
                    </div>
                    <div className="text-center h3">
                        Oops! page not found.
                    </div>
                    <div className="h6 text-center">
                    You typed the wrong URL
                    </div>
                </div>
                
                
                <div className="col-12">
                    {/* <Footer/> */}
                </div>

            </div>
        </div>
    )
}
