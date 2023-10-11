import React from 'react';
import { Link } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import Slide from 'react-reveal/Slide';

export const NavMenu = ({ toggle }) => {

    const NavList = [
        {
            id: '6',
            name: 'BABLAH',
            to: '/bablah'
        },
        {
            id: '2',
            name: 'GAMES',
            to: '/games'
        },
        {
            id: '1',
            name: 'COMICS',
            to: '/comics'
        },
        {
            id: '3',
            name: 'SNACKR',
            to: '/snackr'
        },
        {
            id: '3',
            name: 'SERVICES',
            to: '/services'
        },
        // {
        //     id: '5',
        //     name: 'LABS',
        //     to: '/labs'
        // },
    
        {
            id: '4',
            name: 'PARTNERS',
            to: '/partners'
        },
        {
            id: '5',
            name: 'ABOUT',
            to: '/about'
        },
    
        {
            id: '6',
            name: 'CAREERS',
            to: '/careers'
        },
        {
            id: '7',
            name: 'MEDIA',
            to: '/inmedia'
        },
        {
            id: '7',
            name: 'CONTACT US',
            to: '/contact/us'
        },
    ]

    const _close_icon = <svg fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" /></svg>;


    const [{ width_, opacity_ }] = useSpring(() => ({
        width_: "100%",
        from: { width_: "30%", opacity_: 0 },
        to: async (next) => {
            await next({ width_: "30%" });
            await next({ width_: "10%" });
            await next({ width_: "100%" });
            await next({ opacity_: 1 });
        },
        // config: { mass: 10, tension: 850, friction: 100 },
        config: { mass: 2, tension: 850, friction: 70 },
    }));

    const _style = {
        Menu_container: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
        },
        animation_container: {
            backgroundColor: '#c42f48',
            width: width_,
            margin: 'auto',
            height: '100%'
        },
        menu_list_box: {
            height: '100%',
            overflowY: 'scroll',
            width: '100%',
            margin: 'auto',
            opacity: opacity_,
        }
    };


    const RenderMenuItemList = ({ data, toggle }) => {
        return (
            <>
                {data.map(value => (
                    <div onClick={() => toggle(false)} key={value.id} className="m-2">
                        <div className="space-20"></div>
                        <Link to={value.to} className='text-decoration-none p-2 text-white text-bold '> {value.name} </Link>
                    </div>
                ))}
            </>
        );

    };


    return (
        <div style={_style.Menu_container}>
            <animated.div style={_style.animation_container}>
                <div className="space-20"></div>
                <div className="text-center w-fit mx-auto">
                    <Slide top>
                        <div
                            onClick={() => toggle(false)}
                            className="close">
                            {_close_icon}
                        </div>
                    </Slide>
                </div>
                <animated.div
                    style={_style.menu_list_box}
                    className="text-center">
                    <RenderMenuItemList data={NavList} toggle={toggle} />
                    <div className="space-100"></div>
                </animated.div>
            </animated.div>
        </div>
    );
};
