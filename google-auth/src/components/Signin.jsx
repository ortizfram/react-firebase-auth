import React from "react";
import { GoogleButton } from "react-google-button";

const Signin = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold py-8">Signin</h1>
      <div className="max-2-[240px] m-auto py-4">
        <GoogleButton />
      </div>
    </div>
  );
};

export default Signin;
