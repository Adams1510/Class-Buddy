import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentLogin = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/student-portal');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f7f8] font-display p-4">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
            </div>

            <div className="relative w-full max-w-md">
                {/* Logo & Branding */}
                <div className="flex flex-col items-center mb-8">
                    <div
                        onClick={() => navigate('/')}
                        className="w-16 h-16 mb-4 drop-shadow-xl cursor-pointer hover:scale-105 transition-transform"
                    >
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <path d="M20 25 C 20 15, 30 10, 50 10 C 70 10, 80 15, 80 25 L 80 75 C 80 85, 50 95, 50 95 C 50 95, 20 85, 20 75 Z" fill="#3b82f6" />
                            <path d="M50 10 L 50 95" stroke="#f27f0d" strokeLinecap="round" strokeWidth="6" />
                            <path d="M35 30 L 65 30" opacity="0.9" stroke="#ffffff" strokeLinecap="round" strokeWidth="6" />
                            <path d="M35 46 L 65 46" opacity="0.9" stroke="#ffffff" strokeLinecap="round" strokeWidth="6" />
                            <path d="M35 62 L 65 62" stroke="#f27f0d" strokeLinecap="round" strokeWidth="6" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-extrabold text-[#181411] tracking-tight">Class Buddy</h1>
                    <p className="text-[#8a7560] text-sm mt-1 font-medium">Your friendly learning companion</p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-elevated border border-border-subtle overflow-hidden">
                    {/* Role Toggle — Student is ACTIVE */}
                    <div className="flex p-1.5 bg-[#f5f2f0] m-6 rounded-full relative">
                        {/* Active slide indicator — right side */}
                        <div className="absolute inset-y-1.5 right-1.5 w-[calc(50%-6px)] bg-white rounded-full shadow-sm transition-all duration-300 z-0" />
                        <button
                            type="button"
                            onClick={() => navigate('/')}
                            className="relative z-10 flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-[#8a7560] hover:text-[#181411] transition-colors"
                        >
                            <span className="material-symbols-outlined text-lg">co_present</span>
                            Teacher
                        </button>
                        <button
                            type="button"
                            className="relative z-10 flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-[#181411] cursor-default"
                        >
                            <span className="material-symbols-outlined text-lg text-primary">face</span>
                            Student
                        </button>
                    </div>

                    <div className="px-8 pb-8">
                        {/* Welcome Heading */}
                        <div className="mb-6 text-center">
                            <h2 className="text-xl font-bold text-[#181411]">Hey there, Student! 🎒</h2>
                            <p className="text-[#8a7560] text-sm mt-1">Enter your Student ID to jump into your desk.</p>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Student ID */}
                            <div>
                                <label className="block text-sm font-semibold text-[#181411] mb-1.5" htmlFor="student-id">
                                    Enter your Student ID
                                </label>
                                <div className="relative group">
                                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a7560] group-focus-within:text-primary text-xl transition-colors">
                                        fingerprint
                                    </span>
                                    <input
                                        id="student-id"
                                        type="text"
                                        placeholder="e.g., M1-001"
                                        required
                                        className="w-full pl-11 pr-4 py-3 bg-[#f5f2f0] border border-transparent rounded-xl text-[#181411] placeholder:text-[#8a7560]/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all text-sm"
                                    />
                                </div>
                                <div className="flex items-start gap-1.5 mt-2 px-1">
                                    <span className="material-symbols-outlined text-primary text-[14px] mt-0.5 shrink-0">info</span>
                                    <p className="text-xs text-[#8a7560] italic leading-relaxed">
                                        Use the ID number given by Teacher Adams.
                                    </p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary/90 active:scale-[0.98] text-white font-bold py-4 rounded-full shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-3 mt-2 text-base group"
                            >
                                <span>Jump In!</span>
                                <span className="material-symbols-outlined group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                    rocket_launch
                                </span>
                            </button>
                        </form>

                        {/* Decorative subject icons */}
                        <div className="flex justify-center gap-6 mt-6 opacity-15 select-none pointer-events-none">
                            <span className="material-symbols-outlined text-3xl text-primary animate-pulse" style={{ animationDelay: '0s' }}>draw</span>
                            <span className="material-symbols-outlined text-3xl text-primary animate-pulse" style={{ animationDelay: '0.2s' }}>calculate</span>
                            <span className="material-symbols-outlined text-3xl text-primary animate-pulse" style={{ animationDelay: '0.4s' }}>science</span>
                            <span className="material-symbols-outlined text-3xl text-primary animate-pulse" style={{ animationDelay: '0.6s' }}>palette</span>
                        </div>
                    </div>
                </div>

                {/* Page Footer */}
                <div className="flex justify-center gap-6 mt-6">
                    <a href="#" className="text-xs text-[#8a7560] hover:text-primary transition-colors">Help Center</a>
                    <a href="#" className="text-xs text-[#8a7560] hover:text-primary transition-colors">Privacy Policy</a>
                    <a href="#" className="text-xs text-[#8a7560] hover:text-primary transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
    );
};

export default StudentLogin;
