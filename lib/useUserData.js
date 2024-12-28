import { useState, useEffect } from 'react';

const useUserData = (isAuthenticated, token, apiUrl) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!isAuthenticated) {
        setError("Please log in");
        return;
      }

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${apiUrl}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error.message || "An error occurred.");
      }
    };

    fetchUserData();
  }, [isAuthenticated, token, apiUrl]); 

  return { userData, error };
};

export default useUserData;
