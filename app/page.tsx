import Image from "next/image";
import { Play } from "lucide-react";

export default function page() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="The squad"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Kevin Stingray
          </h1>
        </div>
      </section>
      {/* Featured Music */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            Latest Release
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="/albumcover.png"
                alt="Album cover"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-white">Swindle</h3>
              <p className="text-white/80 mb-6 text-lg italic border-l-2 border-white/20 pl-4">
                &quot;If you&apos;re long boarding down some recently repaved
                suburban streets in the middle of the night, that would be a good time to
                put this one on.&quot; <br />— Abraham Lincoln
              </p>
              <div className="space-y-3">
                <button className="w-full sm:w-auto bg-white text-black px-8 py-3 rounded-full hover:bg-white/90 transition-colors flex items-center justify-center gap-2">
                  <Play size={20} fill="currentColor" />
                  Listen Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
