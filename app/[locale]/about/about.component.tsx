"use client";

import {useEffect, useState} from "react";
import {Controller, useForm} from "react-hook-form";
import Select from "react-select"

export const AboutComponent = () => {
  const  {control , register ,handleSubmit ,watch ,formState:{errors}  }=  useForm({
      defaultValues:{
          firstName:"ahmed",
          lastName:"ali",
          email:"ahmed@gmail.com",
          passowrd:"123456"
      }
  })
    const onSubmit = (data) => {
       console.log("data",data)
    }
    // console.log("render")

  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={"d-flex flex-column"}>
                <input {...register("firstName", {required: "الاسم مطلوب اول مره" , maxLength:{
                    value: 10,
                    message: "الاسم يجب ان يكون اقل من 10 احرف"
                    },minLength:{
                    value: 3,
                    message: "الاسم يجب ان يكون اكبر من 3 احرف"
                    }})} type="text" placeholder="Name"/>
                {
                    errors.firstName && <span className="text-danger">{
                        errors.firstName.message
                    }</span>
                }
            </div>
            <input {...register("lastName")} type="text" placeholder="Last Name"/>
            <div className={"d-flex flex-column"}>
                <input {...register("email", {required: true})} type="text" placeholder="Email"/>
                {
                    errors.email && <span className="text-danger">البريد الالكتروني مطلوب</span>
                }
            </div>
            <input {...register("passowrd")} type="password" placeholder="Password"/>
            <Controller control={control} name="testSelectInput"   render={({field})=> <input placeholder={"test input"} {...field} />} />

            <Controller control={control} name="iceCreamType" render={({field}) =>(
                <Select  {...field}
                        options={[
                            { value: "1", label: "Chocolate" },
                            { value: "2", label: "Strawberry" },
                            { value: "3", label: "Vanilla" },
                        ]}
                />

            ) }/>


            <button>Submit</button>

        </form>
    </div>
);
};
