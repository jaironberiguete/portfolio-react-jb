import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // DevOps
  { name: "Docker", level: 82, category: "DevOps" },
  { name: "Kubernetes", level: 60, category: "DevOps" },
  { name: "GitHub Actions (CI/CD)", level: 80, category: "DevOps" },
  { name: "Jenkins", level: 80, category: "DevOps" },
  { name: "Linux / Shell Scripting", level: 78, category: "DevOps" },
  { name: "Git / GitHub", level: 85, category: "DevOps" },
  { name: "DevOps (General)", level: 80, category: "DevOps" },
  { name: "CI/CD Pipelines", level: 80, category: "DevOps" },
  { name: "Terraform", level: 70, category: "DevOps" },
  { name: "Ansible", level: 70, category: "DevOps" },

  // Backend
  { name: "Python", level: 85, category: "Backend" },
  { name: "FastAPI", level: 80, category: "Backend" },
  { name: "Node.js", level: 65, category: "Backend" },
  { name: "MongoDB", level: 72, category: "Backend" },
  { name: "PostgreSQL", level: 68, category: "Backend" },
  { name: "JWT Authentication", level: 77, category: "Backend" },
  { name: "Microservices Architecture", level: 75, category: "Backend" },
  { name: "RabbitMQ", level: 60, category: "Backend" },
  { name: "RESTful API Development", level: 83, category: "Backend" },
  { name: "Backend Development", level: 85, category: "Backend" },
  { name: "System Design Basics", level: 65, category: "Backend" },

  // Frontend
  { name: "JavaScript", level: 75, category: "Frontend" },
  { name: "React", level: 78, category: "Frontend" },
  { name: "Vite", level: 70, category: "Frontend" },
  { name: "Tailwind CSS", level: 75, category: "Frontend" },
  { name: "OAuth / Google Login", level: 70, category: "Frontend" },
  { name: "Frontend Development", level: 75, category: "Frontend" },

  // Cloud
  { name: "Firebase", level: 65, category: "Cloud" },
  { name: "AWS", level: 65, category: "Cloud" },
  { name: "Cloud Hosting (Vercel, Netlify)", level: 70, category: "Cloud" },
];

const categories = ["All", "DevOps", "Backend", "Frontend", "Cloud"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("DevOps");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border backdrop-blur-sm",
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card/50 hover:bg-card/80 text-muted-foreground hover:text-foreground border-border hover:scale-105 active:scale-95"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* SKILLS GRID (smaller cards) */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {filteredSkills.map((skill, index) => (
    <div
      key={index}
      className="bg-card border border-border rounded-xl shadow-sm p-6 transition-all hover:shadow-xl hover:-translate-y-1"
    >
      <h3 className="font-semibold text-lg mb-3">{skill.name}</h3>

      <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
        <div
          className="bg-primary h-2 rounded-full origin-left transition-all duration-700"
          style={{ width: `${skill.level}%` }}
        />
      </div>

      <p className="text-right text-sm text-muted-foreground mt-2">
        {skill.level}%
      </p>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};
