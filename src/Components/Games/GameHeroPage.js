import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
// import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
// import _game_logo from '../Assets/game_logo.png';
import _games_console from 'Assets/games_console.png';
import _games_cube from 'Assets/games_cube.png';
import _games_pawn from 'Assets/games_pawn.png';
import _games_ellipse_small from 'Assets/games_ellipse_small.png';
import _games_ellipse from 'Assets/games_ellipse.png';
import _down_arrow_big from 'Assets/down_arrow_big.png';

// import { Parallax, ParallaxLayer } from 'react-spring'
import { animated } from 'react-spring'

const _round_icon_down = <svg fill='#1b1d1c' width="24" height="24" viewBox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z" /></svg>
const _puzzle_icon = <svg fill='#fbe68c' width="100" height="100" viewBox="0 0 24 24"><path d="M2.479 18c.978 0 1.309-.524 1.708-.922.813-.816 1.813-.469 1.813.847v6.075h6.075c1.315 0 1.663-1 .847-1.813-.398-.399-.922-.73-.922-1.708 0-1.087 1.108-2.479 3-2.479s3 1.392 3 2.479c0 .978-.524 1.309-.922 1.708-.816.813-.469 1.813.847 1.813h6.075v-6.075c0-1.315-1-1.663-1.813-.847-.399.398-.73.922-1.708.922-1.087 0-2.479-1.108-2.479-3s1.392-3 2.479-3c.978 0 1.309.524 1.708.922.813.816 1.813.469 1.813-.847v-6.075h-6.075c-1.315 0-1.663-1-.847-1.813.398-.399.922-.73.922-1.708 0-1.087-1.108-2.479-3-2.479s-3 1.392-3 2.479c0 .978.524 1.309.922 1.708.816.813.469 1.813-.847 1.813h-6.075v6.075c0 1.315-1 1.663-1.813.847-.399-.398-.73-.922-1.708-.922-1.087 0-2.479 1.108-2.479 3s1.392 3 2.479 3z" /></svg>


export const GameHeroPage = ({ scrollPos }) => {

    const transfromSlide_S1 = (val) => (`translate(0px,${val * 0.1}px)`)
    const transfromSlide_SS1 = (val) => (`translate(0px,${val * 0.5}px)`)
    const transfromSlide_NN1 = (val) => (`translate(0px,-${val * 0.5}px)`)
    const transfromSlide_N1 = (val) => (`translate(0px,-${val * 0.1}px)`)

    const _style = {
        game_hero_container: {
            position: "relative",
            margin: 'auto',
            maxWidth: '850px',
            width: '90%',

        },
    };

    return (
        <div style={_style.game_hero_container}>
            <div className="row ">
                <div className="col-12">
                    <div className="space-20"></div>
                </div>
                <div itemscope itemtype="https://www.banzan.co/games" className="col-12 col-md-6">
                    <div className="space-50"></div>

                    <Fade top>
                        <animated.h1
                            style={{ transform: scrollPos.to(transfromSlide_N1) }}
                            className=" display-1 text-dark text-bold  text-md-start text-center">
                            Games
                        </animated.h1>
                    </Fade>

                    <div className="space-20"></div>
                    <Fade bottom>
                        <animated.h2
                            itemprop="games studios description"
                            style={{ transform: scrollPos.to(transfromSlide_S1) }}
                            className="text-[16px] leading-[32px] text-dark text-bold text-md-start  text-center">
                            We build Games that are <br />
                            Sometimes <span className='text-[#c52f48]'> Addictive</span> <br />
                            Sometimes <span className='text-[#c52f48]'>Productive</span><br />
                            Sometimes <span className='text-[#c52f48]'>Educational</span> <br />
                            But…<br />
                            <span className='font-bold text-[24px]'>
                                Always <span className='text-[#c52f48]'> FUN!</span>
                            </span>

                        </animated.h2>
                    </Fade>

                    <div className="space-20"></div>
                </div>
                <div className="col-12 col-md-6 text-center">

                    <div className="space-20"></div>
                    <Fade>
                        <div
                            style={{ height: '250px' }}
                            className="d-none d-md-block">
                            <animated.img
                                style={{
                                    transform: scrollPos.to(transfromSlide_NN1),
                                    position: 'absolute', marginTop: '300px'
                                }}
                                className='img-fluid d-md-block' src={_games_ellipse_small} alt="" />

                            <animated.img
                                style={{
                                    transform: scrollPos.to(transfromSlide_N1),
                                    position: 'absolute', marginTop: '50px', marginLeft: '430px'
                                }}
                                className='img-fluid d-md-block' src={_games_ellipse_small} alt="" />

                            <animated.img
                                style={{
                                    transform: scrollPos.to(transfromSlide_S1),
                                    position: 'absolute', marginLeft: '50px'
                                }}
                                className='img-fluid d-md-block' src={_games_ellipse} alt="" />

                            <animated.img
                                style={{
                                    transform: scrollPos.to(transfromSlide_N1),
                                    position: 'absolute', marginLeft: '180px', marginTop: '40px', width: '230px'
                                }}
                                className='img-fluid d-md-block' src={_games_console} alt="" />

                            <animated.img
                                style={{
                                    transform: scrollPos.to(transfromSlide_S1),
                                    position: 'absolute', marginLeft: '130px', marginTop: '250px'
                                }}
                                className='img-fluid d-md-block' src={_games_cube} alt="" />

                            <animated.img
                                style={{
                                    transform: scrollPos.to(transfromSlide_NN1),
                                    position: 'absolute', marginLeft: '50px', marginTop: '50px'
                                }}
                                className='img-fluid d-md-block' src={_games_pawn} alt="" />

                        </div>
                    </Fade>
                </div>
            </div>
            {/* {_round_icon_down}&nbsp; */}
            <div className="space-20"></div>
            <div className='hr-dash' />
            <div className="space-20"></div>
            <div className="flex flex-wrap sm:flex-nowrap pt-[50px]">

                <div className=" w-full  text-[16px] leading-[32px] font-bold text-center text-lg-start">
                    <div className=''>
                        More than 50+ Games and Mini-Games across multiple <br /> genres and platforms to play.
                    </div>
                    {/* <div className='font-bold text-[24px] pt-[12px]'>
                    We have Games for <br/>
                    </div> */}
                    <div className="font-bold text-[16px] pt-[12px]  ">
                        <div className="flex items-center justify-center lg:justify-start">

                        Find us on Google Playstore
                        <div className=" ml-[20px]">
                            <a href="https://play.google.com/store/apps/dev?id=6238315530251723152&hl=en_IN&gl=US" target='_blank'>

                                <svg width="24" height="24" fill='green' xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19 0c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14zm-13.698 19.776l7.022-7.001 2.474 2.468-8.346 4.627c-.317.176-.706.173-1.021-.007l-.129-.087zm6.313-7.707l-6.693 6.674v-13.348l6.693 6.674zm4.183-2.758l3.27 1.813c.322.179.521.513.521.876s-.199.697-.521.876l-3.36 1.862-2.676-2.669 2.766-2.758zm-10.57-5.022l.203-.152c.315-.18.704-.183 1.021-.007l8.436 4.677-2.564 2.556-7.096-7.074z" /></svg>
                            </a>
                        </div>
                        </div>
                    </div>
                    {/* <div className="pt-[10px]"></div> */}
                    <div className='font-bold text-[16px] pt-[12px] flex items-center justify-center lg:justify-start'>

                        To play our games on mobile go to &nbsp;
                        <Link to="/snackr" className='no-underline text-red-900'> SnackR  </Link>
                    </div>
                    {/* <div className=" flex flex-col sm:flex-row flex-wrap sm:flex-nowrap  pt-[12px]">
                        <div className='py-[5px] px-[12px] mt-[12px] sm:mt-2 sm:w-fit  text-white bg-[#c52f48] rounded-2xl mr-[24px]'>Every Season </div>
                        <div className='py-[5px] px-[12px] mt-[12px] sm:mt-2 sm:w-fit  text-white bg-[#c52f48] rounded-2xl mr-[24px]'> Every Reason </div>
                        <div className='py-[5px] px-[12px] mt-[12px] sm:mt-2 sm:w-fit  text-white bg-[#c52f48] rounded-2xl mr-[24px]'>Every Occasion &  </div>
                        <div className='py-[5px] px-[12px] mt-[12px] sm:mt-2 sm:w-fit  text-white bg-[#c52f48] rounded-2xl mr-[24px]'>Every Generation  </div>
                    </div> */}

                </div>
                {/* <div className="w-1/2 ">
                    <div className="d-none d-md-flex align-items-end">
                        <Slide>
                            <animated.img 
                                style={{ width: '150px', transform:scrollPos.to(transfromSlide_S1) }} 
                                src={_down_arrow_big} alt="" />
                        </Slide>
                        <Slide top>
                            <animated.div 
                                style={{transform: scrollPos.to(transfromSlide_N1),color:'#fbe68c' }}
                                className="h1 text-bold">
                                {_puzzle_icon}
                            </animated.div>
                        </Slide>
                    </div>
                </div> */}

            </div>

        </div>

    );
};
