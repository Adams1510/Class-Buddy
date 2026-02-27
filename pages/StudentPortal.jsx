import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentPortal = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('desk');

    const newTasks = [
        { id: 1, subject: 'Mathematics', subjectColor: 'bg-accent-blue text-accent-blue-dark', title: 'Math Homework: Fractions', due: 'Oct 12', icon: 'calendar_today' },
        { id: 2, subject: 'Science', subjectColor: 'bg-green-100 text-green-700', title: 'Science Lab Report', due: 'Oct 15', icon: 'calendar_today' },
        { id: 3, subject: 'English', subjectColor: 'bg-yellow-100 text-yellow-700', title: 'Book Review: Chapter 4', due: 'Oct 18', icon: 'calendar_today' },
        { id: 4, subject: 'Art', subjectColor: 'bg-pink-100 text-pink-700', title: 'Colour Theory Exercise', due: 'Oct 20', icon: 'calendar_today' },
    ];

    const inProgress = [
        { id: 3, subject: 'History', subjectColor: 'bg-purple-100 text-purple-700', title: 'History Essay: Renaissance', progress: 65, lastActive: '2 hours ago' },
        { id: 4, subject: 'Art', subjectColor: 'bg-orange-100 text-orange-700', title: 'Art Project: Sketching', progress: 30, lastActive: 'Yesterday' },
    ];

    const graded = [
        { id: 5, subject: 'English', subjectColor: 'bg-yellow-100 text-yellow-700', title: 'Vocabulary Quiz #4', gradedOn: 'Oct 05', grade: 'A+' },
        { id: 6, subject: 'Mathematics', subjectColor: 'bg-accent-blue text-accent-blue-dark', title: 'Algebra Basics Test', gradedOn: 'Oct 01', grade: 'A' },
    ];

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-[#f5f7f8] text-[#181411] font-display">
            {/* ── Top Nav ── */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-border-subtle bg-white px-6 md:px-10 py-3 sticky top-0 z-50 shadow-sm">
                <div className="flex items-center gap-3 text-primary">
                    <div className="w-8 h-8">
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <path d="M20 25 C 20 15, 30 10, 50 10 C 70 10, 80 15, 80 25 L 80 75 C 80 85, 50 95, 50 95 C 50 95, 20 85, 20 75 Z" fill="#3b82f6" />
                            <path d="M50 10 L 50 95" stroke="#f27f0d" strokeLinecap="round" strokeWidth="6" />
                            <path d="M35 30 L 65 30" opacity="0.9" stroke="#ffffff" strokeLinecap="round" strokeWidth="6" />
                            <path d="M35 46 L 65 46" opacity="0.9" stroke="#ffffff" strokeLinecap="round" strokeWidth="6" />
                            <path d="M35 62 L 65 62" stroke="#f27f0d" strokeLinecap="round" strokeWidth="6" />
                        </svg>
                    </div>
                    <h2 className="text-[#181411] text-lg font-bold leading-tight tracking-tight">Class Buddy</h2>
                </div>
                <div className="hidden md:flex flex-1 justify-center">
                    <nav className="flex items-center gap-8">
                        {[
                            { key: 'desk', label: 'Personal Desk' },
                            { key: 'grades', label: 'Grades' },
                            { key: 'calendar', label: 'Calendar' },
                            { key: 'messages', label: 'Messages' },
                        ].map(tab => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`text-sm font-semibold py-1 border-b-2 transition-colors ${activeTab === tab.key
                                        ? 'text-primary border-primary'
                                        : 'text-[#8a7560] border-transparent hover:text-primary'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 bg-primary/10 text-primary text-sm font-bold rounded-lg hover:bg-primary/20 transition-all">
                        Welcome, Alex!
                    </button>
                    <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmHDvlsY81A83jn_LMR4dS9lG1Ye8o2WMeABdNHBbJugnfffX05Nb1P39TKRi7xbUH5FUOR4AQugDZnuAeGbvZRMGeJcOuGUkhGvalsZXqBH__LROmc2EdN-4ybj43pnWcPc3xFom6sU79rQsjyjXY4oimrgi89bGECsB0uV0AdVnQ3wjRGGkMR48CB7SHGkAdRvk0PQCylrb1HKiuFy3bArWfsoQl7RWF3_FdW60z0wCcfy8ULE4QG7BEbgnaY1cLaq7uQFUnPuUN")' }}
                    />
                </div>
            </header>

            <main className="flex-1 p-6 md:p-10 max-w-[1440px] mx-auto w-full">
                {/* Page Title */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-black tracking-tight">Personal Desk</h1>
                        <p className="text-[#8a7560] text-sm mt-1">Manage your classroom tasks and track your progress.</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="bg-accent-blue px-4 py-2 rounded-xl flex items-center gap-2">
                            <span className="material-symbols-outlined text-accent-blue-dark text-[20px]">task_alt</span>
                            <span className="text-accent-blue-dark font-bold text-sm">
                                {newTasks.length + inProgress.length} Tasks Active
                            </span>
                        </div>
                        <button className="bg-white border border-primary/20 text-primary p-2 rounded-lg hover:bg-primary/5 transition-colors">
                            <span className="material-symbols-outlined">filter_list</span>
                        </button>
                    </div>
                </div>

                {/* Kanban Board */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Column: New Tasks */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between px-2">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-6 bg-primary rounded-full" />
                                <h3 className="text-base font-bold">New Tasks</h3>
                                <span className="bg-[#f5f2f0] text-[#8a7560] text-xs font-bold px-2 py-0.5 rounded-full">{newTasks.length}</span>
                            </div>
                            <span className="material-symbols-outlined text-[#8a7560] cursor-pointer">more_horiz</span>
                        </div>
                        <div className="flex flex-col gap-3 bg-primary/5 p-4 rounded-2xl border border-dashed border-primary/20">
                            {newTasks.map(task => (
                                <div key={task.id} className="bg-white p-4 rounded-xl shadow-card border border-primary/5 hover:shadow-md transition-shadow group">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${task.subjectColor}`}>
                                            {task.subject}
                                        </span>
                                        <span className="material-symbols-outlined text-[#e6e0db] group-hover:text-primary cursor-grab">drag_indicator</span>
                                    </div>
                                    <h4 className="text-[#181411] font-bold text-sm mb-2">{task.title}</h4>
                                    <p className="text-[#8a7560] text-xs mb-3 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">{task.icon}</span>
                                        Due: {task.due}
                                    </p>
                                    <button
                                        onClick={() => navigate('/mobile-handin')}
                                        className="w-full bg-primary text-white py-2 rounded-lg font-bold text-xs hover:bg-primary/90 transition-colors flex items-center justify-center gap-1.5"
                                    >
                                        <span className="material-symbols-outlined text-sm">send</span>
                                        Hand In
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column: In Progress */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between px-2">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-6 bg-accent-blue-dark rounded-full" />
                                <h3 className="text-base font-bold">In Progress</h3>
                                <span className="bg-[#f5f2f0] text-[#8a7560] text-xs font-bold px-2 py-0.5 rounded-full">{inProgress.length}</span>
                            </div>
                            <span className="material-symbols-outlined text-[#8a7560] cursor-pointer">more_horiz</span>
                        </div>
                        <div className="flex flex-col gap-3 bg-accent-blue/30 p-4 rounded-2xl border border-dashed border-accent-blue-dark/20">
                            {inProgress.map(task => (
                                <div key={task.id} className="bg-white p-4 rounded-xl shadow-card border border-primary/5 hover:shadow-md transition-shadow group">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${task.subjectColor}`}>
                                            {task.subject}
                                        </span>
                                        <span className="material-symbols-outlined text-[#e6e0db] group-hover:text-primary cursor-grab">drag_indicator</span>
                                    </div>
                                    <h4 className="text-[#181411] font-bold text-sm mb-2">{task.title}</h4>
                                    <div className="w-full bg-gray-100 h-1.5 rounded-full mb-1 overflow-hidden">
                                        <div className="bg-accent-blue-dark h-full rounded-full" style={{ width: `${task.progress}%` }} />
                                    </div>
                                    <p className="text-[#8a7560] text-xs mb-3 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">schedule</span>
                                        Last active: {task.lastActive}
                                    </p>
                                    <button
                                        onClick={() => navigate('/mobile-handin')}
                                        className="w-full bg-primary text-white py-2 rounded-lg font-bold text-xs hover:bg-primary/90 transition-colors flex items-center justify-center gap-1.5"
                                    >
                                        <span className="material-symbols-outlined text-sm">send</span>
                                        Hand In
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column: Done & Graded */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between px-2">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-6 bg-green-500 rounded-full" />
                                <h3 className="text-base font-bold">Done &amp; Graded</h3>
                                <span className="bg-[#f5f2f0] text-[#8a7560] text-xs font-bold px-2 py-0.5 rounded-full">{graded.length}</span>
                            </div>
                            <span className="material-symbols-outlined text-[#8a7560] cursor-pointer">more_horiz</span>
                        </div>
                        <div className="flex flex-col gap-3 bg-green-50/50 p-4 rounded-2xl border border-dashed border-green-200">
                            {graded.map(task => (
                                <div key={task.id} className="bg-white/80 p-4 rounded-xl shadow-card border border-green-100 opacity-90 group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-14 h-14 bg-green-500/10 rounded-bl-full flex items-center justify-center pl-3 pb-3">
                                        <span className="text-green-600 font-black text-lg">{task.grade}</span>
                                    </div>
                                    <div className="flex justify-between items-start mb-2">
                                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${task.subjectColor}`}>
                                            {task.subject}
                                        </span>
                                    </div>
                                    <h4 className="text-[#181411]/60 font-bold text-sm mb-2">{task.title}</h4>
                                    <p className="text-green-600 text-xs mb-3 flex items-center gap-1 font-semibold">
                                        <span className="material-symbols-outlined text-sm">verified</span>
                                        Graded on {task.gradedOn}
                                    </p>
                                    <button
                                        onClick={() => navigate('/mobile-grading')}
                                        className="w-full bg-[#f5f2f0] text-[#8a7560] py-2 rounded-lg font-bold text-xs hover:bg-[#e6e0db] transition-colors flex items-center justify-center gap-1.5"
                                    >
                                        <span className="material-symbols-outlined text-sm">visibility</span>
                                        View Feedback
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* Mobile FAB */}
            <div className="md:hidden fixed bottom-4 right-4">
                <button
                    onClick={() => navigate('/mobile-handin')}
                    className="size-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
                >
                    <span className="material-symbols-outlined">add</span>
                </button>
            </div>

            {/* Footer */}
            <footer className="mt-auto py-6 border-t border-border-subtle px-10 flex flex-col md:flex-row justify-between items-center gap-4 bg-white/50">
                <div className="flex items-center gap-2 text-[#8a7560]">
                    <span className="material-symbols-outlined text-sm">copyright</span>
                    <span className="text-xs font-medium">2024 Class Buddy Learning Inc.</span>
                </div>
                <div className="flex gap-6">
                    <a className="text-xs text-[#8a7560] hover:text-primary" href="#">Help Center</a>
                    <a className="text-xs text-[#8a7560] hover:text-primary" href="#">Privacy Policy</a>
                    <a className="text-xs text-[#8a7560] hover:text-primary" href="#">Terms of Service</a>
                </div>
            </footer>
        </div>
    );
};

export default StudentPortal;
