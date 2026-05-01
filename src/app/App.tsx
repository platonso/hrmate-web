import { useState } from 'react';
import { Toaster } from 'sonner';
import { AuthProvider, useAuth } from './components/AuthContext';
import { LoginScreen } from './components/LoginScreen';
import { RegisterScreen } from './components/RegisterScreen';
import { Sidebar } from './components/Sidebar';
import { RequestsListView, Request } from './components/RequestsListView';
import { CreateRequestView } from './components/CreateRequestView';
import { ProfileView } from './components/ProfileView';
import { RequestDetailsView } from './components/RequestDetailsView';
import { UsersView } from './components/UsersView';
import { UserDetailsView, User } from './components/UserDetailsView';

function AppContent() {
  const { user, loading } = useAuth();
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [currentView, setCurrentView] = useState('my-requests');
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  if (loading) {
    return (
      <div className="h-screen bg-[#fafaf9] dark:bg-stone-950 flex items-center justify-center">
        <div className="text-[#79716b] dark:text-stone-400 font-['Geist:Regular',sans-serif] text-[14px]">Загрузка...</div>
      </div>
    );
  }

  if (!user) {
    return authMode === 'login' ? (
      <LoginScreen onSwitchToRegister={() => setAuthMode('register')} />
    ) : (
      <RegisterScreen onSwitchToLogin={() => setAuthMode('login')} />
    );
  }

  const handleCreateNew = () => {
    setCurrentView('create-request');
  };

  const handleBackFromCreate = () => {
    setCurrentView('my-requests');
  };

  const handleViewRequest = (request: Request) => {
    setSelectedRequest(request);
    setCurrentView('request-details');
  };

  const handleBackFromDetails = () => {
    setSelectedRequest(null);
    setCurrentView('my-requests');
  };

  const handleViewUser = (user: User) => {
    setSelectedUser(user);
    setCurrentView('user-details');
  };

  const handleBackFromUserDetails = () => {
    setSelectedUser(null);
    setCurrentView('users');
  };

  const handleNavigate = (view: string) => {
    if (view !== 'request-details') {
      setSelectedRequest(null);
    }
    if (view !== 'user-details') {
      setSelectedUser(null);
    }
    setCurrentView(view);
  };

  const renderContent = () => {
    if (currentView === 'create-request') {
      return <CreateRequestView onBack={handleBackFromCreate} />;
    }

    if (currentView === 'request-details' && selectedRequest) {
      return <RequestDetailsView request={selectedRequest} onBack={handleBackFromDetails} />;
    }

    if (currentView === 'user-details' && selectedUser) {
      return <UserDetailsView user={selectedUser} currentUser={user} onBack={handleBackFromUserDetails} />;
    }

    switch (currentView) {
      case 'my-requests':
        return (
          <RequestsListView
            onViewRequest={handleViewRequest}
            onCreateNew={handleCreateNew}
          />
        );
      case 'profile':
        return <ProfileView />;
      case 'users':
        return <UsersView onViewUser={handleViewUser} />;
      default:
        return (
          <RequestsListView
            onViewRequest={handleViewRequest}
            onCreateNew={handleCreateNew}
          />
        );
    }
  };

  return (
    <div className="h-screen bg-[#fafaf9] dark:bg-stone-950 overflow-hidden flex justify-center">
      <div className="flex w-full max-w-[1272px]">
        <div className="flex-shrink-0">
          <Sidebar currentView={currentView} onNavigate={handleNavigate} />
        </div>
        <div className="flex-1 px-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
      <Toaster position="top-right" />
    </AuthProvider>
  );
}