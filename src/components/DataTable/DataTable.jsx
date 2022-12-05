import React, { useEffect, useState } from 'react';

const DataTable = () => {

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


    // const test = users.map(user => Object.values(user.attendance).map(u => console.log(u.status)))

    return (
        <div className='w-[1440px] mx-auto '>
            <h2>Data Table</h2>
            {
                users.map(user =>
                    <div>
                        <div className="date">
                            <table class="border-collapse w-full">
                                <thead>
                                    <tr>
                                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"> Date</th>
                                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Name</th>
                                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">info</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                                        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"> Date</span>
                                            {user.name}
                                        </td>

                                        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"> Date</span>
                                            {
                                                Object.keys(user.attendance).map(u => <p>{u}</p>)
                                            }
                                        </td>

                                        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"> Date</span>
                                            {
                                                Object.values(user.attendance).map(u => <p>{u.status}</p>)
                                            }
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default DataTable;