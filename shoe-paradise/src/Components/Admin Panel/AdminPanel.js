import React from "react";

function AdminPanel() {
  return (
    <div className="flex justify-center">
      <form className="mt-10">
        <div className="max-w-md mx-auto p-5 shadow-xl rounded-md bg-white">
          <h1 className="text-center text-xl font-bold mb-5">Are you Admin?</h1>
          <input
            className="w-full h-14 px-4 rounded-md bg-gray-100 mb-5"
            placeholder="Enter Admin Code"
          ></input>
          <button className="w-full bg-blue-800 text-white rounded-md py-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminPanel;
