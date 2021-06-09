import React, { useState } from 'react'
import { animated } from 'react-spring'
import {ProgressBar} from './ProgressBar'

import _logo_b from '../Assets/logo_b.png'
import { Footer } from './Footer';

const _send_icon = <svg fill='#1b1d1c' width="20" height="20" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" /></svg>
export const _circle = <svg fill='#c42f48' width="14" height="14" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" /></svg>
const _icon_message = <svg fill='#fbe05a' width="100" height="100" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" /></svg>


const transfromSlide_S1 = (val) => (`translate(0px,${val * 0.1}px)`)
const transfromSlide_N1 = (val) => (`translate(0px,-${val * 0.1}px)`)
const transfromSlide_NN1 = (val) => (`translate(0px,-${val * 0.5}px)`)
const transfromSlide_NN2 = (val) => (`translate(0px,-${val * 0.3}px)`)

export const ServicesFormPage = ({ scrollPos }) => {


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
            color: '#1b1d1c',
            fontWeight: 'bold',
            outline: 'none',
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

        const subject = `${name} is requesting a service through banzan website`
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
            <div className="col-12 col-md-6 offset-md-6">
                <div className="">
                    <animated.img style={{
                        position: 'absolute',
                        marginLeft: '150px',
                        marginTop: '50px',
                        transform: scrollPos.to(transfromSlide_NN2)
                    }} src={_logo_b} alt="" />

                </div>
                <div className="">
                    <animated.div
                        style={{
                            position: 'absolute',
                            marginLeft: '270px',
                            marginTop: '200px',
                            transform: scrollPos.to(transfromSlide_N1)
                        }}
                    >
                        {_icon_message}
                    </animated.div>
                </div>
            </div>
            <div className="col-12 col-md-6">
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
                            placeholder="Phone no ( e.g. +919878909878 )"
                            style={_style.input_field}
                            value={values.phoneNo}
                            onChange={handleChange('phoneNo')}
                            // pattern="^[+]*[0-9]*"
                            required
                            type="tel" />
                    </div>
                    {/* <div className="form-group p-3">
                        <input
                            name='linkedin'
                            placeholder="LinkedIn"
                            style={_style.input_field}
                            value={values.linkedin}
                            onChange={handleChange('linkedin')}
                            type="text" />
                    </div> */}
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
                            placeholder="A brief about your need"
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
            </div>

            <div className="col-12">
                <Footer />
            </div>

        </div>
    );
};


