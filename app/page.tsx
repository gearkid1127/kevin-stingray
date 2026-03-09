import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div>
       {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="The squad"
            className="w-full h-full object-cover"
            layout="fill"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Kevin Stingray</h1>
          
          
        </div>
      </section>
    </div>
  )
}
