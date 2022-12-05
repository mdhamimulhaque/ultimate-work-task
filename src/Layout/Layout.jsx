import React from 'react';
import { Outlet } from 'react-router-dom';
import FormImg from '../img/form-img.png';
import LOGO from '../img/logo.png'

const Layout = () => {
    return (
        <div className="xl:w-[1440px] lg:mx-auto px-4">
            <main className='lg:flex flex-wrap justify-center items-center'>
                <section className="form_img_area flex-1 pt-16 px-3">
                    <div className="logo">
                        <img src={LOGO} alt="logo" />
                    </div>
                    <img src={FormImg} alt="form img" className='mx-auto xl:ml-32' />
                </section>
                <section className="form_field_area lg:w-[516px] h-[630px] xl:mx-auto mt-5">
                    <Outlet />
                </section>
            </main>
        </div>
    );
};

export default Layout;