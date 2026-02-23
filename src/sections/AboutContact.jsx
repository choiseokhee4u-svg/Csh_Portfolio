import { motion } from 'framer-motion';
import { Mail, Briefcase, ExternalLink } from 'lucide-react';

const AboutContact = () => {
    return (
        <section className="min-h-screen py-32 px-6 md:px-20 relative bg-primary flex flex-col justify-center">
            <div className="max-w-5xl mx-auto w-full space-y-32">

                {/* About Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <h2 className="font-cinematic text-4xl md:text-5xl font-bold text-white mb-12">
                        The Director's Cut
                    </h2>

                    {/* Quote-style block */}
                    <div className="relative pl-8 border-l-2 border-accent/30">
                        {/* Large decorative quote mark */}
                        <div className="absolute -top-6 -left-4 text-accent/10 text-8xl font-cinematic select-none pointer-events-none leading-none">"</div>

                        <div className="space-y-6 text-white/45 text-lg md:text-xl font-light leading-relaxed">
                            <p>
                                AI와 시퀀서 자동화로 기술적 한계를 넘어, 오직 압도적인 시각적 서사와 미장센에만 집중합니다.
                                UE5 기반의 액션 RPG 트레일러 제작에서 반복적인 단순 노동을 효율화하고,
                                그 여유를 고도의 카메라 연출과 라이팅의 밀도를 높이는 데 투자합니다.
                            </p>
                            <p>
                                기술적 정교함과 예술적 직관이 만나는 리얼타임 필름메이킹을 통해 관객에게 잊지 못할 시각적 경험을 제공하는 것을 목표로 하고 있습니다.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Animated Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    className="cinematic-divider origin-left"
                />

                {/* Contact Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h2 className="font-cinematic text-3xl font-bold text-white/20 mb-10 pb-4 border-b border-white/5 uppercase tracking-widest text-center">
                        Connect
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* ArtStation */}
                        <a
                            href="https://www.artstation.com/user-777868"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group interactive relative overflow-hidden glass-panel p-8 rounded-xl flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:bg-white/[0.08] hover:-translate-y-2 hover:border-accent/50 hover:shadow-[0_10px_40px_rgba(217,119,6,0.08)]"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ExternalLink size={18} className="text-accent" />
                            </div>
                            <Briefcase size={28} className="text-white/50 group-hover:text-accent transition-colors duration-300" />
                            <span className="font-cinematic font-medium text-lg tracking-wide text-white/70 group-hover:text-white transition-colors duration-300">ArtStation</span>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/sukhee-choi-711165280/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group interactive relative overflow-hidden glass-panel p-8 rounded-xl flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:bg-white/[0.08] hover:-translate-y-2 hover:border-secondary-accent/50 hover:shadow-[0_10px_40px_rgba(59,130,246,0.08)]"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ExternalLink size={18} className="text-secondary-accent" />
                            </div>
                            <Briefcase size={28} className="text-white/50 group-hover:text-secondary-accent transition-colors duration-300" />
                            <span className="font-cinematic font-medium text-lg tracking-wide text-white/70 group-hover:text-white transition-colors duration-300">LinkedIn</span>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:choiseokhee4u@gmail.com"
                            className="group interactive relative overflow-hidden glass-panel p-8 rounded-xl flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:bg-white/[0.08] hover:-translate-y-2 hover:border-green-500/50 hover:shadow-[0_10px_40px_rgba(34,197,94,0.08)]"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Mail size={18} className="text-green-400" />
                            </div>
                            <Mail size={28} className="text-white/50 group-hover:text-green-400 transition-colors duration-300" />
                            <span className="font-cinematic font-medium text-lg tracking-wide text-white/70 group-hover:text-white transition-colors duration-300">Email Me</span>
                        </a>

                    </div>
                </motion.div>

                {/* Footer */}
                <div className="pt-16 text-center flex flex-col items-center justify-center border-t border-white/5">
                    <p className="text-white/20 text-sm tracking-widest uppercase mb-2">© 2026 Seokhee Choi.</p>
                    <p className="text-white/8 text-xs">All Rights Reserved. Cinematic Arts.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutContact;
