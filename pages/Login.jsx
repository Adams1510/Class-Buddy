import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/teacher-dashboard');
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
                    <div className="w-16 h-16 mb-4 drop-shadow-xl">
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <path d="M20 25 C 20 15, 30 10, 50 10 C 70 10, 80 15, 80 25 L 80 75 C 80 85, 50 95, 50 95 C 50 95, 20 85, 20 75 Z" fill="#3b82f6" />
                            <path d="M50 10 L 50 95" stroke="#f27f0d" strokeLinecap="round" strokeWidth="6" />
                            <path d="M35 30 L 65 30" opacity="0.9" stroke="#ffffff" strokeLinecap="round" strokeWidth="6" />
                            <path d="M35 46 L 65 46" opacity="0.9" stroke="#ffffff" strokeLinecap="round" strokeWidth="6" />
                            <path d="M35 62 L 65 62" stroke="#f27f0d" strokeLinecap="round" strokeWidth="6" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-extrabold text-[#181411] tracking-tight">Class Buddy</h1>
                    <p className="text-[#8a7560] text-sm mt-1 font-medium">Manage your classroom with ease</p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-elevated border border-border-subtle overflow-hidden">
                    {/* Role Toggle */}
                    <div className="flex p-1.5 bg-[#f5f2f0] m-6 rounded-full relative">
                        {/* Active slide indicator */}
                        <div className="absolute inset-y-1.5 left-1.5 w-[calc(50%-6px)] bg-white rounded-full shadow-sm transition-all duration-300 z-0" />
                        <button
                            type="button"
                            className="relative z-10 flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-[#181411] cursor-default"
                        >
                            <span className="material-symbols-outlined text-lg text-primary">co_present</span>
                            Teacher
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate('/student-login')}
                            className="relative z-10 flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-[#8a7560] hover:text-[#181411] transition-colors"
                        >
                            <span className="material-symbols-outlined text-lg">face</span>
                            Student
                        </button>
                    </div>

                    <div className="px-8 pb-8">
                        {/* Welcome Heading */}
                        <div className="mb-6 text-center">
                            <h2 className="text-xl font-bold text-[#181411]">Welcome back, Teacher! 👋</h2>
                            <p className="text-[#8a7560] text-sm mt-1">Please enter your credentials to access your dashboard.</p>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Email */}
                            <div>
                                <label className="block text-sm font-semibold text-[#181411] mb-1.5" htmlFor="email">
                                    User Email
                                </label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a7560] text-xl">mail</span>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="email@example.com"
                                        required
                                        className="w-full pl-11 pr-4 py-3 bg-[#f5f2f0] border border-transparent rounded-xl text-[#181411] placeholder:text-[#8a7560]/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all text-sm"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <div className="flex justify-between items-center mb-1.5">
                                    <label className="block text-sm font-semibold text-[#181411]" htmlFor="password">
                                        Password
                                    </label>
                                    <button type="button" className="text-xs font-semibold text-primary hover:underline">
                                        Forgot password?
                                    </button>
                                </div>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a7560] text-xl">lock</span>
                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="••••••••"
                                        required
                                        className="w-full pl-11 pr-11 py-3 bg-[#f5f2f0] border border-transparent rounded-xl text-[#181411] placeholder:text-[#8a7560]/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all text-sm"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(v => !v)}
                                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8a7560] hover:text-primary transition-colors"
                                    >
                                        <span className="material-symbols-outlined text-xl">
                                            {showPassword ? 'visibility_off' : 'visibility'}
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary/90 active:scale-[0.98] text-white font-bold py-3.5 rounded-full shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2 mt-2 text-sm"
                            >
                                Login to My Classroom
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </button>
                        </form>

                        {/* Footer Link */}
                        <p className="text-center text-sm text-[#8a7560] mt-5">
                            Don't have a class yet?{' '}
                            <button type="button" className="text-primary font-semibold hover:underline">
                                Create an Account
                            </button>
                        </p>
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

export default Login;
