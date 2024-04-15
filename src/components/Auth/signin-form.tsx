"use client";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState<string>("");
  const { data: session } = useSession();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();
  const { toast } = useToast();

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    const res = await signIn("credentials", {
      username: user.username,
      password: user.password,
      redirect: false,
    });

    if (res?.error) {
      setError(true);
      setMessage(res.error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please Provide Validation.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } else {
      router.push("/signin");
    }
    setIsLoading(false);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <Card className="p-2">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Sign In to your account</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Enter your username"
                required
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
          </CardContent>
          <CardFooter>
            <div className="w-full">
              <Button disabled={isLoading} className="w-full" variant="primary">
                {isLoading && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 animate-spin"
                  >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                )}
                Sign In
              </Button>
              <p className="px-6 py-3 text-center text-sm text-muted-foreground">
                Don't have an Account?{" "}
                <Link
                  href="/signup"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  SignUp
                </Link>{" "}
              </p>
            </div>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
