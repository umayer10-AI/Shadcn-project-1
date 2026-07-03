"use client";

import { authClient } from "@/lib/auth-client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EditProfileModal from "@/components/my/customer/EditProfileModal";

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        Loading...
      </div>
    );
  }

  const user = session?.user;

  return (
    <div className="mx-auto max-w-4xl p-8">
      <Card className="overflow-hidden rounded-2xl shadow-lg">
        {/* Cover */}
        <div className="h-30 bg-linear-to-r from-indigo-600 via-violet-500 to-purple-600" />

        <CardHeader className="-mt-16 flex flex-col items-center">
          <Avatar className="h-32 w-32 border-4 border-background shadow-lg">
            <AvatarImage
              src={user?.image}
              referrerPolicy="no-referrer"
            />
            <AvatarFallback className="text-4xl">
              {user?.name?.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <CardTitle className="mt-2 text-3xl">
            {user?.name}
          </CardTitle>

          <p className="text-muted-foreground">
            {user?.email}
          </p>

          <Badge className="mt-3 capitalize">
            {user?.role}
          </Badge>
        </CardHeader>

        <CardContent className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border p-5">
              <p className="text-sm text-muted-foreground">
                Full Name
              </p>

              <h3 className="mt-2 text-lg font-semibold">
                {user?.name}
              </h3>
            </div>

            <div className="rounded-xl border p-5">
              <p className="text-sm text-muted-foreground">
                Email Address
              </p>

              <h3 className="mt-2 text-lg font-semibold">
                {user?.email}
              </h3>
            </div>

            <div className="rounded-xl border p-5">
              <p className="text-sm text-muted-foreground">
                Role
              </p>

              <h3 className="mt-2 text-lg font-semibold capitalize">
                {user?.role}
              </h3>
            </div>

            <div className="rounded-xl border p-5">
              <p className="text-sm text-muted-foreground">
                Status
              </p>

              <h3 className="mt-2 text-lg font-semibold text-green-600">
                Active
              </h3>
            </div>
          </div>

          <div className="flex justify-end">
            <EditProfileModal user={user} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}