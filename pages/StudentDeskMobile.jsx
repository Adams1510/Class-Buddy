import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentDeskMobile = () => {
    const navigate = useNavigate();
    const [activeNav, setActiveNav] = useState('dashboard');

    const classes = [
        { id: 'M1', name: 'Mathematics - Advanced Algebra', color: 'from-blue-400 to-indigo-600', period: 'Period 1' },
        { id: 'M2', name: 'Literature - Contemporary Fiction', color: 'from-green-400 to-teal-600', period: 'Period 2' },
        { id: 'M3', name: 'Science - Lab Experiments', color: 'from-orange-400 to-red-500', period: 'Period 3' },
        { id: 'M4', name: 'History - World War II', color: 'from-purple-400 to-pink-600', period: 'Period 4' },
    ];

    return (
        <div className="min-h-screen bg-[#f5f7f8] font-display flex flex-col max-w-lg mx-auto relative">
            {/* Top Header */}
            <header className="bg-white border-b border-border-subtle px-5 py-4 flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8">
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <path d="M20 25 C 20 15, 30 10, 50 10 C 70 10, 80 15, 80 25 L 80 75 C 80 85, 50 95, 50 95 C 50 95, 20 85, 20 75 Z" fill="#3b82f6" />
                            <path d="M50 10 L 50 95" stroke="#f27f0d" strokeLinecap="round" strokeWidth="6" />
                            <path d="M35 30 L 65 30" stroke="#fff" strokeLinecap="round" strokeWidth="6" opacity="0.9" />
                            <path d="M35 46 L 65 46" stroke="#fff" strokeLinecap="round" strokeWidth="6" opacity="0.9" />
                            <path d="M35 62 L 65 62" stroke="#f27f0d" strokeLinecap="round" strokeWidth="6" />
                        </svg>
                    </div>
                    <span className="text-[#181411] font-bold text-base">Class Buddy</span>
                </div>
                <div className="flex items-center gap-2">
                    <button className="w-9 h-9 rounded-full flex items-center justify-center bg-[#f5f2f0] text-[#8a7560] hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">notifications</span>
                    </button>
                    <div
                        className="size-9 rounded-full bg-cover bg-center border-2 border-primary/15"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmHDvlsY81A83jn_LMR4dS9lG1Ye8o2WMeABdNHBbJugnfffX05Nb1P39TKRi7xbUH5FUOR4AQugDZnuAeGbvZRMGeJcOuGUkhGvalsZXqBH__LROmc2EdN-4ybj43pnWcPc3xFom6sU79rQsjyjXY4oimrgi89bGECsB0uV0AdVnQ3wjRGGkMR48CB7SHGkAdRvk0PQCylrb1HKiuFy3bArWfsoQl7RWF3_FdW60z0wCcfy8ULE4QG7BEbgnaY1cLaq7uQFUnPuUN")' }}
                    />
                </div>
            </header>

            <div className="flex-1 overflow-y-auto pb-24 p-5 space-y-5">
                {/* Welcome Greeting Card */}
                <div className="bg-gradient-to-br from-primary to-orange-400 rounded-2xl p-6 text-white shadow-lg shadow-primary/25 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full" />
                    <p className="text-white/80 text-xs font-semibold mb-1 uppercase tracking-widest">Good morning! 🌤️</p>
                    <h2 className="text-2xl font-extrabold mb-1">Hi, Alex! 👋</h2>
                    <p className="text-white/90 text-sm">You have 8 tasks to complete today.</p>
                    <div className="mt-4 grid grid-cols-4 gap-2">
                        {[
                            { icon: 'person', value: '142', label: 'Students' },
                            { icon: 'pending', value: '28', label: 'Pending' },
                            { icon: 'grade', value: '12', label: 'Graded' },
                            { icon: 'forum', value: '5', label: 'Posts' },
                        ].map(stat => (
                            <div key={stat.label} className="bg-white/15 rounded-xl p-2 text-center">
                                <span className="material-symbols-outlined text-white/90 text-[18px]">{stat.icon}</span>
                                <p className="font-extrabold text-white text-lg leading-none mt-0.5">{stat.value}</p>
                                <p className="text-white/70 text-[9px] font-semibold">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Active Classrooms */}
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-[#181411] text-base">Active Classrooms</h3>
                        <button className="text-xs font-bold text-primary hover:underline">View All</button>
                    </div>
                    <div className="flex flex-col gap-3">
                        {classes.map(cls => (
                            <div key={cls.id} className="bg-white rounded-2xl border border-border-subtle overflow-hidden shadow-card hover:shadow-md transition-shadow">
                                <div className={`h-2 bg-gradient-to-r ${cls.color}`} />
                                <div className="p-4 flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cls.color} flex items-center justify-center text-white font-extrabold text-lg shadow-md shrink-0`}>
                                        {cls.id}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-bold text-sm text-[#181411] truncate">{cls.name}</p>
                                        <p className="text-xs text-[#8a7560]">{cls.period}</p>
                                    </div>
                                    <button
                                        onClick={() => navigate('/student-portal')}
                                        className="px-3 py-1.5 bg-[#f5f2f0] hover:bg-primary/10 hover:text-primary text-[#8a7560] rounded-lg text-xs font-bold transition-colors shrink-0"
                                    >
                                        Open
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div>
                    <h3 className="font-bold text-[#181411] text-base mb-3">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={() => navigate('/mobile-handin')}
                            className="bg-white rounded-2xl border border-border-subtle p-4 flex flex-col items-center gap-2 hover:border-primary/40 hover:shadow-md transition-all"
                        >
                            <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary">send</span>
                            </div>
                            <span className="text-xs font-bold text-[#181411]">Hand In</span>
                        </button>
                        <button
                            onClick={() => navigate('/student-portal')}
                            className="bg-white rounded-2xl border border-border-subtle p-4 flex flex-col items-center gap-2 hover:border-primary/40 hover:shadow-md transition-all"
                        >
                            <div className="w-11 h-11 bg-accent-blue rounded-xl flex items-center justify-center">
                                <span className="material-symbols-outlined text-accent-blue-dark">task</span>
                            </div>
                            <span className="text-xs font-bold text-[#181411]">My Desk</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation Bar */}
            <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg bg-white border-t border-border-subtle px-2 py-2 grid grid-cols-4 z-20">
                {[
                    { key: 'dashboard', icon: 'dashboard', label: 'Dashboard', onClick: () => { } },
                    { key: 'classes', icon: 'group', label: 'Classes', onClick: () => navigate('/student-portal') },
                    { key: 'alerts', icon: 'campaign', label: 'Alerts', onClick: () => { } },
                    { key: 'more', icon: 'menu', label: 'More', onClick: () => { } },
                ].map(item => (
                    <button
                        key={item.key}
                        onClick={() => { setActiveNav(item.key); item.onClick(); }}
                        className={`flex flex-col items-center gap-0.5 py-1.5 rounded-xl transition-colors ${activeNav === item.key ? 'text-primary' : 'text-[#8a7560] hover:text-primary'
                            }`}
                    >
                        <span className={`material-symbols-outlined text-[24px] ${activeNav === item.key ? 'font-bold' : ''}`}>
                            {item.icon}
                        </span>
                        <span className="text-[10px] font-semibold">{item.label}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default StudentDeskMobile;
