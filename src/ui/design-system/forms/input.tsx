/** @format */

import React, { useState } from "react";
import clsx from "clsx";
import {
  UseFormRegister,
  FieldValues,
  FieldErrors,
  Path
} from "react-hook-form";
import Typography from "../typography/typography";

interface InputProps<T extends FieldValues> {
  isLoading?: boolean;
  placeholder: string;
  placeholders: string;
  type?: "text" | "email" | "password" | "tel" | "number" | "file";
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  errorMsg?: string;
  id: Path<T>;
  required?: boolean;
  isAutoCompleted?: boolean;
  className?: string;
}

export const Input = <T extends FieldValues>({
  isLoading = false,
  placeholder,
  placeholders,
  type = "text",
  register,
  errors,
  errorMsg = "Tu dois renseigner ce champ",
  id,
  className,
  required = true,
  isAutoCompleted = false
}: InputProps<T>) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    setHasBeenClicked(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    const hasText = !!e.target.value;
    setHasBeenClicked(hasText); // supprime le placeholder si pas de texte
  };

  return (
    <div className={clsx("relative w-full", className)}>
      <label
        htmlFor={id as string}
        className={clsx(
          "absolute left-3 transition-all duration-200 text-sm pointer-events-none",
          {
            "top-1 text-gray-700": isFocused || hasBeenClicked,
            "top-4 text-gray-500": !isFocused && !hasBeenClicked,
            "text-red-500": errors[id]
          }
        )}>
        {placeholder}
      </label>

      <input
        id={id as string}
        type={type}
        placeholder={isFocused || hasBeenClicked ? placeholders : ""}
        className={clsx(
          "w-full h-20 px-3 pt-18 text-base border outline-none transition duration-200",
          {
            "border-2 border-gray-950 focus:border-black": !errors[id],
            "border-red-500 placeholder-red-500": errors[id],
            "cursor-not-allowed bg-gray-100": isLoading
          }
        )}
        disabled={isLoading}
        {...register(id, {
          required: { value: required, message: errorMsg }
        })}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoComplete={isAutoCompleted ? "on" : "off"}
      />

      {errors[id] && (
        <Typography
          variant="body1"
          theme="secondary"
          className="text-red-500 mt-1">
          {errors[id]?.message as string}
        </Typography>
      )}
    </div>
  );
};
