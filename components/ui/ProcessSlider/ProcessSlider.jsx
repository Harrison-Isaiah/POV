'use client'
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import bgImage from "@/public/images/slider-bg.png"
const circles = [
  { id: 1, title: 'Brief', number: '01' },
  { id: 2, title: 'Assessment', number: '02' },
  { id: 3, title: 'Design', number: '03' },
  { id: 4, title: 'Development', number: '04' },
]

export default function CircleSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [startY, setStartY] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef(null)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % circles.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + circles.length) % circles.length)
  }

  const handleDragStart = (e) => {
    setIsDragging(true)
    setStartY('touches' in e ? e.touches[0].pageY : e.pageY)
  }

  const handleDragMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const currentY = 'touches' in e ? e.touches[0].pageY : e.pageY
    const diff = startY - currentY
    if (diff > 50) {
      handleNext()
      setIsDragging(false)
    } else if (diff < -50) {
      handlePrev()
      setIsDragging(false)
    }
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  const handleClick = (e) => {
    const rect = sliderRef.current?.getBoundingClientRect()
    if (rect) {
      const y = e.clientY - rect.top
      if (y > rect.height / 2) {
        handleNext()
      } else {
        handlePrev()
      }
    }
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      slider.addEventListener('touchstart', handleDragStart)
      slider.addEventListener('touchmove', handleDragMove)
      slider.addEventListener('touchend', handleDragEnd)
    }
    return () => {
      if (slider) {
        slider.removeEventListener('touchstart', handleDragStart)
        slider.removeEventListener('touchmove', handleDragMove)
        slider.removeEventListener('touchend', handleDragEnd)
      }
    }
  }, [])

  return (

    <section>
    <div
        className="w-full h-screen text-white flex flex-col items-center justify-center bg-black"
        
      >
        
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
        <span className="text-[#5eead4]">WHAT</span> YOU CAN EXPECT
      </h1>
      <div
        ref={sliderRef}
        className="relative w-full max-w-f h-[70vh]  overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onClick={handleClick}
      ><Image 
      className="w-full h-full object-cover m-auto absolute inset-0 pointer-events-none"
        src={bgImage}
        alt="Wavy background"
        fill
      //   style={{ objectFit: 'cover' }}
      />
        <div className="absolute inset-0 flex flex-row transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >


          {circles.map((circle) => (
           <div key={circle.id} className="w-full h-full flex-shrink-0 flex items-center justify-center">
           <div className="w-72 h-72 md:w-88 md:h-88 lg:w-[28rem] lg:h-[28rem] rounded-full border-2 border-[#5eead4] flex flex-col items-center justify-center p-6">
             <span className="text-2xl md:text-3xl lg:text-4xl mb-4">{circle.title}</span>
             <span className="text-6xl md:text-6xl lg:text-7xl font-bold text-[#5eead4] mb-2">{circle.number}</span>
             <p className="text-center text-sm md:text-base lg:text-lg max-w-[80%]">
               Lorem Ipsum Dolor Sit Amet Consectetur. Augue Dignissim Volutpat In Sapien Turpis Lorem.
             </p>
           </div>
         </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  )
}
