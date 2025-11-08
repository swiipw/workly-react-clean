import React from 'react';
import { Home, BookOpen, User, Briefcase } from 'lucide-react';

const BottomNavBar = ({ activeTab, onTabChange }) => {
    const tabs = [
        { name: 'Inicio', icon: Home, key: 'home' }, 
        { name: 'Empleos', icon: Briefcase, key: 'jobs' }, 
        { name: 'Cursos', icon: BookOpen, key: 'courses' }, 
        { name: 'Perfil', icon: User, key: 'profile' }, 
    ];
    
    return (
        <div className="fixed bottom-0 left-0 right-0 h-16 bg-white flex justify-around items-center z-10">
            {tabs.map((tab) => {
                const isActive = activeTab === tab.key;
                const IconComponent = tab.icon;
                return (
                    <button
                        key={tab.key}
                        onClick={() => onTabChange(tab.key)}
                        className={`flex flex-col items-center p-1 w-1/4 ${isActive ? 'text-[#F39C12]' : 'text-gray-500'}`}
                    >
                        <IconComponent className="w-6 h-6" />
                        <span className="text-xs">{tab.name}</span> 
                    </button>
                );
            })}
        </div>
    );
};

export default BottomNavBar;
