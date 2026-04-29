"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#2a0f14] via-[#1a0a0d] to-[#0b0b0b] relative overflow-hidden">

      {/* background glow */}
      <div className="absolute w-125 h-125 bg-red-800/20 blur-3xl rounded-full -top-30 -left-30" />
      <div className="absolute w-100 h-100 bg-rose-900/20 blur-3xl rounded-full -bottom-30 -right-30" />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative"
      >
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-8">

          {/* HEADER */}
          <div className="flex flex-col items-center text-center mb-6">
            <Image
              src="/images/SOSMAS.png"
              alt="SOSMAS"
              width={90}
              height={90}
              className="mb-3"
            />

            <h1 className="text-white text-2xl font-semibold">
              Selamat Datang
            </h1>

            <p className="text-gray-400 text-sm mt-1">
              Masuk untuk melanjutkan ke dashboard
            </p>
          </div>

          {/* FORM COMPONENT */}
          <LoginForm />
        </div>
      </motion.div>

    </div>
  )
}