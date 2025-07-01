"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image';

export default function Experience() {
  const experiences = [
    {
      company: "Sindibad",
      location: "Dubai",
      role: "AI Product Engineer",
      period: "Apr 2024 - Present",
      description: "Spearheaded the design and development of a Travel AI Assistant from scratch, combining backend architecture, generative AI, and real-time data tools into a seamless user experience.",
      achievements: [
        "LLM Systems Design: Built an AI-powered travel planner using OpenAI GPT, LangChain, and LangGraph to support complex user workflows through multi-step reasoning.",
        "Backend Infrastructure: Developed a robust backend in Python/Django to manage business logic, user data, and integration with third-party APIs (flights, hotels).",
        "Frontend Development: Built the AI Assistant's frontend using Next.js and React, delivering a smooth and interactive user interface.",
        "RAG Implementation: Designed a Retrieval-Augmented Generation (RAG) pipeline, integrating custom datasets and live data sources to boost answer accuracy.",
        "Agent Tooling & Evaluation: Engineered tools for dynamic trip planning, search enhancement, and business data retrieval; implemented an evaluation framework for iterative tuning.",
        "Telegram Bot: Developed a Telegram bot providing an end-to-end experience for booking flights and hotels using AI agents.",
        "Team Leadership: Led the end-to-end product development lifecycle, including roadmap planning, architecture design, and team coordination."
      ]
    },
    {
      company: "Alibaba Travels",
      location: "Tehran",
      role: "Android Developer",
      period: "Apr 2022 - Apr 2024",
      description: "Alibaba is the largest Iranian company to provide customers with online travel services for booking airline tickets and hotel rooms.",
      achievements: [
        "Rapid MVP Development: Collaborated with a small team to launch a hotel booking MVP, supporting rapid go-to-market while maintaining flight booking features.",
        "Growth Initiatives: Drove a 20% conversion boost by redesigning critical pages in the flight booking funnel.",
        "App Reliability: Ensured 99.8% crash-free sessions across 1M+ users; maintained a 4.6 Play Store rating.",
        "Testing & Localization: Built unit test infrastructure; implemented bi-directional Arabic/English UI support."
      ]
    },
    {
      company: "Miare",
      location: "Tehran",
      role: "Android Developer",
      period: "Dec 2020 - Apr 2022",
      description: "Miare is Iran's premier on-demand delivery platform.",
      achievements: [
        "Event-Driven System: Improved communication and reliability of socket-based features through architectural updates.",
        "Support Load Reduction: Designed user-focused support enhancements, cutting customer support requests by 35%.",
        "App Refactor: Re-architected core components of the courier app and improved delivery efficiency by 15%."
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="experience">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-indigo-600 font-medium tracking-wider uppercase text-sm mb-4 block">
            Experience
          </span>
          <h2 className="text-4xl font-bold mb-4">
            Professional Journey
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold">{exp.company}</h3>
                    <p className="text-gray-600">{exp.role}</p>
                    <p className="text-gray-500">{exp.location}</p>
                  </div>
                  <div className="text-gray-500 text-sm">
                    {exp.period}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {exp.description}
                </p>

                <ul className="list-disc pl-5 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600">{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 