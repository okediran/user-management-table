import React, { useEffect, useState } from 'react';
import UserTable from '../components/UserTable';
import * as XLSX from 'xlsx';
import axios from 'axios';

const Home: React.FC = () => {
  // State to hold user data
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    // Function to fetch user data from the mock API
    const fetchUsers = async () => {
      try {
        // Make an API request to fetch users
        const response = await axios.get('/api/users');
        // Update the state with the fetched user data
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []);

  // Function to export user data to an Excel file
  const exportToExcel = () => {
    // Convert JSON data to a worksheet
    const ws = XLSX.utils.json_to_sheet(users);
    // Create a new workbook
    const wb = XLSX.utils.book_new();
    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Users');
    // Write the workbook to a file
    XLSX.writeFile(wb, 'users.xlsx');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4"></h1>

      {/* Render the UserTable component and pass the user data */}
      <UserTable users={users} />
      <button
        onClick={exportToExcel}
        className="bg-[#6c7ae0] text-white py-2 px-4 rounded mb-4 float-right mt-5"
      >
        Download as Excel
      </button>
    </div>
  );
};

export default Home;
