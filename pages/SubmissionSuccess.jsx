import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubmissionSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#f5f7f8] font-display flex flex-col items-center justify-center p-6">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-60" />
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            </div>

            <div className="relative w-full max-w-md">
                {/* Success Card */}
                <div className="bg-white rounded-3xl shadow-elevated border border-border-subtle overflow-hidden text-center">
                    {/* Top decorative bar */}
                    <div className="h-2 bg-gradient-to-r from-green-400 via-green-500 to-teal-400" />

                    <div className="p-10">
                        {/* Animated checkmark circle */}
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
                                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-300">
                                        <span className="material-symbols-outlined text-white text-4xl">check</span>
                                    </div>
                                </div>
                                {/* Sparkle effects */}
                                <span className="material-symbols-outlined absolute -top-1 -right-2 text-primary text-2xl animate-pulse">auto_awesome</span>
                                <span className="material-symbols-outlined absolute bottom-0 -left-3 text-green-300 text-xl animate-pulse" style={{ animationDelay: '0.3s' }}>star</span>
                            </div>
                        </div>

                        {/* Success heading */}
                        <h1 className="text-2xl font-extrabold text-[#181411] mb-2 tracking-tight">
                            Assignment Handed In! 🎉
                        </h1>
                        <p className="text-[#8a7560] text-sm mb-8 leading-relaxed">
                            Great work! Your teacher will review and grade your submission.
                        </p>

                        {/* Assignment Details Card */}
                        <div className="bg-[#f5f2f0] rounded-2xl p-5 mb-8 text-left space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="bg-accent-blue p-2 rounded-lg">
                                    <span className="material-symbols-outlined text-accent-blue-dark text-[20px]">assignment</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-[#8a7560] uppercase tracking-widest">Assignment</p>
                                    <p className="text-sm font-bold text-[#181411]">Math Homework: Fractions</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-purple-100 p-2 rounded-lg">
                                    <span className="material-symbols-outlined text-purple-500 text-[20px]">school</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-[#8a7560] uppercase tracking-widest">Class</p>
                                    <p className="text-sm font-bold text-[#181411]">Class M1 — Mathematics</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-green-100 p-2 rounded-lg">
                                    <span className="material-symbols-outlined text-green-500 text-[20px]">schedule</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-[#8a7560] uppercase tracking-widest">Submitted</p>
                                    <p className="text-sm font-bold text-[#181411]">Just now · On time ✓</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="space-y-3">
                            <button
                                onClick={() => navigate('/student-portal')}
                                className="w-full bg-primary hover:bg-primary/90 active:scale-[0.98] text-white font-bold py-4 rounded-full shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2"
                            >
                                <span className="material-symbols-outlined">home</span>
                                Back to My Desk
                            </button>
                            <button
                                onClick={() => navigate('/student-portal')}
                                className="w-full bg-[#f5f2f0] hover:bg-[#e6e0db] text-[#8a7560] font-bold py-3.5 rounded-full transition-all text-sm"
                            >
                                View All Tasks
                            </button>
                        </div>
                    </div>
                </div>

                {/* Motivational footer */}
                <p className="text-center text-xs text-[#8a7560] mt-5 font-medium">
                    🌟 Keep it up! You're doing amazing!
                </p>
            </div>
        </div>
    );
};

export default SubmissionSuccess;
