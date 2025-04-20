interface Props{
    children: React.ReactNode;
    className?: string;
    idElement?:string;
}
import React from 'react'
import clsx from "clsx";

export default function Container({children, className, idElement}:Props) {
  return (
    <div className={clsx(className, "w-full max-w-7xl mx-auto")} id={idElement}>
      {children}
    </div>
  )
}
