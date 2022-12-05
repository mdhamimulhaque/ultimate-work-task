import React, { useState } from "react";
import ContactInfoField from "./ContactInfoField";
import NameField from "./NameField";
import PasswordField from "./PasswordField";
import arrow from "../../img/Arrow 1.png";
import { Link, useNavigate } from "react-router-dom";


function SignUp() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    countryCode: "",
    phoneNum: ""
  });


  // ---> send from data
  const handleFormSubmit = () => {
    const phone_number = formData?.countryCode + formData?.phoneNum;


    const data = {
      first_name: formData?.firstName,
      last_Name: formData?.lastName,
      phone_number,
      email: formData?.email,
      password: formData?.password
    }


    fetch('https://test.nexisltd.com/signup', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          navigate('/login')
        }
        console.log(data)
      }
      )
      .catch(err => console.log(err))

  }



  return (
    <div className="form w-full px-2">
      <div className="form-container md:w-[370px] mx-auto ">
        <div className="header pt-24 mb-20">
          <h1 className="text-center text-xl font-semibold">SignUp Form</h1>
        </div>
        <div className="form_body_wrapper">
          <form>
            {
              page === 0 ?
                <NameField formData={formData} setFormData={setFormData} />
                :
                page === 1 ?
                  <ContactInfoField formData={formData} setFormData={setFormData} />
                  :
                  <PasswordField formData={formData} setFormData={setFormData} />
            }
          </form>
        </div>

        <div className="footer flex gap-2 justify-center">
          <button
            className={page === 0 ? "hidden" : 'block mr-16'}
            onClick={() => {
              setPage(() => page - 1);
            }}
          >
            Back
          </button>
          <div className="flex justify-center">
            <button
              className=" signUp_btn flex items-center text-white font-medium rounded-[15px] py-4 px-5 bg-[#1678CB] "
              type="submit"
              onClick={() => {
                (page === 0 || page === 1) ?
                  setPage(() => page + 1) :
                  handleFormSubmit()
              }}
            >
              <span className=" text-base font-medium ">
                {
                  (page === 0 || page === 1) ? "Next Step" : "Sign Up"
                }
              </span>
              {
                (page === 0 || page === 1) && <img className="ml-2.5" src={arrow} alt="arrow" />
              }

            </button>
          </div>
        </div>
        {
          page === 0 && <p className="text-[14px] text-end text-[#7E7E7E] mt-24 font-normal">Already have an account?
            <Link className="text-[#1678CB] ml-2 underline" to="/login">LOGIN HERE!</Link></p>
        }
      </div>
    </div>
  );
}

export default SignUp;
