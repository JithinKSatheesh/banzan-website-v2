import React from "react";

import _screenshot1 from "./screenshot_1.png"
import _screenshot2 from "./screenshot_2.png"

import SnackButtonLogo from "./logo.png"


const ArrowIcon = () => {
    return(
        <svg fill="white" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>

    )
}


const SnackButton = ({ onClick }) => {

    return (
        <div
            onClick={onClick}
            className=" mt-[25px] p-[10px] w-fit bg-[#a07af6] ring-[5px] ring-white _bg-zinc-900 rounded-full min-w-[280px] text-center font-bold  max-h-[50px]"
            >
            {/* <img src={SnackButtonImage} className="w-full max-w-[300px]" alt="" /> */}
                <div className="flex w-full justify-between">
                    <div className="flex">

                    <div className="">
                        <img src={SnackButtonLogo} className="h-[30px]" alt="" />
                    </div>
                    <div className="text-[16px] font-bold text-white ml-[10px] font-bold">
                        <p 
                        style={{
                            filter: "drop-shadow(0px 0px 2px grey)"
                        }}
                        className=" ">

                        SNACK NOW
                        </p>
                    </div>
                            </div>
                    <div className="w-[25px] h-[25px] ">
                        <ArrowIcon />
                    </div>
                </div>
        </div>
    );
};
 

function SnackRcontent() {

    const _style = {
        game_hero_container: {
            position: "relative",
            margin: 'auto',
            maxWidth: '850px',
            width: '90%',

        },
    };

    return (<div style={_style.game_hero_container}>

        <div className="pt-[100px]">
            <div className="text-[30px] lg:text-[50px]  font-bold text-center">
               {/* <img src={SnackButtonLogo} alt="" />  */}
                SnackR
            </div>
           
            <div className="flex flex-wrap w-full  mt-[30px]">
                <div className="w-full lg:w-1/2 ">
                    <div className=" max-w-[500px] mx-auto font-bold">

                        <div className="pt-[30px] text-center text-lg-start ">
                            SnackR is the ultimate social entertainment platform offering quick engaging bites of entertainment in the form of Games, Comics, Animated Shorts & More!
                        </div>
                        <div className="pt-[20px] text-center text-lg-start ">
                            All Banzan Content in one destination.
                        </div>
                        <div className="flex justify-center w-full lg:justify-start">
                            <a href="https://banzan-snackr.web.app/" target="_blank" className="no-underline">

                            {/* <div className="mt-[30px] py-[10px] px-[20px] bg-[#c42f48] rounded-xl text-[#f8d249] font-bold w-fit ">
                                Snack Now!
                            </div> */}
                             <SnackButton />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full  lg:w-[50%]">

                    <div className="w-fit mx-auto relative mt-[100px] lg:mt-[50px] translate-x-[-50px] lg:translate-x-0">
                        <div className="">

                        <img src={_screenshot2} alt="" className="max-w-[200px] ring-[10px] rounded-xl ring-[#c42f48]" />
                        </div>
                        <div className="absolute top-0 left-[70px] rotate-[20deg]">

                        <img src={_screenshot1} alt="" className="max-w-[200px] ring-[10px] rounded-xl ring-[#c42f48]" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="pt-[200px]"></div>
    </div>);
}

export default SnackRcontent;