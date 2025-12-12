import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <span className="font-mono text-sm text-clay">04</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mt-2">
                        Let's Connect
                    </h2>
                    <p className="text-ink-muted mt-4 max-w-xl mx-auto">
                        Interested in discussing security automation, AI integration, or new opportunities? I'd love to hear from you.
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-16 grid md:grid-cols-3 gap-6"
                >
                    {/* Email */}
                    <motion.a
                        href="mailto:ajfosmire@gmail.com"
                        whileHover={{ y: -4 }}
                        className="group p-6 rounded-xl bg-surface border border-border transition-all hover:shadow-lg"
                    >
                        <div className="w-12 h-12 rounded-lg bg-sand flex items-center justify-center mb-4 group-hover:bg-clay group-hover:text-white transition-colors">
                            <Mail className="w-5 h-5" />
                        </div>
                        <h3 className="font-semibold text-ink">Email</h3>
                        <p className="font-mono text-sm text-ink-muted mt-1">
                            ajfosmire@gmail.com
                        </p>
                    </motion.a>

                    {/* LinkedIn */}
                    <motion.a
                        href="https://www.linkedin.com/in/aaron-fosmire/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -4 }}
                        className="group p-6 rounded-xl bg-surface border border-border transition-all hover:shadow-lg"
                    >
                        <div className="w-12 h-12 rounded-lg bg-sand flex items-center justify-center mb-4 group-hover:bg-clay group-hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-ink">LinkedIn</h3>
                        <p className="font-mono text-sm text-ink-muted mt-1">
                            aaron-fosmire
                        </p>
                    </motion.a>

                    {/* Location */}
                    <motion.div
                        whileHover={{ y: -4 }}
                        className="group p-6 rounded-xl bg-surface border border-border transition-all hover:shadow-lg"
                    >
                        <div className="w-12 h-12 rounded-lg bg-sand flex items-center justify-center mb-4 group-hover:bg-clay group-hover:text-white transition-colors">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <h3 className="font-semibold text-ink">Location</h3>
                        <p className="font-mono text-sm text-ink-muted mt-1">
                            Auburndale, FL
                        </p>
                    </motion.div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <motion.a
                        href="mailto:ajfosmire@gmail.com?subject=Opportunity%20Discussion"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-ink text-sand rounded-xl font-medium text-lg transition-shadow hover:shadow-xl"
                    >
                        Start a Conversation
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
