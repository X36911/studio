'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

export default function Home() {
  const handleGetStartedClick = () => {
    alert('Get Started button clicked!');
    // You can add your desired logic here, such as navigating to another page
    // or opening a booking form.
  };

  return (
    <div className="container mx-auto py-10">
      <Card className="rounded-xl shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Welcome to Eva-Milaf Voyager</CardTitle>
          <CardDescription className="text-gray-500">
            Your personalized travel companion for booking flights, hotels, and activities.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <p className="text-lg">
            Explore our booking interface to find the best deals on flights, hotels, and activities.
          </p>
          <Button onClick={handleGetStartedClick} className="rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">Get Started</Button>
        </CardContent>
      </Card>
    </div>
  );
}
