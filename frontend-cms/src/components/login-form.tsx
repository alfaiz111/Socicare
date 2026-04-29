"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function LoginForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-sm space-y-6"
    >
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <div className="bg-[#800000] p-2 rounded-lg">
          <Image src="/logo.png" alt="logo" width={24} height={24} />
        </div>
        <span className="text-white font-semibold">YourBrand</span>
      </div>

      {/* TITLE */}
      <div>
        <h2 className="text-2xl font-semibold text-white">
          Sign in
        </h2>
        <p className="text-sm text-gray-400">
          Enter your email and password
        </p>
      </div>

      {/* FORM */}
      <div className="space-y-4">
        <Input
          placeholder="Email"
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-[#800000]"
        />
        <Input
          type="password"
          placeholder="Password"
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-[#800000]"
        />
      </div>

      {/* BUTTON */}
      <Button className="w-full bg-[#800000] hover:bg-[#660000] text-white">
        Sign in
      </Button>

      {/* EXTRA */}
      <div className="flex justify-between text-sm text-gray-400">
        <a href="#" className="hover:text-white">Forgot</a>
        <a href="#" className="hover:text-white">Sign up</a>
      </div>
    </motion.div>
  )
}