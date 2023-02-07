import React from 'react'

import _promo from './promo.jpg'

export default function Promo(props) {
    

    return (
        <>
            <div className="">
                <div className="mx-auto max-w-[500px] mt-[130px] border-[20px] rounded-xl border-[#c42f48] drop-shadow-xl">
                    <img src={_promo} alt=""  className='w-full'/>
                </div>
                <div className="w-fit mx-auto pt-[10px]">
                    Made with ❤️ in 🇮🇳
                </div>
            </div>
        </>
    )
}
