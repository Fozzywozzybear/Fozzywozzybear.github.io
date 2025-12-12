import { useState } from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const [showLion, setShowLion] = useState(false);

    return (
        <section className="py-24 px-6 bg-surface">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="font-mono text-sm text-clay">03</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mt-2">
                        Education
                    </h2>
                </motion.div>

                {/* Education Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-12"
                >
                    <div className="p-8 rounded-xl bg-white border border-border shadow-sm relative overflow-hidden">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <h3 className="font-serif text-2xl font-semibold text-ink">
                                    The Pennsylvania State University
                                </h3>
                                <p className="text-ink-muted mt-2">
                                    Bachelor of Cybersecurity Analytics and Operations
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-mono text-sm px-3 py-1.5 bg-sand text-ink-muted rounded-lg border border-border">
                                    May 2023
                                </span>
                            </div>
                        </div>

                        {/* Focus Areas */}
                        <div className="mt-6 pt-6 border-t border-border">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3 text-sm text-ink-subtle">
                                    <svg className="w-5 h-5 text-clay" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                    <span>Focus: Security Operations & Data Analytics</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-ink-subtle">
                                    <svg className="w-5 h-5 text-clay" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                    <span>Focus: Application Development</span>
                                </div>
                            </div>
                        </div>

                        {/* Easter Egg - Nittany Lion */}
                        <motion.div
                            className="absolute bottom-4 right-4 cursor-pointer"
                            onClick={() => setShowLion(!showLion)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="w-10 h-10 rounded-full bg-[#041E42] border-2 border-white shadow-md flex items-center justify-center overflow-hidden">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Penn_State_Nittany_Lions_logo.svg/1200px-Penn_State_Nittany_Lions_logo.svg.png"
                                    alt="Nittany Lion"
                                    className="w-7 h-7 object-contain"
                                />
                            </div>
                        </motion.div>

                        {/* Hidden Nittany Lion Art */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{
                                opacity: showLion ? 1 : 0,
                                scale: showLion ? 1 : 0.8,
                                y: showLion ? 0 : 20
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className={`mt-6 pt-6 border-t border-border ${showLion ? 'block' : 'hidden'}`}
                        >
                            <div className="flex items-center gap-6 p-6 bg-[#041E42] rounded-lg">
                                {/* Nittany Lion Logo */}
                                <motion.img
                                    src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Penn_State_Nittany_Lions_logo.svg/1200px-Penn_State_Nittany_Lions_logo.svg.png"
                                    alt="Penn State Nittany Lions"
                                    className="w-20 h-20 object-contain"
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: showLion ? [0, -5, 5, 0] : 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                />
                                <div className="flex-1">
                                    <p className="font-serif text-2xl text-white font-bold">We Are!</p>
                                    <p className="text-sm text-blue-200 mt-1">Penn State Nittany Lions</p>
                                    <p className="text-xs text-blue-300 mt-2 font-mono">Class of 2023 🎓</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
