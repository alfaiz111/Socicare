"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc"
import { Eye, EyeOff } from "lucide-react"

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-sm space-y-8"
    >

      {/* GOOGLE LOGIN */}
      <Button
        variant="outline"
        className="w-full bg-white text-black hover:bg-gray-100 flex items-center justify-center gap-2 cursor-pointer"
      >
        <FcGoogle size={18} />
        Continue with Google
      </Button>

      {/* DIVIDER */}
      <div className="flex items-center gap-2">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-xs text-gray-400">OR</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* INPUT */}
      <div className="space-y-4">

        {/* EMAIL */}
        <Input
          placeholder="Email"
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-[#800000]"
        />

        {/* PASSWORD WITH EYE */}
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="bg-white/5 border-white/10 text-white pr-10 placeholder:text-gray-500 focus-visible:ring-[#800000]"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

      </div>

      {/* BUTTON */}
      <Button className="w-full bg-[#800000] hover:bg-[#660000] text-white cursor-pointer">
        Sign in
      </Button>

      {/* FOOTER */}
      <div className="flex justify-between text-sm text-gray-400">
        <a href="#" className="hover:text-white cursor-pointer transition">
          Forgot password
        </a>
        <a href="#" className="hover:text-white cursor-pointer transition">
          Sign up
        </a>
      </div>

    </motion.div>
  )
}