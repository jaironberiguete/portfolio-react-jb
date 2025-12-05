import { ExternalLink } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2025",
    image: "/certificates/aws-solutions-architect.png",
    url: "https://www.yourcertlink.com/aws-solutions-architect",
  },

  {
    id: 3,
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2025",
    image: "/certificates/cka.png",
    url: "https://www.yourcertlink.com/cka",
  },
  {
    id: 4,
    title: "Python for Data Science",
    issuer: "IBM",
    date: "2023",
    image: "/certificates/python-ds.png",
    url: "https://www.yourcertlink.com/python-ds",
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
