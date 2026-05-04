"use client";

import { useState } from "react";
import {
  Sun,
  Moon,
  ChevronDown,
  User,
  LogOut,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

export default function TopBar() {
  const [dark, setDark] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white shadow-sm">
      <div className="flex h-16 items-center justify-between px-6">

        {/* LEFT */}
        <div>
          <h1 className="text-lg font-semibold text-gray-800">
            Dashboard
          </h1>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2">

          {/* DARK MODE */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              const newMode = !dark;
              setDark(newMode);
              document.documentElement.classList.toggle("dark", newMode);
            }}
            className="text-gray-700 hover:bg-gray-100"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

          {/* PROFILE */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 px-2"
              >
                <Avatar className="h-8 w-8 border">
                  <AvatarImage src="" />
                </Avatar>

                <span className="hidden sm:block text-sm font-medium">
                  Admin
                </span>

                <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem className="text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}