"use client";

import { Control, Controller } from "react-hook-form";
import Select from "react-select";
import "./select-input.scss";

interface SelectInputComponentProps {
  name: string;
  control: Control<any>;
  options: { label: string; value: string }[];
  label?: string;
  required?: boolean;
  placeholder?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  errors?: { message: string };
  rule?: any;

  [key: string]: any;
}

export const SelectInputComponent = ({
  name,
  control,
  options,
  label,
  required,
  placeholder,
  isLoading,
  isDisabled,
  errors,
  rules,
  ...props
}: SelectInputComponentProps) => {
  return (
    <div className={"select-input__wrapper"}>
      {label && (
        <label
          htmlFor={name}
          className={`select-input__label ${required ? "select-input__label--required" : ""}`}
        >
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        rules={{
          ...rules,
          validate: (value: any) => {
            return !(required && !value);
          },
        }}
        render={({ field, fieldState: { error } }: any): any => (
          <div className="d-flex flex-column w-100">
            <Select
              {...field}
              {...props}
              options={options}
              placeholder={placeholder}
              name={name}
              id={name}
              isDisabled={isDisabled}
              isLoading={isLoading}
              isClearable
              className={`select-input ${error ? "select-input--has-error" : ""}`}
              classNamePrefix="select-input"
            />
            {error && <p className="text-danger">هذا الحقل مطلوب</p>}
          </div>
        )}
      />
    </div>
  );
};
