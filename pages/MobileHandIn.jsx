import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const MobileHandIn = () => {
    const navigate = useNavigate();
    const [dragOver, setDragOver] = useState(false);
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFile = (f) => {
        if (f) setFile(f);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
    };

    const handleSubmit = () => {
        navigate('/submission-success');
    };

    return (
        <div className="min-h-screen bg-[#f5f7f8] font-display flex flex-col max-w-lg mx-auto">
            {/* Header */}
            <header className="bg-white border-b border-border-subtle px-4 py-4 flex items-center gap-4 sticky top-0 z-10">
                <button
                    onClick={() => navigate('/student-portal')}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#f5f2f0] text-[#8a7560] hover:text-primary hover:bg-primary/10 transition-colors"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <div className="flex-1">
                    <h1 className="text-base font-bold text-[#181411]">Hand In Assignment</h1>
                    <p className="text-xs text-[#8a7560]">Class M1 — Mathematics</p>
                </div>
                <div className="w-8 h-8">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path d="M20 25 C 20 15, 30 10, 50 10 C 70 10, 80 15, 80 25 L 80 75 C 80 85, 50 95, 50 95 C 50 95, 20 85, 20 75 Z" fill="#3b82f6" />
                        <path d="M50 10 L 50 95" stroke="#f27f0d" strokeLinecap="round" strokeWidth="7" />
                        <path d="M35 30 L 65 30" stroke="#fff" strokeLinecap="round" strokeWidth="6.5" opacity="0.9" />
                        <path d="M35 46 L 65 46" stroke="#fff" strokeLinecap="round" strokeWidth="6.5" opacity="0.9" />
                        <path d="M35 62 L 65 62" stroke="#f27f0d" strokeLinecap="round" strokeWidth="6.5" />
                    </svg>
                </div>
            </header>

            <div className="flex-1 p-5 space-y-5">
                {/* Assignment Info Card */}
                <div className="bg-white rounded-2xl border border-border-subtle p-5 shadow-card">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-accent-blue p-2.5 rounded-xl">
                            <span className="material-symbols-outlined text-accent-blue-dark">assignment</span>
                        </div>
                        <div>
                            <h2 className="font-bold text-[#181411]">Math Homework: Fractions</h2>
                            <p className="text-xs text-[#8a7560]">Class M1 · Mathematics</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 pt-3 border-t border-border-subtle">
                        <div className="flex items-center gap-1.5 text-xs text-[#8a7560]">
                            <span className="material-symbols-outlined text-sm text-primary">calendar_today</span>
                            <span>Due: Oct 12</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-[#8a7560]">
                            <span className="material-symbols-outlined text-sm text-green-500">check_circle</span>
                            <span>On time</span>
                        </div>
                    </div>
                </div>

                {/* File Upload Zone */}
                <div>
                    <h3 className="font-bold text-[#181411] mb-3 text-sm">Upload Your Work</h3>
                    <div
                        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                        onDragLeave={() => setDragOver(false)}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                        className={`relative border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${dragOver
                                ? 'border-primary bg-primary/5 scale-[1.01]'
                                : file
                                    ? 'border-green-400 bg-green-50'
                                    : 'border-border-subtle bg-white hover:border-primary/40 hover:bg-primary/5'
                            }`}
                    >
                        <input
                            ref={fileInputRef}
                            type="file"
                            className="hidden"
                            onChange={e => handleFile(e.target.files?.[0])}
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        />
                        {file ? (
                            <>
                                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="material-symbols-outlined text-green-500 text-3xl">check_circle</span>
                                </div>
                                <p className="font-bold text-[#181411] text-sm">{file.name}</p>
                                <p className="text-xs text-[#8a7560] mt-1">
                                    {(file.size / 1024).toFixed(0)} KB · Tap to change
                                </p>
                            </>
                        ) : (
                            <>
                                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="material-symbols-outlined text-primary text-3xl">cloud_upload</span>
                                </div>
                                <p className="font-bold text-[#181411] text-sm">Tap to upload or drag &amp; drop</p>
                                <p className="text-xs text-[#8a7560] mt-1">PDF, Word, JPEG, PNG supported</p>
                            </>
                        )}
                    </div>
                </div>

                {/* File Type Chips */}
                <div className="flex gap-2 flex-wrap">
                    {[
                        { icon: 'picture_as_pdf', label: 'PDF', color: 'text-red-500 bg-red-50' },
                        { icon: 'description', label: 'Word', color: 'text-blue-500 bg-blue-50' },
                        { icon: 'image', label: 'Image', color: 'text-green-500 bg-green-50' },
                    ].map(type => (
                        <div key={type.label} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${type.color}`}>
                            <span className="material-symbols-outlined text-sm">{type.icon}</span>
                            {type.label}
                        </div>
                    ))}
                </div>

                {/* Note input */}
                <div>
                    <label className="block text-sm font-bold text-[#181411] mb-2">Add a note (optional)</label>
                    <textarea
                        placeholder="Any notes for your teacher..."
                        className="w-full p-4 bg-white border border-border-subtle rounded-xl text-sm text-[#181411] placeholder:text-[#8a7560]/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 resize-none"
                        rows={3}
                    />
                </div>
            </div>

            {/* Fixed Bottom CTA */}
            <div className="sticky bottom-0 bg-white border-t border-border-subtle p-4">
                <button
                    onClick={handleSubmit}
                    className="w-full bg-primary hover:bg-primary/90 active:scale-[0.98] text-white font-bold py-4 rounded-full shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2 text-base"
                >
                    <span className="material-symbols-outlined">send</span>
                    Hand In Now!
                </button>
            </div>
        </div>
    );
};

export default MobileHandIn;
