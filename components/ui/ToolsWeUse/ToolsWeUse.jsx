'use client'

import Image from 'next/image'
import { useState } from 'react'

const tools = [
  {
    name: 'Figma',
    icon: '/images/figma.png', // Using images from the public/images directory
    colorIcon: '/images/figma-colored.png', // Assuming you have a colored version too
    color: 'rgb(242, 78, 30)'
  },
  {
    name: 'Adobe Illustrator',
    icon: '/images/illustrator.png',
    colorIcon: '/images/illustrator-colored.png',
    color: 'rgb(255, 108, 47)'
  },
  {
    name: 'Adobe Photoshop',
    icon: '/images/photoshop.png',
    colorIcon: '/images/photoshop-colored.png',
    color: 'rgb(49, 168, 255)'
  },
  {
    name: 'Sketch',
    icon: '/images/sketch.png',
    colorIcon: '/images/sketch-colored.png',
    color: 'rgb(255, 200, 61)'
  },
]

export default function ToolsWeUse() {
  const [hoveredTool, setHoveredTool] = useState(null)

  return (
    <section>
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-2">
          <span className="text-[#5eead4]">TOOLS</span> WE USE
        </h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem
          Ipsum Has Been The Industry&apos;s Standard Dummy Text Ever Since The 1500s,
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="relative group"
              onMouseEnter={() => setHoveredTool(tool.name)}
              onMouseLeave={() => setHoveredTool(null)}
            >
              <div className="w-24 h-24 rounded-full border-2 border-[#5eead4] flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-110">
                <div
                  className="w-full h-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: hoveredTool === tool.name
                      ? `radial-gradient(circle, ${tool.color} 0%, rgba(0,0,0,0) 70%)`
                      : 'none',
                  }}
                >
                  <Image
                    src={hoveredTool === tool.name ? tool.colorIcon : tool.icon}
                    alt={tool.name}
                    width={50}
                    height={50}
                    className="transition-all duration-300 z-10"
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
