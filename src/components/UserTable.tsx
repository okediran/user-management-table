import React from 'react';

// Define the User type
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

// Define the props for the UserTable component
interface UserTableProps {
  users: User[];
}

// UserTable component to render the list of users in a table format
const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <div className="relative overflow-x-auto rounded-md ">
        {/* w-full bg-white */}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 bg-white shadow-md sm:rounded-lg">
      <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
      User Management Table
        </caption>
        <thead className="text-xs text-[white] uppercase bg-[#6c7ae0] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6 border-b" >ID</th>
            <th scope="col" className="py-3 px-6 border-b">Name</th>
            <th scope="col" className="py-3 px-6 border-b">Email</th>
            <th scope="col" className="py-3 px-6 border-b">Phone</th>
            <th scope="col" className="py-3 px-6 border-b">Address</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the users array and render each user in a table row */}
          {users.map(user => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.id}</td>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.phone}</td>
              <td className="py-2 px-4 border-b">{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
