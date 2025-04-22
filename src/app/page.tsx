'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {useRouter} from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-orange-100 via-green-100 to-cyan-100">
      <Card className="w-full max-w-md rounded-xl shadow-2xl bg-white/80 backdrop-blur-sm">
        <CardHeader className="flex flex-col space-y-1.5">
          <CardTitle className="text-3xl font-bold text-gray-900 text-center">
            Welcome to Eva-Milaf Voyager
          </CardTitle>
          <CardDescription className="text-md text-gray-700 text-center">
            Your personalized travel companion
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-lg text-gray-800 text-center mb-4">
            Ready to explore the world?
          </p>
          <Button
            onClick={handleGetStartedClick}
            className="w-full rounded-full shadow-md transition-colors duration-300"
          >
            Get Started
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
