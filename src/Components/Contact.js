import React, { useState ,useRef } from 'react'
import {useParams} from 'react-router-dom'
import {animated,useSpring} from 'react-spring'

import Fade from 'react-reveal/Fade'


import { ZenBg } from './DummyBg'
import { Footer } from './Footer'
import { ProgressBar } from './ProgressBar'


const _send_icon = <svg fill='#1b1d1c' width="20" height="20" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" /></svg>
const _message_icon = <svg fill='#fbe05a' width="204" height="204" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" /></svg>

export default function Contact(props) {

    const _style = {
        _container: {
            position: 'fixed',
            width: '100%',
            marginTop: '50px',
            height: '100%',
            overflowY: 'scroll',
            overflowX: 'hidden'
        }
    }

    const msgRef = useRef(null)

    const[{scrollPos},setSpringVal] = useSpring(()=>({
        scrollPos : 0,
    }))

    const handleScroll = ()=>{
        const scrollPos = msgRef.current.scrollTop;
        setSpringVal({scrollPos})

    }

    return (
        <>
            <div className="Maincontainer">
                <ZenBg />
                <div
                    ref={msgRef}
                    onScroll={handleScroll}
                    style={_style._container}>
                    <ContactFormPage scrollPos={scrollPos}  />
                </div>
            </div>
        </>
    )
}

const getMessage = (source)=>{

    let message = ''

    switch(source){
        case 'games':{
            message =  "Share your game idea"
            break
        }
        case 'labs':{
            message = 'Share your awesome idea'
            break
        }
        default :{
            message = 'Your mesaage'
        }
    }
    return message
}


const ContactFormPage = ({scrollPos}) => {

    const {source} = useParams()
    console.log("source: ",source)

    const transfromSlide_S1 = (val)=>(`translate(0px,${val * 0.1}px)`) 
    const transfromSlide_SS1 = (val)=>(`translate(0px,${val * 0.5}px)`) 
    const transfromSlide_NN1 = (val)=>(`translate(0px,-${val * 0.5}px)`) 
    const transfromSlide_N1 = (val)=>(`translate(0px,-${val * 0.1}px)`) 

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
            color: '#1b1d1c',
            fontWeight: 'bold',
            outline: 'none',
            // borderRadius:'10px'
        }
    };

    const [values, setVaues] = useState({
        name: '',
        email: '',
        phoneNo: '',
        linkedin: '',
        company: '',
        message: '',
        error: "",
        sending: false,

    })

    const { name, email, phoneNo, linkedin, company, message } = values

    const handleChange = name => (event) => {
        setVaues({ ...values, error: false, [name]: event.target.value })
    }

    const sendMail = (e) => {

        e.preventDefault()
        // const Base_URL = 'http://localhost:5000'
        const Base_URL = 'https://aqueous-wildwood-36415.herokuapp.com'

        const subject = `${name} send a message through banzan website`
        const basic_info = `name=${name}&email=${email}&phoneNo=${phoneNo}`
        const work_info = `linkedin=${linkedin}&company=${company}`

        setVaues({ ...values, sending: true })


        fetch(`${Base_URL}/mail/contact?${basic_info}&${work_info}&message=${message}&subject=${subject}`)
            .then(res => {
                console.log("res", res)
                if (res.status === 200) {
                    setVaues({
                        name: '',
                        email: '',
                        phoneNo: '',
                        linkedin: '',
                        company: '',
                        message: '',
                        sending: false,
                        error: 'Mail sent successfully 👍'
                    })
                }
                else {
                    setVaues({ ...values, sending: false, error: 'Something went wrong in server' })
                }
            }).catch(error => {
                console.log("error", error)
                setVaues({ ...values, sending: false, error: 'Something went wrong' })
            })

    }


    return (
        <div style={_style.form_container} className="row">

            <div className="col-12 col-md-6">
                <div className="space-100"></div>
                <Fade top delay={500} >
                    <animated.div 
                         style={{transform: scrollPos.to(transfromSlide_N1) }}
                        className="h3 text-dark text-bold text-center text-md-start ">
                        Drop us a message
                    </animated.div>
                </Fade>
                <Fade bottom>
                    <div className=" text-dark text-center text-md-start">
                        & we’d get started soon!
                    </div>
                </Fade>
                <div className="space-50"></div>
                <Fade >
                    <form onSubmit={sendMail} className="form">
                        <div className="form-group p-3">
                            <input
                                name='name'
                                placeholder="Your name"
                                style={_style.input_field}
                                value={values.name}
                                onChange={handleChange('name')}
                                required
                                type="text" />
                        </div>
                        <div className="form-group p-3">
                            <input
                                name='email'
                                placeholder="Email"
                                style={_style.input_field}
                                value={values.email}
                                onChange={handleChange('email')}
                                required
                                type="email" />
                        </div>
                        <div className="form-group p-3">
                            <input
                                name='phone'
                                placeholder="Phone no ( e.g. 9878909878 )"
                                style={_style.input_field}
                                value={values.phoneNo}
                                onChange={handleChange('phoneNo')}
                                pattern="^[0-9]*"
                                required
                                type="tel" />
                        </div>
                        <div className="form-group p-3">
                            <input
                                name='linkedin'
                                placeholder="LinkedIn"
                                style={_style.input_field}
                                value={values.linkedin}
                                onChange={handleChange('linkedin')}
                                type="text" />
                        </div>
                        <div className="form-group p-3">
                            <input
                                name='work'
                                placeholder="Company/Product"
                                style={_style.input_field}
                                value={values.company}
                                onChange={handleChange('company')}
                                required
                                type="text" />
                        </div>

                        <div className="form-group p-3">
                            <textarea
                                rows={2}
                                name='message'
                                placeholder={`${getMessage(source)}`}
                                style={{ ..._style.input_field, height: '50px' }}
                                value={values.message}
                                onChange={handleChange('message')}
                                required
                                type="text" />
                        </div>
                        <div className="space-20"></div>
                        <div className="h6 text-now text-center">
                            {values.error && <> {values.error} </>}
                        </div>
                      
                        <div className="space-20"></div>
                        {values.sending ?
                            <>
                                <div className="h6 text-center text-danger">
                                    connecting to server...
                                </div>
                                <ProgressBar/>
                            </>
                            :
                            <div
                                // onClick={() => sendMail()}
                                style={{ cursor: 'pointer' }}
                                className="h4  text-dark text-center text-bold">
                                <button
                                    className='btn btn-warning shadow'
                                    role='button' type='submit' >

                                    SEND
                                    &nbsp;
                                {_send_icon}
                                </button>
                            </div>
                        }
                    </form>
                </Fade>
            </div>
            <animated.div 
                style={{transform: scrollPos.to(transfromSlide_NN1) }}
                className="col-6 d-none d-md-block text-center">
                <div className="space-100"></div>
                <div className="space-100"></div>
                {_message_icon}

            </animated.div>
            <div className="col-12">
                <div className="space-100"></div>
                <Footer/>
                <div className="space-100"></div>
            </div>

        </div>
    )
}


