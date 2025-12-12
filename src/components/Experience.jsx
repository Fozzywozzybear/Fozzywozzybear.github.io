import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experienceData = [
    {
        id: 1,
        company: "Publix Super Markets",
        role: "Information Security Engineer II",
        location: "Lakeland, FL",
        period: "April 2024 - Current",
        status: "active",
        highlights: [
            "Designed and implemented a metrics-driven compliance tracking system, breaking down queries into daily, weekly, and monthly intervals with a cumulative dashboard for visibility and reporting.",
            "Developed AI-powered agents to streamline internal processes, enabling teams to generate firewall requests and access on-call information quickly and efficiently.",
            "Built a cross-platform health check workflow to monitor firewall and service status, delivering automated daily summaries to enhance team situational awareness.",
            "Leveraged AI to optimize codebase performance, improving script runtimes by 25–60% while maintaining readability and scalability for future development."
        ],
        tags: ["AI Automation", "Security Metrics", "Python"]
    },
    {
        id: 2,
        company: "Publix Super Markets",
        role: "Information Security Engineer I",
        location: "Lakeland, FL",
        period: "Previous Role",
        status: "completed",
        highlights: [
            "Upgraded authentication methods on python scripts utilizing token authentication, improving run times by 5-10x speed.",
            "Created an Azure DevOps pipeline to automate creation of firewall rules using Microsoft Power Automate.",
            "Developed Azure DevOps pipelines to generate metrics from Tufin queries and firewalls, providing valuable insights for security posture improvement.",
            "Successfully implemented over 100 firewall rules across Palo Alto, NSX DFW, and Checkpoint platforms, strengthening network security and compliance."
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
            "Upgraded the project's framework of Django and Python, requiring a rewrite of our database models for security and efficiency.",
            "Created an internal API allowing co-workers to complete local testing more efficiently, reducing testing times and GitHub workflow load.",
            "Completed software maintenance across the codebase, requiring a vast understanding of the internal codebase and external workflows."
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
            "Created API's that enabled customers to search faster with auto complete recommendations.",
            "Worked with quality assurance engineers to develop unit tests and documentation for future testing, ensuring the quality and reliability of the software.",
            "Redesigned database models to improve the efficiency of database queries, making the software more responsive and scalable."
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
