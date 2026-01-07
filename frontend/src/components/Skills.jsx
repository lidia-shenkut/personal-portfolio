import { motion } from 'framer-motion';

const skills = [
    "React", "Node.js", "MongoDB", "Tailwind CSS", "JavaScript",
    "HTML", "CSS", "Mobile App Dev", "UI/UX", "Express", "Vite"
];

const Skills = () => {
    return (
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {skills.map((skill, index) => (
                    <li key={index} className="text-3xl font-bold text-white/20 hover:text-primary transition-colors cursor-default whitespace-nowrap">
                        {skill}
                    </li>
                ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                {skills.map((skill, index) => (
                    <li key={index + skills.length} className="text-3xl font-bold text-white/20 hover:text-primary transition-colors cursor-default whitespace-nowrap">
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
