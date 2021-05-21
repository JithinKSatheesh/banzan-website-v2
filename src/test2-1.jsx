import logo from './logo.svg';
import './App.css';
import React from 'react'
import Fade from 'react-reveal/Fade';

import {useState,useRef,useLayoutEffect} from 'react'

function App() {

  const [scrollTop,setScrollTop] = useState(0)
  const [clientTop,setClientTop] = useState(0)

  const div_ref = useRef(0)
  const box_ref_1 = useRef(0),
        box_ref_2 = useRef(0)

  const topPos = (element) => element.getBoundingClientRect().top;

  const [show,doShow] = useState({
    divOne : true,
    divTwo : false
  })
  
  const handleScroll = ()=>{
    // const scrollY = window.scrollY
    // const scrollTop = div_ref.current.scrollTop
    // const clientTop = div_ref.current.getBoundingClientRect()
    // console.log("scoll Y : ", scrollY, "Scroll Top : ", scrollTop,"Client Top :", clientTop.bottom )
    // setScrollTop(scrollTop)
    // setClientTop(clientTop)
    const divOnePos = topPos(box_ref_1.current)
    const divTwoPos = topPos(box_ref_2.current)


    // console.log(divOnePos)
    const scrollPos = window.scrollY + window.innerHeight;
  
    if (divTwoPos < scrollPos) {
      console.log("showw 2")
      doShow({
        divOne:false,
        divTwo:true
      })
      
    }
    else if (divOnePos < scrollPos) {
      console.log("showw 1")
      doShow({
        divOne:true,
        divTwo:false
      })
      
    }
    
    else{
      console.log("hide")
      doShow({
        divOne:false,
        divTwo:false
      })
    }
    

  }


  return (
    <div className="App">
        <div 
          ref={div_ref}
          onScroll={handleScroll}
          className="Maincontainer">
            <Box ref={box_ref_1}  />
            <Box/>
            <Box ref={box_ref_2}  />
            
            { show.divOne && <DisplayThings text={"hello"} />}
            { show.divTwo && <DisplayThings text={"World"} />}
           
        </div>
    </div>
  );
}

const Box = React.forwardRef((props,ref)=>{  
  return(
    <div ref={ref} 
    style={{
      transform :`${props.display?'translate(0px,0px)':'translate(-200px,0px)'}`,
      opacity : props.display? 1:0,
  
  }}
    className="scrollBox"></div>
  )
})


const DisplayThings = ({text})=>{
    return(
      <Fade collapse bottom >
      <div className="displayThings">
          {text}
      </div>

      {
        
      }
      </Fade>
    )
}


export default App;
