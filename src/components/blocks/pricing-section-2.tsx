"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { Check } from "lucide-react";
import { useRef } from "react";

export default function PricingSection() {
  const pricingRef = useRef<HTMLElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const starterFeatures = [
    "Up to 100 transactions/month",
    "Basic security protection",
    "Email support",
  ];

  const proFeatures = [
    "Up to 500 transactions/month",
    "Enhanced security",
    "Detailed transaction reports",
    "Priority email & chat support",
  ];

  const enterpriseFeatures = [
    "Unlimited transactions",
    "Premium security & fraud protection",
    "Advanced transaction analytics",
    "Priority email & chat support",
  ];

  return (
    <section
      className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white w-full relative"
      ref={pricingRef}
    >
      <div className="max-w-7xl mx-auto">
        <article className="text-center mb-16">
          <div className="mb-4 inline-block px-4 py-1.5 text-sm font-medium shadow-[0_9px_30px_rgb(0,0,0,0.12)] text-gray-700 rounded-full">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.1}
              staggerFrom="first"
              reverse={true}
              containerClassName="justify-center"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 40,
                delay: 0,
              }}
            >
              Pick A Plan To Manage Your Money Smarter
            </VerticalCutReveal>
          </h2>
        </article>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Starter Plan */}
          <TimelineContent
            as="div"
            animationNum={1}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card className="bg-white border-gray-200 h-full flex flex-col rounded-3xl shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="text-left pb-4">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Starter Plan
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Perfect for personal use.
                </p>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-bold text-gray-900">$0</span>
                  <span className="text-gray-600 pb-1">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col pb-8 ">
                <ul className="space-y-4 mb-8 flex-grow">
                  {starterFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors shadow-lg">
                  Get Starter Plan
                </button>
              </CardContent>
            </Card>
          </TimelineContent>

          {/* Pro Plan */}
          <TimelineContent
            as="div"
            animationNum={2}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-0 h-full flex flex-col rounded-3xl shadow-xl relative overflow-hidden hover:shadow-2xl transition-shadow scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent pointer-events-none" />
              <CardHeader className="text-left pb-4 relative z-10">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Pro Plan
                </h3>
                <p className="text-sm text-blue-100 mb-6">
                  For growing users and advanced needs.
                </p>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-bold text-white">$19</span>
                  <span className="text-blue-100 pb-1">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col pb-8 relative z-10">
                <ul className="space-y-4 mb-8 flex-grow">
                  {proFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 rounded-full bg-white text-blue-700 font-medium hover:bg-gray-50 transition-colors shadow-lg">
                  Get Pro Plan
                </button>
              </CardContent>
            </Card>
          </TimelineContent>

          {/* Enterprise Plan */}
          <TimelineContent
            as="div"
            animationNum={3}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card className="bg-white border-gray-200 h-full flex flex-col rounded-3xl shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="text-left pb-4">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Enterprise Plan
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  For high-volume business operations.
                </p>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-bold text-gray-900">$29</span>
                  <span className="text-gray-600 pb-1">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col pb-8">
                <ul className="space-y-4 mb-8 flex-grow">
                  {enterpriseFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors shadow-lg">
                  Get Enterprise Plan
                </button>
              </CardContent>
            </Card>
          </TimelineContent>
        </div>
      </div>
    </section>
  );
}

export { PricingSection };
