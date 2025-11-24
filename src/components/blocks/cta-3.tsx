import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="py-48 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-8xl">
        <div className="relative mx-auto flex w-full max-w-8xl flex-col items-center justify-center gap-y-8 rounded-3xl bg-gradient-to-br from-blue-50 via-blue-100 to-blue-600 px-8 py-16 md:py-20 overflow-hidden">
          {/* Animated gradient orbs */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            <div
              className="absolute -top-1/4 -left-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-blue-400/50 to-white blur-3xl animate-aurora"
            ></div>
            <div
              className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-blue-500/30 to-grey-100 blur-3xl animate-aurora-reverse"
            ></div>
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-r from-grey-300/20 to-blue-600/20 blur-3xl animate-aurora-reverse"
            ></div>
            <div
              className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-blue-300/35 to-indigo-400/25 blur-3xl animate-aurora"
            ></div>
            <div
              className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-cyan-400/30 to-blue-500/20 blur-3xl animate-aurora-reverse"
            ></div>
          </div>
          
          <div className="relative space-y-4 max-w-5xl">
            <h2 className="text-center font-bold text-4xl md:text-3xl lg:text-4xl text-gray-900 leading-loose">
              Experience Effortless Banking And Smarter Financial Decisions.
            </h2>
          </div>

          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-2xl">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full sm:flex-1 px-6 py-4 rounded-full bg-white/90 backdrop-blur-sm border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 shadow-sm"
            />
            <Button className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium shadow-lg h-auto transistion-transform duration-300 ">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
