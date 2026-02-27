import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const students = [
    { id: 'M1-001', name: 'Alex Johnson', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmHDvlsY81A83jn_LMR4dS9lG1Ye8o2WMeABdNHBbJugnfffX05Nb1P39TKRi7xbUH5FUOR4AQugDZnuAeGbvZRMGeJcOuGUkhGvalsZXqBH__LROmc2EdN-4ybj43pnWcPc3xFom6sU79rQsjyjXY4oimrgi89bGECsB0uV0AdVnQ3wjRGGkMR48CB7SHGkAdRvk0PQCylrb1HKiuFy3bArWfsoQl7RWF3_FdW60z0wCcfy8ULE4QG7BEbgnaY1cLaq7uQFUnPuUN', status: 'present' },
    { id: 'M1-002', name: 'Bella Martinez', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmJUo69Vzz6dVgTxLfoMjkTryC678TAjz0oU-VSKO_H-2TFR6czIKZHwWIRzPVk3ZG00w5iRrCAxTjSvb50nk4aXylTNI6wuECFaxXIfP-i-5hC0Q-K2SEGnDnz4-mQKtXZKHiCzmEnvV2e82WYQ9TeAvpsqlyRH_TP_NmWdgR19RNkQaAq3RBIBdZbE6QyvxU7ApSkR903WMZMontJd0xtP7uUwp2OCRZ4_MrATFKgd_4NLE1EvWSnOzMEuBQ4Ulwe3Uo9XgmxCJU', status: 'absent' },
    { id: 'M1-003', name: 'Carlos Rivera', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmHDvlsY81A83jn_LMR4dS9lG1Ye8o2WMeABdNHBbJugnfffX05Nb1P39TKRi7xbUH5FUOR4AQugDZnuAeGbvZRMGeJcOuGUkhGvalsZXqBH__LROmc2EdN-4ybj43pnWcPc3xFom6sU79rQsjyjXY4oimrgi89bGECsB0uV0AdVnQ3wjRGGkMR48CB7SHGkAdRvk0PQCylrb1HKiuFy3bArWfsoQl7RWF3_FdW60z0wCcfy8ULE4QG7BEbgnaY1cLaq7uQFUnPuUN', status: 'late' },
    { id: 'M1-004', name: 'Diana Lee', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmJUo69Vzz6dVgTxLfoMjkTryC678TAjz0oU-VSKO_H-2TFR6czIKZHwWIRzPVk3ZG00w5iRrCAxTjSvb50nk4aXylTNI6wuECFaxXIfP-i-5hC0Q-K2SEGnDnz4-mQKtXZKHiCzmEnvV2e82WYQ9TeAvpsqlyRH_TP_NmWdgR19RNkQaAq3RBIBdZbE6QyvxU7ApSkR903WMZMontJd0xtP7uUwp2OCRZ4_MrATFKgd_4NLE1EvWSnOzMEuBQ4Ulwe3Uo9XgmxCJU', status: 'present' },
    { id: 'M1-005', name: 'Ethan Brooks', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmHDvlsY81A83jn_LMR4dS9lG1Ye8o2WMeABdNHBbJugnfffX05Nb1P39TKRi7xbUH5FUOR4AQugDZnuAeGbvZRMGeJcOuGUkhGvalsZXqBH__LROmc2EdN-4ybj43pnWcPc3xFom6sU79rQsjyjXY4oimrgi89bGECsB0uV0AdVnQ3wjRGGkMR48CB7SHGkAdRvk0PQCylrb1HKiuFy3bArWfsoQl7RWF3_FdW60z0wCcfy8ULE4QG7BEbgnaY1cLaq7uQFUnPuUN', status: 'present' },
    { id: 'M1-006', name: 'Fiona Walsh', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmJUo69Vzz6dVgTxLfoMjkTryC678TAjz0oU-VSKO_H-2TFR6czIKZHwWIRzPVk3ZG00w5iRrCAxTjSvb50nk4aXylTNI6wuECFaxXIfP-i-5hC0Q-K2SEGnDnz4-mQKtXZKHiCzmEnvV2e82WYQ9TeAvpsqlyRH_TP_NmWdgR19RNkQaAq3RBIBdZbE6QyvxU7ApSkR903WMZMontJd0xtP7uUwp2OCRZ4_MrATFKgd_4NLE1EvWSnOzMEuBQ4Ulwe3Uo9XgmxCJU', status: 'absent' },
    { id: 'M1-007', name: 'George Kim', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmHDvlsY81A83jn_LMR4dS9lG1Ye8o2WMeABdNHBbJugnfffX05Nb1P39TKRi7xbUH5FUOR4AQugDZnuAeGbvZRMGeJcOuGUkhGvalsZXqBH__LROmc2EdN-4ybj43pnWcPc3xFom6sU79rQsjyjXY4oimrgi89bGECsB0uV0AdVnQ3wjRGGkMR48CB7SHGkAdRvk0PQCylrb1HKiuFy3bArWfsoQl7RWF3_FdW60z0wCcfy8ULE4QG7BEbgnaY1cLaq7uQFUnPuUN', status: 'late' },
    { id: 'M1-008', name: 'Hannah Cruz', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmJUo69Vzz6dVgTxLfoMjkTryC678TAjz0oU-VSKO_H-2TFR6czIKZHwWIRzPVk3ZG00w5iRrCAxTjSvb50nk4aXylTNI6wuECFaxXIfP-i-5hC0Q-K2SEGnDnz4-mQKtXZKHiCzmEnvV2e82WYQ9TeAvpsqlyRH_TP_NmWdgR19RNkQaAq3RBIBdZbE6QyvxU7ApSkR903WMZMontJd0xtP7uUwp2OCRZ4_MrATFKgd_4NLE1EvWSnOzMEuBQ4Ulwe3Uo9XgmxCJU', status: 'present' },
];

const AttendanceTracker = () => {
    const navigate = useNavigate();
    const [selectedClass, setSelectedClass] = useState('M1');
    const [roster, setRoster] = useState(students);
    const [date] = useState(new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));

    const setStatus = (id, status) => {
        setRoster(r => r.map(s => s.id === id ? { ...s, status } : s));
    };

    const counts = {
        present: roster.filter(s => s.status === 'present').length,
        absent: roster.filter(s => s.status === 'absent').length,
        late: roster.filter(s => s.status === 'late').length,
    };

    return (
        <div className="bg-[#f5f7f8] font-display text-[#181411] min-h-screen flex flex-col">
            {/* Header */}
            <header className="h-16 bg-white border-b border-border-subtle flex items-center px-6 gap-4 shrink-0">
                <button
                    onClick={() => navigate('/teacher-dashboard')}
                    className="flex items-center gap-2 text-[#8a7560] hover:text-primary transition-colors"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <div className="flex items-center gap-3">
                    <div className="bg-primary rounded-lg p-2 text-white">
                        <span className="material-symbols-outlined text-[20px]">school</span>
                    </div>
                    <div>
                        <h1 className="text-base font-bold leading-tight">Class Buddy</h1>
                        <p className="text-xs text-[#8a7560]">Teacher Center</p>
                    </div>
                </div>
                <div className="h-5 w-px bg-border-subtle ml-2" />
                <nav className="flex items-center gap-1 text-sm text-[#8a7560]">
                    <button onClick={() => navigate('/teacher-dashboard')} className="hover:text-primary transition-colors">Dashboard</button>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <span className="text-[#181411] font-semibold">Attendance Tracker</span>
                </nav>
                <div className="ml-auto flex items-center gap-3">
                    <button className="text-[#8a7560] hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <div
                        className="size-9 rounded-full bg-cover bg-center border-2 border-primary/20"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBmJUo69Vzz6dVgTxLfoMjkTryC678TAjz0oU-VSKO_H-2TFR6czIKZHwWIRzPVk3ZG00w5iRrCAxTjSvb50nk4aXylTNI6wuECFaxXIfP-i-5hC0Q-K2SEGnDnz4-mQKtXZKHiCzmEnvV2e82WYQ9TeAvpsqlyRH_TP_NmWdgR19RNkQaAq3RBIBdZbE6QyvxU7ApSkR903WMZMontJd0xtP7uUwp2OCRZ4_MrATFKgd_4NLE1EvWSnOzMEuBQ4Ulwe3Uo9XgmxCJU')" }}
                    />
                </div>
            </header>

            <div className="flex-1 p-6 lg:p-8 max-w-5xl mx-auto w-full">
                {/* Title Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <div>
                        <h2 className="text-3xl font-black tracking-tight">Attendance Tracker</h2>
                        <p className="text-[#8a7560] text-sm mt-1">{date}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        {/* Class Selector */}
                        <select
                            value={selectedClass}
                            onChange={e => setSelectedClass(e.target.value)}
                            className="bg-white border border-border-subtle rounded-lg px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary/30"
                        >
                            {['M1', 'M2', 'M3', 'M4', 'M5', 'M6'].map(c => (
                                <option key={c} value={c}>Class {c}</option>
                            ))}
                        </select>
                        <button className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">save</span>
                            Save
                        </button>
                    </div>
                </div>

                {/* Summary Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white rounded-2xl border border-border-subtle p-5 flex items-center gap-4">
                        <div className="bg-green-50 text-green-500 p-3 rounded-xl"><span className="material-symbols-outlined">check_circle</span></div>
                        <div>
                            <p className="text-[10px] text-[#8a7560] font-bold uppercase tracking-widest">Present</p>
                            <p className="text-2xl font-black">{counts.present}</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl border border-border-subtle p-5 flex items-center gap-4">
                        <div className="bg-red-50 text-red-500 p-3 rounded-xl"><span className="material-symbols-outlined">cancel</span></div>
                        <div>
                            <p className="text-[10px] text-[#8a7560] font-bold uppercase tracking-widest">Absent</p>
                            <p className="text-2xl font-black">{counts.absent}</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl border border-border-subtle p-5 flex items-center gap-4">
                        <div className="bg-orange-50 text-orange-500 p-3 rounded-xl"><span className="material-symbols-outlined">schedule</span></div>
                        <div>
                            <p className="text-[10px] text-[#8a7560] font-bold uppercase tracking-widest">Late</p>
                            <p className="text-2xl font-black">{counts.late}</p>
                        </div>
                    </div>
                </div>

                {/* Roster Table */}
                <div className="bg-white rounded-2xl border border-border-subtle overflow-hidden">
                    <div className="px-6 py-4 border-b border-border-subtle flex items-center justify-between">
                        <h3 className="font-bold text-lg">Class {selectedClass} — Student Roster</h3>
                        <span className="text-xs text-[#8a7560] font-semibold">{roster.length} Students</span>
                    </div>
                    <div className="divide-y divide-border-subtle">
                        {roster.map((student, i) => (
                            <div key={student.id} className="flex items-center gap-4 px-6 py-4 hover:bg-[#f5f2f0]/50 transition-colors">
                                <span className="text-xs text-[#8a7560] w-5 text-center font-semibold">{i + 1}</span>
                                <div
                                    className="size-10 rounded-full bg-cover bg-center border-2 border-primary/10 shrink-0"
                                    style={{ backgroundImage: `url('${student.avatar}')` }}
                                />
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-sm truncate">{student.name}</p>
                                    <p className="text-xs text-[#8a7560]">{student.id}</p>
                                </div>
                                {/* Status Toggle */}
                                <div className="flex items-center gap-2">
                                    {[
                                        { key: 'present', label: 'P', bg: 'bg-green-500', ring: 'ring-green-300' },
                                        { key: 'late', label: 'L', bg: 'bg-orange-500', ring: 'ring-orange-300' },
                                        { key: 'absent', label: 'A', bg: 'bg-red-500', ring: 'ring-red-300' },
                                    ].map(opt => (
                                        <button
                                            key={opt.key}
                                            onClick={() => setStatus(student.id, opt.key)}
                                            className={`w-9 h-9 rounded-lg text-xs font-bold transition-all ${student.status === opt.key
                                                    ? `${opt.bg} text-white shadow-md ring-2 ${opt.ring}`
                                                    : 'bg-[#f5f2f0] text-[#8a7560] hover:bg-[#e6e0db]'
                                                }`}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttendanceTracker;
