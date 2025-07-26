import { ArrowDown } from "lucide-react"

const overviews = [
  {
    id: 1,
    description: "Full-stack Software Engineer with strong backend and DevOps expertise. I specialize in building scalable applications using Python, FastAPI, Docker, and Kubernetes, with solid experience in microservices architecture."
  },
  {
    id: 2,
    description: "Proficient DevOps Engineer experienced in automating CI/CD pipelines, managing containerized workloads with Docker & Kubernetes, and deploying infrastructure via Terraform and GitHub Actions."
  },
  {
    id: 3,
    description: "I develop modern web applications with React, Tailwind CSS, and Vite, integrating secure JWT authentication, file upload systems, and real-time messaging using RabbitMQ."
  },
  {
    id: 4,
    description: "My recent project, a cloud-native MP3 conversion app, demonstrates my ability to architect and deploy microservices integrated with FastAPI, MongoDB, RabbitMQ, and frontend technologies in a production-ready environment."
  },
  {
    id: 5,
    description: "I bring hands-on experience in cloud computing, Docker Swarm, and Kubernetes orchestration. I focus on optimizing infrastructure for high availability, scalability, and performance."
  },
  {
    id: 6,
    description: "Whether you're launching an MVP or need DevOps support for an existing app, I bring a solution-driven mindset, clear communication, and a strong commitment to delivering clean, maintainable code."
  }
];

export const HeroSection = () => {

    return (
    <section 
    id="hero" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4"
    > 
    <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                <span className="text-primary opacity-0 animate-fade-in-delay-1"> Jairon</span>
                <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Beriguete</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                A Software Engineer and DevOps enthusiast with a strong foundation 
                in backend development, cloud deployment, and modern web technologies. 
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                <a href="#projects" className="cosmic-button">
                   View My Work
                </a>
            </div>
        </div>
    </div>

    <div className="absolute bottom-8 left-1/ transform -translate-xx-1/2 flex flex-col items-center animate-bounce"> 
        < span className="tex-sm text-muted-foreground mb-2">
        Scroll
        </span>
            <ArrowDown className="h-5 w-5 text-primary"/>
    </div>
    </section>)
}