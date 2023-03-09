import React from "react";
import { UserAuth, user } from "../context/AuthContext";

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-bold text-3xl text-center">Account</h1>
      <p>Welcome, {user?.displayName}!!</p>
      <div>
        <button onClick={handleSignOut} className="border py-2 px-5 mt-10">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Account;
