"use client";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface Gallery6Props {
  heading?: string;
  items?: GalleryItem[];
}

const Gallery6 = ({
  heading = "Powerful Features For Simple Finances",
  items = [
    {
      id: "item-1",
      title: "Multi-Currency Wallet",
      summary:
        "Secure multi-currency wallet for fast, effortless payments.",
      url: "#",
      image: "/api/placeholder/400/300",
    },
    {
      id: "item-2",
      title: "Instant Activity Updates",
      summary:
        "See every action—deposits, transfers, or setting changes—in real time.",
      url: "#",
      image: "/api/placeholder/400/300",
    },
    {
      id: "item-3",
      title: "Live Revenue Monitoring",
      summary:
        "Track earnings in real time and gain insights for smarter decisions.",
      url: "#",
      image: "/api/placeholder/400/300",
    },
  ],
}: Gallery6Props) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block px-4 py-1.5 text-sm font-medium shadow-[0_9px_30px_rgb(0,0,0,0.12)] text-gray-700 rounded-full">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
            {heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item) => (
            <div key={item.id} className="group flex flex-col bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 p-8">
              <div className="mb-6 flex items-center justify-center h-64 bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl">
                {/* Card content placeholder - will be replaced with actual card/chart components */}
                <div className="text-gray-400 text-sm">Card Preview</div>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery6 };
