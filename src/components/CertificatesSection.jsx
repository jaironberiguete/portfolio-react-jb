import { ExternalLink } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "DevOps and Software Engineering Professional",
    issuer: "IBM",
    date: "2025",
    image: "/certificates/CourseraGHYFPU7LDMKL.png",
    url: "https://www.credly.com/badges/7cead98e-bd72-4654-8b72-d303d4e6040c",
  },

  {
    id: 3,
    title: "Monitoring and Observability for Development and DevOps",
    issuer: "IBM",
    date: "2025",
    image: "/certificates/CourseraK4ZHRJK16VHO.png",
    url: "https://www.credly.com/badges/2f250c98-02e3-4005-9bb7-f810dddb8543/",
  },
  {
    id: 4,
    title: "Developing AI Applications with Python and Flask",
    issuer: "IBM",
    date: "2024",
    image: "/certificates/CourseraAR0BO98JLF2C.png",
    url: "https://www.credly.com/badges/be80d7d8-d121-4063-bb38-24cccfde253c",
  },
];

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Certificates</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Credentials that validate my expertise in cloud, DevOps, and software engineering.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group bg-card rounded-xl shadow-sm border border-border hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* IMAGE */}
              <div className="h-52 overflow-hidden flex items-center justify-center bg-gray-100">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {cert.issuer} • {cert.date}
                </p>
                <a
                  href={cert.url}
                  target="_blank"
                  className="inline-flex items-center text-primary font-medium hover:underline mt-2"
                >
                  View Certificate <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
