import { useState } from 'react';
import { motion } from 'framer-motion';

const skillsData = {
    "Languages & Frameworks": [
        { name: "Python", level: "Expert" },
        { name: "Java", level: "Proficient" },
        { name: "SQL (PostgreSQL)", level: "Entry" },
        { name: "Django", level: "Entry" }
    ],
    "Security & Networking": [
        { name: "Palo Alto Networks", level: "Expert" },
        { name: "Firewalls", level: "Expert" },
        { name: "VPNs", level: "Proficient" },
        { name: "IDS/IPS", level: "Expert" },
        { name: "NSX DFW", level: "Expert" },
        { name: "Checkpoint", level: "Proficient" }
    ],
    "DevOps & Automation": [
        { name: "Azure DevOps", level: "Expert" },
        { name: "Git", level: "Expert" },
        { name: "Docker", level: "Entry" },
        { name: "Power Automate", level: "Entry" },
        { name: "CI/CD Pipelines", level: "Expert" }
    ],
    "AI-Assisted Development": [
        { name: "GitHub Copilot", level: "Expert" },
        { name: "Claude Code", level: "Entry" },
        { name: "Gemini CLI", level: "Entry" },
        { name: "AI Agent Development", level: "Entry" },
        { name: "Prompt Engineering", level: "Proficient" }
    ],
    "Security Tools": [
        { name: "Tufin", level: "Expert" },
        { name: "VirtualBox", level: "Entry" },
        { name: "Splunk", level: "Entry" }
    ],
    "Platforms": [
        { name: "Windows Server", level: "Expert" },
        { name: "Linux (Ubuntu)", level: "Entry" },
        { name: "macOS", level: "Proficient" }
    ]
};

const getLevelStyle = (level) => {
    switch (level) {
        case 'Expert':
            return 'bg-clay text-white';
        case 'Proficient':
            return 'bg-ink text-sand';
        case 'Entry':
            return 'bg-sand-dark text-ink-muted';
        default:
            return 'bg-sand-dark text-ink-muted';
    }
};

const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    return (
        <section id="skills" className="py-24 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="font-mono text-sm text-clay">02</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mt-2">
                        Capabilities
                    </h2>
                    <p className="text-ink-muted mt-4 max-w-xl">
                        Technical toolkit refined through years of security engineering, automation, and AI-assisted development.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            className="group"
                        >
                            <h3 className="font-mono text-xs uppercase tracking-wider text-ink-subtle mb-4">
                                {category}
                            </h3>
                            <div className="space-y-2">
                                {skills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        onMouseEnter={() => setHoveredSkill(skill.name)}
                                        onMouseLeave={() => setHoveredSkill(null)}
                                        whileHover={{ x: 4 }}
                                        className="relative flex items-center justify-between py-2 px-3 rounded-lg border border-transparent hover:border-border hover:bg-surface transition-all cursor-default"
                                    >
                                        <span className="font-mono text-sm text-ink">
                                            {skill.name}
                                        </span>

                                        {/* Level indicator */}
                                        <motion.span
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{
                                                opacity: hoveredSkill === skill.name ? 1 : 0,
                                                x: hoveredSkill === skill.name ? 0 : 10
                                            }}
                                            className={`text-xs font-mono px-2 py-0.5 rounded ${getLevelStyle(skill.level)}`}
                                        >
                                            {skill.level}
                                        </motion.span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Skill Level Legend */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-12 flex flex-wrap justify-center gap-6"
                >
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-clay"></span>
                        <span className="text-sm text-ink-muted">Expert</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-ink"></span>
                        <span className="text-sm text-ink-muted">Proficient</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-sand-dark border border-border"></span>
                        <span className="text-sm text-ink-muted">Entry</span>
                    </div>
                </motion.div>

                {/* Additional Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-16 p-6 rounded-xl border border-border bg-surface"
                >
                    <h3 className="font-mono text-xs uppercase tracking-wider text-ink-subtle mb-4">
                        Core Competencies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {["Technical Writing", "Documentation", "Collaboration", "Teamwork", "Agile", "Problem Solving", "Security Compliance", "Metrics & Reporting"].map((skill) => (
                            <motion.span
                                key={skill}
                                whileHover={{ scale: 1.05 }}
                                className="font-mono text-sm px-3 py-1.5 bg-sand text-ink-muted rounded-lg border border-border cursor-default transition-colors hover:bg-sand-dark"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
