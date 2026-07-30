import Topbar from '@/Components/Topbar'
import Hero from '@/Components/Hero'
import Navbar from '@/Components/Navbar'
import React from 'react'

export default function page() {
  return (
    <div className="bg-gradient-to-r from-[#1F3B2D] via-[#2D6A4F] to-[#355E4B]">
      <Topbar />
      <Navbar />
      <Hero />
    </div>
  )
};
