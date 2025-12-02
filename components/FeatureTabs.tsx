
import React, { useState } from 'react';

const tabs = ['Boards', 'Timeline', 'Reports', 'Automation'];

const tabContent = {
    Boards: {
        title: "Visualize work with boards",
        description: "From scrum to kanban, doodax’s boards give your team a shared perspective of what’s in flight, in progress, and completed. Customizable workflows and columns make it easy to map your board to any team process.",
        image: "https://picsum.photos/1000/500?random=5"
    },
    Timeline: {
        title: "Plan and track with timelines",
        description: "Get the big picture with timelines. Plan sprints, map out dependencies, and track progress over time. Adjust plans as priorities shift, and keep stakeholders informed with a clear, visual roadmap.",
        image: "https://picsum.photos/1000/500?random=6"
    },
    Reports: {
        title: "Gain insights with reports",
        description: "Use real-time, visual data to improve team performance and make better decisions. doodax comes with a dozen out-of-the-box reports, from burndown charts to velocity reports, to help your team stay on track.",
        image: "https://picsum.photos/1000/500?random=7"
    },
    Automation: {
        title: "Automate your workflows",
        description: "Save time, reduce manual tasks, and scale your operations with automation. Set up powerful rules in just a few clicks to automate actions, or integrate with your favorite tools.",
        image: "https://picsum.photos/1000/500?random=8"
    }
};

type TabName = keyof typeof tabContent;

const FeatureTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabName>('Boards');

    return (
        <div className="text-center">
            <div className="border-b border-gray-200 mb-8">
                <nav className="-mb-px flex justify-center space-x-8" aria-label="Tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as TabName)}
                            className={`${
                                activeTab === tab
                                    ? 'border-[#0052CC] text-[#0052CC]'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg`}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>
            
            <div className="mt-8">
                <h2 className="text-4xl font-bold text-gray-900">{tabContent[activeTab].title}</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">{tabContent[activeTab].description}</p>
                <div className="mt-8 max-w-5xl mx-auto shadow-xl rounded-lg overflow-hidden">
                    <img src={tabContent[activeTab].image} alt={`${activeTab} feature illustration`} className="w-full h-auto object-cover"/>
                </div>
            </div>
        </div>
    );
};

export default FeatureTabs;