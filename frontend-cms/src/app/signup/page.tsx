"use client"

import { SignupForm } from "@/components/signup-form"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#2a0f14] via-[#1a0a0d] to-[#0b0b0b] relative overflow-hidden">

      {/* background glow */}
      <div className="absolute w-125 h-125 bg-red-800/20 blur-3xl rounded-full -top-30 -left-30" />
      <div className="absolute w-100 h-100 bg-rose-900/20 blur-3xl rounded-full -bottom-30 -right-30" />

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-8">

          <SignupForm />

        </div>
      </motion.div>

    </div>
  )
}