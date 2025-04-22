import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to EvaMilaf Voyager</CardTitle>
          <CardDescription>
            Your personalized travel companion for booking flights, hotels, and activities.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <p>
            Explore our booking interface to find the best deals on flights, hotels, and activities.
          </p>
          <Button>Get Started</Button>
        </CardContent>
      </Card>
    </div>
  );
}
