/** @format */

import React from "react";
import Navigation from "../navigation/navigation";
interface Props {
  children: React.ReactNode;
  isDisplayCreadCrumbs?: boolean;
}
export default function Layout({ children }: Props) {
  return (
    <div className="bg-white">
      <Navigation />
      {children}
    </div>
  );
}
