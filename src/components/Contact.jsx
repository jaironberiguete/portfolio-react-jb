import {
  Instagram,
  LinkedinIcon,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Youtube,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out — I’ll get back to you soon!",
      });

      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I’m always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT — CONTACT INFO */}
          <div className="space-y-8 text-left">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:jaironberiguete@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  jaironberiguete@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+12019549927"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +1 (201) 954-9927
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-muted-foreground">Hackensack, NJ, USA</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>

              <div className="flex space-x-4 justify-start">
                <a
                  href="https://www.linkedin.com/in/jairon-beriguete/"
                  target="_blank"
                  className="p-2 rounded-full hover:text-primary hover:scale-110 transition-transform"
                >
                  <LinkedinIcon />
                </a>

                <a
                  href="https://www.youtube.com/@jairon2592"
                  target="_blank"
                  className="p-2 rounded-full hover:text-primary hover:scale-110 transition-transform"
                >
                  <Youtube />
                </a>

                <a
                  href="https://www.twitch.tv/jaironsketcher"
                  target="_blank"
                  className="p-2 rounded-full hover:text-primary hover:scale-110 transition-transform"
                >
                  <Twitch />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="bg-card p-8 rounded-lg shadow-md gradient-border">
            <h3 className="text-2xl font-semibold mb-6">
              Send a <span className="text-primary">Message</span>
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* NAME */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Jairon Beriguete ..."
                />
              </div>

              {/* EMAIL */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="example@email.com"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello Jairon..."
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
