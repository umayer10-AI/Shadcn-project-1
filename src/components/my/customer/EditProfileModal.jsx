"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { authClient } from "@/lib/auth-client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  image: z.string().url("Enter a valid image URL"),
});

export default function EditProfileModal({ user }) {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: user?.name || "",
      image: user?.image || "",
    },
  });

  const previewImage = watch("image");

  const onSubmit = async (values) => {
    try {
      const { error } = await authClient.updateUser({
        name: values.name,
        image: values.image,
      });

      if (error) {
        alert(error.message);
        return;
      }

      alert("Profile Updated Successfully");
      setOpen(false);

      window.location.reload();
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Pencil className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          {/* Avatar Preview */}
          <div className="flex justify-center">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={previewImage}
                referrerPolicy="no-referrer"
              />

              <AvatarFallback>
                {watch("name")?.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Full Name
            </label>

            <Input {...register("name")} />

            {errors.name && (
              <p className="text-sm text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Image */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Image URL
            </label>

            <Input
              placeholder="https://example.com/avatar.png"
              {...register("image")}
            />

            {errors.image && (
              <p className="text-sm text-red-500">
                {errors.image.message}
              </p>
            )}
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Saving..."
                : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}