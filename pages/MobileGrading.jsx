import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MobileGrading = () => {
    const navigate = useNavigate();
    const [grade, setGrade] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isDrafting, setIsDrafting] = useState(false);

    const handleSuggestDraft = () => {
        setIsDrafting(true);
        setTimeout(() => {
            const suggestions = [
                "Excellent interpretation of the raven as a symbol of memory. Your use of metaphors like 'shadows bind' is particularly effective.",
                "Great work on the rhythm and flow of this piece. The imagery adds a beautiful atmosphere.",
                "A very moving poem, Alex. The themes of healing are well-explored."
            ];
            setFeedback(suggestions[Math.floor(Math.random() * suggestions.length)]);
            setIsDrafting(false);
        }, 1200);
    };

    const handleSubmit = () => {
        if (!grade) { alert("Please enter a grade."); return; }
        navigate('/teacher-dashboard');
    };

    return (
        <div className="min-h-screen bg-[#f5f7f8] font-display flex flex-col max-w-lg mx-auto">
            {/* Header */}
            <header className="bg-white border-b border-border-subtle px-4 py-4 flex items-center gap-4 sticky top-0 z-10">
                <button
                    onClick={() => navigate('/teacher-dashboard')}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#f5f2f0] text-[#8a7560] hover:text-primary hover:bg-primary/10 transition-colors"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <div className="flex-1">
                    <h1 className="text-base font-bold text-[#181411]">Grade Submission</h1>
                    <p className="text-xs text-[#8a7560]">Alex Johnson · Math Homework</p>
                </div>
                <div className="flex items-center bg-[#f5f2f0] rounded-lg px-2 py-1">
                    <button className="p-1 hover:bg-white rounded transition-colors">
                        <span className="material-symbols-outlined text-sm">chevron_left</span>
                    </button>
                    <span className="px-2 text-[10px] font-semibold text-[#8a7560]">4 of 28</span>
                    <button className="p-1 hover:bg-white rounded transition-colors">
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </button>
                </div>
            </header>

            <div className="flex-1 overflow-y-auto">
                {/* Student Submission Preview */}
                <div className="bg-white border-b border-border-subtle p-5">
                    <div className="flex items-center gap-3 mb-4">
                        <div
                            className="size-12 rounded-full bg-cover bg-center border-2 border-primary/10 shrink-0"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmHDvlsY81A83jn_LMR4dS9lG1Ye8o2WMeABdNHBbJugnfffX05Nb1P39TKRi7xbUH5FUOR4AQugDZnuAeGbvZRMGeJcOuGUkhGvalsZXqBH__LROmc2EdN-4ybj43pnWcPc3xFom6sU79rQsjyjXY4oimrgi89bGECsB0uV0AdVnQ3wjRGGkMR48CB7SHGkAdRvk0PQCylrb1HKiuFy3bArWfsoQl7RWF3_FdW60z0wCcfy8ULE4QG7BEbgnaY1cLaq7uQFUnPuUN")' }}
                        />
                        <div className="flex-1">
                            <p className="font-bold text-[#181411] text-sm">Alex Johnson</p>
                            <p className="text-xs text-[#8a7560]">Submitted 2 hours ago</p>
                        </div>
                        <span className="text-[10px] font-bold text-primary bg-white px-2 py-1 rounded border border-primary/20">Attempt 1</span>
                    </div>

                    {/* Mini submission preview */}
                    <div className="bg-[#f5f2f0] rounded-xl p-4 italic text-sm text-[#8a7560] leading-relaxed">
                        <p className="font-semibold text-xs text-[#181411] mb-2 not-italic">alex_johnson_submission.pdf</p>
                        "In the quiet corners of the mind,<br />
                        Where memories like shadows bind,<br />
                        A whisper wakes the sleeping soul..."
                        <span className="text-xs text-[#8a7560] not-italic ml-1">· Page 1 of 1</span>
                    </div>
                </div>

                {/* Grading Panel */}
                <div className="p-5 space-y-5">
                    {/* AI Buddy Badge */}
                    <div className="flex items-center gap-3 bg-primary/5 rounded-xl p-3 border border-primary/10">
                        <div className="size-9 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                            <span className="material-symbols-outlined text-sm">smart_toy</span>
                        </div>
                        <div>
                            <p className="font-bold text-[#181411] text-sm">Buddy Feedback</p>
                            <p className="text-xs text-[#8a7560]">Helping you grade faster with care</p>
                        </div>
                    </div>

                    {/* Grade Input */}
                    <div>
                        <label className="block text-sm font-bold text-[#181411] mb-2">Final Grade</label>
                        <div className="flex items-center gap-3">
                            <div className="relative flex-1">
                                <input
                                    type="number"
                                    className="w-full h-12 rounded-xl border border-border-subtle bg-white text-lg font-bold px-4 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40"
                                    placeholder="0"
                                    value={grade}
                                    onChange={e => setGrade(e.target.value)}
                                    max="100" min="0"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8a7560] font-medium text-sm">/ 100</span>
                            </div>
                            <button className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors shrink-0">
                                <span className="material-symbols-outlined text-2xl">calculate</span>
                            </button>
                        </div>
                    </div>

                    {/* Feedback Textarea */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label className="block text-sm font-bold text-[#181411]">Teacher Feedback</label>
                            <button
                                onClick={handleSuggestDraft}
                                disabled={isDrafting}
                                className={`text-xs text-primary font-bold flex items-center gap-1 hover:underline ${isDrafting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                <span className={`material-symbols-outlined text-sm ${isDrafting ? 'animate-spin' : ''}`}>magic_button</span>
                                {isDrafting ? 'Drafting...' : 'Suggest Draft'}
                            </button>
                        </div>
                        <textarea
                            className="w-full min-h-[130px] rounded-xl border border-border-subtle bg-white p-4 text-sm leading-relaxed placeholder:text-[#8a7560]/60 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                            placeholder="Write constructive feedback for Alex here..."
                            value={feedback}
                            onChange={e => setFeedback(e.target.value)}
                        />
                    </div>

                    {/* Quick Feedback Chips */}
                    <div>
                        <p className="text-[10px] font-bold text-[#8a7560] uppercase tracking-wider mb-2">Quick Feedback</p>
                        <div className="flex flex-wrap gap-2">
                            {[
                                { label: '✨ Excellent metaphors', append: ' Excellent metaphors.' },
                                { label: '📝 Improve structure', append: ' Improve structure.' },
                                { label: '🔥 Great vocabulary', append: ' Great vocabulary!' },
                            ].map(chip => (
                                <button
                                    key={chip.label}
                                    onClick={() => setFeedback(f => f ? f + chip.append : chip.append.trim())}
                                    className="px-3 py-1.5 rounded-full border border-border-subtle text-xs font-medium hover:border-primary hover:text-primary transition-all"
                                >
                                    {chip.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Fixed Bottom CTA */}
            <div className="sticky bottom-0 bg-white border-t border-border-subtle p-4">
                <button
                    onClick={handleSubmit}
                    className="w-full h-12 rounded-full bg-success text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-success/20 hover:brightness-105 transition-all active:scale-[0.98]"
                >
                    <span className="material-symbols-outlined">send</span>
                    Submit Feedback
                </button>
            </div>
        </div>
    );
};

export default MobileGrading;
