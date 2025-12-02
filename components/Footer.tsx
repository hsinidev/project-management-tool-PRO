
import React from 'react';

interface FooterProps {
    onOpenModal: (modalName: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
    const legalLinks = ['Privacy Policy', 'Terms of Service', 'DMCA'];
    const otherLinks = ['About', 'Contact', 'Guide'];

    return (
        <footer className="bg-gray-50 text-gray-600 border-t border-gray-200">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: Branding & Contact */}
                    <div>
                        <h3 className="text-xl font-bold text-[#0052CC]">doodax</h3>
                        <p className="mt-4 text-sm">Connect with us:</p>
                        <p className="mt-2 text-sm font-medium"><a href="mailto:hsini.web@gmail.com" className="hover:text-[#0052CC]">hsini.web@gmail.com</a></p>
                        <p className="mt-1 text-sm"><a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0052CC]">doodax.com</a></p>
                        <div className="mt-6">
                            <p className="text-xs text-gray-500 uppercase tracking-wide">Developed By</p>
                            <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-base font-bold flex items-center gap-2 mt-1 hover:underline" style={{color: '#0052CC'}}>
                                <span>Powered by HSINI MOHAMED</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Products */}
                    <div>
                        <h4 className="font-bold text-gray-800 mb-4">Products</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-[#0052CC] transition-colors">Software</a></li>
                            <li><a href="#" className="hover:text-[#0052CC] transition-colors">Align</a></li>
                            <li><a href="#" className="hover:text-[#0052CC] transition-colors">Service Management</a></li>
                            <li><a href="#" className="hover:text-[#0052CC] transition-colors">Collaboration Tools</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <h4 className="font-bold text-gray-800 mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-[#0052CC] transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-[#0052CC] transition-colors">Community</a></li>
                            <li><a href="#" className="hover:text-[#0052CC] transition-colors">Support</a></li>
                            <li><a href="#" className="hover:text-[#0052CC] transition-colors">Marketplace</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Learn */}
                    <div>
                        <h4 className="font-bold text-gray-800 mb-4">Learn</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-[#0052CC] transition-colors">Agile</a></li>
                            <li><a href="#" className="hover:text-[#0052CC] transition-colors">Scrum</a></li>
                            <li><a href="#" className="hover:text-[#0052CC] transition-colors">DevOps</a></li>
                            <li><a href="#" className="hover:text-[#0052CC] transition-colors">Kanban</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 border-t border-gray-200">
                <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p className="text-gray-500 mb-4 md:mb-0">Copyright © 2025 doodax. All rights reserved.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                         {otherLinks.map(link => (
                            <button key={link} onClick={() => onOpenModal(link)} className="text-gray-600 hover:text-[#0052CC] font-medium transition-colors">{link}</button>
                        ))}
                        {legalLinks.map(link => (
                            <button key={link} onClick={() => onOpenModal(link)} className="text-gray-600 hover:text-[#0052CC] font-medium transition-colors">{link}</button>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
