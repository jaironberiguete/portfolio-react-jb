import { useState } from "react";
import {cn} from '@/lib/utils';

const skills = [
    //DevOps
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

  //Frontend
  { name: "JavaScript", level: 75, category: "Frontend" },
  { name: "React", level: 78, category: "Frontend" },
  { name: "Vite", level: 70, category: "Frontend" },
  { name: "Tailwind CSS", level: 75, category: "Frontend" },
  { name: "OAuth / Google Login", level: 70, category: "Frontend" },
  { name: "Frontend Development", level: 75, category: "Frontend" },

  //Cloud
  { name: "Firebase", level: 65, category: "Cloud" },
  {name: "AWS", level: 65, category: "Cloud"},
  { name: "Cloud Hosting (Vercel, Netlify)", level: 70, category: "Cloud" },
];

const categories = ["All","DevOps", "Backend", "Frontend", "Cloud"]
export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("DevOps");
    const filteredSkills = skills.filter((skill) => activeCategory === "All" || skill.category === activeCategory)
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl ">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) =>(
                    <button onClick={() => setActiveCategory(category)} 
                    key={key} 
                    className={cn(
                        "px-5 py-2 rounded-full transition-colors duration-300 capitalized",
                         activeCategory == category ? "bg-primary text-primary-foreground " : "hover:scale-105 active:scale-95 bg-secondary/70 text-foreground hover:bd-secondary"
                    )}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                 {filteredSkills.map((skill, key)=> (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4 ">
                            <h3 className="font-semibold text-lg"> {skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounde-full origin-left animate-[grow_1.5s_ease-out" style={{width: skill.level + "%"}} />
                        </div>

                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground"> {skill.level}%</span>
                        </div>
                    </div>
                 ))}
            </div>

        </div>
    </section>
}