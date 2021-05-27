import React from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'
import { ZenBg } from './DummyBg'


const _send_icon = <svg fill='#1b1d1c' width="20" height="20" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg>
const _message_icon = <svg fill='#fbe05a'  width="204" height="204" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
export default function Contact(props) {
    
    const _style ={
        _container:{
            position: 'fixed',
            width: '100%',
            marginTop: '50px',
            height: '100%',
            overflowY: 'scroll',
            overflowX:'hidden'
        }
    }


    return (
        <>
        <div className="Maincontainer">
            <ZenBg/>
            <div 
                style={_style._container}>
                <ContactFormPage  />
            </div>
        </div>   
        </>
    )
}


const ContactFormPage = ()=>{

    const _style = {
        form_container: {
            position: "relative",
            margin: 'auto',
            maxWidth: '850px',
            width: '90%',
        },
        input_field: {
            width: '100%',
            border: 'none',
            backgroundColor: '#fbe05a',
            borderBottom: "5px solid #c42f48",
            fontSize: '1em',
            color: 'white',
            fontWeight: 'bold',
            outline: 'none',
            // borderRadius:'10px'
        }
    };


    return(
        <div style={_style.form_container} className="row">

            <div className="col-12 col-md-6">
                <div className="space-100"></div>
                <Slide top>
                <div className="h3 text-dark">
                    Drop us a message
                </div>
                </Slide>
                <div className="space-20"></div>
                 <Fade>
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
                            placeholder="LinkedIn"
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
                </Fade>
            </div>
            <div className="col-6 d-none d-md-block text-center">
                <div className="space-100"></div>
                <div className="space-100"></div>
                    {_message_icon}
              
            </div>
            <div className="col-12">
                <div className="space-100"></div>
                <div className="space-100"></div>
            </div>

        </div>
    )
}
