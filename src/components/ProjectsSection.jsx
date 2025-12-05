import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MP3 Converter",
    description:
      "A full-stack microservices-based application that converts video to MP3 using Python, FastAPI, RabbitMQ, MongoDB, and Docker.",
    image: "/projects/system-design.png",
    tags: ["Flask", "RabbitMQ", "Docker", "MongoDB", "K8s", "CI/CD", "Git", "Terraform"],
    demoUrl: "https://ms-system-coverter-jb.vercel.app/",
    githubUrl: "https://github.com/jaironberiguete/ms-system-coverter-jb",
  },
    {
    id: 2,
    title: "E-commerce Website",
    description:
      "Full stack e-commerce clothing store interface using React and Django Framework for the backend.",
    image: "/projects/22mystyle.png",
    tags: ["React", "Python", "Django", "MySQL"],
    demoUrl: "https://web-22my-style-jb.vercel.app/",
    githubUrl:
      "https://github.com/jaironberiguete/web-22my-style-jb",
  },

  {
    id: 3,
    title: "Real-time Chat using FastAPI + WebSockets",
    description:
      "Real-time communication using FastAPI WebSockets + Docker + scalable service architecture.",
    image: "/projects/realtime-chat.png",
    tags: ["CI/CD", "GitHub Actions", "Docker"],
    demoUrl: "",
    githubUrl: "https://github.com/jaironberiguete/ms-system-coverter-jb",
  },
  // {
  //   id: 4,
  //   title: "Real-Time Analytics Dashboard",
  //   description:
  //     "Real-time dashboard streaming data via AWS Kinesis and WebSockets, with a React frontend on S3 + CloudFront. Dockerized backend and IaC showcase cloud architecture and full-stack skills.",
  //   image: "/projects/emotion-detector.png",
  //   tags: ["Python", "OpenCV", "ML"],
  //   demoUrl: "",
  //   githubUrl: "https://github.com/jaironberiguete/emotion-detector-ai",
  // },

  //   {
  //   id: 5,
  //   title: "Serverless URL Shortener",
  //   description:
  //     "Serverless URL Shortener using AWS Lambda, API Gateway, DynamoDB, and S3. Users can shorten URLs with a fully serverless, scalable backend..",
  //   image: "/projects/serverless-app.png",
  //   tags: ["Python", "OpenCV", "ML"],
  //   demoUrl: "",
  //   githubUrl: "https://github.com/jaironberiguete/emotion-detector-ai",
  // },

  //   {
  //   id: 6,
  //   title: "Personal Portfolio with CI/CD on AWS",
  //   description:
  //     "Automated portfolio deployment using React, S3, CloudFront, and GitHub Actions. Fully CI/CD-driven hosting showcasing DevOps and AWS cloud skills..",
  //   image: "/projects/photography-site.png",
  //   tags: ["React", "Tailwind", "Vite"],
  //   demoUrl: "https://nels-gallery-website-jb.vercel.app/",
  //   githubUrl:
  //     "https://github.com/jaironberiguete/nels-gallery-website-jb",
  // },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are my most recent projects — feel free to explore them!
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl shadow-sm border border-border hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* IMAGE */}
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium rounded-full border bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* LINKS */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/70 hover:text-primary transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit mx-auto flex items-center gap-2"
            href="https://github.com/jaironberiguete"
            target="_blank"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
