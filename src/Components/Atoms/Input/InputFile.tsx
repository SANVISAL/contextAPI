import React from "react";

interface InputFileProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  type?: string;
  name?: string;
  value?: string;
  accept?: string;
  ref?: React.MutableRefObject<HTMLInputElement | null>;
  onChange?: (event: any) => void;
}
const InputFile: React.FC<InputFileProps> = ({
  size = "md",
  className,
  type,
  name,
  value,
  ref,
  accept,
  onChange,
}) => {
  const InputFileSize = (size: string) => {
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
  const getInputTextSize = InputFileSize(size);
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        ref={ref}
        accept={accept}
        onChange={onChange}
        className={`${getInputTextSize} text-white file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white ${className}`}
      />
      <br />
    </>
  );
};

export { InputFile };
