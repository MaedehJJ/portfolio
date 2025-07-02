"use client"

export default function Skills() {
  const skillCategories = [
    {
      title: "AI & Backend",
      skills: [
        "Python",
        "Django",
        "OpenAI APIs",
        "AI Agents",
        "LangChain",
        "LangGraph",
        "RAG systems"
      ]
    },
    {
      title: "Android Development",
      skills: [
        "Kotlin",
        "MVVM/MVP",
        "Coroutines",
        "Jetpack",
        "Compose",
        "Crashlytics",
        "Amplitude"
      ]
    },
    {
      title: "General Tools",
      skills: [
        "Git",
        "RESTful APIs",
        "Testing Frameworks",
        "Agile Workflows"
      ]
    }
  ];

  return (
    <section className="section bg-secondary/30" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-primary/10 text-primary">
              Skills & Expertise
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Technical Proficiency
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center p-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 