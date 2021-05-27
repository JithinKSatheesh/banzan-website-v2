import React from 'react';
import {animated} from 'react-spring'

import _logo_b from '../Assets/logo_b.png'

const _send_icon = <svg fill='#1b1d1c' width="20" height="20" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg>
const _circle = <svg fill='#c42f48' width="14" height="14" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12"/></svg>

const transfromSlide_S1 = (val)=>(`translate(0px,${val * 0.1}px)`) 
const transfromSlide_NN1 = (val)=>(`translate(0px,-${val * 0.5}px)`)

export const ServicesFormPage = ({scrollPos}) => {


    const _style = {
        form_container: {
            position: "relative",
            margin: 'auto',
            maxWidth: '850px',
            width: '100%',
        },
        input_field: {
            width: '100%',
            border: 'none',
            backgroundColor: '#fbe05a',
            borderBottom: "5px solid #c42f48",
            fontSize: '1em',
            color: '#c42f48',
            fontWeight: 'bold',
            outline: 'none',
        }
    };

    return (
        <div style={_style.form_container} className="row">
            <div className="col-12 col-md-6">
                <div className="form">
                    <div className="form-group p-3">
                        <input
                            placeholder="Your name"
                            style={_style.input_field}
                            type="text" />
                    </div>
                    <div className="form-group p-3">
                        <input
                            placeholder="Email"
                            style={_style.input_field}
                            type="text" />
                    </div>
                    <div className="form-group p-3">
                        <input
                            placeholder="Phone no"
                            style={_style.input_field}
                            type="text" />
                    </div>
                    <div className="form-group p-3">
                        <input
                            placeholder="Company/Product"
                            style={_style.input_field}
                            type="text" />
                    </div>
                    <div className="form-group p-3">
                        <input
                            placeholder="Message"
                            style={_style.input_field}
                            type="text" />
                    </div>
                    <div className="space-50"></div>
                    <div
                        style={{ cursor: 'pointer' }}
                        className="h4 text-dark text-center text-bold">
                        SEND 
                        &nbsp;
                        {_send_icon}
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 offset-md-6">
               <div className="">
                    <animated.img style={{
                        position:'absolute',
                        marginLeft:'200px',
                        marginBottom:'400px',
                        transform: scrollPos.to(transfromSlide_NN1)
                    }} src={_logo_b} alt="" />
                </div> 
            </div>
            <div className="col-12">
            <ServicesFooter/>
            </div>
            
        </div>
    );
};


const ServicesFooter = ()=>{

    return(
        <div className="row">

        <div className="col-12">
                <div className="space-100"></div>
                <div className="text-center">
                    {_circle}
                    &nbsp;
                    &nbsp;
                    {_circle}
                    &nbsp;
                    &nbsp;
                    {_circle}
                </div>
                <div className="space-20"></div>
                <div className="text-center text-dark">
                    Banzan Studio © 2021
                </div>
                <div className="space-100"></div>
        </div>
        </div>

    )
}