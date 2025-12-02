
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FeatureTabs from './components/FeatureTabs';
import RewriterModal from './components/RewriterModal';
import SeoArticle from './components/SeoArticle';
import Modal from './components/Modal';
import { GoogleIcon, MicrosoftIcon, PayPalIcon, SpotifyIcon, SquareIcon, EBayIcon, CiscoIcon } from './components/icons';

const App: React.FC = () => {
    const [isRewriterModalOpen, setRewriterModalOpen] = useState(false);
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const modalContent: { [key: string]: { title: string; content: React.ReactNode } } = {
        'About': { title: 'About Us', content: <p>doodax is a demonstration project designed to showcase modern web development techniques with React and Tailwind CSS. This project is for educational purposes.</p> },
        'Contact': { 
            title: 'Contact Us', 
            content: (
                <div className="space-y-4">
                    <p>We'd love to hear from you!</p>
                    <div className="bg-gray-50 p-4 rounded-lg border">
                        <p className="font-semibold">Email:</p>
                        <a href="mailto:hsini.web@gmail.com" className="text-blue-600 hover:underline">hsini.web@gmail.com</a>
                    </div>
                     <div className="bg-gray-50 p-4 rounded-lg border">
                        <p className="font-semibold">Website:</p>
                        <a href="https://doodax.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">doodax.com</a>
                    </div>
                </div>
            ) 
        },
        'Guide': { title: 'User Guide', content: <div><h3 className="font-bold">How to use the AI Rewriter:</h3><ol className="list-decimal list-inside space-y-2 mt-2"><li>Click the "Tools" icon in the header to open the AI Rewriter.</li><li>Enter your Ollama endpoint (e.g., http://localhost:11434/api/generate).</li><li>Type or paste the text you want to rewrite.</li><li>Select a desired tone and platform.</li><li>Click "Rewrite Post" and wait for the AI-generated result.</li></ol></div> },
        'Privacy Policy': { title: 'Privacy Policy', content: <p>This application is a demonstration and does not collect or store any personal data. All information entered, including in the AI Rewriter tool, is processed in your browser and sent directly to the endpoint you provide. No data is logged or retained by our servers.</p> },
        'Terms of Service': { title: 'Terms of Service', content: <p>By using this demonstration application, you agree that it is provided "as is" without warranty of any kind. You are responsible for any content you generate and for complying with the terms of service of any third-party AI service you use via the provided endpoint field.</p> },
        'DMCA': { title: 'DMCA Policy', content: <p>As this is a non-commercial, educational project, all content is either original or used for demonstration purposes. If you believe any content infringes on your copyright, please contact us for its immediate removal.</p> },
    };

    const openModal = (modalName: string) => setActiveModal(modalName);
    const closeModal = () => setActiveModal(null);

    return (
        <div className="flex flex-col min-h-screen font-sans text-gray-800 bg-white">
            <Header onOpenRewriter={() => setRewriterModalOpen(true)} onOpenModal={openModal} />

            <main className="flex-grow">
                {/* Hero Section - Modernized */}
                <section className="bg-gradient-to-b from-blue-50 via-white to-white pt-24 pb-20 text-center overflow-hidden relative">
                    {/* Background decorations */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-[#0052CC] font-semibold text-sm tracking-wide">
                            🚀 The Future of Project Management
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight max-w-5xl mx-auto tracking-tight">
                            Connect every team, task, and project <span className="text-[#0052CC]">together.</span>
                        </h1>
                        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Collaborate, manage projects, and deliver results. The ultimate tool for agile teams to build better products, faster.
                        </p>
                        
                        <div className="mt-10 max-w-md mx-auto flex flex-col gap-3">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-grow px-5 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0052CC] shadow-sm text-lg"
                                />
                                <button className="w-full sm:w-auto bg-[#0052CC] text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg whitespace-nowrap">
                                    Sign up free
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">No credit card required · Free for small teams</p>
                        </div>

                        <div className="mt-12 flex flex-col items-center">
                            <p className="text-sm text-gray-500 mb-4 font-medium">TRUSTED BY INNOVATIVE TEAMS</p>
                            <div className="flex gap-6 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                               <button className="p-2 hover:bg-white rounded-full transition-colors"><GoogleIcon /></button>
                               <button className="p-2 hover:bg-white rounded-full transition-colors"><MicrosoftIcon /></button>
                               <button className="p-2 hover:bg-white rounded-full transition-colors"><PayPalIcon /></button>
                               <button className="p-2 hover:bg-white rounded-full transition-colors"><SpotifyIcon /></button>
                            </div>
                        </div>

                        <div className="mt-20 max-w-6xl mx-auto shadow-2xl rounded-2xl overflow-hidden border border-gray-100 transform rotate-1 hover:rotate-0 transition-transform duration-700">
                           <img src="https://picsum.photos/1200/600?random=1" alt="doodax workflow showing To Do, In Progress, and Done columns" className="w-full h-auto object-cover"/>
                        </div>
                    </div>
                </section>

                {/* Feature Discovery Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <FeatureTabs />
                    </div>
                </section>

                {/* Deep Feature Breakdown - Alternating Layout */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 space-y-32">
                        {/* Item 1 */}
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div className="md:w-1/2 text-center md:text-left">
                                <div className="text-[#0052CC] font-bold mb-2 uppercase tracking-wider text-sm">Custom Workflows</div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Customize how your team works.</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">Create custom workflows that map to any style of work. From simple to complex, build a workflow that makes sense for your team's process and evolve it as you grow.</p>
                            </div>
                            <div className="md:w-1/2 group">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 transition-transform duration-500 group-hover:scale-[1.02]">
                                    <img src="https://picsum.photos/600/400?random=2" alt="Customizable workflow illustration" className="w-full"/>
                                </div>
                            </div>
                        </div>
                        {/* Item 2 */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
                            <div className="md:w-1/2 text-center md:text-left">
                                <div className="text-[#0052CC] font-bold mb-2 uppercase tracking-wider text-sm">Timelines</div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Stay on track, even when plans change.</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">Timelines and roadmaps help you visualize your project's progress and dependencies, making it easy to adapt when priorities shift. Keep stakeholders aligned with real-time updates.</p>
                            </div>
                            <div className="md:w-1/2 group">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 transition-transform duration-500 group-hover:scale-[1.02]">
                                    <img src="https://picsum.photos/600/400?random=3" alt="Project timeline illustration" className="w-full"/>
                                </div>
                            </div>
                        </div>
                        {/* Item 3 */}
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div className="md:w-1/2 text-center md:text-left">
                                <div className="text-[#0052CC] font-bold mb-2 uppercase tracking-wider text-sm">Centralization</div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Bye-bye, spreadsheets.</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">Centralize all your project information in one place. Attach files, add comments, and link issues to keep everything organized, accessible, and connected to the actual work.</p>
                            </div>
                            <div className="md:w-1/2 group">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 transition-transform duration-500 group-hover:scale-[1.02]">
                                    <img src="https://picsum.photos/600/400?random=4" alt="Centralized hub illustration" className="w-full"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Closing CTA Section */}
                <section className="bg-[#0052CC] relative overflow-hidden text-white py-24 text-center">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Move fast, stay aligned, and build better.</h2>
                        <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10">Join over 100,000 teams using doodax to ship software today.</p>
                        <button className="bg-white text-[#0052CC] font-bold py-4 px-12 rounded-lg hover:bg-gray-100 transition duration-300 shadow-xl text-lg">
                            Get it free
                        </button>
                    </div>
                </section>

                {/* Trust Banner */}
                <section className="py-20 bg-gray-50 border-b border-gray-200">
                    <div className="container mx-auto px-6 text-center">
                        <h3 className="text-xl font-semibold text-gray-500 mb-10">Trusted by over 100,000 customers world-wide</h3>
                        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 text-gray-400 opacity-70">
                            <SquareIcon />
                            <EBayIcon />
                            <SpotifyIcon className="h-8 w-auto"/>
                            <CiscoIcon />
                        </div>
                    </div>
                </section>

                {/* SEO Article */}
                <SeoArticle />

            </main>
            
            <Footer onOpenModal={openModal} />

            <RewriterModal isOpen={isRewriterModalOpen} onClose={() => setRewriterModalOpen(false)} />
            {activeModal && (
                <Modal 
                    isOpen={!!activeModal} 
                    onClose={closeModal} 
                    title={modalContent[activeModal].title}
                >
                    {modalContent[activeModal].content}
                </Modal>
            )}
        </div>
    );
};

export default App;
