"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "@/lib/auth-client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const profileSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  image: z.string().url("Enter a valid image URL"),
});

export default function ProfilePage() {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(profileSchema),
    values: {
      name: user?.name || "",
      image: user?.image || "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);

    // এখানে Better Auth update API call করবে
    // await authClient.updateUser(data)

    alert("Profile Updated Successfully");
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            My Profile
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col items-center gap-4 mb-8">
            <Avatar className="h-28 w-28">
              <AvatarImage
                src={user?.image}
                referrerPolicy="no-referrer"
              />
              <AvatarFallback>
                {user?.name?.charAt(0)}
              </AvatarFallback>
            </Avatar>

            <h2 className="text-xl font-bold">
              {user?.name}
            </h2>

            <p className="text-muted-foreground">
              {user?.email}
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <div>
              <label className="text-sm font-medium">
                Full Name
              </label>

              <Input
                className="mt-2"
                {...register("name")}
              />

              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">
                Email
              </label>

              <Input
                className="mt-2"
                value={user?.email || ""}
                readOnly
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Profile Image URL
              </label>

              <Input
                className="mt-2"
                {...register("image")}
              />

              {errors.image && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.image.message}
                </p>
              )}
            </div>

            <Button
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Saving..."
                : "Save Changes"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}