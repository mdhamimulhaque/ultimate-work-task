import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AttendanceInfoTable = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://test.nexisltd.com/test', {
            headers: {
                authorization: `bearer ${localStorage.getItem('access_token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setUsers(Object.values(data))
            })
    }, [])


    return (
        <div className='xl:w-[1440px] xl:mx-auto mt-20 overflow-x-auto px-3'>
            <h2 className='text-3xl text-center font-semibold pb-20'>Attendance information</h2>
            <Link to='/'>
                <button
                    className=" signUp_btn mb-4 text-white font-medium rounded-[15px] py-4 px-5 bg-[#1678CB] "
                    type="submit" >
                    Back To Home
                </button>
            </Link>
            <table className="px-4 w-full rounded-md border border-gray-200 overflow-x-auto">

                <thead className="min-w-full bg-gray-100 text-left text-gray-700">
                    <tr>
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">No</th>
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Name</th>
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Profession</th>
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Date</th>
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Status</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.name} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"} whitespace-nowrap`}>
                            <td className="py-3 px-4 text-base text-gray-700 font-semibold">
                                {index + 1}
                            </td>
                            <td className="py-3 px-4 text-base text-gray-700 font-semibold">
                                {user?.name}
                            </td>
                            <td className="py-3 px-4 text-base text-gray-700 font-semibold">
                                {user?.position}
                            </td>
                            <td className="py-3 px-4 text-base text-gray-700 font-semibold">
                                {
                                    Object.keys(user?.attendance).map(date => <p key={date}>{date}</p>)
                                }
                            </td>
                            <td className="py-3 px-4 text-base text-gray-700 font-semibold">
                                {

                                    Object.values(user?.attendance).map(userStatus =>
                                        <p>{userStatus?.status}</p>

                                    )
                                }
                            </td>

                        </tr>
                    ))
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AttendanceInfoTable;