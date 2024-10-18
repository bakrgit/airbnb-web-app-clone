"use client";
import { Control, Controller } from "react-hook-form";
import { MinusIcon, Plus } from "@/shared-components";
import "./counter-input.scss";

interface CounterInputProps {
  name: string;
  control: Control<any>;
  label?: string;
  setValue: (name: string, value: any) => void;
}

export const CounterInputComponent = ({
  name,
  control,
  label,
  setValue,
}: CounterInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={0}
      render={({ field: { value, onChange } }): any => (
        <>
          {label ? (
            <div className="d-flex justify-content-between align-items-center">
              <span className="label">{label}</span>
              <div className="buttons">
                <button
                  type={"button"}
                  className={`button ${value <= 0 ? "button--disabled" : ""}`}
                  onClick={() => {
                    if (value <= 0) return;
                    const newValue = value - 1;
                    onChange(newValue);
                    setValue(name, newValue);
                  }}
                >
                  <MinusIcon />
                </button>
                <p>{value}</p>
                <button
                  type={"button"}
                  className={`button }`}
                  onClick={() => {
                    const newValue = value + 1;
                    onChange(newValue);
                    setValue(name, newValue);
                  }}
                >
                  <Plus />
                </button>
              </div>
            </div>
          ) : (
            <div className="buttons">
              <button
                type={"button"}
                className={`button ${value <= 0 ? "button--disabled" : ""}`}
                onClick={() => {
                  if (value <= 0) return;
                  const newValue = value - 1;
                  onChange(newValue);
                  setValue(name, newValue);
                }}
              >
                <MinusIcon />
              </button>
              <p>{value}</p>
              <button
                type={"button"}
                className={`button }`}
                onClick={() => {
                  const newValue = value + 1;
                  onChange(newValue);
                  setValue(name, newValue);
                }}
              >
                <Plus />
              </button>
            </div>
          )}
        </>
      )}
    />
  );
};
