"use client";

import { FormValues, postData } from "@/lib/createPost";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";

export default function Form() {
  const form = useForm<FormValues>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const { trigger, isMutating, data, error } = useSWRMutation(
    "https://jsonplaceholder.typicode.com/posts",
    postData,
  ); 

  const onSubmit = async (formData: FormValues) => {
    const result = await trigger(formData);
    console.log("Posted:", result);
    reset();
  };

  return (
    <div className="flex min-h-screen bg-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" p-6 rounded-lg w-100"
      >
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
          disabled={isMutating}
          className="bg-pink-500 text-white px-4 py-2 rounded"
        >
          {isMutating ? "Submitting..." : "Submit"}
        </button>

        {error && <p className="text-red-500 mt-3">Failed to submit</p>}

        {data && (
          <p className="text-green-600 mt-3">Post created successfully</p>
        )}
      </form>
    </div>
  );
}
