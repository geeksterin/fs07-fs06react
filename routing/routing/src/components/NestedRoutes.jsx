import React from "react";
import { Link, Outlet } from "react-router-dom";

const NestedRoutes = () => {
  return (
    <div>
      NestedRoutes
      <Link to="/restedroutes/rishabh">
        <p>rishabh</p>
      </Link>
      <Link to="/restedroutes/geekster">
        <p>Geekster</p>
      </Link>
      <Link to="/restedroutes/sharma">
        <p>sharma</p>
      </Link>
      <Outlet />
    </div>
  );
};

export default NestedRoutes;
