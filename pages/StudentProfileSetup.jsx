import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentProfileSetup = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/student-portal');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f5f7f8] font-display p-0 md:p-6">
            <div className="bg-white w-full min-h-screen md:min-h-0 md:max-w-[520px] md:shadow-elevated md:rounded-2xl overflow-hidden border-none md:border md:border-border-subtle">
                {/* Gradient Top Bar */}
                <div className="h-2 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

                <div className="p-8 md:p-12">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                            <span className="material-symbols-outlined text-primary text-3xl">school</span>
                        </div>
                        <h1 className="text-[#181411] text-2xl font-extrabold tracking-tight mb-2 leading-tight">
                            Welcome! Let's set up your desk.
                        </h1>
                        <p className="text-[#8a7560] text-sm">
                            Join your classmates and start your learning journey.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {/* Photo Upload */}
                        <div className="flex flex-col items-center mb-10">
                            <div className="relative group cursor-pointer">
                                <div className="w-32 h-32 rounded-full border-4 border-dashed border-primary/30 flex flex-col items-center justify-center bg-primary/5 hover:bg-primary/10 transition-colors">
                                    <span className="material-symbols-outlined text-primary text-4xl mb-1">photo_camera</span>
                                    <span className="text-xs font-bold text-primary uppercase tracking-wider">Upload</span>
                                </div>
                                <div className="absolute bottom-1 right-1 w-8 h-8 bg-primary rounded-full border-4 border-white flex items-center justify-center text-white">
                                    <span className="material-symbols-outlined text-sm">add</span>
                                </div>
                            </div>
                            <p className="mt-3 text-[#181411] font-medium text-sm">Upload your photo</p>
                        </div>

                        {/* Input Fields */}
                        <div className="space-y-5">
                            {/* Student ID (disabled) */}
                            <div>
                                <label className="block text-[#181411] text-sm font-semibold mb-1.5 ml-1">Student ID</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#8a7560] text-xl">fingerprint</span>
                                    <input
                                        disabled
                                        defaultValue="M1-001"
                                        type="text"
                                        className="w-full h-14 pl-12 pr-4 bg-[#f5f2f0] border border-border-subtle text-[#8a7560] rounded-xl cursor-not-allowed font-medium outline-none"
                                    />
                                </div>
                            </div>

                            {/* Full Name */}
                            <div>
                                <label className="block text-[#181411] text-sm font-semibold mb-1.5 ml-1">Full Name</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#8a7560] text-xl">person</span>
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="w-full h-14 pl-12 pr-4 bg-white border border-border-subtle text-[#181411] rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary/40 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            {/* Nickname */}
                            <div>
                                <div className="flex justify-between items-end mb-1.5 ml-1">
                                    <label className="text-[#181411] text-sm font-semibold">Nickname</label>
                                    <span className="text-[10px] text-primary font-bold uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded-full">Friendly name</span>
                                </div>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#8a7560] text-xl">sentiment_satisfied</span>
                                    <input
                                        type="text"
                                        placeholder="What should we call you?"
                                        className="w-full h-14 pl-12 pr-4 bg-white border border-border-subtle text-[#181411] rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary/40 outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="w-full h-14 bg-primary hover:bg-primary/90 active:scale-[0.98] transition-all text-white font-bold text-base rounded-full shadow-lg shadow-primary/25 flex items-center justify-center gap-2 group"
                            >
                                <span>Create My Portal</span>
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default StudentProfileSetup;
