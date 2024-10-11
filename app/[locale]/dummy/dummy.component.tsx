"use client";
import React from "react";
import {
  CheckBox,
  EyeIcon,
  ImageUploadIcon,
  Input,
  RadioButton,
  ImageInput,
} from "@/shared-components";
import { useForm } from "react-hook-form";

export default function DummyComponent() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const onsubmit = (data: any) => {
    console.log("data", data);
  };

  return (
    <div className="overflow-x-hidden px-5">
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="d-flex row">
          {/*inputs*/}
          <div className="col-lg-3 col-md-6 col-12">
            <Input
              name="inputEmail"
              error={errors?.inputEmail as { message: string }}
              control={control}
              label="ادخل الايميل"
              required={true}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <Input
              name="inputName"
              control={control}
              label={"ادخل الاسم"}
              required={true}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <Input
              name="inputPass"
              control={control}
              label="ادخل الباسورد"
              type="password"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <Input
              name="inputPhone"
              control={control}
              label="ادخل الهاتف
                "
              type={"number"}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <Input
              name="input10"
              control={control}
              label="ادخل القيمه
                "
              disabled={true}
              readonly={true}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <Input
              name="input5"
              control={control}
              label="ادخل ملاحظات
                "
              type={"textarea"}
            />
          </div>
        </div>

        <div className="mt-5 d-flex gap-3">
          <CheckBox label={"تجربة"} name={"testCheckBox"} control={control} />
          <CheckBox label={"حجز"} name={"testCheckBox2"} control={control} />
          <RadioButton register={register} label={"تجربه"} name={"radio1"} />
          <RadioButton register={register} label={"تجربه2"} name={"radio2"} />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
