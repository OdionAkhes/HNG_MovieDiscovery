/** @format */

import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="flex justify-center items-center min-h-screen text-red-500">
      {message}
    </div>
  );
};

export default ErrorMessage;
