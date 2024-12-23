import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const variantToClassNameMap = {
  primary:
    "bg-[#238C23] text-white disabled:bg-[#98A2B3] disabled:text-white transition-colors rounded-lg px-20 py-12 text-md",
  secondary:
    "w-full rounded-lg border border-[#005BFF] px-20 py-12 text-[#005BFF] text-md disabled:bg-[#98A2B3] disabled:text-white disabled:border-none",
  reject:
    "bg-red-700 text-white disabled:bg-[#98A2B3] disabled:text-white transition-colors rounded-lg px-20 py-12 text-md",
};

const Button = forwardRef(function Button({ variant, ...buttonProps }, ref) {
  const variantClassName = variantToClassNameMap[variant];

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={twMerge(
        "flex items-center justify-center  outline-none",
        variantClassName,
        buttonProps.className
      )}
    >
      <span className="relative flex items-center">{buttonProps.children}</span>
    </button>
  );
});

export default Button;
