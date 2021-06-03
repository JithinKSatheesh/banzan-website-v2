import React, { useState } from 'react'
import { _send_icon } from './Careers';
import {ProgressBar} from './ProgressBar'

export const CareerFormPage = () => {

    const _style = {
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
        education: '',
        relocate: 'Yes',
        job: 'full time',
        message: '',
        error: "",
        sending: false,

    })

    const { name, email, phoneNo, education, relocate, job ,message } = values

    const handleChange = name => (event) => {
        setVaues({ ...values, error: false, [name]: event.target.value })
    }

    const sendMail = (e) => {

        e.preventDefault()
        // const Base_URL = 'http://localhost:5000'
        const Base_URL = 'https://aqueous-wildwood-36415.herokuapp.com'

        const subject = `${name} is looking for a carrer in Banzan`
        const basic_info = `name=${name}&email=${email}&phoneNo=${phoneNo}`
        const work_info = `education=${education}&relocate=${relocate}&job=${job}`

        setVaues({ ...values, sending: true })


        fetch(`${Base_URL}/mail/careers?${basic_info}&${work_info}&message=${message}&subject=${subject}`)
            .then(res => {
                console.log("res", res)
                if (res.status === 200) {
                    setVaues({
                        name: '',
                        email: '',
                        phoneNo: '',
                        education: '',
                        relocate: 'Yes',
                        job: 'full time',
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
        <div className="row">
            <div className="col-12">
                <form onSubmit={sendMail} className="form">
                    <div className="form-group p-3">
                        <input
                            name='name'
                            placeholder="Name"
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
                            name='education'
                            placeholder="Your highest level of education"
                            style={_style.input_field}
                            value={values.education}
                            onChange={handleChange('education')}
                            required
                            type="text" />
                    </div>

                    <div className="form-group p-3">
                        <label className='text-now' htmlFor="job">Job preference</label>
                        <select 
                            value={values.job} 
                            onChange={handleChange('job')}
                            style={_style.input_field}
                            required
                            id='job' name="job" >

                            <option value="full time">I prefer full time</option>
                            <option value="part time">I prefer  part time</option>

                        </select>
                    </div>

                    <div className="form-group p-3">
                        <label className='text-now' htmlFor="relocate">Willing to relocate? </label>
                        <select 
                            onChange={handleChange('relocate')}
                            value={values.relocate} 
                            style={_style.input_field}
                            required
                            id='relocate' name="relocate" >
                            <option value="Yes">Yes, I'm willing to relocate</option>
                            <option value="No">No, I prefer remote working  </option>
                        </select>
                    </div>
                 

                    <div className="form-group p-3">
                        <textarea
                            rows={3}
                            name='message'
                            placeholder="Why us? (We would definitely want ro know why we matter in your life!.)"
                            style={{ ..._style.input_field, height: '100px' }}
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
        </div>


    );
};
