import React from 'react';

export const ServicesFormPage = () => {

    const _circle = <svg fill='#fcc812' width="14" height="14" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12"/></svg>

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
            backgroundColor: '#c42f48',
            borderBottom: "5px solid #fcc812",
            fontSize: '1em',
            color: 'white',
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
                        className="h4 text-white">
                        SEND
                    </div>
                </div>
            </div>
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
                <div className="space-100"></div>
                <div className="space-100"></div>
            </div>
        </div>
    );
};
