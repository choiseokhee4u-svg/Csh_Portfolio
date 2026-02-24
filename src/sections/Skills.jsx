import { motion } from 'framer-motion';
import { SiUnrealengine, SiAdobeaftereffects, SiAdobepremierepro, SiAdobephotoshop } from 'react-icons/si';
import { Sparkles, Bot, BrainCircuit, Video, ScanFace } from 'lucide-react';

// Organized into categories for node flows
const skillFlows = [
    {
        title: "Unreal Cinematic Pipeline",
        headerColor: "from-[#005bb5] to-[#003d7a]", // Blueprint Function Blue
        nodes: [
            { name: "Unreal Engine 4 & 5 Sequence", level: 90, icon: <SiUnrealengine size={18} /> },
            { name: "Facial LiveLink Capture", level: 70, icon: <ScanFace size={18} /> },
            { name: "Motion Capture Directing", level: 80, icon: <Video size={18} /> },
            { name: "Niagara VFX", level: 50, icon: <Sparkles size={18} /> }
        ]
    },
    {
        title: "Post-Production",
        headerColor: "from-[#b52a00] to-[#7a1800]", // Blueprint Event Red
        nodes: [
            { name: "Premiere Pro", level: 80, icon: <SiAdobepremierepro size={18} /> },
            { name: "After Effects", level: 90, icon: <SiAdobeaftereffects size={18} /> },
            { name: "Photoshop", level: 80, icon: <SiAdobephotoshop size={18} /> }
        ]
    },
    {
        title: "AI-Driven Workflow",
        headerColor: "from-[#008f39] to-[#005a24]", // Blueprint Pure Green
        nodes: [
            { name: "AI-Driven Storyboard", level: 90, icon: <Bot size={18} /> },
            { name: "AI Video Production", level: 80, icon: <BrainCircuit size={18} /> },
            { name: "Antigravity + NotebookLM", level: 60, icon: <BrainCircuit size={18} /> }
        ]
    }
];

const BlueprintNode = ({ node, isLast }) => (
    <div className="relative flex items-center">
        {/* Node Card */}
        <div className="w-64 bg-[#151515] rounded-lg border border-white/10 shadow-2xl overflow-hidden flex flex-col z-10 transition-transform duration-300 hover:scale-105 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            {/* Header */}
            <div className={`h-8 w-full bg-gradient-to-r ${node.headerColor || 'from-[#005bb5] to-[#003d7a]'} flex items-center px-3 border-b border-black/50`}>
                <span className="font-sans text-[10px] uppercase tracking-wider text-white/90 font-bold flex items-center gap-2">
                    <span className="italic text-white/70 italic-font font-serif">f</span> Function
                </span>
            </div>

            {/* Body */}
            <div className="p-4 flex flex-col gap-4 relative bg-[#1c1c1c] bg-opacity-90">
                {/* Blueprint grid pattern overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '10px 10px' }} />

                <div className="flex items-center gap-3 relative z-10">
                    <div className="text-white/60">{node.icon}</div>
                    <span className="text-white/90 text-sm font-medium leading-tight">{node.name}</span>
                </div>

                {/* Pins */}
                <div className="flex justify-between items-center mt-2 relative z-10">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full border-2 border-white shadow-[0_0_8px_rgba(255,255,255,0.8)] bg-white/20" />
                        <span className="text-[10px] text-white/50">Exec</span>
                    </div>
                    {/* Proficiency Pin */}
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] text-accent">{node.level}%</span>
                        <div className="w-3 h-3 rounded-full border-2 border-accent shadow-[0_0_8px_rgba(217,119,6,0.8)] bg-accent/20" />
                    </div>
                </div>
            </div>
        </div>

        {/* Exec Wire to next node */}
        {!isLast && (
            <div className="hidden md:block w-12 h-[2px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] relative z-0">
                {/* Moving signal particle */}
                <motion.div
                    className="absolute top-1/2 left-0 w-3 h-1 bg-white rounded-full -translate-y-1/2 shadow-[0_0_10px_white]"
                    animate={{ left: ['0%', '100%'], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
            </div>
        )}

        {/* Mobile vertical connection */}
        {!isLast && (
            <div className="block md:hidden h-8 w-[2px] bg-white mx-auto shadow-[0_0_8px_rgba(255,255,255,0.8)] relative z-0 my-2">
                <motion.div
                    className="absolute left-1/2 top-0 w-1 h-3 bg-white rounded-full -translate-x-1/2 shadow-[0_0_10px_white]"
                    animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
            </div>
        )}
    </div>
);

const Skills = () => {
    return (
        <section className="min-h-screen py-32 px-6 md:px-12 lg:px-20 relative bg-[#0a0a0a] overflow-hidden flex flex-col justify-center">
            {/* Dark Blueprint Grid Background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}
            />

            <div className="max-w-[1400px] mx-auto w-full relative z-10">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-cinematic text-5xl md:text-7xl font-bold text-white mb-4"
                    >
                        Blueprint <span className="text-white/20">Tree</span>
                    </motion.h2>
                    <p className="text-white/40 tracking-widest text-sm uppercase">Technical Expertise Logic</p>
                </div>

                <div className="flex flex-col gap-16">
                    {skillFlows.map((flow, flowIndex) => (
                        <motion.div
                            key={flow.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: flowIndex * 0.2 }}
                            className="flex flex-col"
                        >
                            <h3 className="text-white/60 font-cinematic text-xl mb-6 tracking-wider border-l-2 border-accent pl-4">
                                {flow.title}
                            </h3>

                            <div className="flex flex-col md:flex-row items-center md:items-start md:overflow-x-auto pb-8 hide-scrollbar">
                                {flow.nodes.map((node, nodeIndex) => (
                                    <BlueprintNode
                                        key={node.name}
                                        node={{ ...node, headerColor: flow.headerColor }}
                                        isLast={nodeIndex === flow.nodes.length - 1}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
