"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin")

    if (isLogin === "true") {
      router.replace("/dashboard")
    } else {
      router.replace("/login")
    }
  }, [router])

  return null
}