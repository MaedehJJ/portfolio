import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Maede Jalali | AI Product Engineer",
  description: "Personal portfolio showcasing creative development and design work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        {/* Navigation Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-black/10">
          <div className="container flex items-center justify-between h-16">
            {/* Logo */}
            <Home href="/" className="text-xl font-bold">
              Home
            </Home>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm font-medium hover:text-[#5B46FE] transition-colors">
                About
              </a>
              <a href="#projects" className="text-sm font-medium hover:text-[#5B46FE] transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-sm font-medium hover:text-[#5B46FE] transition-colors">
                Skills
              </a>
              <a href="#experience" className="text-sm font-medium hover:text-[#5B46FE] transition-colors">
                Experience
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-[#5B46FE] transition-colors">
                Contact
              </a>
            </nav>

            {/* Contact Button */}
            <a href="#contact" className="btn btn-primary px-4 py-2">
              Get in Touch
            </a>
          </div>
        </header>

        {/* Main Content with Header Offset */}
        <div className="pt-16">
          {children}
        </div>

        {/* Footer */}
        <footer className="border-t border-black/10 py-8 mt-16 bg-white">
          <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              © 2024 Portfolio. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a href="https://github.com/MaedehJJ" className="text-sm hover:text-[#5B46FE] transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/maede-jj/" className="text-sm hover:text-[#5B46FE] transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
