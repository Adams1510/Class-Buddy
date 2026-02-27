import React, { useState } from 'react';

const GradingView = () => {
    const [grade, setGrade] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isDrafting, setIsDrafting] = useState(false);

    const handleSuggestDraft = () => {
        setIsDrafting(true);
        // Simulating AI thinking...
        setTimeout(() => {
            const suggestions = [
                "Excellent interpretation of the raven as a symbol of memory. Your use of metaphors like 'shadows bind' is particularly effective. Consider expanding on the 'hidden pain' in the final stanza.",
                "Great work on the rhythm and flow of this piece. The imagery of 'silver rain' adds a beautiful atmosphere. To improve, you might want to explore the raven's stillness further.",
                "A very moving poem, Alex. The themes of healing and whole-making are well-explored. For your next draft, try to vary the sentence structure in the second stanza for more impact."
            ];
            const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
            setFeedback(randomSuggestion);
            setIsDrafting(false);
        }, 1500);
    };

    const handleSubmit = () => {
        if (!grade) {
            alert("Please enter a grade before submitting.");
            return;
        }
        alert(`Feedback submitted for Alex Johnson! Grade: ${grade}/100`);
    };

    return (
        <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark text-[#181411] transition-colors duration-200">
            {/* Header */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e6e0db] bg-white px-4 md:px-6 py-3 shrink-0">
                <div className="flex items-center gap-3 md:gap-6">
                    <div className="flex items-center gap-2 md:gap-3 text-primary">
                        <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
                            <span className="material-symbols-outlined text-primary">auto_awesome</span>
                        </div>
                        <h2 className="text-[#181411] text-lg font-bold leading-tight tracking-tight hidden sm:block">Class Buddy</h2>
                    </div>
                    <div className="h-6 w-px bg-[#e6e0db] hidden md:block"></div>
                    <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
                        <a className="text-[#8a7560] hover:text-primary" href="#">Grade 10 English</a>
                        <span className="text-[#8a7560] material-symbols-outlined text-xs">chevron_right</span>
                        <a className="text-[#8a7560] hover:text-primary" href="#">Poetry Analysis</a>
                        <span className="text-[#8a7560] material-symbols-outlined text-xs">chevron_right</span>
                        <span className="text-[#181411]">Alex Johnson</span>
                    </nav>
                </div>
                <div className="flex items-center gap-2 md:gap-4">
                    <div className="flex items-center bg-[#f5f2f0] rounded-lg px-2 py-1 h-10">
                        <button className="p-1 hover:bg-white rounded-md transition-colors">
                            <span className="material-symbols-outlined text-sm">chevron_left</span>
                        </button>
                        <span className="px-1 md:px-3 text-[10px] md:text-xs font-semibold text-[#8a7560]">Student 4 of 28</span>
                        <button className="p-1 hover:bg-white rounded-md transition-colors">
                            <span className="material-symbols-outlined text-sm">chevron_right</span>
                        </button>
                    </div>
                    <div className="flex gap-2">
                        <button className="hidden sm:flex size-10 items-center justify-center rounded-lg bg-[#f5f2f0] text-[#181411] hover:bg-primary/10 transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFlM7sq-o_emduELheTCETYiP5KNfR7oRh88rZl1YXjBGycKNtTRxSzEMFVOinYG2_1_tBA6FZZ9BwEHO8XTsi7F_eS_a-C9mAFIMDt4003r5BjTDlZ3RSMwxesutVOHlKRT6xMcdWdOUjocnGIYCoyRc4f2KGbAhf8cW3g6azL9E_5dItW2vWrnTw8gRDNb07Lh4yIHbMcwTAtD8_83UO5sOgcz8ROS5_dC0UOOe9vG-djlkIVNt4SlfpddcdM5JHAmeLlqueagZz")' }}
                        ></div>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex flex-1 overflow-hidden flex-col md:flex-row">
                {/* Document Viewer Section */}
                <section className="flex flex-1 flex-col bg-[#efedea] overflow-hidden relative border-b md:border-b-0 border-[#e6e0db]">
                    <div className="flex items-center justify-between px-4 md:px-6 py-2 md:py-3 bg-white/80 backdrop-blur-sm border-b border-[#e6e0db] z-10 sticky top-0">
                        <div className="flex items-center gap-4">
                            <span className="text-xs md:text-sm font-semibold text-[#181411] truncate max-w-[150px] md:max-w-none">alex_johnson_submission.pdf</span>
                            <span className="hidden sm:block px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">Turned In Early</span>
                        </div>
                        <div className="flex items-center gap-1 md:gap-2">
                            <button className="p-1.5 md:p-2 hover:bg-white rounded-lg transition-colors">
                                <span className="material-symbols-outlined text-lg md:text-xl">zoom_out</span>
                            </button>
                            <span className="text-[10px] md:text-xs font-medium w-8 md:w-12 text-center">100%</span>
                            <button className="p-1.5 md:p-2 hover:bg-white rounded-lg transition-colors">
                                <span className="material-symbols-outlined text-lg md:text-xl">zoom_in</span>
                            </button>
                            <div className="w-px h-4 bg-[#e6e0db] mx-1"></div>
                            <button className="p-1.5 md:p-2 hover:bg-white rounded-lg transition-colors">
                                <span className="material-symbols-outlined text-lg md:text-xl">open_in_full</span>
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 md:p-12 flex justify-center">
                        <div className="w-full max-w-3xl bg-white shadow-xl rounded-sm min-h-[600px] md:min-h-[1100px] p-6 md:p-16 flex flex-col gap-6 md:gap-8">
                            <div className="flex justify-between items-start border-b border-gray-100 pb-6 md:pb-8">
                                <div>
                                    <h1 className="text-xl md:text-2xl font-bold text-gray-800">The Echo of the Raven</h1>
                                    <p className="text-xs md:text-sm text-gray-500 mt-1">Alex Johnson • English 10-B</p>
                                </div>
                                <div className="text-right text-[10px] md:text-xs text-gray-400">October 24, 2023</div>
                            </div>
                            <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed text-base md:text-lg italic">
                                <p>In the quiet corners of the mind,<br />Where memories like shadows bind,<br />A whisper wakes the sleeping soul,<br />To mend the parts and make them whole.</p>
                                <p>The raven perched upon the sill,<br />Its feathers dark, its spirit still,<br />Watching through the silver rain,<br />A witness to the hidden pain.</p>
                                <p>Oh, the echo of the midnight cry,<br />Beneath a heavy, velvet sky,<br />It tells of stories yet untold,<br />Of hearts that break and then turn gold.</p>
                            </div>
                            <div className="mt-auto pt-8 md:pt-12 border-t border-gray-100 italic text-gray-400 text-[10px] md:text-sm">Submission #1 - Page 1 of 1</div>
                        </div>
                    </div>
                </section>

                {/* Feedback Sidebar */}
                <aside className="w-full md:w-[320px] lg:w-[420px] bg-white border-l border-[#e6e0db] flex flex-col shadow-2xl z-20 h-[400px] md:h-full">
                    <div className="p-4 md:p-6 border-b border-[#e6e0db] bg-primary/5">
                        <div className="flex items-center gap-3">
                            <div className="size-8 md:size-10 rounded-full bg-primary flex items-center justify-center text-white">
                                <span className="material-symbols-outlined">smart_toy</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#181411] text-sm md:text-base">Buddy Feedback</h3>
                                <p className="text-[10px] md:text-xs text-[#8a7560]">Helping you grade faster with care</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 md:space-y-8">
                        {/* Student Info Card (Visible on larger screens) */}
                        <div className="hidden sm:flex items-center gap-4 p-4 rounded-xl bg-[#f5f2f0]/50 border border-[#e6e0db]">
                            <div
                                className="size-10 md:size-12 rounded-full bg-cover bg-center shrink-0"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXute8zosf_dUzpTFAQA6SmNl2BAqaKoJJ0bP6Zh63nmAoCOJvm8beFluQBajw2SEFFy0lI1cKqd4u6Ly_HWa0NWXJV2EuPloMgE3fZFwS42n4A9uzhKtYr5q27WU8Zmb6ROhUiUCowjX58CIgL_ZZ851cmNteCFLgd_02RU2z0Bqc6xT7TbFF8rL9RW18ZJOumwgDxCeKSHyH6LIPcsk42GiIh_pfMigx7uYMnk9Wbq_ukILai-rW2D88P62H5nUV4_R8SfR1Y2UL")' }}
                            ></div>
                            <div className="truncate">
                                <p className="font-semibold text-sm truncate">Alex Johnson</p>
                                <p className="text-[10px] md:text-xs text-[#8a7560]">Submitted 2 hours ago</p>
                            </div>
                            <div className="ml-auto shrink-0">
                                <span className="text-[10px] font-bold text-primary bg-white px-2 py-1 rounded-lg border border-primary/20">Attempt 1</span>
                            </div>
                        </div>

                        {/* Grading Input */}
                        <div className="space-y-2 md:space-y-3">
                            <label className="block text-sm font-bold text-[#181411]">Final Grade</label>
                            <div className="flex items-center gap-3">
                                <div className="relative flex-1">
                                    <input
                                        className="w-full h-10 md:h-12 rounded-xl border-[#e6e0db] focus:border-primary focus:ring-primary text-base md:text-lg font-bold px-4 bg-background-light"
                                        placeholder="0"
                                        type="number"
                                        value={grade}
                                        onChange={(e) => setGrade(e.target.value)}
                                        max="100"
                                        min="0"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8a7560] font-medium text-xs md:text-sm">/ 100</span>
                                </div>
                                <button className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors shrink-0">
                                    <span className="material-symbols-outlined text-xl md:text-2xl">calculate</span>
                                </button>
                            </div>
                        </div>

                        {/* Feedback Textarea */}
                        <div className="space-y-2 md:space-y-3">
                            <div className="flex items-center justify-between">
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
                                className="w-full min-h-[120px] md:min-h-[180px] rounded-xl border-[#e6e0db] focus:border-primary focus:ring-primary p-3 md:p-4 text-sm leading-relaxed placeholder:text-[#8a7560]"
                                placeholder="Write constructive feedback for Alex here..."
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                            ></textarea>
                        </div>

                        {/* Quick Feedback Chips */}
                        <div className="space-y-2 md:space-y-3">
                            <label className="block text-[10px] font-bold text-[#8a7560] uppercase tracking-wider">Quick Feedback</label>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    onClick={() => setFeedback(f => f ? f + " Excellent metaphors." : "Excellent metaphors.")}
                                    className="px-2 md:px-3 py-1 md:py-1.5 rounded-full border border-[#e6e0db] text-[10px] md:text-xs font-medium hover:border-primary hover:text-primary transition-all whitespace-nowrap"
                                >
                                    ✨ Excellent metaphors
                                </button>
                                <button
                                    onClick={() => setFeedback(f => f ? f + " Improve structure." : "Improve structure.")}
                                    className="px-2 md:px-3 py-1 md:py-1.5 rounded-full border border-[#e6e0db] text-[10px] md:text-xs font-medium hover:border-primary hover:text-primary transition-all whitespace-nowrap"
                                >
                                    📝 Improve structure
                                </button>
                                <button
                                    onClick={() => setFeedback(f => f ? f + " Great vocabulary!" : "Great vocabulary!")}
                                    className="px-2 md:px-3 py-1 md:py-1.5 rounded-full border border-[#e6e0db] text-[10px] md:text-xs font-medium hover:border-primary hover:text-primary transition-all whitespace-nowrap"
                                >
                                    🔥 Great vocabulary
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Action Footer */}
                    <div className="p-4 md:p-6 border-t border-[#e6e0db] flex flex-col gap-3">
                        <button
                            onClick={handleSubmit}
                            className="w-full h-11 md:h-12 rounded-xl bg-success text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-success/20 hover:brightness-105 transition-all active:scale-[0.98]"
                        >
                            <span className="material-symbols-outlined text-lg md:text-xl">send</span> Submit Feedback
                        </button>
                    </div>
                </aside>
            </main>
        </div>
    );
};

export default GradingView;
