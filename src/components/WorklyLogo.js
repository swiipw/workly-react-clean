import React from 'react';
import { Zap } from 'lucide-react'; // Eliminado 'Briefcase'

const WorklyLogo = () => {
    return (
        <div className="flex items-center space-x-2">
            <Zap className="w-6 h-6 text-[#1ABC9C] fill-[#1ABC9C]" />
            <span className="text-2xl font-bold text-[#17202A]">Workly</span>
        </div>
    );
};

export default WorklyLogo;
