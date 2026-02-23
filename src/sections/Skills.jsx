import { motion } from 'framer-motion';
import { SiUnrealengine, SiAdobeaftereffects, SiAdobepremierepro, SiAdobephotoshop } from 'react-icons/si';
import { Sparkles, Bot, BrainCircuit, Video, ScanFace } from 'lucide-react';

const skills = [
    { name: 'Unreal Engine 4 & 5 Sequence', level: 90, icon: <SiUnrealengine size={24} /> },
    { name: 'After Effects', level: 90, icon: <SiAdobeaftereffects size={24} /> },
    { name: 'AI-Driven Storyboard Production', level: 90, icon: <Bot size={24} /> },
    { name: 'Photoshop', level: 80, icon: <SiAdobephotoshop size={24} /> },
    { name: 'Premiere Pro', level: 80, icon: <SiAdobepremierepro size={24} /> },
    { name: 'AI-Driven Video Production Technology', level: 80, icon: <BrainCircuit size={24} /> },
    { name: 'Motion Capture Directing & Performance', level: 80, icon: <Video size={24} /> },
    { name: 'Facial LiveLink Capture & Sequence Key Editing', level: 70, icon: <ScanFace size={24} /> },
    { name: 'Antigravity + NotebookLM', level: 60, icon: <BrainCircuit size={24} /> },
    { name: 'Niagara VFX', level: 50, icon: <Sparkles size={24} /> },
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
                                <div className="flex items-center gap-4">
                                    <span className="text-white/40 group-hover:text-accent transition-colors duration-300">
                                        {skill.icon}
                                    </span>
                                    <span className="text-white/80 font-medium tracking-wide text-lg group-hover:text-accent transition-colors duration-300">
                                        {skill.name}
                                    </span>
                                </div>
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
