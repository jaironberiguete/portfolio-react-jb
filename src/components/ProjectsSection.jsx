import { ArrowRight, ExternalLinkIcon, Github, GithubIcon } from "lucide-react";

const projects = [
    {
    id: 1,
    title: "MP3 Converter ",
    description: "A full-stack microservices-based application that converts video to MP3 using Python, FastAPI, RabbitMQ, MongoDB, and Docker. ",
    image: "/projects/mp3-converter.jpeg", 
    tags: ["React", "RabbitMQ", "Docker"],
    demoUrl: "https://ms-system-coverter-jb.vercel.app/",
    githubUrl: "https://github.com/jaironberiguete/ms-system-coverter-jb",
  },
  {
    id: 2,
    title: "Photography Portfolio",
    description: "A responsive portfolio website for a photography business built with React, Vite, and Tailwind CSS. Features galleries, contact forms, and smooth scrolling.",
    image: "/projects/photography-site.png",
    tags: ["React", "Tailwind", "Vite"],
    demoUrl: "https://fotografiajb.vercel.app/",
    githubUrl: "https://github.com/jaironberiguete/galeria-jb",
  },
  {
    id: 3,
    title: "CI/CD Pipeline with GitHub Actions",
    description: "Automated deployment pipeline using Docker and GitHub Actions for a full-stack application. ",
    image: "/projects/devops-pipeline.png",
    tags: ["CI/CD", "GitHub Actions", "Docker"],
    demoUrl: "",
    githubUrl: "https://github.com/jaironberiguete/ms-system-coverter-jb",
  },
  {
    id: 4,
    title: "Emotion Detection AI",
    description: "A Python-based desktop application that detects human emotions using computer vision and machine learning. Built for academic and portfolio purposes.",
    image: "/projects/emotion-detector.png",
    tags: ["Python", "OpenCV", "ML"],
    demoUrl: "",
    githubUrl: "https://github.com/jaironberiguete/emotion-detector-ai",
  },
  {
    id: 5,
    title: "Cyclistic Bike-Share Data Analysis",
    description: "Data analysis project using R and Tableau to identify ridership patterns and business insights for Cyclistic Bike-Share Company. Focused on data cleaning, EDA, and visualization.",
    image: "/projects/cyclistic-analysis.png",
    tags: ["R", "Tableau", "Data Analysis"],
    demoUrl: "",
    githubUrl: "https://github.com/jaironberiguete/cyclistic-bike-share-analysis",
  },
]


export const ProjectsSection = () => {
    
    return <section id="projects" className="py-24 px-4 relative"> 
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md: text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects</span></h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are my most recent projects please feel free to check into them.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key)=> (
                <div 
                key={key} 
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                    <div className="h-48 overflow-hidden ">
                        <img 
                        src={project.image} 
                        alt={project.title}  
                        className="w-full h-full object-cover transition-tranform duration-500 group-hover:scale-110"/>
                    </div>

                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4"></div>
                        {project.tags.map((tag)=> (
                            <span className="px-2 py-1 text-xs font-medium border mr-1 rounded-full bg- text-secondary-foreground"> {tag} </span>
                        ))}

                    <div >
                      <h3 className="text-xl font-semibold mb-1 mt-2"> {project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 ">{project.description}</p>
                      <div className="flex justify-between items-center">
                         <div className="flex space-x-3">
                            <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300" > <ExternalLinkIcon size={20}/>   </a>
                            <a  href={project.githubUrl} target="_blank" > <Github size={20}/>   </a>
                         </div>
                        </div>
                      </div>
                    </div>                    
                </div>
        
            ))}
        </div>
        <div className="text-center mt-12">
            <a 
            className="cosmic-button w-fit flex items-center mx-auto gap-2 "
            target="blank" href="https://github.com/jaironberiguete"> Check My GitHub <ArrowRight size={16}/> </a>

        </div>
      </div>
    </section>;
}