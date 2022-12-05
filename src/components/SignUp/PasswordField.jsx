import React from 'react';

const PasswordField = ({ formData, setFormData }) => {

    return (
        <div className='mb-28'>
            <input
                type="password"
                className="form-control w-full block pl-5 py-1.5 text-base font-normal text-[#B4B4B4] bg-white bg-clip-padding border-b-2 border-solid border-[#A4A4A4]  bg-opacity-0 focus:outline-none "
                placeholder="Write Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <p className='text-[12px] text-[#7E7E7E] pl-5'>Your password must be 8 character</p>
        </div>
    );
};

export default PasswordField;