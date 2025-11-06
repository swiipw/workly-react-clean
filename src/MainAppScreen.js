import React, { useState } from 'react';
import { Home, Briefcase, BookOpen, User } from 'lucide-react';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import JobsScreen from './screens/JobsScreen';
import CoursesScreen from './screens/CoursesScreen';
import ProfileScreen from './screens/ProfileScreen';
import WorklyLogo from './components/WorklyLogo';
// ¡NUEVA IMPORTACIÓN!
import NotificationBar from './components/NotificationBar'; 

// Datos simulados para el usuario actual (debes definir estos datos o tenerlos ya)
const initialUser = { name: "Usuario Ejemplo", email: "ejemplo@workly.com" };


const MainAppScreen = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Cambiado a true para simular el inicio
  const [currentUser, setCurrentUser] = useState(initialUser);
  const [activeTab, setActiveTab] = useState('jobs'); 
  
  // NUEVO ESTADO: Para controlar la notificación
  const [notification, setNotification] = useState({ 
    isVisible: false, 
    message: '' 
  });

  const handleLogin = (name, email) => {
    setCurrentUser({ name, email });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    setActiveTab('jobs'); 
  };

  // NUEVA FUNCIÓN: Mostrar notificación
  const showNotification = (message) => {
    setNotification({ isVisible: true, message });
    
    // Ocultar la notificación después de 3000ms (3 segundos)
    setTimeout(() => {
      setNotification(prev => ({ ...prev, isVisible: false }));
    }, 3000); 
  };


  // Función para renderizar el contenido de la pestaña
  const renderContent = () => {
    switch (activeTab) {
      case 'jobs':
        return <JobsScreen />;
      case 'courses':
        // PASAMOS LA FUNCIÓN DE NOTIFICACIÓN A COURSES SCREEN
        return <CoursesScreen showNotification={showNotification} />; 
      case 'profile':
        return <ProfileScreen user={currentUser} onLogout={handleLogout} />;
      default:
        return <JobsScreen />;
    }
  };

  
  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
        
        {/* Renderiza la barra de notificaciones */}
        <NotificationBar 
            message={notification.message}
            isVisible={notification.isVisible}
        />

        {/* Encabezado Fijo */}
        <header className="flex items-center justify-between p-4 bg-white border-b shadow-sm sticky top-0 z-20">
            <WorklyLogo />
            {currentUser && (
              <div className="text-sm font-medium text-gray-700">
                Hola, {currentUser.name.split(' ')[0]}
              </div>
            )}
        </header>

        {/* Contenido Principal */}
        <main className="flex-1 overflow-y-auto pb-20">
            {renderContent()}
        </main>

        {/* Barra de Navegación Inferior */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-2xl z-20 p-2">
            <div className="flex justify-around">
                
                {/* Botón Empleos */}
                <button
                    onClick={() => setActiveTab('jobs')}
                    className={`flex flex-col items-center p-2 rounded-lg transition ${activeTab === 'jobs' ? 'text-[#1ABC9C] font-semibold' : 'text-gray-500 hover:text-[#17202A]'}`}
                >
                    <Briefcase className="w-6 h-6" />
                    <span className="text-xs">Empleos</span>
                </button>
                
                {/* Botón Cursos */}
                <button
                    onClick={() => setActiveTab('courses')}
                    className={`flex flex-col items-center p-2 rounded-lg transition ${activeTab === 'courses' ? 'text-[#1ABC9C] font-semibold' : 'text-gray-500 hover:text-[#17202A]'}`}
                >
                    <BookOpen className="w-6 h-6" />
                    <span className="text-xs">Cursos</span>
                </button>
                
                {/* Botón Perfil */}
                <button
                    onClick={() => setActiveTab('profile')}
                    className={`flex flex-col items-center p-2 rounded-lg transition ${activeTab === 'profile' ? 'text-[#1ABC9C] font-semibold' : 'text-gray-500 hover:text-[#17202A]'}`}
                >
                    <User className="w-6 h-6" />
                    <span className="text-xs">Perfil</span>
                </button>
            </div>
        </nav>
    </div>
  );
};

export default MainAppScreen;
