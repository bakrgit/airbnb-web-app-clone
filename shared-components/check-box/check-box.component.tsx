"use client";
import { Control, Controller } from "react-hook-form";
import "./check-box.scss";

interface CheckBoxProps {
  name: string;
  control: Control<any>;
  label: string;
  labelClassName?: string;
  id?: string;
  value?: string;
}

export const CheckBoxComponent = ({
  name,
  control,
  label,
  labelClassName,
  id,
  value,
}: CheckBoxProps) => {
  return (
    <div className="checkbox-wrapper">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <input
              {...field}
              type="checkbox"
              id={id || name}
              value={value}
              className="input"
            />
            <label
              htmlFor={id || name}
              className={labelClassName ? labelClassName : "label"}
            >
              <div className="icon">
                <span className={`icon-check `}></span>
              </div>
              <span className="label-text"> {label}</span>
            </label>
          </>
        )}
      />
    </div>
  );
};
