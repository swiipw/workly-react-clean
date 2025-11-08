import React from 'react';

const JobCard = ({ title }) => (
    <div className="p-4 bg-white shadow rounded-lg">
        <h4 className="font-bold">{title}</h4>
    </div>
);

const JobsScreen = () => {
    const jobList = [{ title: "Desarrollador React Mid" }];
    
    return (
        <div className="p-4 space-y-4">
            <h2 className="text-2xl font-bold">Empleos</h2>
            {jobList.map((job, index) => (
                <JobCard key={index} {...job} />
            ))}
        </div>
    );
};

export default JobsScreen;
