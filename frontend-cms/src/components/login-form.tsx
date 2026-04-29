"use client"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc"

export function LoginForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-sm space-y-6"
    >

      {/* TITLE */}
      <div>
        <h2 className="text-2xl font-semibold text-white">
          Sign in to your account
        </h2>
        <p className="text-sm text-gray-400">
          Enter your details below
        </p>
      </div>

      {/* GOOGLE LOGIN */}
      <Button
        variant="outline"
        className="w-full bg-white text-black hover:bg-gray-100 flex items-center justify-center gap-2"
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

      {/* FOOTER */}
      <div className="flex justify-between text-sm text-gray-400">
        <a href="#" className="hover:text-white">Forgot password</a>
        <a href="#" className="hover:text-white">Sign up</a>
      </div>
    </motion.div>
  )
}