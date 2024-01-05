import { StyleProps } from "../props";

interface ButtonComponentProps extends StyleProps {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function ButtonComponent({
  type,
  disabled,
  style,
  className,
  children,
}: ButtonComponentProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      style={{
        ...style,
      }}
      className={`bg-[#1094DD] w-full p-3 rounded-full text-[#fff] transition duration-300 ease-in-out hover:bg-[#0a75a9] ${className}`}
    >
      {children}
    </button>
  );
}
