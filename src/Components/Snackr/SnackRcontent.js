import React from "react";

import _screenshot1 from "./screenshot_1.png"
import _screenshot2 from "./screenshot_2.png"
 

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
                SnackR
            </div>
            <div className="flex flex-wrap w-full  mt-[30px]">
                <div className="w-full lg:w-1/2 ">
                    <div className=" max-w-[500px] mx-auto">

                        <div className="pt-[30px] text-center text-lg-start ">
                            SnackR is the ultimate social entertainment platform offering quick engaging bites of entertainment in the form of Games, Comics, Animated Shorts & More!
                        </div>
                        <div className="pt-[20px] text-center text-lg-start ">
                            All Banzan Content in one destination.
                        </div>
                        <div className="flex justify-center w-full lg:justify-start">
                            <a href="https://banzan-snackr.web.app/" target="_blank" className="no-underline">

                            <div className="mt-[30px] py-[10px] px-[20px] bg-[#c42f48] rounded-xl text-[#f8d249] font-bold w-fit ">
                                Snack Now!
                            </div>
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