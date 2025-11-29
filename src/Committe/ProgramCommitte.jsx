import React, { useState } from "react";
import committeeData from "../assets/CommitteDetails/committe.json";
import user from '../assets/user.png';

const CommitteePage = () => {
  const [data] = useState(committeeData);

  const chairs = data.filter(member => member.type === "chair");
  const members = data.filter(member => member.type === "member");

  const renderMembers = (list) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
      {list.map((member, index) => (
        <div
          key={index}
          className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 transition p-3 rounded-lg shadow-sm"
        >
          <img
            src={user}
            alt={member.name}
            loading="lazy"
            className="w-14 h-14 rounded-full object-cover border border-gray-300"
          />
          <div>
            <p className="font-semibold text-gray-800">{member.name}</p>
            <p className="text-sm text-gray-600">{member.institute}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-white py-12 px-4 md:px-10">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">
        Program Committees
      </h1>

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Program Chairs</h2>
      {renderMembers(chairs)}

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Program Committee Members</h2>
      {renderMembers(members)}
    </div>
  );
};

export default CommitteePage;
