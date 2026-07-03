"use client";

import Link from "next/link";
import { redirect, usePathname } from "next/navigation";

import {
  LayoutDashboard,
  BookOpen,
  Heart,
  User,
  Users,
  ArrowLeft,
  LogOut,
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function Sidebar() {
  const pathname = usePathname();

  const { data: session } = authClient.useSession()
    const user = session?.user

  const customerRoutes = [
    {
      name: "Overview",
      href: "/dashboard/customer",
      icon: LayoutDashboard,
    },
    {
      name: "Buy Book",
      href: "/dashboard/customer/buy-book",
      icon: BookOpen,
    },
    {
      name: "Favourite",
      href: "/dashboard/customer/favourite",
      icon: Heart,
    },
    {
      name: "Profile",
      href: "/dashboard/customer/profile",
      icon: User,
    },
  ];

  const sellerRoutes = [
    {
      name: "Overview",
      href: "/dashboard/seller",
      icon: LayoutDashboard,
    },
    {
      name: "User Manage",
      href: "/dashboard/seller/user-manage",
      icon: Users,
    },
    {
      name: "Profile",
      href: "/dashboard/seller/profile",
      icon: User,
    },
  ];

  const routes =
    user?.role === "seller"
      ? sellerRoutes
      : customerRoutes;

    const a = async() => {
        await authClient.signOut()
        redirect('/')
    }

  return (
    <aside className="flex h-screen w-70 flex-col border-r bg-background">
      {/* User Info */}
      <div className="border-b p-6">
        {
            user?.role === "customer" ?
            <div className="flex flex-col items-center">
          <Avatar className="h-14 w-14">
            <AvatarImage
              src={user?.image}
              referrerPolicy="no-referrer"
            />

            <AvatarFallback>
              {user?.name?.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div className="text-center">
            <h2 className="font-semibold">
              {user?.name}
            </h2>

            <p className="text-sm text-muted-foreground">
              {user?.email}
            </p>

          </div>
        </div>
        : <div className="text-center font-bold text-2xl mt-5">Seller Panel</div>
        }
        
      </div>

      {/* Menu */}
      <div className="flex-1 p-4">
        <nav className="space-y-2">
          {routes.map((route) => {
            const Icon = route.icon;

            const isActive =
              pathname === route.href;

            return (
              <Link
                key={route.href}
                href={route.href}
                className={`flex items-center gap-3 border rounded-xl px-4 py-3 transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                <Icon className="h-5 w-5" />

                {route.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom */}
      <div className="border-t p-4 space-y-3">
        <Button
          variant="outline"
          asChild
          className="w-full justify-start"
        >
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <Button
          variant="destructive"
          className="w-full justify-start"
          onClick={a}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </aside>
  );
}