import React from 'react'
import Typography from './typography/typography'
import clsx from 'clsx';
interface Prop{
    children: string | React.ReactNode;
    className?: string ;
}
export default function TitreSection({children, className}:Prop) {
  return (
    <Typography
      variant="navTitle"
      className={clsx(
        "bg-gray-300 dark:bg-gray-500 rounded p-2 p-auto ",
        className
      )}>
      {children}
    </Typography>
  );
}
