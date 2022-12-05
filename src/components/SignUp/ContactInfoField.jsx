import React from 'react';

const ContactInfoField = ({ formData, setFormData }) => {



    return (
        <div >
            <div className="phone_box flex gap-1 justify-center items-center">
                <input
                    type="text"
                    className="form-control block w-[90px] pl-5 py-1.5 text-base font-normal text-[#B4B4B4] bg-white bg-clip-padding border-b-2 border-solid border-[#A4A4A4]  bg-opacity-0 focus:outline-none mb-12"
                    placeholder="+880"
                    name='countryCode'
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}

                />
                <input
                    type="text"
                    className="form-control block w-full lg:flex-1 pl-5 py-1.5 text-base font-normal text-[#B4B4B4] bg-white bg-clip-padding border-b-2 border-solid border-[#A4A4A4]  bg-opacity-0 focus:outline-none mb-12"
                    placeholder="1xxxxxxxxx"
                    name="phoneNum"
                    value={formData.phoneNum}
                    onChange={(e) => setFormData({ ...formData, phoneNum: e.target.value })}

                />
            </div>

            <input
                type="email"
                className="form-control w-full block pl-5 py-1.5 text-base font-normal text-[#B4B4B4] bg-white bg-clip-padding border-b-2 border-solid border-[#A4A4A4]  bg-opacity-0 focus:outline-none mb-16"
                placeholder="write your email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}

            />

        </div>
    );
};

export default ContactInfoField;