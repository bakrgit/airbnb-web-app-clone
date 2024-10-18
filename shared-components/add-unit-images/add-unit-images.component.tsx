"use client";

import { Control, Controller } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { CloseIcon, PlusIcon } from "@/shared-components";
import "./add-unit-images.scss";
import Image from "next/image";

interface AddUnitImagesComponentProps {
  name: string;
  control: Control;
  setValue: (name: string, value: any) => void;
  defaultValue?: File[];
  trigger: (name: string) => void;
}

export const AddUnitImagesComponent = ({
  name,
  control,
  setValue,
  defaultValue = [],
  trigger,
}: AddUnitImagesComponentProps) => {
  const [fileList, setFileList] = useState<File[]>(defaultValue || []);
  const [fileUrls, setFileUrls] = useState<string[]>(
    defaultValue?.map((file) => URL.createObjectURL(file)) || [],
  );

  // Correct ref type
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length < 5) {
      const newFiles: File[] = Array.from(e.target.files);
      setFileList((prev) => [...prev, ...newFiles]);
      setFileUrls((prev) => [
        ...prev,
        ...newFiles.map((file) => URL.createObjectURL(file)),
      ]);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleDeleteImage = (index: number) => () => {
    setFileList(fileList.filter((_, i) => i !== index));
    setFileUrls(fileUrls.filter((_, i) => i !== index));
  };

  useEffect(() => {
    setValue(name, fileList);
    if (fileList.length > 0) {
      trigger(name);
    }
  }, [fileList, setValue, name, trigger]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }): any => (
        <div className="wrapper">
          {/* Images user chooses */}
          {fileUrls.map((fileUrl, index) => (
            <div key={fileUrl} className="images__wrapper">
              <Image
                src={fileUrl}
                alt="User Avatar"
                width={100}
                height={100}
                className="images__img"
              />
              <button
                className="image__delete"
                onClick={handleDeleteImage(index)}
              >
                <CloseIcon />
              </button>
            </div>
          ))}
          {/* Input to choose images */}
          {fileUrls.length < 5 && (
            <label htmlFor={name} className="images__label">
              <PlusIcon className="images__label-icon" />
              <input
                ref={fileInputRef}
                id={name}
                type="file"
                multiple
                hidden
                onChange={handleOnChange}
              />
            </label>
          )}
        </div>
      )}
    />
  );
};
