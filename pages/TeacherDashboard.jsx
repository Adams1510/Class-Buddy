import React from 'react';
import { useNavigate } from 'react-router-dom';

const TeacherDashboard = () => {
    const navigate = useNavigate();

    const classes = [
        {
            id: 'M1', period: 'Period 1', name: 'Class M1', subject: 'Mathematics - Advanced Algebra',
            status: { icon: 'pending_actions', color: 'text-orange-500', label: '3 pending grades' },
            students: 24, gradient: 'from-blue-400 to-indigo-600',
            bg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBQChubCr6eWEcB9NshAI1HD7ccom58oR-hQVtVudZY4D09rs0x-w472HBt5kfpJz_wTsCPrx0U9pc8DEmy4b8SRYUjycNs-JIMkm52J0tm4YmP9OaR_BgFUDwRRos09Wr0KdMpM5BhFkkOa-cc5JBp3OHE2wYJ2ZKKERcv9aT_Nuo0khb1XsqmGpn_ErhUK3N1mRsR8iovf6jU7vzjt2foUi7ejrdpUebxwdJDSwdHSMr6hbANKyrmEZ5I5sS7g8BFLQ1r_DFa9JV'
        },
        {
            id: 'M2', period: 'Period 2', name: 'Class M2', subject: 'Literature - Contemporary Fiction',
            status: { icon: 'check_circle', color: 'text-green-500', label: 'All caught up!' },
            students: 18, gradient: 'from-green-400 to-teal-600',
            bg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqYZSVhFokUtQii5MrLa1gILhpfxPXbbjR9oz28mbdnmNZ68RaVMlQkNujAHxSIy7iBDirj6bm9CQkembO_4-tHQ8Yj7X3ZV4qD5W1NN6w6wVxTO00qPoifsTWiZney6RVu6qCXs_WXAVG3RJKSJIOT46n2Vlr7DesXDdso9Sl-7zLx7wSFT_RR2KMEUliL1VL9SKFAeMpdV1xO1A_AxR-dHXmOMHknPkY0rQURU9HAhgLbitrcryf5PKlvqvJQDdu1EeBwimqlrIe'
        },
        {
            id: 'M3', period: 'Period 3', name: 'Class M3', subject: 'Science - Lab Experiments',
            status: { icon: 'notification_important', color: 'text-primary', label: '5 new submissions' },
            students: 22, gradient: 'from-orange-400 to-red-500',
            bg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJ21dP3uKd1YFRKsLqQpTuBr4RfdTb3QxRERCOa9izOK834gar4LSgoSHCLNTBedF-mmOFNHm5pteaNfJt9J_nj_Gmd5MrZxFhpZWzdXVoPIKijJs9mgW2sGfu8ZcLPBX2DbqA89SAiR-ThQqOVRmvTHg8mSh0qa1qLTD6wNDiVByPwXGorQYknnvyPl-Iphlsqp55EbCd48pRP_4_nnxmCK5xJ6sD3WwDOWMXu0W-IATZ_YHxMEOSDQ1YUdUa862rSSrDhQ3VJWMq'
        },
        {
            id: 'M4', period: 'Period 4', name: 'Class M4', subject: 'History - World War II',
            status: { icon: 'event_busy', color: 'text-red-500', label: 'Due tomorrow' },
            students: 30, gradient: 'from-purple-400 to-pink-600',
            bg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqkT4DZ-_c6z2Rs6SrRofFsryEmQrgNqdCJh03m6QEQk5dKx7b0pXEDjdPoEwBPZ3JMnPyLQ_tRy1t7sjnYRe4fc7UpRMQ3X2H7oNHtKqppAInEklbdOhs5rjYorC2hDqHPjxfon0Yk8SgcgrWHQLVLT85I0dclruTq7XYQjJEB23RO94ujuKCCrxiYIHKSHh81BOgHPx-29OlrF-sNwLC0lWq_x5SFsO0DYh08KO93GjpsECHiRb0SVdTJlfLN5PSNHI-L8cdLEWE'
        },
        {
            id: 'M5', period: 'Period 5', name: 'Class M5', subject: 'Art - Modern Techniques',
            status: { icon: 'edit_note', color: 'text-gray-500', label: '2 drafts in progress' },
            students: 15, gradient: 'from-yellow-400 to-orange-500',
            bg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsfjMUMlL7nbeGVELh3HWd-8CKjQibAGePd2YrkJl3zLspNYTY1nQv2W1i1H2LHmhKfkRbH1kKF_2T1wOSvnFb3XVEFvH4P9O63SsMr8MwdtUvR-0GzwXVjrVyjZDyk4xWO8HT5gC0cXLyMydmmHwHj-9GHG0fbHf41CWz6dPO68OH96d0R4A_ZHenufVQVxrJ1FZOq5eehwy_3YKIhz8JAZ7apilQihBrUxTqKBaSzYcKasmyM0W8-pAqavW3PLOWwmkaD5604w_V'
        },
        {
            id: 'M6', period: 'Period 6', name: 'Class M6', subject: 'CS - Introduction to Python',
            status: { icon: 'forum', color: 'text-blue-500', label: '10 student posts' },
            students: 25, gradient: 'from-cyan-400 to-blue-600',
            bg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsLxE6zVXsfqkNw7ibZzPSiptFMrZFOcsvAeCmhi1z67K-2BNEu0KwAqrOSOKqe2lerGLSBdi1lCB_4DJrgjnvYNaMOhc_vXVUfLufx2YXvxL-Z-IEX5RNnk2XjTQfZlJEwATCTfF81Vuvy2xk1NBK7NFzThT58-DtTOQDIL5JqnW5V3ZSvBHGhSDMGob55W5HfdDMg9dccz4cavXQVADI2mIfWl8gg_Eviz6WMpsV2vhOgKfsj9FLFeCmXh9RW6hceaJ6kB2SZ5WZ'
        },
    ];

    return (
        <div className="bg-[#f5f7f8] font-display text-[#181411] min-h-screen">
            <div className="flex h-screen overflow-hidden">
                {/* ── Sidebar ── */}
                <aside className="w-64 bg-white border-r border-border-subtle flex flex-col h-full shrink-0">
                    {/* Branding */}
                    <div className="p-6 flex items-center gap-3">
                        <div className="bg-primary rounded-lg p-2 text-white flex items-center justify-center">
                            <span className="material-symbols-outlined">school</span>
                        </div>
                        <div>
                            <h1 className="text-lg font-bold leading-tight">Class Buddy</h1>
                            <p className="text-xs text-[#8a7560]">Teacher Center</p>
                        </div>
                    </div>

                    {/* Nav */}
                    <nav className="flex-1 px-4 space-y-1 mt-2">
                        {[
                            { icon: 'dashboard', label: 'Dashboard', active: true, path: '/teacher-dashboard' },
                            { icon: 'group', label: 'All Classes', path: '#' },
                            { icon: 'fact_check', label: 'Attendance', path: '/attendance' },
                            { icon: 'campaign', label: 'Announcements', path: '#' },
                            { icon: 'archive', label: 'Archive', path: '#' },
                        ].map(item => (
                            <a
                                key={item.label}
                                href={item.path !== '#' ? undefined : '#'}
                                onClick={item.path !== '#' ? (e) => { e.preventDefault(); navigate(item.path); } : undefined}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors cursor-pointer ${item.active
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-[#181411] hover:bg-soft-blue'
                                    }`}
                            >
                                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                                <span className="text-sm">{item.label}</span>
                            </a>
                        ))}
                    </nav>

                    {/* Sidebar Footer */}
                    <div className="p-4 mt-auto space-y-3">
                        <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100">
                            <p className="text-[10px] font-bold text-blue-800 uppercase tracking-widest mb-1">Weekly Tip</p>
                            <p className="text-xs text-blue-600 leading-relaxed">Schedule your week in advance to keep students updated!</p>
                        </div>
                        <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95">
                            <span className="material-symbols-outlined text-[20px]">send</span>
                            <span className="text-sm">Post to All Buddies</span>
                        </button>
                    </div>
                </aside>

                {/* ── Main Content ── */}
                <main className="flex-1 flex flex-col overflow-hidden">
                    {/* Header */}
                    <header className="h-16 bg-white border-b border-border-subtle flex items-center justify-between px-8 shrink-0">
                        <div className="flex items-center gap-4">
                            <div className="hidden md:flex relative items-center">
                                <span className="material-symbols-outlined absolute left-3 text-[#8a7560] text-[20px]">search</span>
                                <input
                                    className="bg-[#f5f2f0] border-none rounded-full pl-10 pr-4 py-2 text-sm w-72 focus:ring-2 focus:ring-primary/20 outline-none"
                                    placeholder="Search students or classes..."
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="text-[#8a7560] hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                            <button className="text-[#8a7560] hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">settings</span>
                            </button>
                            <div className="h-6 w-px bg-border-subtle" />
                            <div className="flex items-center gap-3">
                                <div className="text-right">
                                    <p className="text-sm font-bold leading-none">Teacher Adams</p>
                                    <p className="text-[9px] text-[#8a7560] mt-0.5 uppercase font-bold tracking-widest">Premium Teacher</p>
                                </div>
                                <div
                                    className="size-9 rounded-full bg-cover bg-center border-2 border-primary/20"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBmJUo69Vzz6dVgTxLfoMjkTryC678TAjz0oU-VSKO_H-2TFR6czIKZHwWIRzPVk3ZG00w5iRrCAxTjSvb50nk4aXylTNI6wuECFaxXIfP-i-5hC0Q-K2SEGnDnz4-mQKtXZKHiCzmEnvV2e82WYQ9TeAvpsqlyRH_TP_NmWdgR19RNkQaAq3RBIBdZbE6QyvxU7ApSkR903WMZMontJd0xtP7uUwp2OCRZ4_MrATFKgd_4NLE1EvWSnOzMEuBQ4Ulwe3Uo9XgmxCJU')" }}
                                />
                            </div>
                        </div>
                    </header>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto p-8 lg:p-10">
                        {/* Page Greeting */}
                        <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
                            <div>
                                <h2 className="text-3xl font-black tracking-tight mb-1">Good morning, Teacher Adams! 👋</h2>
                                <p className="text-[#8a7560] font-medium text-sm">You have 8 tasks to complete across 6 active classrooms today.</p>
                            </div>
                            <div className="flex gap-3">
                                <button className="bg-white border border-border-subtle text-[#181411] px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                                    Schedule
                                </button>
                                <button className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[18px]">add</span>
                                    New Class
                                </button>
                            </div>
                        </div>

                        {/* Stats Widgets */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                            {[
                                { icon: 'person', label: 'Total Students', value: '142', bg: 'bg-blue-50', color: 'text-blue-500' },
                                { icon: 'assignment', label: 'Submissions', value: '28', bg: 'bg-orange-50', color: 'text-orange-500' },
                                { icon: 'check_circle', label: 'Graded Today', value: '12', bg: 'bg-green-50', color: 'text-green-500' },
                                { icon: 'chat', label: 'Unread Posts', value: '5', bg: 'bg-purple-50', color: 'text-purple-500' },
                            ].map(stat => (
                                <div key={stat.label} className="bg-white p-5 rounded-2xl border border-border-subtle flex items-center gap-4">
                                    <div className={`${stat.bg} ${stat.color} p-3 rounded-xl`}>
                                        <span className="material-symbols-outlined">{stat.icon}</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-[#8a7560] font-bold uppercase tracking-widest mb-0.5">{stat.label}</p>
                                        <p className="text-2xl font-black">{stat.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Active Classrooms */}
                        <div className="mb-5 flex items-center justify-between">
                            <h3 className="text-xl font-black">Active Classrooms</h3>
                            <a className="text-sm font-bold text-primary hover:underline" href="#">View All</a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {classes.map(cls => (
                                <div key={cls.id} className="bg-white rounded-2xl border border-border-subtle overflow-hidden hover:shadow-xl transition-all duration-300 group">
                                    {/* Card Header Image */}
                                    <div
                                        className={`h-36 bg-gradient-to-br ${cls.gradient} relative p-5 flex flex-col justify-end`}
                                        style={{ backgroundImage: `url('${cls.bg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                    >
                                        <div className="absolute inset-0 bg-black/20" />
                                        <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-white font-bold uppercase tracking-widest">
                                            {cls.period}
                                        </div>
                                        <h4 className="text-white text-xl font-bold relative z-10">{cls.name}</h4>
                                        <p className="text-white/90 text-xs relative z-10 font-medium mt-0.5">{cls.subject}</p>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-5">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-2">
                                                <span className={`material-symbols-outlined ${cls.status.color} text-[18px]`}>{cls.status.icon}</span>
                                                <span className="text-sm font-bold">{cls.status.label}</span>
                                            </div>
                                            <span className="text-xs text-[#8a7560] font-semibold">{cls.students} Students</span>
                                        </div>
                                        <button
                                            className="w-full py-2.5 rounded-xl border border-border-subtle text-sm font-bold hover:bg-soft-blue transition-colors text-center"
                                            onClick={() => navigate('/grading')}
                                        >
                                            View Portals
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default TeacherDashboard;
