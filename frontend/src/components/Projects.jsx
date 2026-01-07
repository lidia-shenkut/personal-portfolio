import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Project One",
        description: "A comprehensive web application built with React and Node.js. Features real-time updates and a responsive design.",
        tech: ["React", "Express", "MongoDB"],
        link: "#",
        github: "#"
    },
    {
        title: "Project Two",
        description: "A mobile-first design system implemented with Tailwind CSS and Framer Motion for smooth transitions.",
        tech: ["Tailwind", "Framer Motion", "Vite"],
        link: "#",
        github: "#"
    },
    // Add more projects here
];

const Projects = () => {
    return (
        <section className="py-20 px-8 max-w-6xl mx-auto">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-4xl font-bold mb-16 flex items-center gap-4"
            >
                <span className="text-secondary italic">02.</span> Showcase
                <div className="h-px bg-white/10 flex-grow ml-8"></div>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative p-8 glass-morphism rounded-3xl hover:bg-white/10 transition-colors"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                                <ExternalLink size={24} />
                            </div>
                            <div className="flex gap-4">
                                <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href={project.link} className="text-gray-400 hover:text-white transition-colors">
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-gray-400 mb-8 line-clamp-3">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {project.tech.map((t, i) => (
                                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
