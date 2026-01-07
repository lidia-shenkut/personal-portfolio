
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ loading: false, error: null, success: false });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, error: null, success: false });

        try {
            await axios.post('http://localhost:5000/api/contact', formData);
            setStatus({ loading: false, error: null, success: true });
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            setStatus({ loading: false, error: 'Failed to send message. Please try again.', success: false });
        }
    };

    return (
        <section className="py-20 px-8 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                <p className="text-gray-400">Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            </motion.div>

            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="space-y-6"
            >
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Name</label>
                        <input
                            required
                            type="text"
                            className="w-full p-4 glass-morphism rounded-xl border border-white/10 focus:border-primary outline-none transition-colors"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Email</label>
                        <input
                            required
                            type="email"
                            className="w-full p-4 glass-morphism rounded-xl border border-white/10 focus:border-primary outline-none transition-colors"
                            placeholder="hello@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Message</label>
                    <textarea
                        required
                        rows="5"
                        className="w-full p-4 glass-morphism rounded-xl border border-white/10 focus:border-primary outline-none transition-colors resize-none"
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                </div>

                {status.success && <p className="text-green-500 text-center">Message sent successfully!</p>}
                {status.error && <p className="text-red-500 text-center">{status.error}</p>}

                <button
                    disabled={status.loading}
                    type="submit"
                    className="w-full py-4 bg-white text-dark font-bold rounded-xl hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                    {status.loading ? (
                        <>Sending... <Loader2 className="animate-spin" size={20} /></>
                    ) : (
                        <>Send Message <Send size={20} /></>
                    )}
                </button>
            </motion.form>
        </section>
    );
};

export default Contact;
