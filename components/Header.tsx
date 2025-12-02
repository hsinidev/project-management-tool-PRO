
import React, { useState } from 'react';
import { SearchIcon, BellIcon, HelpIcon, ToolsIcon, MenuIcon, CloseIcon } from './icons';

interface HeaderProps {
    onOpenRewriter: () => void;
    onOpenModal: (modalName: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenRewriter, onOpenModal }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = ["Software", "Operations", "HR", "All Teams", "Marketing", "Design", "Sales"];

    return (
        <header className="bg-white shadow-sm fixed w-full top-0 z-50">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="flex items-center gap-8">
                    <a href="https://doodax.com" className="text-2xl font-bold text-[#0052CC]">doodax</a>
                    <nav className="hidden md:flex items-center gap-6">
                        {navItems.map(item => (
                            <a 
                                key={item} 
                                href="#" 
                                className={`text-gray-600 hover:text-[#0052CC] ${item === 'All Teams' ? 'text-[#0052CC] font-semibold' : ''}`}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <button className="text-gray-600 hover:text-[#0052CC] p-2 rounded-full hover:bg-gray-100" onClick={onOpenRewriter} title="AI Rewriter Tool">
                        <ToolsIcon />
                    </button>
                    <button className="text-gray-600 hover:text-[#0052CC] p-2 rounded-full hover:bg-gray-100"><SearchIcon /></button>
                    <button className="text-gray-600 hover:text-[#0052CC] p-2 rounded-full hover:bg-gray-100"><BellIcon /></button>
                    <button className="text-gray-600 hover:text-[#0052CC] p-2 rounded-full hover:bg-gray-100"><HelpIcon /></button>
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
                        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <nav className="flex flex-col px-6 py-4 space-y-2">
                        {navItems.map(item => (
                             <a 
                                key={item} 
                                href="#" 
                                className={`block py-2 text-gray-600 hover:text-[#0052CC] ${item === 'All Teams' ? 'text-[#0052CC] font-semibold' : ''}`}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                    <div className="border-t px-6 py-4 flex items-center justify-start gap-4">
                        <button className="text-gray-600 hover:text-[#0052CC] p-2 rounded-full hover:bg-gray-100" onClick={onOpenRewriter} title="AI Rewriter Tool"><ToolsIcon /></button>
                        <button className="text-gray-600 hover:text-[#0052CC] p-2 rounded-full hover:bg-gray-100"><SearchIcon /></button>
                        <button className="text-gray-600 hover:text-[#0052CC] p-2 rounded-full hover:bg-gray-100"><BellIcon /></button>
                        <button className="text-gray-600 hover:text-[#0052CC] p-2 rounded-full hover:bg-gray-100"><HelpIcon /></button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;