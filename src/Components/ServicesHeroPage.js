import React from 'react';

// image import
import _ellipse from '../Assets/Ellipse.png';
import _down_arrow_big_y from '../Assets/down_arrow_big_y.png';
import _service_img_phone from '../Assets/service_img_phone.png';
import _service_img_palette from '../Assets/service_img_palette.png';
import _service_img_speaker from '../Assets/service_img_speaker.png';

import _games_log  from '../Assets/service_ico_game.png'
import _mobile_logo  from '../Assets/service_ico_app.png'
import _pen_logo  from '../Assets/service_ico_mascot.png'
import _graphic_icon  from '../Assets/service_ico_design.png'
import _gamification_icon  from '../Assets/service_ico_puzzle.png'
import _storytelling_icon  from '../Assets/service_ico_story.png'



import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'
import {animated} from 'react-spring'

const transfromSlide_S1 = (val)=>(`translate(0px,${val * 0.1}px)`) 
const transfromSlide_N1 = (val)=>(`translate(0px,-${val * 0.1}px)`)
const transfromSlide_SS1 = (val)=>(`translate(0px,${val * 0.5}px)`) 
const transfromSlide_NN1 = (val)=>(`translate(0px,-${val * 0.5}px)`)


const _round_icon_down = <svg fill='#1b1d1c' width="34" height="34" viewBox="0 0 24 24"><path d="M17 10.645v-2.29c-1.17-.417-1.907-.533-2.28-1.431-.373-.9.07-1.512.6-2.625l-1.618-1.619c-1.105.525-1.723.974-2.626.6-.9-.373-1.017-1.116-1.431-2.28h-2.29c-.412 1.158-.53 1.907-1.431 2.28h-.001c-.9.374-1.51-.07-2.625-.6l-1.617 1.619c.527 1.11.973 1.724.6 2.625-.375.901-1.123 1.019-2.281 1.431v2.289c1.155.412 1.907.531 2.28 1.431.376.908-.081 1.534-.6 2.625l1.618 1.619c1.107-.525 1.724-.974 2.625-.6h.001c.9.373 1.018 1.118 1.431 2.28h2.289c.412-1.158.53-1.905 1.437-2.282h.001c.894-.372 1.501.071 2.619.602l1.618-1.619c-.525-1.107-.974-1.723-.601-2.625.374-.899 1.126-1.019 2.282-1.43zm-8.5 1.689c-1.564 0-2.833-1.269-2.833-2.834s1.269-2.834 2.833-2.834 2.833 1.269 2.833 2.834-1.269 2.834-2.833 2.834zm15.5 4.205v-1.077c-.55-.196-.897-.251-1.073-.673-.176-.424.033-.711.282-1.236l-.762-.762c-.52.248-.811.458-1.235.283-.424-.175-.479-.525-.674-1.073h-1.076c-.194.545-.25.897-.674 1.073-.424.176-.711-.033-1.235-.283l-.762.762c.248.523.458.812.282 1.236-.176.424-.528.479-1.073.673v1.077c.544.193.897.25 1.073.673.177.427-.038.722-.282 1.236l.762.762c.521-.248.812-.458 1.235-.283.424.175.479.526.674 1.073h1.076c.194-.545.25-.897.676-1.074h.001c.421-.175.706.034 1.232.284l.762-.762c-.247-.521-.458-.812-.282-1.235s.529-.481 1.073-.674zm-4 .794c-.736 0-1.333-.597-1.333-1.333s.597-1.333 1.333-1.333 1.333.597 1.333 1.333-.597 1.333-1.333 1.333zm-4 3.071v-.808c-.412-.147-.673-.188-.805-.505s.024-.533.212-.927l-.572-.571c-.389.186-.607.344-.926.212s-.359-.394-.506-.805h-.807c-.146.409-.188.673-.506.805-.317.132-.533-.024-.926-.212l-.572.571c.187.393.344.609.212.927-.132.318-.396.359-.805.505v.808c.408.145.673.188.805.505.133.32-.028.542-.212.927l.572.571c.39-.186.608-.344.926-.212.318.132.359.395.506.805h.807c.146-.409.188-.673.507-.805h.001c.315-.131.529.025.924.213l.572-.571c-.186-.391-.344-.609-.212-.927s.397-.361.805-.506zm-3 .596c-.552 0-1-.447-1-1s.448-1 1-1 1 .447 1 1-.448 1-1 1z"/></svg>
const _arrow_down = <svg fill='#1b1d1c' width="24" height="24" viewBox="0 0 24 24"><path d="M12 24l-8-9h6v-15h4v15h6z"/></svg>

// ==================================

// const _games_log = <svg fill='#1b1d1c' width="44" height="44" viewBox="0 0 24 24"><path d="M6 2l1.171.203c-.355 2.245.791 2.519 2.699 2.874 1.468.273 3.13.622 3.13 3.284v.639h-1.183v-.639c0-1.556-.48-1.809-2.164-2.122-2.583-.48-4.096-1.391-3.653-4.239zm18 14c0 3.312-2.607 6-5.825 6-1.511 0-2.886-.595-3.921-1.565-1.311-1.229-3.278-1.132-4.55.038-1.03.948-2.389 1.527-3.879 1.527-3.217 0-5.825-2.688-5.825-6s2.608-6 5.825-6l12.563.007c3.118.116 5.612 2.755 5.612 5.993zm-15-1h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2zm4 1h-2v1h2v-1zm4-2c0 .552.447 1 1 1s1-.448 1-1-.447-1-1-1-1 .448-1 1zm0 2c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm2 2c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm2-2c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1z"/></svg>
// const _mobile_logo = <svg fill='#1b1d1c' width="44" height="44" viewBox="0 0 24 24"><path d="M17.5 2c.276 0 .5.224.5.5v19c0 .276-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5v-19c0-.276.224-.5.5-.5h11zm2.5 0c0-1.104-.896-2-2-2h-12c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2v-20zm-9.5 1h3c.276 0 .5.224.5.501 0 .275-.224.499-.5.499h-3c-.275 0-.5-.224-.5-.499 0-.277.225-.501.5-.501zm1.5 18c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-13h10v13z"/></svg>
// const _pen_logo = <svg fill='#1b1d1c' width="30" height="44" viewBox="0 0 24 24"><path d="M4.765 20.467l-1.328 2.443s-1.649.425-2.682 1.09l-.258-.257 1.237-1.237c.108-.109.249-.178.401-.196.084-.011.166-.048.23-.113.155-.155.155-.407 0-.562s-.407-.155-.562 0c-.065.065-.103.146-.113.23-.019.152-.088.293-.196.402l-1.237 1.237-.257-.258c.672-1.044 1.09-2.682 1.09-2.682l2.443-1.329 1.232 1.232zm18.923-18.3c.209-.246.312-.549.312-.851 0-.726-.589-1.316-1.316-1.316-.302 0-.604.103-.851.312 0 0-12.252 9.474-14.236 11.458-1.383 1.383-1.677 2.673-3.49 6.327l1.795 1.796c3.425-1.699 4.857-2.021 6.327-3.49 1.982-1.979 11.459-14.236 11.459-14.236z"/></svg>
// const _graphic_icon = <svg fill='#1b1d1c' width="30" height="44" viewBox="0 0 24 24"><path d="M4 21.832c4.587.38 2.944-4.493 7.188-4.538l1.838 1.534c.458 5.538-6.315 6.773-9.026 3.004zm14.065-7.115c1.427-2.239 5.847-9.749 5.847-9.749.352-.623-.43-1.273-.976-.813 0 0-6.572 5.714-8.511 7.525-1.532 1.432-1.539 2.086-2.035 4.447l1.68 1.4c2.227-.915 2.868-1.039 3.995-2.81zm-11.999 3.876c.666-1.134 1.748-2.977 4.447-3.262.434-2.087.607-3.3 2.547-5.112 1.373-1.282 4.938-4.409 7.021-6.229-1-2.208-4.141-4.023-8.178-3.99-6.624.055-11.956 5.465-11.903 12.092.023 2.911 1.081 5.571 2.82 7.635 1.618.429 2.376.348 3.246-1.134zm6.952-15.835c1.102-.006 2.005.881 2.016 1.983.004 1.103-.882 2.009-1.986 2.016-1.105.009-2.008-.88-2.014-1.984-.013-1.106.876-2.006 1.984-2.015zm-5.997 2.001c1.102-.01 2.008.877 2.012 1.983.012 1.106-.88 2.005-1.98 2.016-1.106.007-2.009-.881-2.016-1.988-.009-1.103.877-2.004 1.984-2.011zm-2.003 5.998c1.106-.007 2.01.882 2.016 1.985.01 1.104-.88 2.008-1.986 2.015-1.105.008-2.005-.88-2.011-1.985-.011-1.105.879-2.004 1.981-2.015zm10.031 8.532c.021 2.239-.882 3.718-1.682 4.587l-.046.044c5.255-.591 9.062-4.304 6.266-7.889-1.373 2.047-2.534 2.442-4.538 3.258z"/></svg>
// const _gamification_icon = <svg fill='#1b1d1c' width="30" height="44"  viewBox="0 0 24 24"><path d="M2.479 18c.978 0 1.309-.524 1.708-.922.813-.816 1.813-.469 1.813.847v6.075h6.075c1.315 0 1.663-1 .847-1.813-.398-.399-.922-.73-.922-1.708 0-1.087 1.108-2.479 3-2.479s3 1.392 3 2.479c0 .978-.524 1.309-.922 1.708-.816.813-.469 1.813.847 1.813h6.075v-6.075c0-1.315-1-1.663-1.813-.847-.399.398-.73.922-1.708.922-1.087 0-2.479-1.108-2.479-3s1.392-3 2.479-3c.978 0 1.309.524 1.708.922.813.816 1.813.469 1.813-.847v-6.075h-6.075c-1.315 0-1.663-1-.847-1.813.398-.399.922-.73.922-1.708 0-1.087-1.108-2.479-3-2.479s-3 1.392-3 2.479c0 .978.524 1.309.922 1.708.816.813.469 1.813-.847 1.813h-6.075v6.075c0 1.315-1 1.663-1.813.847-.399-.398-.73-.922-1.708-.922-1.087 0-2.479 1.108-2.479 3s1.392 3 2.479 3z"/></svg>
// const _storytelling_icon = <svg fill='#1b1d1c' width="30" height="44"  viewBox="0 0 24 24"><path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm-5 11.5c-.829 0-1.5-.671-1.5-1.5s.671-1.5 1.5-1.5 1.5.671 1.5 1.5-.671 1.5-1.5 1.5zm5 0c-.829 0-1.5-.671-1.5-1.5s.671-1.5 1.5-1.5 1.5.671 1.5 1.5-.671 1.5-1.5 1.5zm5 0c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5z"/></svg>

// ==================================





export const ServicesHeroPage = ({ scrollPos }) => {

    const _style = {
        services_hero_container: {
            position: "relative",
            margin: 'auto',
            maxWidth: '850px',
            width: '90%',
        },
        service_img_container: {
            height: '300px',
            width: '100%',
            paddingLeft: '100px',
        }
    };

    const RenderServiceList=({icon,name})=>{
        return(
            <Fade>
            <div className="p-2 mb-4 ">
                <animated.div 
                    style={{
                        transform:scrollPos.to(transfromSlide_N1),
                        height:'120px',
                        borderRadius:'10px'
                    }}
                    className="shadow bg-white">
                        <div className="row">
                            <div className="space-20"></div>
                            <div className="col-12 text-center">
                                <img src={icon} alt="service icon" /> 
                            </div>
                            <div itemprop="services"  className="col-12  text-center text-dark">
                                &nbsp; {name}
                            </div>
                        </div>
                </animated.div>
                
            </div>
            </Fade>
        )
    }

    return (
        <div style={_style.services_hero_container}>
            <div className="row">
                <div className="col-12">
                    <div className="space-50"></div>
                    <div className="space-20"></div>
                </div>
                <div temscope itemtype="https://www.banzan.co/services" className="col-12 col-md-6 text-center text-md-start">
                    <Slide top >
                        <animated.h1 
                            style={{transform:scrollPos.to(transfromSlide_N1)}}
                            className="display-4 text-bold text-dark">
                            Banzan’s&nbsp;<br />Brand&nbsp;Boutique
                        </animated.h1>
                    </Slide>

                    <div className="space-20"></div>
                    <Slide bottom >
                        <animated.h2 
                            itemprop="services description"
                            style={{ 
                                lineHeight: '30px',
                                transform:scrollPos.to(transfromSlide_S1)
                                 }} 
                                 className="text-dark text-bold h6 line-25">
                            We extend our skills & expertise in the niche areas of Content, Creatives, Communication, Development & Consultancy
                        </animated.h2>
                    </Slide>
                    <div className="space-20"></div>
                </div>

                <div className="col-6">
                    <Fade>
                    <div
                        className="d-none d-md-block"
                        style={_style.service_img_container}>
                        <img
                            style={{
                                position: 'absolute',
                            }}
                            src={_ellipse} alt="" />
                        <animated.img
                            style={{
                                transform:scrollPos.to(transfromSlide_NN1),
                                position: 'absolute',
                                marginTop: '50px',
                                width:'150px',
                            }}
                            src={_service_img_speaker} alt="" />
                        <animated.img
                            style={{
                                transform:scrollPos.to(transfromSlide_N1),
                                position: 'absolute',
                                marginTop: '10px',
                                marginLeft: '200px',
                                width:'150px',
                            }}
                            src={_service_img_phone} alt="" />
                        <animated.img
                            style={{
                                transform:scrollPos.to(transfromSlide_S1),
                                position: 'absolute',
                                marginTop: '250px',
                                marginLeft: '100px',
                                width:'130px',
                            }}
                            src={_service_img_palette} alt="" />

                    </div>
                    </Fade>
                </div>

                <div 
                    // style={{transform:'translateX(-100px)'}} 
                    className="">
                    {_round_icon_down}&nbsp; 
                    <div className="space-20"></div>
                    <div className='hr-dash' />
                </div>
                <div className="space-20"></div>

                <div className="col-12">
                    
                    <div className="d-flex align-items-end">
                        <animated.img 
                            style={{transform:scrollPos.to(transfromSlide_S1)}}
                            src={_down_arrow_big_y} alt="" />
                        <animated.div 
                            style={{
                                transform:scrollPos.to(transfromSlide_N1),
                                
                            }}
                            className="h1 text-bold text-dark">
                            OUR SERVICES
                            &nbsp;
                            {/* {_arrow_down} */}
                        </animated.div>
                    </div>
                </div>
                <div className="col-12">
                
                    <div className="space-100"></div>
                </div>
                <div className="col-8 offset-2  text-white">
                    <div temscope itemtype="https://www.banzan.co/services" className="row">
                        <div className="col-12 col-md-4">
                            <RenderServiceList icon={_games_log} name={"Mobile Games"} />
                        </div>
                        <div className="col-12 col-md-4">
                            <RenderServiceList icon={_mobile_logo} name={"Mobile Apps"} />
                            
                        </div>
                        <div className="col-12 col-md-4">
                            <RenderServiceList icon={_pen_logo} name={"Characters & Mascots"} />

                        </div>
                        <div className="col-12 col-md-4">
                            <RenderServiceList icon={_graphic_icon} name={"Graphics & Web design"} />

                        </div>
                        <div className="col-12 col-md-4">
                            <RenderServiceList icon={_gamification_icon} name={"Gamification"} />

                        </div>
                        <div className="col-12 col-md-4">
                            <RenderServiceList icon={_storytelling_icon} name={"Storytelling"} />

                        </div>

                    </div>
                </div>
                <div className="col-12">
                    <animated.div 
                        style={{transform:scrollPos.to(transfromSlide_S1)}}
                        className="h5  text-dark text-center text-md-start text-bold">
                            If ‘Customer Engagement’ is your TOP priority,
                            <div className="space-20"></div> 
                        <div className="h3 text-bold">
                            let’s talk!
                        </div>
                    </animated.div>
                    <div className="space-100"></div>
                    <div className="space-100"></div>
                    
                </div>
            </div>
        </div>
    );
};
