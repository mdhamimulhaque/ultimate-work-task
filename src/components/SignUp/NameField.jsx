import React from 'react';

const NameField = ({ formData, setFormData }) => {
    return (
        <div>
            <input
                type="text"
                className="form-control block w-full pl-5 py-1.5 text-base font-normal text-[#B4B4B4] bg-white bg-clip-padding border-b-2 border-solid border-[#A4A4A4]  bg-opacity-0 focus:outline-none mb-12"
                placeholder="Write First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />

            <input
                type="text"
                className="form-control w-full block pl-5 py-1.5 text-base font-normal text-[#B4B4B4] bg-white bg-clip-padding border-b-2 border-solid border-[#A4A4A4]  bg-opacity-0 focus:outline-none mb-16"
                placeholder="Write Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />

        </div>
    );
};

export default NameField;