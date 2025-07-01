"use client"

export default function About() {
  return (
    <section className="section bg-white" id="about">
      <div className="container">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-[#5B46FE]/10 text-[#5B46FE]">
              About Me
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
            AI Product Engineer
          </h2>

          <div className="space-y-4 text-black/60">
            <p>
              A dynamic software engineer with 5+ years of experience spanning AI product development and mobile engineering, currently focused on building intelligent systems (AI Agents) that bridge user intent with real-world data.
            </p>
            <p>
              I bring a proven track record of leading development from zero to production, especially in AI agentic systems, while also maintaining strong Android engineering expertise. I thrive in fast-paced environments where innovation, technical depth, and collaboration converge.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8">
            <div className="card p-4 text-center">
              <div className="text-sm font-medium">Location</div>
              <div className="text-sm text-black/60">Tehran</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-sm font-medium">Phone</div>
              <div className="text-sm text-black/60">+98 933 426 55 71</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-sm font-medium">Email</div>
              <div className="text-sm text-black/60">majj2000.mail@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 