import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const overviews = [
  {
    id: 1,
    description: "Full-stack Engineer skilled in backend and DevOps, building scalable apps with Python, FastAPI, and Docker."
  },
  {
    id: 2,
    description: "DevOps expert automating CI/CD pipelines and managing Kubernetes-based deployments with Terraform and GitHub Actions."
  },
  {
    id: 3,
    description: "Frontend developer creating secure web apps with React, Tailwind CSS, JWT auth, and real-time features using RabbitMQ."
  },
  {
    id: 4,
    description: "Built a cloud-native MP3 converter using FastAPI, MongoDB, and microservices with a production-ready frontend."
  },
  {
    id: 5,
    description: "Experienced in Docker Swarm, Kubernetes, and infrastructure optimization for availability and performance."
  },
  {
    id: 6,
    description: "Focused on clean code, problem-solving, and DevOps support for MVPs and production systems alike."
  }
];


export const HeroSection = () => {
 const [index, setIndex] = useState(0);
 const [fade, setFade] = useState("fade-in");
 const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme == "dark"){
        setIsDark(true)
        

    }else {
        setIsDark(false)
    }
    const interval = setInterval(() => {
      setFade("fade-out");
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % overviews.length);
        setFade("fade-in");
      },2000); // match animation duration
    }, 6000);

    return () => clearInterval(interval);
  }, []);


    return (
    <section 
    id="hero" 
    className="relative min-h-screen flex flex-col items-center justify-center"
    > 
    <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
            <div className="h-50 w-50 mx-auto overflow-hidden opacity-0 animate-fade-in ">
               {isDark ? (<img src="images/logo-dark.png" className="py-7 "/>) : (<img src="images/logo.svg" className="py-7 "/>)}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                <span className="text-primary opacity-0 animate-fade-in-delay-1"> Jairon</span>
                <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Beriguete</span>
            </h1>
            <p className={cn("text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto min-h-[7rem]",
                    fade === "fade-in" ? "opacity-0 animate-fade-in-delay-2" : "animate-fade-out-delay-2")}>
                 {overviews[index].description} </p>

            <div className=" opacity-0 animate-fade-in-delay-4">
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