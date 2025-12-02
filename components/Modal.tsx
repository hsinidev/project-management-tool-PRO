
import React from 'react';
import { CloseIcon } from './icons';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-lg shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                        <CloseIcon />
                    </button>
                </div>
                <div className="p-6 overflow-y-auto text-gray-600 space-y-4">
                    {children}
                </div>
                <div className="flex justify-end p-4 border-t bg-gray-50">
                    <button 
                        onClick={onClose}
                        className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
