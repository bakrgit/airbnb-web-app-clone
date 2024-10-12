import "./image-input.scss";
import { Control, Controller } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import { AddImageIcon } from "@/shared-components";

interface ImageInputProps {
  name: string;
  control: Control<any>;
  defaultValue?: string;
}

export const ImageInputComponent = ({
  name,
  control,
  defaultValue,
}: ImageInputProps) => {
  // Image URL first load from default value or a default avatar
  const [imageUrl, setImageUrl] = useState<string>(
    defaultValue ? defaultValue : "/assets/images/avatar.png",
  );

  const handlePreviewImage = (file: File) => {
    console.log("file", file);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      if (fileReader.result) {
        setImageUrl(fileReader.result as string);
      }
    };
  };
  // method to handle delete image
  // const handleDeleteImage = () => {
  //   setImageUrl("/assets/images/avatar.png");
  // };
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }): any => (
        <div className="image__wrapper">
          <div className="image__wrapper-img">
            {/* Circle image */}
            <label htmlFor={name} className="image__wrapper-label">
              <Image
                src={imageUrl}
                alt="User Avatar"
                fill
                className="image__img"
              />
            </label>
            {/* SVG add icon */}
            <span
              className="image__wrapper-label-icon"
              // onClick={handleDeleteImage}
            >
              <AddImageIcon width={60} height={60} className="mt-1" />
            </span>
            {/* Input */}
            <input
              type="file"
              className="image__wrapper-input"
              id={name}
              onChange={(e: any) => {
                const file = e?.target?.files[0];
                if (file) {
                  handlePreviewImage(file);
                  field.onChange(file);
                }
              }}
            />
          </div>
        </div>
      )}
    />
  );
};
