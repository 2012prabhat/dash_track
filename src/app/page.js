'use client'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SiGoogleanalytics } from "react-icons/si";
import { MdCreditCard, MdOutlineTrackChanges } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function Home() {
const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-background p-8">

      {/* Hero Section */}
      <div className="w-full max-w-6xl text-center mt-12">
        <h1 className="text-6xl font-bold text-white animate-fadeIn">
          Dash Track - Financial Dashboard
        </h1>
        <p className="text-2xl mt-4 text-muted-foreground animate-fadeIn animation-delay-200">
          All your finances, one powerful view.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 animate-fadeIn animation-delay-500">

        {/* Card 1 */}
        <Card className="w-64 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <CardHeader>
            <CardTitle className="flex justify-center text-mainCol">
              <SiGoogleanalytics size={42} />
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-lg font-medium">
            Advanced Analytics
          </CardContent>
          <CardFooter>
            <p className="text-center text-sm text-muted-foreground">
              Real-time insights and detailed reports
            </p>
          </CardFooter>
        </Card>

        {/* Card 2 */}
        <Card className="w-64 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <CardHeader>
            <CardTitle className="flex justify-center text-mainCol">
              <MdCreditCard size={42} />
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-lg font-medium">
            Card Management
          </CardContent>
          <CardFooter>
            <p className="text-center text-sm text-muted-foreground">
              Secure and intuitive card controls
            </p>
          </CardFooter>
        </Card>

        {/* Card 3 */}
        <Card className="w-64 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <CardHeader>
            <CardTitle className="flex justify-center text-mainCol">
              <MdOutlineTrackChanges size={42} />
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-lg font-medium">
            Transaction Tracking
          </CardContent>
          <CardFooter>
            <p className="text-center text-sm text-muted-foreground">
              Monitor every transaction in real-time
            </p>
          </CardFooter>
        </Card>
      </div>

      {/* Button */}
      <Button onClick={() => router.push('dashboard')} className="mt-8 px-6 py-5 text-lg flex gap-2 items-center group bg-mainCol hover:bg-mainCol/90 transition text-white" >
        Enter Dashboard
        <FaArrowRight className="group-hover:translate-x-1 transition" />
      </Button>
    </main>
  );
}
