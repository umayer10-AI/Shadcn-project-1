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
import { authClient } from "@/lib/auth-client";

export default function UserDropdown() {

    
    const { data: session } = authClient.useSession()
    const user = session?.user

    const a = async() => {
        await authClient.signOut()
    }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="cursor-pointer outline-none flex items-center gap-2 border-2 border-black px-2 py-1 rounded-2xl">
          <Avatar className="h-7 w-7 border border-black">
            <AvatarImage src={user?.image} alt="User" />
            <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h2>{user?.name.split(' ')[0]}</h2>
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