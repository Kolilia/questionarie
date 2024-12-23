import { forwardRef, useId } from "react";
import { twMerge } from "tailwind-merge";

const Radio = forwardRef(function Radio(
  { checked, onChange, className, label, disabled },
  ref
) {
  const id = useId();

  return (
    <label
      className={twMerge(
        "inline-flex cursor-pointer items-center gap-[10px]",
        className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 20 20"
        fill="none"
      >
        <circle cx="10" cy="10" r="10" fill={checked ? "#1CC11C" : "#D0D5DD"} />
        <circle
          cx="10"
          cy="10"
          r={checked ? 5 : 9.5}
          fill="white"
          className="transition-all"
        />
      </svg>

      {label && (
        <span className={disabled ? "text-dark-400" : ""}>{label}</span>
      )}

      <input
        id={id}
        disabled={disabled}
        type="checkbox"
        ref={ref}
        checked={checked}
        style={{ display: "none" }}
        onChange={(event) => onChange(event.target.checked, event)}
      />
    </label>
  );
});

export default Radio;
