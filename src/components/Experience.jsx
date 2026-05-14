import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experienceData = [
    {
        id: 1,
        company: "Publix Super Markets",
        role: "Information Security Engineer II",
        location: "Lakeland, FL",
        period: "April 2025 – Present",
        status: "active",
        highlights: [
            "Built and deployed LLM-powered agentic workflows that automated internal security operations, giving teams the ability to generate firewall change requests and pull on-call data through natural language, cutting manual processing time significantly.",
            "Engineered an automated compliance tracking system with AI-assisted reporting pipelines delivering daily, weekly, and monthly dashboards to security and upper management, improving security posture visibility and reducing manual reporting overhead.",
            "Built a Python-based automated health monitoring workflow spanning multiple firewall platforms and services, delivering AI-generated daily status digests that gave the team proactive, real-time situational awareness.",
            "Applied LLM-assisted code optimization techniques to refactor Python automation scripts, achieving 25–60% runtime improvements while preserving readability and long-term maintainability.",
            "Designed and delivered a scripted migration automation framework that replaced repetitive manual data-gathering processes, cutting recurring engineering overhead by several hours per week and freeing the team for higher-impact work."
        ],
        tags: ["LLM Agents", "AI Automation", "Python", "Security Metrics"]
    },
    {
        id: 2,
        company: "Publix Super Markets",
        role: "Information Security Engineer I",
        location: "Lakeland, FL",
        period: "April 2024 – April 2025",
        status: "completed",
        highlights: [
            "Created an Azure DevOps pipeline integrated with Microsoft Power Automate to automate firewall rule creation, eliminating manual ticketing steps from the provisioning workflow.",
            "Developed pipelines to generate security metrics from Tufin queries and firewall data, providing actionable insights for ongoing compliance and posture improvement.",
            "Implemented 100+ firewall rules across Palo Alto, NSX DFW, and Checkpoint platforms, strengthening network segmentation and regulatory compliance.",
            "Upgraded Python script authentication from legacy methods to token-based auth, achieving 5–10x performance improvement in automated workflows."
        ],
        tags: ["Azure DevOps", "Firewall Management", "Automation"]
    },
    {
        id: 3,
        company: "Red Hat",
        role: "Software Engineering Intern",
        location: "Remote",
        period: "May 2022 – Aug. 2022",
        status: "completed",
        highlights: [
            "Upgraded Django and Python framework versions across the codebase, rewriting database models to improve security and long-term maintainability.",
            "Built an internal API to enable local testing workflows for the engineering team, reducing testing cycle times and GitHub Actions usage."
        ],
        tags: ["Django", "Python", "API Development"]
    },
    {
        id: 4,
        company: "Red Hat",
        role: "Software Engineering Intern",
        location: "Remote",
        period: "May 2021 – Dec. 2021",
        status: "completed",
        highlights: [
            "Developed APIs enabling autocomplete search recommendations, improving end-user experience and search responsiveness.",
            "Partnered with QA engineers to write unit tests and developer documentation, increasing test coverage and reducing onboarding friction."
        ],
        tags: ["API Design", "QA", "Database Optimization"]
    }
];

const Experience = () => {
    const [expandedId, setExpandedId] = useState(1);

    return (
        <section id="experience" className="py-24 px-6 bg-surface">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="font-mono text-sm text-clay">01</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mt-2">
                        Experience
                    </h2>
                    <p className="text-ink-muted mt-4 max-w-xl">
                        A track record of building secure, automated systems and driving efficiency through AI and engineering.
                    </p>
                </motion.div>

                {/* Experience List */}
                <div className="mt-16 space-y-4">
                    {experienceData.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div
                                onClick={() => setExpandedId(expandedId === job.id ? null : job.id)}
                                className={`
                  p-6 rounded-xl border cursor-pointer transition-all duration-300
                  ${expandedId === job.id
                                        ? 'bg-white border-clay shadow-lg'
                                        : 'bg-sand border-border hover:border-ink-subtle'
                                    }
                `}
                            >
                                {/* Header Row */}
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3">
                                            <h3 className="font-semibold text-lg text-ink">
                                                {job.company}
                                            </h3>
                                            {job.status === 'active' && (
                                                <span className="flex items-center gap-1.5 text-xs font-mono px-2 py-0.5 bg-green-100 text-green-700 rounded-full">
                                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                                    Active
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-ink-muted mt-1">{job.role}</p>
                                        <p className="text-sm text-ink-subtle mt-1 font-mono">
                                            {job.location} · {job.period}
                                        </p>
                                    </div>

                                    <motion.div
                                        animate={{ rotate: expandedId === job.id ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-ink-subtle"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </motion.div>
                                </div>

                                {/* Expanded Content */}
                                <AnimatePresence>
                                    {expandedId === job.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="mt-6 pt-6 border-t border-border">
                                                <ul className="space-y-3">
                                                    {job.highlights.map((highlight, i) => (
                                                        <motion.li
                                                            key={i}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: i * 0.1 }}
                                                            className="flex gap-3 text-ink-muted"
                                                        >
                                                            <span className="text-clay mt-1.5">
                                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8">
                                                                    <circle cx="4" cy="4" r="3" />
                                                                </svg>
                                                            </span>
                                                            {highlight}
                                                        </motion.li>
                                                    ))}
                                                </ul>

                                                {/* Tags */}
                                                <div className="flex flex-wrap gap-2 mt-6">
                                                    {job.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="font-mono text-xs px-2 py-1 bg-sand text-ink-muted rounded border border-border"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
