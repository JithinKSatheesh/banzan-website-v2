import React from 'react'

const GameIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M17.622 3c-1.913 0-2.558 1.382-5.623 1.382-3.009 0-3.746-1.382-5.623-1.382-5.209 0-6.376 10.375-6.376 14.348 0 2.145.817 3.652 2.469 3.652 3.458 0 2.926-5 6.915-5h5.23c3.989 0 3.457 5 6.915 5 1.652 0 2.471-1.506 2.471-3.651 0-3.973-1.169-14.349-6.378-14.349zm-10.622 10c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm10-6c.552 0 1 .447 1 1 0 .553-.448 1-1 1s-1-.447-1-1c0-.553.448-1 1-1zm-2 4c-.552 0-1-.447-1-1 0-.553.448-1 1-1s1 .447 1 1c0 .553-.448 1-1 1zm2 2c-.552 0-1-.447-1-1 0-.553.448-1 1-1s1 .447 1 1c0 .553-.448 1-1 1zm2-2c-.552 0-1-.447-1-1 0-.553.448-1 1-1s1 .447 1 1c0 .553-.448 1-1 1zm-10.25-1c0 .965-.785 1.75-1.75 1.75s-1.75-.785-1.75-1.75.785-1.75 1.75-1.75 1.75.785 1.75 1.75z"/></svg>)
const GooglePlayIcon = () => (<svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z"/></svg>)



export default function Popup(props) {
    
    const { item , onClose = () => {}} = props

    const PlayGame = (e) => {
        e.stopPropagation()
        if(item.webURL){
            window.open(item.webURL, '_blank');
        }
    }

    const InstallGame = (e) => {
        e.stopPropagation()
        if(item.playstoreURL){
            window.open(item.playstoreURL, '_blank');
        }
    }

    return (
        <>
        {item && <div 
            onClick={onClose}
            className='z-60 fixed w-full h-full top-0 left-0 bg-black/50 pt-[200px]  px-[20px] overflow-auto'>
            <div 
                onClick={e => e.stopPropagation()}
                className='w-full bg-white rounded-xl px-3 py-[50px] max-w-[400px] mx-auto'>
                <div 
                    onClick={PlayGame}
                    className={`${item.webURL ? "bg-[#c52f48]" : "bg-[#e1e1e2]"} flex cursor-pointer item-center rounded-2xl mx-auto w-fit py-2 px-3 font-bold  text-white`}>
                    <GameIcon /> <span className="ml-[10px]">Play</span>
                </div>
                <div className="pt-[24px]"></div>
                <div 
                    onClick={InstallGame}
                    className={`${item.playstoreURL ? "bg-[#01875f]" : "bg-[#e1e1e2]"} flex cursor-pointer item-center rounded-2xl mx-auto w-fit py-2 px-3 font-bold  text-white`}>
                    <GooglePlayIcon /> <span className="ml-[10px]">Install</span>
                </div>
                <div className="text-[24px] font-bold text-center pt-[14px]">
                    {item.name}
                </div>
                <div className="pt-[14px] text-center">
                    {item.description}
                </div>
            </div>
        </div>
        }    
        </>
    )
}
