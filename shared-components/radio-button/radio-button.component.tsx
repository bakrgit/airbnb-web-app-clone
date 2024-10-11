"use client";
import "./radio-button.scss";

interface RadioButtonProps {
  name: string;
  register: any;
  label: string;
  labelClassName?: string;
  id?: string;
  value?: string;
}

export const RadioButtonComponent = ({
  name,
  register,
  label,
  labelClassName,
  id,
  value,
}: RadioButtonProps) => {
  return (
    <>
      <input
        {...register(name)}
        type={"radio"}
        value={value}
        id={id || name}
        className={"input"}
      />
      <label htmlFor={id || name} className={"label"}>
        <div className="label-icon"></div>
        <span className="radio-text"> {label}</span>
      </label>
    </>
  );
};
