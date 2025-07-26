import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4  relative"> 
         <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
               About<span className="text-primary"> Me</span> 
            </h2>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6"> 
                 <h3 className="text-2xl font-semibold" > 
                    Full-Stack Developer & DevOps Engineer
                    </h3>

                 <p className="text-muted-foreground  ">  
                    I bring a unique mix of hands-on IT experience and programming 
                    expertise to help clients build, automate, and launch their 
                    applications — fast and clean.
                
                </p >

                <p className="text-muted-foreground ">
                    As a DevOps Engineer, I specialize in automating deployments, 
                managing microservices, and setting up CI/CD pipelines using Docker,
                 GitHub Actions, and Kubernetes. 

                </p>

                <div className=" flex flex-col sm:flex-row gap-5 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">
                        Get In Touch
                    </a>

                    <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 transition-colors duration-300">
                       Download CV
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">  
                <div className="gradient-border p-6 card-hover"> 
                  <div className="flex items-start gap-4">
                     <div className="p-3 rounded-full bg-primary/10">
                        <Code className="h-6 w-6 text-primary"/>
                     </div>
                     <div className="text-left ">
                          <h4 className="font-semibold text-lg"  > Web Development</h4>
                          <p className="text-muted-foreground"> Creating responsive websites and applications with modern frameworks.</p>
                     </div>
                  </div>
                </div>
                <div className="gradient-border p-6 card-hover"> 
                   <div className="flex items-start gap-4">
                     <div className="p-3 rounded-full bg-primary/10">
                        <User className="h-6 w-6 text-primary"/>
                     </div>
                     <div className="text-left ">
                          <h4 className="font-semibold text-lg"  > Web Development</h4>
                          <p className="text-muted-foreground"> Creating responsive websites and applications with modern frameworks.</p>
                     </div>
                  </div>
                </div>
                <div className="gradient-border p-6 card-hover"> 
                   <div className="flex items-start gap-4">
                     <div className="p-3 rounded-full bg-primary/10">
                        <Briefcase className="h-6 w-6 text-primary"/>
                     </div>
                     <div className="text-left ">
                          <h4 className="font-semibold text-lg"  > Web Development</h4>
                          <p className="text-muted-foreground"> Creating responsive websites and applications with modern frameworks.</p>
                     </div>
                  </div>
                </div>
            </div>
         </div>
      </div>
    </section>
}