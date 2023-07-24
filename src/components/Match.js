import React from "react";
import { Outlet } from "react-router-dom";
function match() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default match;
