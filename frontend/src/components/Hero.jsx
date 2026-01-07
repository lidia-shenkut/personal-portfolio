import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Skills from './Skills';

const Hero = () => {
    return (
        <section className="min-h-screen pt-32 flex flex-col items-center justify-center relative overflow-hidden px-4 text-center">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -z-10"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6 inline-block">
                    Open for opportunities
                </span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
                Designer & <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent italic">
                    Full Stack Developer
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 max-w-2xl text-lg mb-10"
            >
                I'm <span className="text-white font-semibold">Lidia Shenkut</span>, a software engineering student at Debrebirhan University.
                Passionate about crafting pixel-perfect web experiences and exploring mobile development.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-4"
            >
                <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
                    View Projects <ChevronRight size={20} />
                </button>
                <button className="px-8 py-3 border border-white/10 hover:bg-white/5 rounded-xl font-semibold transition-colors">
                    Contact Me
                </button>
            </motion.div>

            <div className="mt-24 w-full">
                <Skills />
            </div>
        </section>
    );
};

export default Hero;
