"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import CustomInput from "./custom-input";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

interface AuthFormProps {
  type: "sign-in" | "sign-up";
}

export type useFormReturnProps = z.infer<typeof formSchema>;

const AuthForm = ({ type }: AuthFormProps) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<useFormReturnProps>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: useFormReturnProps) {
    console.log(values);
  }

  return (
    <div className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* PlaidLink */}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <CustomInput
                form={form}
                name="email"
                label="Email"
                placeholder="Enter your email"
              />

              <CustomInput
                form={form}
                name="password"
                label="Password"
                placeholder="Enter your password"
              />
              <Button type="submit" className="form-btn">
                Submit
              </Button>
            </form>
          </Form>
        </>
      )}
    </div>
  );
};

export default AuthForm;
