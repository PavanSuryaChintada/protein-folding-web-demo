import { Github, Linkedin } from "lucide-react";

export const Footer = () => {
  const teamMembers = [
    { name: "Member 1 Name", github: "#", linkedin: "#" },
    { name: "Member 2 Name", github: "#", linkedin: "#" },
    { name: "Member 3 Name", github: "#", linkedin: "#" },
    { name: "Member 4 Name", github: "#", linkedin: "#" },
    { name: "Member 5 Name", github: "#", linkedin: "#" },
  ];

  return (
    <footer className="relative border-t border-primary/20 bg-card/50 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Team Name */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
            Team QAnion
          </h2>
        </div>

        {/* Team Members */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-2 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 transition-all hover-lift"
            >
              <span className="text-foreground font-medium">{member.name}</span>
              <div className="flex gap-2">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`${member.name} GitHub`}
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2025 Team QAnion. Quantum Protein Folding Research.</p>
        </div>
      </div>
    </footer>
  );
};
