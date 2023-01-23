import React, {ButtonHTMLAttributes} from 'react';
import cn from 'classnames'

interface Props {
  secondary?: boolean
}

export const Button = ({children, secondary, ...props}: ButtonHTMLAttributes<HTMLButtonElement> & Props) => {
  return (
    <button
      className={cn(
        "bg-blue-400 p-5 text-white rounded hover:scale-105 active:scale-95 transition",
        {"bg-gray-400" : secondary},
        {"shadow-2xl": !secondary})
      }
      {...props}
    >
      {children}
    </button>
  );
};