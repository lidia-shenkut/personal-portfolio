import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 glass-morphism mx-4 mt-4 rounded-2xl"
        >
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent italic">
                LS.
            </Link>
            <div className="flex gap-8 font-medium">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <Link to="/about" className="hover:text-primary transition-colors">About</Link>
                <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
        </motion.nav>
    );
};

export default Navbar;
