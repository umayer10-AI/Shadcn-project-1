"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  image: z.string().url("Please enter a valid image URL"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      image: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (v) => {
    console.log(v);

    const { data, error } = await authClient.signUp.email({
        name: v.name,
        email: v.email,
        password: v.password,
        image: v.image,
        callbackURL: "/",
    });

    if(data){
        alert("Login Successfully")
        redirect("/")
    }
    if(error){
        alert(error.message)
    }
    
  };

  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
        provider: "google",
    });
  };

  return (
    <div className="flex  items-center justify-center bg-muted/40 px-4 py-10">
      <Card className="w-full max-w-md shadow-xl">
        <CardContent className="p-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary">
              <BookOpen className="h-7 w-7 text-primary-foreground" />
            </div>

            <h1 className="text-3xl font-bold">
              Create Account
            </h1>

            <p className="mt-2 text-sm text-muted-foreground">
              Join BookSelf and start your reading journey.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3"
          >
            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Full Name
              </label>

              <Input
                placeholder="Enter your full name"
                {...register("name")}
              />

              {errors.name && (
                <p className="text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Image */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Profile Image URL
              </label>

              <Input
                placeholder="https://example.com/profile.jpg"
                {...register("image")}
              />

              {errors.image && (
                <p className="text-sm text-red-500">
                  {errors.image.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Email Address
              </label>

              <Input
                type="email"
                placeholder="example@gmail.com"
                {...register("email")}
              />

              {errors.email && (
                <p className="text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Password
              </label>

              <Input
                type="password"
                placeholder="********"
                {...register("password")}
              />

              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Register Button */}
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Creating Account..."
                : "Create Account"}
            </Button>
          </form>

          {/* Divider */}
          <div className="my-3 flex items-center">
            <div className="h-px flex-1 bg-border"></div>

            <span className="mx-4 text-sm text-muted-foreground">
              OR
            </span>

            <div className="h-px flex-1 bg-border"></div>
          </div>

          {/* Google Login */}
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={handleGoogleLogin}
          >
            <FcGoogle className="mr-2 text-xl" />
            Continue with Google
          </Button>

          {/* Footer */}
          <p className="mt-3 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-primary hover:underline"
            >
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}