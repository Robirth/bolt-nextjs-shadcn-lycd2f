import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Calendar, Users, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-[url('https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070')] bg-cover bg-center">
        <div className="absolute inset-0 bg-pink-950/70">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-6">Breast Cancer Awareness Month</h1>
              <p className="text-xl mb-8">Join us this October in raising awareness and supporting those affected by breast cancer. Together, we can make a difference.</p>
              <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 text-lg">
                Get Involved <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-20 relative z-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-6">
              <Heart className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">1 in 8 Women</h3>
              <p className="text-gray-600">Will be diagnosed with breast cancer in their lifetime</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-xl">
            <CardContent className="p-6">
              <Calendar className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Every 2 Minutes</h3>
              <p className="text-gray-600">A woman is diagnosed with breast cancer in the US</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-xl">
            <CardContent className="p-6">
              <Users className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">3.8 Million</h3>
              <p className="text-gray-600">Breast cancer survivors in the United States</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Early Detection Saves Lives</h2>
            <div className="space-y-4 text-gray-600">
              <p>Regular screening and early detection are key to fighting breast cancer successfully. Know the signs and symptoms:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>New lump in the breast or underarm</li>
                <li>Thickening or swelling of part of the breast</li>
                <li>Irritation or dimpling of breast skin</li>
                <li>Redness or flaky skin in the nipple area</li>
                <li>Pulling in of the nipple</li>
                <li>Nipple discharge other than breast milk</li>
              </ul>
              <Button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white">
                Learn More About Symptoms
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1470" 
              alt="Medical professionals discussing" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-pink-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Take Action Today</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether through donation, volunteering, or spreading awareness, your support makes a difference in the fight against breast cancer.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 text-lg">
              Donate Now
            </Button>
            <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50 px-8 py-6 text-lg">
              Volunteer
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}