"use client";

import { categories, types } from "@/app/data/consts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormFieldTransaction, TransactionSchema } from "@/app/data/validation";
import { useState } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { PurgeTransactionListCache } from "@/lib/actions";
import FormError from "./form-error";

const TransactionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFieldTransaction>({
    mode: "onTouched",
    resolver: zodResolver(TransactionSchema),
  });

  const router = useRouter();

  const [isSaving, setIsSaving] = useState(false);

  const onSubmit = async (data: any) => {
    setIsSaving(true);
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transactions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          created_at: `${data.created_at}T00:00:00`,
        }),
      });
      await PurgeTransactionListCache();
      router.push("/dashboard");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="flex flex-col gap-2 h-28">
          <label htmlFor="type" className="ml-1">
            Type
          </label>
          <select {...register("type")} className="dark-input rounded-md">
            {types.map((type, index) => (
              <option key={index} className="dark-input">
                {type}
              </option>
            ))}
          </select>
          <FormError error={errors.type} />
        </div>

        <div className="flex flex-col gap-2 h-28">
          <label htmlFor="category" className="ml-1">
            Category
          </label>
          <select {...register("category")} className="dark-input rounded-md">
            {categories.map((category, index) => (
              <option key={index} className="dark-input">
                {category}
              </option>
            ))}
          </select>
          <FormError error={errors.category} />
        </div>

        <div className="flex flex-col gap-2 h-28">
          <label htmlFor="created_at" className="ml-1">
            Date
          </label>
          <input
            {...register("created_at")}
            className="dark-input"
            placeholder="MM-DD-YYYY"
          />
          <FormError error={errors.created_at} />
        </div>

        <div className="flex flex-col gap-2 h-28">
          <label htmlFor="amount" className="ml-1">
            Amount
          </label>
          <input {...register("amount")} className="dark-input" />
          <FormError error={errors.amount} />
        </div>

        <div className="col-span-2 flex flex-col gap-2 h-28">
          <label htmlFor="description" className="ml-1">
            Description
          </label>
          <input {...register("description")} className="dark-input" />
          <FormError error={errors.description} />
        </div>

        <div className="flex justify-end col-span-2">
          <Button type="submit" disabled={isSaving} size="lg">
            Save
          </Button>
        </div>
      </div>
    </form>
  );
};

export default TransactionForm;
