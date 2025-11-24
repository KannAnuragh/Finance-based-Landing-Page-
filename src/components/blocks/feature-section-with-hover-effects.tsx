import { cn } from "@/lib/utils";
import { UserPlus, Wallet, ClipboardList } from "lucide-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Sign Up",
      description:
        "Create your account in just 2 minutes with a simple, hassle-free signup process.",
      icon: <UserPlus className="w-8 h-8" />,
      number: "1",
    },
    {
      title: "Connect Bank/Wallet",
      description:
        "Securely link your bank or wallet in one click for safe transactions.",
      icon: <Wallet className="w-8 h-8" />,
      number: "2",
    },
    {
      title: "Start Tracking & Managing",
      description:
        "Get a clear view of all your finances in one smart, easy-to-use dashboard.",
      icon: <ClipboardList className="w-8 h-8" />,
      number: "3",
    },
  ];
  
  return (
    <section className="py-40 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-32">
          <div className="mb-4 inline-block px-4 py-1.5 text-sm font-medium shadow-[0_9px_30px_rgb(0,0,0,0.12)] text-gray-700 rounded-full">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
            Manage Finances In<br />Just A Few Steps
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} totalFeatures={features.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  number,
  index,
  totalFeatures,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  number: string;
  index: number;
  totalFeatures: number;
}) => {
  return (
    <div
      className={cn(
        "relative p-10 group/feature transition-all duration-300",
        index < totalFeatures - 1 && "md:border-r border-gray-200"
      )}
    >
      {/* Hover gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover/feature:from-blue-50/50 group-hover/feature:to-purple-50/30 transition-all duration-300 pointer-events-none" />
      
      {/* Large number watermark */}
      <div className="absolute top-0 right-3 text-[120px] font-bold text-gray-200 leading-none select-none pointer-events-none opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300">
        {number}
      </div>
      
      <div className="relative flex flex-col h-full">
        {/* Icon */}
        <div className="mb-6 text-blue-600 group-hover/feature:text-blue-700 transition-all duration-300">
          <div className="group-hover/feature:scale-110 transition-transform duration-300 inline-block">
          {icon}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover/feature:text-gray-900 transition-colors">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
