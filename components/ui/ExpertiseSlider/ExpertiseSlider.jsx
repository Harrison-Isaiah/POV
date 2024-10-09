"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'


const tabs = [
  { id: 'web', label: 'Web Design', image: '/images/laptop1.png' },
  { id: 'app', label: 'App Design', image: '/images/mobile1.png' },
  { id: 'graphic', label: 'Graphic Design', image: '/images/laptop2.png' },
]

const ExpertiseSlider =()=> {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (

    <section className='z-10 relative'>
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center ">
      <h2 className="text-2xl md:text-4xl font-light tracking-widest mb-2">YOUR VISION</h2>
      <h1 className="text-4xl md:text-6xl font-bold mb-8">OUR EXPERTISE</h1>
      
      <div className="w-full max-w-full">
        <nav className="flex justify-center mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm md:text-base transition-colors duration-300 ${
                activeTab === tab.id ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="relative w-full aspect-video overflow-hidden rounded-lg">
          {tabs.map((tab) => (
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: activeTab === tab.id ? 1 : 0,
                y: activeTab === tab.id ? 0 : 20,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`absolute inset-0 ${activeTab === tab.id ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
              <img
                src={tab.image}
                alt={`${tab.label} showcase`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </section>
  )
}

export default ExpertiseSlider 
