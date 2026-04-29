"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff } from "lucide-react";

export function SignupForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-sm space-y-6"
    >

      {/* TITLE */}
      <div className="text-center space-y-1">
        <h1 className="text-2xl font-semibold text-white">
          Create account
        </h1>
        <p className="text-sm text-gray-400">
          Fill in the form to get started
        </p>
      </div>

      {/* GOOGLE */}
      <Button
        variant="outline"
        className="w-full bg-white text-black hover:bg-gray-100 cursor-pointer"
      >
        <FcGoogle size={18} />
        Sign up with Google
      </Button>

      {/* DIVIDER */}
      <div className="flex items-center gap-2">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-xs text-gray-400">OR</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* FORM */}
      <div className="space-y-4">

        <Input
          placeholder="Full Name"
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-[#800000]"
        />

        <Input
          type="email"
          placeholder="Email"
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-[#800000]"
        />

        <Input
          type="password"
          placeholder="Password"
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-[#800000]"
        />

        <Input
          type="password"
          placeholder="Confirm Password"
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-[#800000]"
        />
      </div>

      {/* BUTTON */}
      <Button className="w-full bg-[#800000] hover:bg-[#660000] text-white cursor-pointer">
        Create Account
      </Button>

      {/* FOOTER */}
      <p className="text-center text-sm text-gray-400">
        Already have an account?{" "}
        <a href="/login" className="text-white hover:underline cursor-pointer">
          Sign in
        </a>
      </p>

    </motion.div>
  )
}