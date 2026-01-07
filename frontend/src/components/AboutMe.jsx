import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <section className="min-h-screen pt-40 px-8 max-w-6xl mx-auto mb-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
                    <span className="text-primary italic">01.</span> About Me
                    <div className="h-px bg-white/10 flex-grow ml-8"></div>
                </h2>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <p>
                            Hello! My name is <span className="text-white">Lidia Shenkut</span>, and I am a software engineering student at
                            <span className="text-primary italic"> Debrebirhan University</span>. My journey into web development started
                            over <span className="text-white">1.5 years ago</span>, and since then, I've been fascinated by the
                            process of turning complex problems into elegant, user-centric solutions.
                        </p>
                        <p>
                            I specialize in <span className="text-white">React.js</span> and <span className="text-white">Node.js</span>,
                            building scalable and responsive applications. Currently, I am expanding my horizons by diving into
                            <span className="text-secondary"> Mobile App Development</span> to bring my design ideas to smaller screens.
                        </p>
                        <p>
                            When I'm not coding, I'm usually brainstorming new project ideas or staying up to date with the
                            latest trends in the tech ecosystem. I believe in continuous learning and pushing the boundaries
                            of what's possible with code.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="p-4 glass-morphism rounded-xl">
                                <h4 className="text-white font-bold mb-1">Education</h4>
                                <p className="text-sm">Software Engineering, DBU</p>
                            </div>
                            <div className="p-4 glass-morphism rounded-xl">
                                <h4 className="text-white font-bold mb-1">Experience</h4>
                                <p className="text-sm">1.5+ Years Web Dev</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative group flex justify-center items-center">
                        <div className="absolute inset-0 bg-primary/20 rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 w-full h-full max-w-[400px]"></div>
                        <div className="relative w-full max-w-[400px] aspect-[4/5] glass-morphism rounded-2xl flex items-center justify-center overflow-hidden border-2 border-white/10">
                            <img
                                src="/profile1.jpg"
                                alt="Lidia Shenkut"
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutMe;