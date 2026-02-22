import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const Resume = () => {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-6 md:px-20 relative">
            {/* Top Gradient */}
            <div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-black/80 to-transparent z-0 pointer-events-none" />

            {/* Back Navigation */}
            <nav className="fixed top-0 left-0 w-full p-6 pt-10 flex items-center z-50 mix-blend-difference pointer-events-none">
                <Link to="/" className="interactive pointer-events-auto cursor-none group flex items-center gap-2 text-white/70 hover:text-accent transition-colors duration-300 uppercase tracking-widest text-sm font-semibold">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </Link>
            </nav>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-4xl mx-auto text-white/80 font-light leading-relaxed relative z-10"
            >
                {/* Header */}
                <motion.div variants={itemVariants} className="mb-20">
                    <h1 className="font-cinematic text-5xl md:text-7xl font-bold text-white mb-4">
                        SEOKHEE <span className="text-white/40">CHOI</span>
                    </h1>
                    <p className="text-xl text-accent tracking-widest uppercase font-medium">Cinematic Artist & Director</p>
                </motion.div>

                {/* Introduction (자기소개서) */}
                <motion.div variants={itemVariants} className="mb-24 space-y-6 text-lg relative">
                    <h2 className="font-cinematic text-3xl text-white mb-8 border-b border-white/10 pb-4">Introduction <span className="text-white/30 text-xl ml-2 font-sans tracking-normal">자기소개서</span></h2>

                    <p>안녕하세요.<br />저는 플레이어가 게임에 몰입할 수 있는 장면을 만드는 일을 가장 즐기는 연출자 최석희입니다.</p>

                    <p>
                        게임 영상 연출 업무를 해오면서, 모바일 MMORPG부터 TPS 콘솔 프로젝트까지 다양한 장르의 시네마틱과 인게임 연출을 경험했습니다.
                        특히 라이온하트 스튜디오에서는 연출팀 사원으로 시작해 프로젝트 Q의 연출 파트장과 팀장으로 진급하며 팀을 이끌었습니다.
                        프리비즈 설계부터 카메라워크, 라이팅, 이펙트 제작, 모션캡처 디렉팅까지 연출 전반을 담당했고, 마일스톤마다 모바일 빌드와 PC 빌드 대응,
                        레벨 디자인에 맞춘 연출 작업까지 함께 진행하며 프로젝트의 완성도를 높였습니다.
                    </p>

                    <p>
                        저는 게임의 세계관과 감정을 플레이어가 자연스럽게 느낄 수 있도록 하는 디테일한 연출을 중요하게 생각합니다.
                        보스전의 긴장감, 캐릭터 생성창의 설렘, 레벨 디자인 속 환경의 몰입감까지 세심하게 설계해 유저가 깊이 빠져들도록 만드는 것이 제 강점입니다.
                    </p>

                    <p>
                        항상 맡은 일은 끝까지 책임지고 마무리하는 성실함과, 새로운 기술과 트렌드를 빠르게 익히는 적응력을 바탕으로 팀과 함께 성장하고 있습니다.
                        앞으로도 MMORPG 연출 경험을 살려 많은 사람들에게 감동을 주는 콘텐츠를 만들고 싶습니다.
                    </p>

                    <p>현재는 트리플A 콘솔게임의 연출작업자로 업무를 하고있습니다.</p>
                    <p>감사합니다.</p>

                    <div className="pt-6 flex flex-col gap-2">
                        <a href="https://ncruitingblog.com/132" target="_blank" rel="noreferrer" className="interactive cursor-none flex items-center gap-2 text-accent hover:text-white transition-colors duration-300 w-fit">
                            <ExternalLink size={16} /> https://ncruitingblog.com/132
                        </a>
                        <a href="https://www.inven.co.kr/webzine/news/?news=311605" target="_blank" rel="noreferrer" className="interactive cursor-none flex items-center gap-2 text-accent hover:text-white transition-colors duration-300 w-fit">
                            <ExternalLink size={16} /> https://www.inven.co.kr/webzine/news/?news=311605
                        </a>
                    </div>
                </motion.div>


                {/* Experience (경력) */}
                <motion.div variants={itemVariants} className="mb-24">
                    <div className="flex items-baseline justify-between border-b border-white/10 pb-4 mb-10">
                        <h2 className="font-cinematic text-3xl text-white">Experience <span className="text-white/30 text-xl ml-2 font-sans tracking-normal">경력 (총 8년 1개월)</span></h2>
                    </div>

                    <div className="space-y-12">
                        {/* Ncsoft */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-10 group">
                            <div className="md:w-1/3 flex flex-col text-white/50">
                                <span className="font-semibold text-white/80 group-hover:text-accent transition-colors">2025.09 - 재직중 (0년 6개월)</span>
                                <span>Ncsoft / JSY 게임실</span>
                                <span>파트장</span>
                            </div>
                            <div className="md:w-2/3 glass-panel p-6 rounded-lg w-full">
                                <h3 className="text-white font-semibold text-lg mb-3">JSY 팀 콘솔 프로젝트 연출담당</h3>
                                <ul className="list-disc list-inside space-y-1 text-white/70">
                                    <li>시네마틱, 인게임컷씬, QTE, 액션시퀀스</li>
                                    <li>AI를 활용한 스토리보드 및 프리비즈, 카메라, 라이팅, 렌더, 모션디렉팅, 영상편집, 합성</li>
                                    <li>연출 파트장</li>
                                </ul>
                            </div>
                        </div>

                        {/* Lionheart */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-10 group">
                            <div className="md:w-1/3 flex flex-col text-white/50">
                                <span className="font-semibold text-white/80 group-hover:text-accent transition-colors">2022.11 - 2025.08 (2년 10개월)</span>
                                <span>라이온하트 스튜디오 / 프로젝트Q</span>
                                <span>팀장</span>
                            </div>
                            <div className="md:w-2/3 glass-panel p-6 rounded-lg w-full">
                                <h3 className="text-white font-semibold text-lg mb-3">연출 파트 총괄 및 실무</h3>
                                <ul className="list-disc list-inside space-y-1 text-white/70">
                                    <li>프리비즈, 카메라, 라이팅, 빌드이슈대응, 구현관련 작업</li>
                                    <li>배경연출, 보스연출, 시나리오 연출, 지스타 작업, 가챠 연출</li>
                                    <li>프로젝트S 지스타 영상 / 프로젝트Q 지스타 영상</li>
                                </ul>
                            </div>
                        </div>

                        {/* Madngine */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-10 group">
                            <div className="md:w-1/3 flex flex-col text-white/50">
                                <span className="font-semibold text-white/80 group-hover:text-accent transition-colors">2022.03 - 2022.10 (0년 8개월)</span>
                                <span>매드엔진 / 아트실 연출팀</span>
                                <span>사원</span>
                            </div>
                            <div className="md:w-2/3 glass-panel p-6 rounded-lg w-full">
                                <h3 className="text-white font-semibold text-lg mb-3">인게임 연출 담당</h3>
                                <ul className="list-disc list-inside space-y-1 text-white/70">
                                    <li>나이트크로우 인게임 시네마틱 작업 (파트별 부분 참여)</li>
                                    <li>프리비즈 (가챠연출)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Wemade */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-10 group">
                            <div className="md:w-1/3 flex flex-col text-white/50">
                                <span className="font-semibold text-white/80 group-hover:text-accent transition-colors">2020.08 - 2022.02 (1년 7개월)</span>
                                <span>위메이드 / 미디미팀</span>
                                <span>대리</span>
                            </div>
                            <div className="md:w-2/3 glass-panel p-6 rounded-lg w-full">
                                <h3 className="text-white font-semibold text-lg mb-3">영상 연출 및 편집</h3>
                                <ul className="list-disc list-inside space-y-1 text-white/70">
                                    <li>미르4 UA영상 및 시퀀스 작업 및 모션그래픽 작업</li>
                                    <li>미르4 글로벌 UA영상 작업</li>
                                    <li>미르 뱅가드앤 배가본드 작업</li>
                                    <li>YMIR UE5 Tech Demo 영상 컷 편집 작업</li>
                                </ul>
                            </div>
                        </div>

                        {/* Andar */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-10 group">
                            <div className="md:w-1/3 flex flex-col text-white/50">
                                <span className="font-semibold text-white/80 group-hover:text-accent transition-colors">2020.01 - 2020.07 (0년 7개월)</span>
                                <span>안다르 / 미디어컨텐츠</span>
                                <span>사원</span>
                            </div>
                            <div className="md:w-2/3 glass-panel p-6 rounded-lg w-full text-white/70 mt-1">
                                브랜드 필름 및 안다르 유튜브 촬영 및 편집
                            </div>
                        </div>

                        {/* Vision Holdings */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-10 group">
                            <div className="md:w-1/3 flex flex-col text-white/50">
                                <span className="font-semibold text-white/80 group-hover:text-accent transition-colors">2019.02 - 2020.01 (1년 0개월)</span>
                                <span>비전홀딩스코퍼레이션 / 2D</span>
                                <span>사원</span>
                            </div>
                            <div className="md:w-2/3 glass-panel p-6 rounded-lg w-full text-white/70 mt-1">
                                TVCF / DIGITAL VIRAL CF 및 다양한 광고작업 합성 및 2D 작업
                            </div>
                        </div>

                        {/* Joycity */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-10 group">
                            <div className="md:w-1/3 flex flex-col text-white/50">
                                <span className="font-semibold text-white/80 group-hover:text-accent transition-colors">2018.10 - 2019.01 (0년 4개월)</span>
                                <span>조이시티 / 3on3</span>
                                <span>프리랜서</span>
                            </div>
                            <div className="md:w-2/3 glass-panel p-6 rounded-lg w-full text-white/70 mt-1">
                                freestyle 3on3 게임홍보영상 패치영상 편집, 2D 그래픽 자막 작업 및 화면 전환효과 작업
                            </div>
                        </div>

                        {/* MCM */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-10 group">
                            <div className="md:w-1/3 flex flex-col text-white/50">
                                <span className="font-semibold text-white/80 group-hover:text-accent transition-colors">2018.03 - 2018.09 (0년 7개월)</span>
                                <span>MCM / CMO</span>
                                <span>사원</span>
                            </div>
                            <div className="md:w-2/3 glass-panel p-6 rounded-lg w-full text-white/70 mt-1">
                                사진촬영 보정 및 영상편집
                            </div>
                        </div>

                    </div>
                </motion.div>


                {/* Competencies (보유역량) */}
                <motion.div variants={itemVariants} className="mb-24">
                    <h2 className="font-cinematic text-3xl text-white mb-8 border-b border-white/10 pb-4">Competencies <span className="text-white/30 text-xl ml-2 font-sans tracking-normal">보유역량</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* 보유기술 */}
                        <div className="glass-panel p-8 rounded-xl">
                            <h3 className="text-accent font-semibold text-lg mb-4 uppercase tracking-widest">Skills</h3>
                            <div className="space-y-4 text-white/70">
                                <p className="leading-relaxed">에프터이펙트 / 프리미어프로 / 포토샵 <br /> 언리얼엔진4 / 언리얼엔진5 / 나이아가라</p>
                                <p className="leading-relaxed">시퀀스를 활용한 시네마틱 영상 및 인게임 연출 <br /> 카메라, 라이팅, 프리비즈</p>
                            </div>
                        </div>

                        {/* 자격증 */}
                        <div className="glass-panel p-8 rounded-xl">
                            <h3 className="text-accent font-semibold text-lg mb-4 uppercase tracking-widest">Certificates</h3>
                            <ul className="space-y-4 text-white/70">
                                <li>
                                    <span className="block text-white">SNS마케팅전문가 1급</span>
                                    <span className="text-sm">2020.06 | 한국원격교육진흥원</span>
                                </li>
                                <li>
                                    <span className="block text-white">실기교사</span>
                                    <span className="text-sm">2018.02 | 교육과학기술부</span>
                                </li>
                            </ul>
                        </div>

                        {/* 대외활동 및 해외연수 */}
                        <div className="glass-panel p-8 rounded-xl md:col-span-2">
                            <h3 className="text-accent font-semibold text-lg mb-4 uppercase tracking-widest">Activities & Training</h3>
                            <ul className="space-y-3 text-white/70 list-disc list-inside">
                                <li>군인 시절 (레바논 파병) 동명부대 15진</li>
                                <li>초등시절부터 중학교 2학년때까지 중국(칭다오) QIS국제학교 재학</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>


                {/* Footer */}
                <div className="pt-10 mb-20 text-center flex flex-col items-center justify-center border-t border-white/5">
                    <p className="text-white/30 text-sm tracking-widest uppercase mb-2">© 2026 Seokhee Choi.</p>
                </div>

            </motion.div>
        </div>
    );
};

export default Resume;
