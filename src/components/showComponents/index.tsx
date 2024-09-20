"use client";

import { usePathname } from "next/navigation";
import React from "react";

const ShowComponent = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div>
      {pathname !== "/login" && pathname !== "/register" && pathname !== "/dashBoard-Admin" ? (
        <div>{children}</div>
      ) : null}
    </div>
  );
};

export default ShowComponent;
