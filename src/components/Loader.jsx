import React from "react";

function Loader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
      <span className="loading loading-ring w-14"></span>
    </div>
  );
}

export default Loader;
