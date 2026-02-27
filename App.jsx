import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Existing Pages
import Login from './pages/Login';
import StudentLogin from './pages/StudentLogin';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentPortal from './pages/StudentPortal';
import GradingView from './pages/GradingView';
import StudentProfileSetup from './pages/StudentProfileSetup';

// New Pages
import AttendanceTracker from './pages/AttendanceTracker';
import SubmissionSuccess from './pages/SubmissionSuccess';
import StudentDeskMobile from './pages/StudentDeskMobile';
import MobileHandIn from './pages/MobileHandIn';
import MobileGrading from './pages/MobileGrading';

function App() {
    return (
        <Router>
            <Routes>
                {/* Auth Routes */}
                <Route path="/" element={<Login />} />
                <Route path="/student-login" element={<StudentLogin />} />

                {/* Teacher Routes */}
                <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
                <Route path="/grading" element={<GradingView />} />
                <Route path="/attendance" element={<AttendanceTracker />} />
                <Route path="/mobile-grading" element={<MobileGrading />} />

                {/* Student Routes */}
                <Route path="/student-portal" element={<StudentPortal />} />
                <Route path="/setup" element={<StudentProfileSetup />} />
                <Route path="/submission-success" element={<SubmissionSuccess />} />
                <Route path="/student-desk-mobile" element={<StudentDeskMobile />} />
                <Route path="/mobile-handin" element={<MobileHandIn />} />
            </Routes>
        </Router>
    );
}

export default App;
