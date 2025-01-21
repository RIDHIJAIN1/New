import React, { useEffect, useState } from "react";
import { getUsers } from "../api/admin";
import EditListModal from "../components/EditListModal";
import { CiSearch } from "react-icons/ci";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const userData = await getUsers();
      setUsers(userData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mt-6 p-6 bg-white">
      <h1 className="text-3xl font-bold text-gray-800">User List</h1>

      {/* Search Bar */}
      <div className="mb-4 relative w-2/6 :w-full flex justify-between items-center h-12 pl-4 border border-black rounded-md my-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          className="outline-none"
          
        />
        <button type="button" className="bg-[#043B64] h-[100%] py-3 px-4 rounded-md"><CiSearch className="text-white" /></button>
      </div>

      {/* Table */}
      <table className="table-auto w-full border-collapse rounded-lg overflow-hidden shadow-lg rounded-xl bg-gray-100">
        <thead className="text-left">
          <tr className="border-b border-gray-300">
            <th className="px-4 py-3 font-semibold">Name</th>
            <th className="px-4 py-3 font-semibold">Email</th>
            <th className="px-4 py-3 font-semibold">Phone</th>
            <th className="px-4 py-3 font-semibold">Status</th>
            <th className="px-4 py-3 font-semibold text-center">View</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 border-b border-gray-300" 
            >
              <td className="px-4 py-3">{user.name}</td>
              <td className="px-4 py-3">{user.email}</td>
              <td className="px-4 py-3">{user.phone}</td>
              <td className="px-4 py-3">
                {user.isActive ? "Active" : "Inactive"}
              </td>
              <td className="px-4 py-3 text-center">
                <button
                  className="bg-[#043B64] text-white px-4 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onClick={() => openModal(user)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && (
        <EditListModal
          user={selectedUser}
          onClose={closeModal}
          onRefresh={fetchUsers}
        />
      )}
    </div>
  );
};

export default UserList;