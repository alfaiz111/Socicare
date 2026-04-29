"use client"

import { LoginForm } from "@/components/login-form"
import Image from "next/image"
import { motion } from "framer-motion"

export default function LoginPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[#0a0a0a]">

      {/* LEFT - BRANDING */}
      <div className="hidden lg:flex relative items-center justify-center overflow-hidden bg-black">
        
        {/* Glow */}
        <div className="absolute w-150 h-150 bg-[#800000]/30 blur-[150px] rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center space-y-6"
        >
          {/* LOGO BESAR */}
          <div className="flex justify-center">
            <div className="bg-[#800000] p-6 rounded-3xl shadow-2xl">
              <Image src="/logo.png" alt="logo" width={80} height={80} />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="text-gray-400 max-w-sm">
            Manage your system with a modern dashboard experience.
          </p>
        </motion.div>
      </div>

      {/* RIGHT - FORM */}
      <div className="flex items-center justify-center p-6">
        <LoginForm />
      </div>
    </div>
  )
}