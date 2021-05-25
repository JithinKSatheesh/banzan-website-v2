import React from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

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
            backgroundColor: '#c42f48',
            borderBottom: "5px solid #fcc812",
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
                <div className="h3 text-white">
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
                        className="h4 text-white">
                        SEND
                    </div>
                </div>
                </Fade>
            </div>
            <div className="col-12">
                <div className="space-100"></div>
                <div className="space-100"></div>
            </div>

        </div>
    )
}
