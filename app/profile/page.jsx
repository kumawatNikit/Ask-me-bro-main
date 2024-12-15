"use client"
import { CheckLg } from '@styled-icons/bootstrap';
import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState(null)

   useEffect(()=>{
    const fetchUserData = async ()=>{
      const token = localStorage.getItem("token")
      if(!token){
        setError("Please log in")
      }
      try {
        const response = await fetch("https://thoughtsexchange-prod.up.railway.app/api/auth/me", {
          method: "GET",
          headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        })
        // if (!response.ok) {
        //   throw new Error("Failed to fetch user data.");
        // }
       let data = await response.json()
       console.log(data)
       setUserData(data)
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error.message || "An error occurred.");
      }
    }
    fetchUserData();
  },[])
  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!userData) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }
  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* About Admin */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-24 h-24 rounded-full border mr-6"
          />
          <div>
            <h2 className="text-xl font-bold">{userData?.username}</h2>
            <ul className="text-sm text-gray-600">
              <li>
                <span className="font-bold">Registered:</span> Jan 10, 2014
              </li>
              <li>
                <span className="font-bold">Country:</span> Egypt
              </li>
              <li>
                <span className="font-bold">Website:</span>{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  view
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          adipiscing gravida odio, sit amet suscipit risus ultrices eu.
          Pellentesque habitant morbi tristique senectus et netus et malesuada.
        </p>
        <div className="mt-4 flex space-x-4">
          <a
            href="#"
            className="text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Google+
          </a>
          <a
            href="#"
            className="text-white bg-black px-3 py-1 rounded hover:bg-gray-800"
          >
            Email
          </a>
        </div>
      </div>

      {/* User Stats */}
      <div className="mt-6 space-y-6">
        {/* Stats Block */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">User Stats</h3>
          <ul className="grid grid-cols-2 gap-4 text-gray-600">
            <li className="flex items-center">
              <span className="text-blue-500 font-bold mr-2">Questions:</span> 30
            </li>
            <li className="flex items-center">
              <span className="text-green-500 font-bold mr-2">Answers:</span> 10
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 font-bold mr-2">
                Favorite Questions:
              </span>{" "}
              3
            </li>
            <li className="flex items-center">
              <span className="text-red-500 font-bold mr-2">Points:</span> 20
            </li>
            <li className="flex items-center">
              <span className="text-purple-500 font-bold mr-2">
                Best Answers:
              </span>{" "}
              2
            </li>
          </ul>
        </div>

        {/* Activity Block */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Activity</h3>
          <table className="w-full text-left text-gray-600">
            <thead>
              <tr className="border-b">
                <th className="py-2">#</th>
                <th>Today</th>
                <th>Month</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Questions</td>
                <td>5</td>
                <td>20</td>
                <td>100</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Answers</td>
                <td>30</td>
                <td>150</td>
                <td>1000</td>
              </tr>
              <tr>
                <td className="py-2">Visitors</td>
                <td>100</td>
                <td>3000</td>
                <td>5000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
