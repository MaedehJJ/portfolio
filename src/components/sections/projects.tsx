"use client";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-primary/10 text-primary">
              Featured Project
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            AI Travel Telegram Bot
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-10">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground/90">
                Designed and developed a Telegram bot that provides a complete AI-driven experience for booking flights and hotels.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Key Features</h3>
                <ul className="space-y-3 text-muted-foreground/90">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Integrated OpenAI-powered agents to handle user queries, plan trips, and finalize bookings end-to-end</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Enhanced user experience through natural language processing and conversational interface</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Real-time integration with flight and hotel booking systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Intelligent trip planning and recommendations based on user preferences</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-tag">OpenAI</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Django</span>
                  <span className="skill-tag">AI Agents</span>
                  <span className="skill-tag">LangChain</span>
                  <span className="skill-tag">LangGraph</span>
                  <span className="skill-tag">Telegram API</span>
                  <span className="skill-tag">RAG Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 