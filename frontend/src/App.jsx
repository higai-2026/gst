import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Loader2 } from 'lucide-react';

// Layout & Core Components
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';

// Lazy Loaded Pages for Instant Initial Loading & Dynamic Chunking
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const ClientsPage = lazy(() => import('./pages/ClientsPage'));
const CertificationPage = lazy(() => import('./pages/CertificationPage'));
const BillingPage = lazy(() => import('./pages/BillingPage'));
const LedgerPage = lazy(() => import('./pages/LedgerPage'));
const EnquiriesPage = lazy(() => import('./pages/EnquiriesPage'));
const TaskBoardPage = lazy(() => import('./pages/TaskBoardPage'));
const GSTFilingPage = lazy(() => import('./pages/GSTFilingPage'));
const BookKeepingPage = lazy(() => import('./pages/BookKeepingPage'));
const ITFilingPage = lazy(() => import('./pages/ITFilingPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const ReportsPage = lazy(() => import('./pages/ReportsPage'));
const UserManagementPage = lazy(() => import('./pages/UserManagementPage'));
const AuditLogsPage = lazy(() => import('./pages/AuditLogsPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));

// Fast lightweight loading skeleton
const PageLoading = () => (
  <div className="flex h-64 w-full items-center justify-center">
    <div className="flex flex-col items-center space-y-2 text-slate-500">
      <Loader2 className="h-7 w-7 animate-spin text-[#52A636]" />
      <span className="text-xs font-semibold tracking-wide">Loading module...</span>
    </div>
  </div>
);

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const MainLayout = () => {
  const [globalSearch, setGlobalSearch] = useState('');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
    return localStorage.getItem('sidebar_collapsed') === 'true';
  });

  const toggleSidebar = () => {
    if (window.innerWidth < 1024) {
      setIsMobileSidebarOpen((prev) => !prev);
    } else {
      setIsSidebarCollapsed((prev) => {
        const next = !prev;
        localStorage.setItem('sidebar_collapsed', String(next));
        return next;
      });
    }
  };

  const toggleDesktopCollapse = () => {
    setIsSidebarCollapsed((prev) => {
      const next = !prev;
      localStorage.setItem('sidebar_collapsed', String(next));
      return next;
    });
  };

  return (
    <div className="flex min-h-screen bg-[#07152B] bg-[url('/login_bg.jpg')] bg-cover bg-center bg-fixed relative">
      {/* Semi-transparent dark/light glassmorphic backdrop layer */}
      <div className="absolute inset-0 bg-slate-100/90 backdrop-blur-md pointer-events-none"></div>

      <Sidebar
        isOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={toggleDesktopCollapse}
      />
      <div className={`relative z-10 flex-1 flex flex-col min-w-0 transition-all duration-300 ${isSidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
        <Navbar
          globalSearch={globalSearch}
          onSearchChange={setGlobalSearch}
          onToggleMobileMenu={toggleSidebar}
          isSidebarCollapsed={isSidebarCollapsed}
        />
        <main className="flex-1 p-3 sm:p-6 overflow-y-auto">
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/enquiries" element={<EnquiriesPage />} />
              <Route path="/clients" element={<ClientsPage />} />
              <Route path="/certification" element={<CertificationPage />} />
              <Route path="/billing" element={<BillingPage />} />
              <Route path="/ledger" element={<LedgerPage />} />
              <Route path="/tasks" element={<TaskBoardPage />} />
              <Route path="/gst-filing" element={<GSTFilingPage />} />
              <Route path="/bookkeeping" element={<BookKeepingPage />} />
              <Route path="/it-filing" element={<ITFilingPage />} />
              <Route path="/registration-portal" element={<RegistrationPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/users" element={<UserManagementPage />} />
              <Route path="/audit-logs" element={<AuditLogsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
