import "./input.scss";
import { Control, Controller } from "react-hook-form";
import React, { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

interface InputProps {
  placeholder?: string;
  control: Control<any>;
  type?: string;
  name: string;
  label?: string;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  className?: string;
  error?: { message: string };
  isDashBoard?: boolean;

  [key: string]: any;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  control,
  type,
  name = "",
  label,
  required,
  readonly,
  disabled,
  defaultValue = "",
  isDashBoard = false,
  className,
  error,
  ...props
}) => {
  const [showPassord, setShowPassord] = useState(false);
  const [inputType, setInputType] = useState(type);
  const togglePassword = () => {
    const toggle = !showPassord;
    if (toggle) {
      setInputType("text");
    } else {
      setInputType("password");
    }
    setShowPassord(toggle);
  };
  const _renderPassowrdIcon = () => {
    let content = null;
    if (type === "password") {
      content = (
        <button onClick={togglePassword} className={`input__wrapper__icon`}>
          {showPassord ? (
            <BsFillEyeSlashFill size={16} />
          ) : (
            <BsFillEyeFill size={16} />
          )}
        </button>
      );
    }
    return content;
  };
  return (
    <div>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        rules={{ required: required ? "هذا الحقل مطلوب" : undefined }}
        render={({ field, fieldState }) => (
          <div className={`${className ? className : ""} input__wrapper`}>
            {label && (
              //   label
              <label
                className={`input__wrapper__label ${required ? "input__wrapper__label--required" : ""}
                               `}
                htmlFor={name}
              >
                {label}
              </label>
            )}
            {type === "textarea" ? (
              //   textarea input
              <textarea
                className={`form-control input__wrapper__textarea 
                                    ${fieldState.error ? "input__wrapper__input--error" : ""}`}
                placeholder={placeholder || label}
                id={field.name}
                readOnly={readonly}
                disabled={disabled}
                {...field}
              />
            ) : (
              //   input normal
              <div className="position-relative">
                <input
                  {...field}
                  type={inputType || "text"}
                  placeholder={placeholder || label}
                  readOnly={readonly}
                  disabled={disabled}
                  {...props}
                  id={field.name}
                  className={`input__wrapper__input ${fieldState.error ? "input__wrapper__input--error" : ""}
                                    ${isDashBoard ? "input__wrapper__input--dashboard" : ""}
                                     ${disabled ? "input__wrapper__input--disabled" : ""}`}
                />
                {_renderPassowrdIcon()}
              </div>
            )}

            {/*if error */}
            {fieldState.error && (
              <span className="input__wrapper__error-message">
                {fieldState.error.message}
              </span>
            )}
          </div>
        )}
      />
    </div>
  );
};
