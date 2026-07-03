"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  User,
  LogOut,
  UserIcon,
  CreditCardIcon,
  SettingsIcon,
  LogOutIcon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export default function UserDropdown() {

    const a = async() => {
        console.log("Log Out")
    }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="cursor-pointer outline-none">
          <Avatar className="h-8 w-8 border border-black">
            <AvatarImage src="https://images.unsplash.com/photo-1782715434760-fdee8ae699a1" alt="User" />
            <AvatarFallback>UA</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
  <DropdownMenuItem asChild>
    <Link href="/dashboard" className="flex items-center gap-2">
      <LayoutDashboard className="h-4 w-4" />
      <span>Dashboard</span>
    </Link>
  </DropdownMenuItem>

  <DropdownMenuItem asChild>
    <Link href="/profile" className="flex items-center gap-2">
      <UserIcon className="h-4 w-4" />
      <span>Profile</span>
    </Link>
  </DropdownMenuItem>

  <DropdownMenuSeparator />

  <DropdownMenuItem
    variant="destructive"
    onClick={a}
  >
    <LogOutIcon className="h-4 w-4" />
    <span>Log out</span>
  </DropdownMenuItem>
</DropdownMenuContent>
    </DropdownMenu>
  );
}