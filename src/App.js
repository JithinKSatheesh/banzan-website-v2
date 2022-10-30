import React,{ Suspense } from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";


// import Test from './test2-1'

// import RightSideMenu from './Components/RightSideMenu'

// tracking....
// ================================
import ReactGA from 'react-ga';
const trackingId = "UA-164605185-1";
ReactGA.initialize(trackingId);
ReactGA.pageview('/');
// ================================

const  RoutesList =   React.lazy(()=> import('./RoutesList'))  

export default function App(props) {
  

  return (
    <div className="app">
      <Suspense fallback={<LoadingScreen/>} >
        <RoutesList />
      </Suspense>
    </div>
  )
}


const LoadingScreen = ()=>{

  return(
    <div style={{position:'fixed',left:'calc(50% - 100px)',top:'calc(50% - 50px)',width:'100px',textAlign:'center'}} >
      <PacmanLoader color='#c42f48' />
    </div>
  )
}



