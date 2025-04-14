// CommitteePage.jsx
import React from "react";
import user from '../assets/user.png'

const committeeData = [
  {
    title: "Chairperson",
    members: [
      {
        name: "Dr. A. B. Speaker",
        designation: "Professor, IIIT Bhubaneswar",
        image: user,
      },
      {
        name: "Dr. A. B. Speaker",
        designation: "Professor, IIIT Bhubaneswar",
        image: user,
      },
      {
        name: "Dr. A. B. Speaker",
        designation: "Professor, IIIT Bhubaneswar",
        image: user,
      },
    ],
  },
  {
    title: "General Chairs",
    members: [
      {
        name: "Prof. C. D. Speaker",
        designation: "Head, Dept. of CSE",
        image: user,
      },
      {
        name: "Dr. E. F. Speaker",
        designation: "Associate Professor, IIT KGP",
        image: user,
      },
      {
        name: "Prof. C. D. Speaker",
        designation: "Head, Dept. of CSE",
        image: user,
      },
      {
        name: "Dr. E. F. Speaker",
        designation: "Associate Professor, IIT KGP",
        image: user,
      },
      {
        name: "Prof. C. D. Speaker",
        designation: "Head, Dept. of CSE",
        image: user,
      },
      {
        name: "Dr. E. F. Speaker",
        designation: "Associate Professor, IIT KGP",
        image: user,
      },
    ],
  },
  {
    title: "Technical Program Committee",
    members: [
      {
        name: "Dr. G. H. Speaker",
        designation: "Assistant Professor, NIT Rourkela",
        image: user,
      },
      {
        name: "Prof. I. J. Speaker",
        designation: "Professor, IISc Bangalore",
        image: user,
      },
      {
        name: "Dr. G. H. Speaker",
        designation: "Assistant Professor, NIT Rourkela",
        image: user,
      },
      {
        name: "Prof. I. J. Speaker",
        designation: "Professor, IISc Bangalore",
        image: user,
      },
      {
        name: "Dr. G. H. Speaker",
        designation: "Assistant Professor, NIT Rourkela",
        image: user,
      },
      {
        name: "Prof. I. J. Speaker",
        designation: "Professor, IISc Bangalore",
        image: user,
      },
    ],
  },
];

const CommitteePage = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-10">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">
        IndoCrypt 2025 Committee
      </h1>

      {committeeData.map((section, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-xl font-semibold text-gray-700 mb-6 border-l-4 border-blue-500 pl-3">
            {section.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {section.members.map((member, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 transition p-3 rounded-lg shadow-sm"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-14 h-14 rounded-full object-cover border border-gray-300"
                />
                <div>
                  <p className="font-semibold text-gray-800">{member.name}</p>
                  <p className="text-sm text-gray-600">{member.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommitteePage;
