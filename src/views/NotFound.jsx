import React from "react";
import { MdDoNotDisturb } from "react-icons/md";

function NotFound() {
  return (
    <>
      <div className="t-30">
        <h1 className="text-3xl text-center font-bold text-red-600">
          <MdDoNotDisturb className="mx-auto text-4xl" />
          404
        </h1>
      </div>
    </>
  );
}

export default NotFound;
