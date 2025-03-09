import { Job } from "@/types";
import { useState } from "react";

export default function JobResult() {
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

    /* This is for dummy */
    function getCompanyLogo(companyName: string): string {
        const baseUrl = "https://ui-avatars.com/api";
        const params = new URLSearchParams({
            name: companyName,
            background: "random",
            size: "128",
            format: "svg",
            bold: "true"
        });
        
        return `${baseUrl}/?${params.toString()}`;
    }

    // Dummy data - replace with actual API data
    const jobs: Job[] = [
        {
            id: 1,
            company: "Google Inc",
            logo: getCompanyLogo("Google Inc"),
            title: "Senior Developer",
            location: "Mountain View, CA",
            type: "Full-time",
            salary: "$150k - $200k",
            created_at: "2d ago",
            description: "Join our team to build next-generation web applications..."
        },
        {
            id: 2,
            company: "Microsoft",
            logo: getCompanyLogo("Microsoft"),
            title: "Mid Developer",
            location: "Redmond, WA",
            type: "Full-time",
            salary: "$130k - $160k",
            created_at: "1d ago",
            description: "Looking for an experienced developer to join our cloud team..."
        },
        {
            id: 3,
            company: "Apple",
            logo: getCompanyLogo("Apple"),
            title: "iOS Developer",
            location: "Cupertino, CA",
            type: "Full-time",
            salary: "$140k - $180k",
            created_at: "3d ago",
            description: "Create innovative mobile applications for Apple platforms..."
        },
        {
            id: 4,
            company: "Meta",
            logo: getCompanyLogo("Meta"),
            title: "React Developer",
            location: "Menlo Park, CA",
            type: "Full-time",
            salary: "$145k - $190k",
            created_at: "4d ago",
            description: "Join our team building the future of social connectivity..."
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex gap-6">
                {/* Left side - Job Cards */}
                <div className="flex-1">
                    <div className="grid gap-4">
                        {jobs.map((job) => (
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