import React from "react";
import { useState } from "react";

// Backend URL should be defined in the .env file
const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT || "9000";
const BACKEND_URL = `http://localhost:${BACKEND_PORT}`;
const Card = () => {
  // State variables to store the user's name and the greeting message
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  /**
   * Calls the backend API to get a greeting message.
   * If the user hasn't entered a name, it sets an error message.
   * Otherwise, it fetches the response from the backend and updates the message state.
   */
  const getGreeting = async () => {
    if (!name) {
      setMessage("Please enter a name."); // Show error if name is empty
      return;
    }

    try {
      // Making a GET request
      const response = await fetch(`${BACKEND_URL}/api/greet?name=${name}`);

      const data = await response.json(); // Parsing the JSON response

      // Updating the message state
      setMessage(data.message || data.error);
    } catch (error) {
      console.log(error); // Logging any errors to the console
      setMessage("Error fetching greeting.");
    }
  };
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="flex flex-col items-center justify-center min-h-screen  text-white">
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-10 text-center w-96">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Greeting App
          </h1>

          {/* Input field for user name */}
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)} // Updating the name state on input change
            className="w-full mt-4 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg "
          />

          {/* Button to trigger the API call */}
          <button
            onClick={getGreeting}
            className="mt-4 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg "
          >
            Get Greeting
          </button>

          {/* Displaying the fetched greeting message or error message */}
          <h2 className="mt-4 text-lg font-medium text-gray-800">{message}</h2>
        </div>
      </div>
    </>
  );
};

export default Card;
