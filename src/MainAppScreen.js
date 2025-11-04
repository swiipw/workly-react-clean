import React, { useState } from 'react';
// Asegúrate de que estas rutas a los componentes y pantallas sean correctas
import BottomNavBar from './components/BottomNavBar.js';
import WorklyLogo from './components/WorklyLogo.js';
import HomeScreen from './screens/HomeScreen.js';
import JobsScreen from './screens/JobsScreen.js';
import CoursesScreen from './screens/CoursesScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';

const MainAppScreen = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('home');
    
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (<HomeScreen user={user} />); 
      case 'jobs':
        return (<JobsScreen />); 
      case 'courses':
        // Nota: Asume que CourseDetailScreen.js aún no existe o no se usa aquí.
        return (<CoursesScreen />); 
      case 'profile':
        return (<ProfileScreen user={user} onLogout={onLogout} />); 
      default:
        return (<HomeScreen user={user} />); 
    }
  };
    
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="sticky top-0 bg-white shadow-sm p-4 border-b border-gray-100 z-10 max-w-xl mx-auto">
        <WorklyLogo />
      </header>
        
      <main className="max-w-xl mx-auto overflow-y-auto" style={{ minHeight: 'calc(100vh - 128px)' }}>
        {renderContent()}
      </main>

      {/* Nota: BottomNavBar está en 'components' */}
      <BottomNavBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default MainAppScreen;
