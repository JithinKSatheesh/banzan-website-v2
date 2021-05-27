import React from 'react';
import { _circle } from './ServicesFormPage';

export const Footer = () => {

    return (
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
                <div className="space-50"></div>
                <div className="text-center text-dark">
                    Banzan Studio © 2021
                </div>
                <div className="space-100"></div>
            </div>
        </div>

    );
};
