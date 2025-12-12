import { motion } from 'framer-motion';

const Hero = () => {
    const words = "Building secure, automated systems that scale.".split(" ");

    return (
        <section className="min-h-screen flex flex-col justify-center pt-20 pb-32 px-6">
            <div className="max-w-5xl mx-auto w-full">
                {/* Name */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="font-serif text-6xl md:text-8xl font-bold text-ink tracking-tight">
                        Aaron Fosmire
                    </h1>
                </motion.div>

                {/* Title Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-6"
                >
                    <span className="inline-block font-mono text-sm px-3 py-1.5 border border-border rounded-full text-ink-muted bg-surface">
                        Information Security Engineer II
                    </span>
                </motion.div>

                {/* Tagline with word-by-word animation */}
                <div className="mt-12 max-w-2xl">
                    <p className="text-2xl md:text-3xl text-ink-muted font-serif leading-relaxed">
                        {words.map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.8 + index * 0.1,
                                }}
                                className="inline-block mr-2"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </p>
                </div>

                {/* Interactive CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                    className="mt-16 flex gap-4"
                >
                    <motion.a
                        href="#experience"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-sand rounded-lg font-medium transition-shadow hover:shadow-lg"
                    >
                        View Experience
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </motion.a>

                    <motion.a
                        href="mailto:ajfosmire@gmail.com"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-6 py-3 border border-border text-ink rounded-lg font-medium hover:bg-surface transition-colors"
                    >
                        Get in Touch
                    </motion.a>
                </motion.div>

                {/* Location */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 2 }}
                    className="mt-12 flex items-center gap-2 text-sm text-ink-subtle"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Auburndale, FL
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
