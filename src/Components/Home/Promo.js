import React, { useRef, useEffect } from 'react'

import _promo from './top23.jpg'
// import _ludo from "./ludo_vid.mp4"
import _ludo2 from "./lodo2.mp4"
import _ludoImg from "./ludo.jpeg"
// import _promo2 from './Dubai_Creative_Insta.jpeg'
// import _promo3 from './IGDC.jpeg'
import _popcon from "./popcon.jpeg"
import Partners from './Partners'

export default function Promo(props) {

   
    

    return (
        <>
            <div className="">
                <div className="flex flex-wrap justify-center mt-[100px]">
                    {/* <div className="mx-auto_ max-w-[400px]  mt-[20px] border-[20px] rounded-xl border-[#c42f48] drop-shadow-xl m-[10px]">
                        <img src={_popcon} alt=""  className='w-full'/>
                    </div> */}
                      <a href="https://play.google.com/store/apps/details?id=com.BanzanStudios.DesiLudo&hl=en_IN&gl=US" target='_blank'>
                   <VideoLudo />
                    </a>
                    <div className=" flex flex-col justify-center items-center mx-auto_ max-w-[300px]  mt-[20px] border-[20px] rounded-xl border-[#c42f48] drop-shadow-xl m-[10px]">
                        <img src={_promo} alt=""  className='w-full '/>
                    </div>
                    {/* <div className=" flex flex-col justify-center items-center mx-auto_ max-w-[400px]  mt-[20px] border-[20px] rounded-xl border-[#c42f48] drop-shadow-xl m-[10px]">
                      <a href="https://play.google.com/store/apps/details?id=com.BanzanStudios.DesiLudo&hl=en_IN&gl=US" target='_blank'>

                        <img src={_ludoImg} alt=""  className='w-full '/>
                      </a>
                    </div> */}
                </div>
                
                {/* <Partners /> */}
                <div className="w-fit mx-auto pt-[20px]">
                    Made with ❤️ in 🇮🇳
                </div>
            </div>
        </>
    )
}


const VideoLudo = () => {

    const videoRef = useRef(null);


    

    useEffect(() => {
      // Access the video element and set autoplay attribute
      if (videoRef.current) {
        // Set a timeout to autoplay after 5 seconds
        const autoplayTimeout = setTimeout(() => {
          videoRef.current.autoplay = true;
          videoRef.current.muted = true; 
        }, 5000);
  
        // Cleanup function to clear timeout if component unmounts
        return () => clearTimeout(autoplayTimeout);
      }
    }, []);

    return(
        <div className=" flex flex-col justify-center items-center mx-auto_ max-w-[300px]  mt-[20px] border-[20px] rounded-xl border-[#c42f48] drop-shadow-xl m-[10px]">
        <div className='w-full'>
            <video ref={videoRef} autoPlay={true} muted={true} loop={true} >
                <source src={_ludo2} autoPlay={true} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
    )

}