import Image from "next/image";
import AOSInit from "./components/AOSInit";

export default function Page() {
  return (
    <div>
      <AOSInit />
      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="The squad"
            fill
            priority
            className="object-cover object-top"
            data-aos="fade-in"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black" />
        </div>

        <div className="relative z-10 px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">
            Kevin Stingray
          </h1>
        </div>
      </section>

      {/* Featured Music */}
      <section className="overflow-x-hidden bg-linear-to-b from-black to-zinc-900 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2
            className="mb-12 text-center text-4xl font-bold text-white md:text-5xl"
            data-aos="fade-up"
          >
            Latest Release
          </h2>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="aspect-square overflow-hidden rounded-lg">
              <Image
                src="/albumcover.png"
                alt="Album cover"
                width={600}
                height={600}
                className="h-full w-full object-cover"
                data-aos="fade-right"
              />
            </div>

            <div>
              <h3 className="mb-4 text-3xl font-bold text-white" data-aos="fade-up">Swindle</h3>

              <p className="mb-6 border-l-2 border-white/20 pl-4 text-lg italic text-white/80" data-aos="fade-up">
                &quot;If you&apos;re long boarding down some recently repaved
                suburban streets in the middle of the night, that would be a
                good time to put this one on.&quot;
                <br />— Abraham Lincoln
              </p>

              <div className="mb-6">
                <audio controls className="w-full" data-aos="fade-left">
                  <source src="/Swindle-final.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-60 bg-linear-to-b from-zinc-900 to-black" />
    </div>
  );
}
