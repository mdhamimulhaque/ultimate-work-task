import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const handleLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const data = {
            email,
            password
        }


        fetch('https://test.nexisltd.com/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('access_token', data.access_token);
                navigate('/attendance-info')

            })

    }

    return (

        <div className='form-container md:w-[370px] mx-auto px-3'>
            <div className="header pt-24 mb-20">
                <h1 className="text-center text-xl font-semibold">SignUp Form</h1>
            </div>
            <form onSubmit={handleLogIn}>
                <input
                    type="email"
                    className="form-control block w-full pl-5 py-1.5 text-base font-normal text-[#B4B4B4] bg-white bg-clip-padding border-b-2 border-solid border-[#A4A4A4]  bg-opacity-0 focus:outline-none mb-12"
                    placeholder="Write Email Address"
                    name='email'
                />
                <input
                    type="password"
                    className="form-control w-full block pl-5 py-1.5 text-base font-normal text-[#B4B4B4] bg-white bg-clip-padding border-b-2 border-solid border-[#A4A4A4]  bg-opacity-0 focus:outline-none"
                    placeholder="Write Password"
                    name='password'
                />
                <p className='text-[12px] text-[#7E7E7E] pl-5'>Your password must be 8 character</p>

                <div className='flex justify-center mt-14'>
                    <button className='text-white text-base font-medium rounded-[15px] py-4 px-5 bg-[#1678CB] '>Log In </button>
                </div>
                <p className="text-[14px] text-end text-[#7E7E7E] mt-24 font-normal">Don’t have an account?
                    <Link className="text-[#1678CB] ml-2 underline" to="/">SIGNUP HERE!</Link></p>
            </form>
        </div>
    );
};

export default Login;