import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Quickit 10 Minutes App",
        description: "Quickit 10 Minutes is a fast and user-friendly quick commerce app built with the MERN stack (MongoDB, Express.js, React, Node.js) and styled with TailwindCSS. It enables users to browse, order, and receive products quickly through an intuitive and responsive interface.",
        Image: "/projects/project1.png",
        tags: ["React", "TailwindCSS", "NodeJs", "ExpressJs", "MongoDB"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "Crowd Funding",
        description: "A blockchain-based crowdfunding platform built with React, TailwindCSS, Node.js, Express.js, and MongoDB. It enables users to create, fund, and manage campaigns securely and transparently, with a responsive and user-friendly interface.",
        Image: "/projects/project2.png",
        tags: ["React", "TailwindCSS", "NodeJs", "ExpressJs", "MongoDB"],
        demoUrl: "#",
        githubUrl: "https://github.com/Mayashankar30/crowdfunding"
    },
    {
        id: 3,
        title: "Portfolio",
        description: "A modern and responsive portfolio website built with React and TailwindCSS, showcasing projects, skills, and professional experience in a clean and interactive interface.",
        Image: "/projects/project3.png",
        tags: ["React", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "https://github.com/Mayashankar30/crowdfunding"
    },
];

export const ProjectsSecton = () => {
    return (
        <section id="projects" className="py-18 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb:4 text-center">Featured <span className="text-primary">Projects</span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-3xl mt-5 mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with attention to details, performance and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover ">

                            <div className="h-48 overflow-hidden">
                                <img src={project.Image} alt={project.title} className="w-full h-full object-center transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2  mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text.xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20} />
                                        </a>
                                        <div>
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <Github size={20} />
                                            </a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        href="http://github.com/mayashankar30"
                        target="_blank"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>

        </section >
    );

};