"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex min-h-screen items-center justify-center bg-linear-to-br from-[#3b0d0d] via-[#5c1a1a] to-[#1f0a0a] p-4",
        className
      )}
      {...props}
    >
      <Card className="w-full max-w-md border-none shadow-2xl rounded-2xl backdrop-blur-xl bg-white/95">
        <CardHeader className="text-center space-y-3">
          {/* LOGO */}
          <div className="flex justify-center">
            <div className="bg-[#800000] p-3 rounded-2xl shadow-md">
              <Image
                src="/logo.png" // ganti dengan logo kamu
                alt="logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </div>

          <CardTitle className="text-2xl font-bold text-[#4b0f0f]">
            Welcome Back 👋
          </CardTitle>
          <CardDescription className="text-gray-500">
            Login to continue your journey
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <FieldGroup>
              {/* SOCIAL LOGIN */}
              <Field>
                <Button
                  variant="outline"
                  type="button"
                  className="w-full gap-2 hover:bg-gray-50"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <path
                      d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09z"
                      fill="currentColor"
                    />
                  </svg>
                  Login with Apple
                </Button>

                <Button
                  variant="outline"
                  type="button"
                  className="w-full gap-2 hover:bg-gray-50"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  Login with Google
                </Button>
              </Field>

              <FieldSeparator>Or continue with</FieldSeparator>

              {/* EMAIL */}
              <Field>
                <FieldLabel>Email</FieldLabel>
                <Input
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="focus-visible:ring-[#800000]"
                />
              </Field>

              {/* PASSWORD */}
              <Field>
                <div className="flex items-center">
                  <FieldLabel>Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto text-sm text-[#800000] hover:underline"
                  >
                    Forgot?
                  </a>
                </div>
                <Input
                  type="password"
                  required
                  className="focus-visible:ring-[#800000]"
                />
              </Field>

              {/* BUTTON */}
              <Field>
                <Button
                  type="submit"
                  className="w-full bg-[#800000] hover:bg-[#5c0000] text-white"
                >
                  Login
                </Button>

                <FieldDescription className="text-center mt-2">
                  Don’t have an account?{" "}
                  <a className="text-[#800000] hover:underline" href="#">
                    Sign up
                  </a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}