import React from "react";

const LOGOUT_URL = "https://www.spotify.com/logout/";

export default function Logout() {
  const handleLogout = () => {
    window.location.href = LOGOUT_URL;
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={handleLogout}
        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-black text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
        Logout from Spotify
      </button>
    </div>
  );
}
