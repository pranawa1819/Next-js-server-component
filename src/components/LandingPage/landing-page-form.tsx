"use client";

import { FormValues } from "@/lib/createPost";
import { createPost } from "@/lib/getPost";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LandingPageForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useForm<FormValues>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const onSubmit = async (formData: FormValues) => {
    try {
      setError(false);
      setSuccess(false);

      const result = await createPost(formData);

      console.log("Posted:", result);

      setSuccess(true);
      reset();
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      <form onSubmit={handleSubmit(onSubmit)} className=" p-6 rounded-lg w-100">
        <h1 className="text-2xl font-bold mb-5 text-black">
          SWR Mutation Form
        </h1>

        <input
          type="text"
          placeholder="Title"
          {...register("title", {
            required: "Title is required",
          })}
          className="border p-2 w-full mb-2 text-black"
        />

        <p className="text-red-500 text-sm mb-3">{errors.title?.message}</p>

        <input
          type="text"
          placeholder="Body"
          {...register("body", {
            required: "Body is required",
          })}
          className="border p-2 w-full mb-2 text-black"
        />

        <p className="text-red-500 text-sm mb-3">{errors.body?.message}</p>

        <input
          type="number"
          placeholder="User ID"
          {...register("userId", {
            valueAsNumber: true,
            required: "User ID is required",
          })}
          className="border p-2 w-full mb-2 text-black"
        />

        <p className="text-red-500 text-sm mb-3">{errors.userId?.message}</p>

        <button
          type="submit"
          className="bg-pink-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>

        {error && <p className="text-red-500 mt-3">Failed to submit</p>}

        {success && (
          <p className="text-green-600 mt-3">Post created successfully</p>
        )}
      </form>
    </div>
  );
}
