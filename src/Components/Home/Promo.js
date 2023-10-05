import React from 'react'

import _promo from './top23.jpg'
import _promo2 from './Dubai_Creative_Insta.JPG'

export default function Promo(props) {
    

    return (
        <>
            <div className="">
                <div className="flex flex-wrap justify-center mt-[100px]">
                    <div className="mx-auto_ max-w-[400px]  mt-[20px] border-[20px] rounded-xl border-[#c42f48] drop-shadow-xl m-[10px]">
                        <img src={_promo2} alt=""  className='w-full'/>
                    </div>
                    <div className=" flex flex-col justify-center items-center mx-auto_ max-w-[400px]  mt-[20px] border-[20px] rounded-xl border-[#c42f48] drop-shadow-xl m-[10px]">
                        <img src={_promo} alt=""  className='w-full '/>
                    </div>
                </div>
                <div className="w-fit mx-auto pt-[20px]">
                    Made with ❤️ in 🇮🇳
                </div>
            </div>
        </>
    )
}
