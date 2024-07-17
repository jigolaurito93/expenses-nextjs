"use client";

import { categories, types } from "@/app/data/consts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionSchema } from "@/app/data/validation";

const TransactionForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver ,
  });

  const onSubmit = (data: any) => console.log(data);
  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="ml-1">
            Type
          </label>
          <select {...register("type")} className="dark-input rounded-md">
            {types.map((type) => {
              return <option className="dark-input">{type}</option>;
            })}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="" className="ml-1">
            Category
          </label>
          <select {...register("category")} className="dark-input rounded-md">
            {categories.map((category) => {
              return <option className=" dark-input">{category}</option>;
            })}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="" className="ml-1">
            Date
          </label>
          <input {...register("date")} className="dark-input" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="" className="ml-1">
            Amount
          </label>
          <input {...register("amount")} type="number" className="dark-input" />
        </div>

        <div className="col-span-2 flex flex-col gap-2">
          <label htmlFor="" className="ml-1">
            Description
          </label>
          <input {...register("description")} className="dark-input" />
        </div>
        <div className="flex justify-end col-span-2">
          <button type="submit" className="button-white">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default TransactionForm;
