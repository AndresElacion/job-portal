import { Job } from "@/types";
import { useState } from "react";
interface JobResultProps {
    data: Job[];
}

export default function JobResult({ data }: JobResultProps) {
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

    console.log(data);
    if (!data || data.length === 0) {
        return <div>No jobs available</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex gap-6">
                {/* Left side - Job Cards */}
                <div className="flex-1">
                    <div className="grid gap-4">
                        {data.map((job) => (
                            <button
                                key={job.id}
                                onClick={() => setSelectedJob(job)}
                                className={`w-full text-left p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${
                                    selectedJob?.id === job.id
                                        ? 'border-orange-500 bg-orange-50'
                                        : 'border-gray-200 bg-white'
                                }`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                                        <img
                                            src={job.logo}
                                            alt={job.company}
                                            className="w-8 h-8 object-contain"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-medium text-gray-900">
                                            {job.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {job.company}
                                        </p>
                                        <div className="mt-2 flex items-center gap-3 text-sm text-gray-500">
                                            <span>{job.location}</span>
                                            <span>•</span>
                                            <span>{job.type}</span>
                                            <span>•</span>
                                            <span>{job.salary}</span>
                                        </div>
                                    </div>
                                    <span className="text-sm text-gray-400">
                                        {job.created_at}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right side - Job Details */}
                <div className="w-[480px] sticky top-20">
                    {selectedJob ? (
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <div className="flex items-start gap-4 border-b border-gray-100 pb-6">
                                <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center">
                                    <img
                                        src={selectedJob.logo}
                                        alt={selectedJob.company}
                                        className="w-10 h-10 object-contain"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl font-semibold text-gray-900">
                                        {selectedJob.title}
                                    </h2>
                                    <p className="text-gray-600">
                                        {selectedJob.company}
                                    </p>
                                    <div className="mt-2 flex items-center gap-3 text-sm text-gray-500">
                                        <span>{selectedJob.location}</span>
                                        <span>•</span>
                                        <span>{selectedJob.type}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-6 space-y-6">
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">
                                        Salary Range
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        {selectedJob.salary}
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">
                                        Job Description
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        {selectedJob.description}
                                    </p>
                                </div>

                                <button className="w-full px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors duration-200">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-center text-gray-500">
                            Select a job to view details
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
