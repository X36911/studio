'use client';

import {Button} from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-orange-100 via-green-100 to-cyan-100">
      <Card className="w-full max-w-md rounded-xl shadow-2xl bg-white/80 backdrop-blur-sm">
        <CardHeader className="flex flex-col space-y-1.5">
          <CardTitle className="text-3xl font-bold text-gray-900 text-center">
            Login
          </CardTitle>
          <CardDescription className="text-md text-gray-700 text-center">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="m@example.com" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
          </div>
          <Button className="w-full mt-4 rounded-full shadow-md transition-colors duration-300">
            Sign In
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
