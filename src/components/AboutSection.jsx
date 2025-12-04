import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* background subtle glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none hero-grid-animation"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE — INTRO */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-semibold">
              Full-Stack Developer & DevOps Engineer
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I bring a unique combination of IT operations and full-stack
              development. I help teams build applications, automate workflows,
              deploy microservices, and launch scalable platforms with clean
              architecture.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My focus is building production-ready systems using Docker,
              Kubernetes, CI/CD pipelines, FastAPI, React, microservices, and
              cloud-native patterns for performance and reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/files/Jairon-Beriguete-CV.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT SIDE — FEATURE CARDS */}
          <div className="grid grid-cols-1 gap-6">
            {/* CARD 1 */}
            <div className="gradient-border card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building secure, scalable, and responsive applications using
                    React, Tailwind, FastAPI, JWT, microservices, and CI/CD.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="gradient-border card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">DevOps & Automation</h4>
                  <p className="text-muted-foreground">
                    Automating deployments, infrastructure, and monitoring using
                    Docker, Kubernetes, GitHub Actions, and Terraform.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="gradient-border card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Systems Architecture
                  </h4>
                  <p className="text-muted-foreground">
                    Designing reliable microservice architecture, queues,
                    observability, and performance-focused cloud environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
