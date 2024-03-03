import React, { ReactNode } from "react";

interface InputTextProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: any) => void;
}
const InputText: React.FC<InputTextProps> = ({
  size = "md",
  className,
  type,
  name,
  value,
  placeholder,
  onChange,
}) => {
  const InputTextSize = (size: string) => {
    switch (size) {
      case "xs":
        return "text-xs h-[40px] w-[200px]";
      case "sm":
        return "text-sm h-[45px] w-[300px]";
      case "md":
        return "text-md h-[50px] w-[400px]";
      case "lg":
        return "text-lg h-[55px] w-[500px]";
      case "xl":
        return "text-xl h-[60px] w-[600px]";
      case "2xl":
        return "text-2xl h-[65px] w-[700px]";
      default:
        return "text-md h-[50px] w-[800px]";
    }
  };
  const getInputTextSize = InputTextSize(size);
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={`${getInputTextSize} my-5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:border-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
        onChange={onChange}
      />
    </>
  );
};

export { InputText };
