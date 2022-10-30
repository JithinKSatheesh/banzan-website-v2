const GameIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 24 24"><path d="M17.622 3c-1.913 0-2.558 1.382-5.623 1.382-3.009 0-3.746-1.382-5.623-1.382-5.209 0-6.376 10.375-6.376 14.348 0 2.145.817 3.652 2.469 3.652 3.458 0 2.926-5 6.915-5h5.23c3.989 0 3.457 5 6.915 5 1.652 0 2.471-1.506 2.471-3.651 0-3.973-1.169-14.349-6.378-14.349zm-10.622 10c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm10-6c.552 0 1 .447 1 1 0 .553-.448 1-1 1s-1-.447-1-1c0-.553.448-1 1-1zm-2 4c-.552 0-1-.447-1-1 0-.553.448-1 1-1s1 .447 1 1c0 .553-.448 1-1 1zm2 2c-.552 0-1-.447-1-1 0-.553.448-1 1-1s1 .447 1 1c0 .553-.448 1-1 1zm2-2c-.552 0-1-.447-1-1 0-.553.448-1 1-1s1 .447 1 1c0 .553-.448 1-1 1zm-10.25-1c0 .965-.785 1.75-1.75 1.75s-1.75-.785-1.75-1.75.785-1.75 1.75-1.75 1.75.785 1.75 1.75z" /></svg>)
const ClockIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 12v-6h-2v8h7v-2h-5z"/></svg>)

export const RenderCard = ({ item, onClick = () => { }, index }) => {

    return (
        <div key={item?.id} onClick={() => onClick(item)} className="border-8 border-[#c52f48]  rounded-xl overflow-hidden ">
            <div className="rounded-xl w-full h-full relative group cursor-pointer">

                {
                    item.label ?
                        <div className="absolute z-30 left-0 top-0 w-full h-full bg-black/50 flex flex-col justify-center items-center">
                            <div className="text-white font-bold text-[16px] sm:text-[32px] flex items-center"> <ClockIcon /> <span className="ml-[10px]"> {item.label}</span> </div>
                        </div>
                        :
                        <div className="invisible group-hover:visible absolute left-0 top-0 w-full h-full bg-black/50 flex flex-col justify-center items-center">
                            <div className="text-white font-bold text-[16px] sm:text-[32px] flex items-center"> <GameIcon /> <span className="ml-[10px]">Play</span> </div>
                        </div>

                }
                {item.coverImage ?
                    <img src={item.coverImage} className="w-full mx-auto" />
                    :
                    <img src={"assets/games/jungleHop1.jpg"} className="w-full mx-auto blur-lg " />
                }
            </div>
        </div>
    )
}
