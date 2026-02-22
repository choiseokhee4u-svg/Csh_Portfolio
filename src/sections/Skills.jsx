import { motion } from 'framer-motion';

const skills = [
    { name: 'Unreal Engine 5', level: 95 },
    { name: 'Blueprint Scripting', level: 90 },
    { name: 'Cinematics & Sequencer', level: 95 },
    { name: 'Lighting & Materials', level: 85 },
    { name: 'Environment Art', level: 80 },
    { name: 'VFX / Quixel', level: 75 },
];

const Skills = () => {
    return (
        <section className="min-h-screen py-32 px-6 md:px-20 relative bg-[#050505] flex items-center">
            <div className="max-w-7xl mx-auto w-full">

                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-cinematic text-5xl md:text-7xl font-bold text-white mb-4"
                    >
                        Technical <span className="text-white/20">Expertise</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="flex justify-between items-end mb-3">
                                <span className="text-white/80 font-medium tracking-wide text-lg group-hover:text-accent transition-colors duration-300">
                                    {skill.name}
                                </span>
                                <span className="text-accent font-cinematic font-bold text-xl">
                                    {skill.level}%
                                </span>
                            </div>

                            {/* Progress Line */}
                            <div className="h-[2px] w-full bg-white/5 relative overflow-hidden rounded-full">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + (index * 0.1) }}
                                    className="absolute top-0 left-0 h-full bg-accent shadow-[0_0_10px_rgba(217,119,6,0.8)]"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
