"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Geometric Background Shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-[#FFC328]/10 rounded-bl-full" />
        <div className="absolute left-1/4 bottom-0 w-1/3 h-1/3 bg-[#FFAEC2]/10 rounded-tr-full" />
        <div className="absolute left-0 top-1/4 w-1/4 h-1/4 bg-[#5B46FE]/10 rounded-br-full" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div>
            <div className="inline-block mb-4">
              <span className="text-[#5B46FE] font-medium tracking-wider uppercase text-lg">
                Hey, I&apos;m Maede Jalali
              </span>
            </div>
          </div>

          <p className="text-xl font-semibold text-black/60 max-w-2xl mx-auto">
            A dynamic AI Product Engineer specializing in creating intelligent systems 
            and AI-powered applications.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild>
              <a href="#experience">
                My Journey
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="#contact">
                Contact Me
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a 
                href="/Maede-AI-Engineer-2025-3.pdf" 
                download
                className="flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 