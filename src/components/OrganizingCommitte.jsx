import React, { useState } from "react";
// import committeeData from "../assets/committe.json";
import user from '../assets/user.png';

const OrganizingCommitte = () => {
    // console.log(committeeData); // Check the structure of committeeData
    //   const [data, setData] = useState(committeeData);

    return (
        <div className="bg-white py-12 px-4 md:px-10">
            <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">
                Organizing Committees
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div
                    className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 transition p-3 rounded-lg shadow-sm"
                >
                    <img
                        src={user}
                        alt=""
                        className="w-14 h-14 rounded-full object-cover border border-gray-300"
                    />
                    <div>
                        <p className="font-semibold text-gray-800">To Be Updated</p>
                        <p className="text-sm text-gray-600">To Be Updated</p>
                    </div>
                </div>

                <div
                    className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 transition p-3 rounded-lg shadow-sm"
                >
                    <img
                        src={user}
                        alt=""
                        className="w-14 h-14 rounded-full object-cover border border-gray-300"
                    />
                    <div>
                        <p className="font-semibold text-gray-800">To Be Updated</p>
                        <p className="text-sm text-gray-600">To Be Updated</p>
                    </div>
                </div>

                <div
                    className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 transition p-3 rounded-lg shadow-sm"
                >
                    <img
                        src={user}
                        alt=""
                        className="w-14 h-14 rounded-full object-cover border border-gray-300"
                    />
                    <div>
                        <p className="font-semibold text-gray-800">To Be Updated</p>
                        <p className="text-sm text-gray-600">To Be Updated</p>
                    </div>
                </div>

                <div
                    className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 transition p-3 rounded-lg shadow-sm"
                >
                    <img
                        src={user}
                        alt=""
                        className="w-14 h-14 rounded-full object-cover border border-gray-300"
                    />
                    <div>
                        <p className="font-semibold text-gray-800">To Be Updated</p>
                        <p className="text-sm text-gray-600">To Be Updated</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrganizingCommitte;
