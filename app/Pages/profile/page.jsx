"use client";
import useUserData from '@/lib/useUserData';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { isAuthenticated, token } = useSelector((state) => state.auth);
  const apiUrl = `/auth/protected/me`;
  const { userData, error } = useUserData(isAuthenticated, token, apiUrl);

  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState("");
  const [profilePhoto, setProfilePhoto] = useState( "");
  const [profileImagePreview, setProfileImagePreview] = useState("");

  useEffect(() => {
    if (userData) {
      setUsername(userData.username || "");
    }
  }, [userData]);

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!userData) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }



  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImagePreview(reader.result);
        setProfilePhoto(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const value = {
        user: username,
        profilePhoto: profilePhoto,
      };
  
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/protected/update`, { 
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(value),
      });
  
      if (!response.ok) {
        console.error("Error updating profile");
        return;
      }
  
      const result = await response.json(); 
      console.log("Profile updated successfully:", result);
  
      setEditMode(false); 
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };
  
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="bg-white shadow rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start">
        <div className="relative">
          <img
            src={profileImagePreview || profilePhoto || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-24 h-24 rounded-full border mb-4 md:mb-0 md:mr-8"
          />
          {editMode && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          )}
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center md:text-left">
          {!editMode ? (
          <h2 className="text-2xl font-bold text-gray-800">{userData?.username || "No Username"}</h2>
        ) : (
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded p-2 text-xl font-bold text-gray-800 w-full md:w-auto"
          />
        )}
          {/* Followers, Following, Posts */}
          <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4">
            <div>
              <span className="text-lg font-bold text-gray-800">{userData?.followersCount || 0}</span>
              <p className="text-sm text-gray-600">Followers</p>
            </div>
            <div>
              <span className="text-lg font-bold text-gray-800">{userData?.followingCount || 0}</span>
              <p className="text-sm text-gray-600">Following</p>
            </div>
            <div>
              <span className="text-lg font-bold text-gray-800">{userData?.questionsCount || 0}</span>
              <p className="text-sm text-gray-600">Posts</p>
            </div>
          </div>

          {/* Additional Details */}
          <ul className="mt-4 text-sm text-gray-600">
            <li>
              <span className="font-bold">ID:</span> {userData?.id || "N/A"}
            </li>
            <li>
              <span className="font-bold">Email:</span> {userData?.email || "N/A"}
            </li>
            <li>
              <span className="font-bold">Reputation:</span> {userData?.reputation || 0}
            </li>
          </ul>

          {/* User Summary */}
          <p className="mt-4 text-gray-700">
            {userData?.aboutSummary || "No summary available."}
          </p>   
          {!editMode ? (
            <div className="mt-4 flex justify-center md:justify-start gap-4">
              <button
                onClick={() => setEditMode(true)}
                className="text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
              >
                Edit Profile
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 flex gap-4">
              <button
                type="submit"
                className="text-white bg-green-500 px-3 py-1 rounded hover:bg-green-600"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => {setEditMode(false)
                  setProfilePhoto("")
                }}
                className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              >
                Cancel
              </button>
            </form>
          )}      
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* User Stats */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">User Stats</h3>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold text-blue-500">Questions:</span> {userData?.questionsCount || 0}
            </li>
            <li>
              <span className="font-semibold text-green-500">Answers:</span> {userData?.answersCount || 0}
            </li>
            <li>
              <span className="font-semibold text-yellow-500">Badges:</span> {userData?.badgesCount || 0}
            </li>
            <li>
              <span className="font-semibold text-red-500">Reputation Points:</span> {userData?.reputation || 0}
            </li>
          </ul>
        </div>

        {/* Activity Table */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Activity</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-gray-700 font-semibold">Category</th>
                <th className="py-2 text-gray-700 font-semibold">Today</th>
                <th className="py-2 text-gray-700 font-semibold">Month</th>
                <th className="py-2 text-gray-700 font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Questions</td>
                <td>5</td>
                <td>20</td>
                <td>{userData?.questionsCount || 0}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Answers</td>
                <td>10</td>
                <td>50</td>
                <td>{userData?.answersCount || 0}</td>
              </tr>
              <tr>
                <td className="py-2">Visitors</td>
                <td>100</td>
                <td>300</td>
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
