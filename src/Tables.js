import React, {useState} from "react";

const dataTable = [
    {
        "id": 1,
        "name": "Emily Chen",
        "age": 28,
        "occupation": "Software Engineer"
    },
    {
        "id": 2,
        "name": "Ryan Thompson",
        "age": 32,
        "occupation": "Marketing Manager"
    },
    {
        "id": 3,
        "name": "Sophia Patel",
        "age": 25,
        "occupation": "Data Analyst"
    },
    {
        "id": 4,
        "name": "Michael Lee",
        "age": 41,
        "occupation": "CEO"
    },
    {
        "id": 5,
        "name": "Olivia Brown",
        "age": 29,
        "occupation": "Graphic Designer"
    },
    {
        "id": 6,
        "name": "Alexander Hall",
        "age": 38,
        "occupation": "Sales Representative"
    },
    {
        "id": 7,
        "name": "Isabella Davis",
        "age": 26,
        "occupation": "Teacher"
    },
    {
        "id": 8,
        "name": "Ethan White",
        "age": 35,
        "occupation": "Lawyer"
    },
    {
        "id": 9,
        "name": "Lily Tran",
        "age": 30,
        "occupation": "Nurse"
    },
    {
        "id": 10,
        "name": "Julian Sanchez",
        "age": 39,
        "occupation": "Engineer"
    },
    {
        "id": 11,
        "name": "Ava Martin",
        "age": 27,
        "occupation": "Journalist"
    },
    {
        "id": 12,
        "name": "Benjamin Walker",
        "age": 42,
        "occupation": "Doctor"
    },
    {
        "id": 13,
        "name": "Charlotte Brooks",
        "age": 31,
        "occupation": "HR Manager"
    },
    {
        "id": 14,
        "name": "Gabriel Harris",
        "age": 36,
        "occupation": "IT Consultant"
    },
    {
        "id": 15,
        "name": "Hannah Taylor",
        "age": 24,
        "occupation": "Student"
    },
    {
        "id": 16,
        "name": "Jackson Brown",
        "age": 40,
        "occupation": "Business Owner"
    },
    {
        "id": 17,
        "name": "Kayla Lewis",
        "age": 33,
        "occupation": "Event Planner"
    },
    {
        "id": 18,
        "name": "Logan Mitchell",
        "age": 37,
        "occupation": "Architect"
    },
    {
        "id": 19,
        "name": "Mia Garcia",
        "age": 29,
        "occupation": "Artist"
    },
    {
        "id": 20,
        "name": "Natalie Hall",
        "age": 34,
        "occupation": "Teacher"
    },
    {
        "id": 21,
        "name": "Oliver Patel",
        "age": 38,
        "occupation": "Software Developer"
    },
    {
        "id": 22,
        "name": "Penelope Martin",
        "age": 26,
        "occupation": "Writer"
    },
    {
        "id": 23,
        "name": "Quinn Lee",
        "age": 35,
        "occupation": "Entrepreneur"
    },
    {
        "id": 24,
        "name": "Rachel Kim",
        "age": 30,
        "occupation": "Dentist"
    },
    {
        "id": 25,
        "name": "Samuel Jackson",
        "age": 42,
        "occupation": "Lawyer"
    },
    {
        "id": 26,
        "name": "Tessa Hall",
        "age": 28,
        "occupation": "Graphic Designer"
    },
    {
        "id": 27,
        "name": "Uma Patel",
        "age": 39,
        "occupation": "Marketing Manager"
    },
    {
        "id": 28,
        "name": "Vincent Brooks",
        "age": 36,
        "occupation": "IT Consultant"
    },
    {
        "id": 29,
        "name": "Walter White",
        "age": 41,
        "occupation": "Engineer"
    },
    {
        "id": 30,
        "name": "Xavier Sanchez",
        "age": 33,
        "occupation": "Sales Representative"
    },
    {
        "id": 31,
        "name": "Yvonne Martin",
        "age": 29,
        "occupation": "Teacher"
    },
    {
        "id": 32,
        "name": "Zoe Lee",
        "age": 27,
        "occupation": "Data Analyst"
    },
    {
        "id": 33,
        "name": "Abigail Brown",
        "age": 34,
        "occupation": "Nurse"
    },
    {
        "id": 34,
        "name": "Caleb Harris",
        "age": 38,
        "occupation": "Business Owner"
    },
    {
        "id": 35,
        "name": "Diana Taylor",
        "age": 31,
        "occupation": "Event Planner"
    },
    {
        "id": 36,
        "name": "Eleanor Walker",
        "age": 40,
        "occupation": "CEO"
    }
];

const DataTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState("");

    // Filter users by search term
    const filteredUsers = dataTable.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination calculations
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    // Pagination handlers
    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">User Table</h1>

            {/* Search Input */}
            <input
                type="text"
                placeholder="Search by Name..."
                className="p-2 border rounded w-full mb-4"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Table */}
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                <tr className="bg-gray-200">
                    <th className="border p-2">ID</th>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Age</th>
                    <th className="border p-2">Occupation</th>
                </tr>
                </thead>
                <tbody>
                {currentUsers.map((user) => (
                    <tr key={user.id} className="text-center border-t">
                        <td className="border p-2">{user.id}</td>
                        <td className="border p-2">{user.name}</td>
                        <td className="border p-2">{user.age}</td>
                        <td className="border p-2">{user.occupation}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-4">
                {/* Users Per Page Dropdown */}
                <select
                    className="border p-2"
                    value={usersPerPage}
                    onChange={(e) => {
                        setUsersPerPage(Number(e.target.value));
                        setCurrentPage(1); // Reset to first page when changing users per page
                    }}
                >
                    <option value={5}>5 per page</option>
                    <option value={10}>10 per page</option>
                    <option value={20}>20 per page</option>
                </select>

                {/* Page Controls */}
                <div>
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 border rounded ${currentPage === 1 ? "opacity-50" : "hover:bg-gray-200"}`}
                    >
                        Previous
                    </button>
                    <span className="mx-4">
            Page {currentPage} of {totalPages}
          </span>
                    <button
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 border rounded ${currentPage === totalPages ? "opacity-50" : "hover:bg-gray-200"}`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DataTable;