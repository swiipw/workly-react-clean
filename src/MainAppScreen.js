import React, { useState } from 'react';
import { Home, Briefcase, BookOpen, User, MessageSquare, Bot } from 'lucide-react';
import HomeScreen from './screens/HomeScreen'; 
import LoginScreen from './screens/LoginScreen';
import JobsScreen from './screens/JobsScreen';
import CoursesScreen from './screens/CoursesScreen';
import ProfileScreen from './screens/ProfileScreen';
import WorklyLogo from './components/WorklyLogo';

// Componente Dummy para la pantalla de Chat/Asistente
const ChatScreen = () => (
    <div className="p-4 text-center text-gray-500">
        <Bot className="w-10 h-10 mx-auto mb-2 text-[#1ABC9C]" />
        <h2 className="text-xl font-bold">Asistente AI (Próximamente)</h2>
        <p>Aquí irá el chat con el asistente Workly.</p>
    </div>
);


// Datos simulados para el usuario actual
const initialUser = { name: "Usuario Ejemplo", email: "ejemplo@workly.com" };


const MainAppScreen = () => {
  // CLAVE: Iniciamos en false para ver la pantalla de Login
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [currentUser, setCurrentUser] = useState(null); 
  
  // CLAVE: Pestaña inicial para las 5 pestañas
  const [activeTab, setActiveTab] = useState('home'); 
  
  // Eliminado: Estado de notificación

  const handleLogin = (name, email) => {
    setCurrentUser({ name, email });
    setIsLoggedIn(true);
    // Vuelve a 'home' como el destino predeterminado después del login
    setActiveTab('home'); 
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    setActiveTab('home'); 
  };

  // Eliminada: Función showNotification


  // Función para renderizar el contenido de la pestaña
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />; 
      case 'jobs':
        return <JobsScreen />;
      case 'courses':
        // No se pasa showNotification
        return <CoursesScreen />; 
      case 'chat':
        return <ChatScreen />; 
      case 'profile':
        return <ProfileScreen user={currentUser} onLogout={handleLogout} />;
      default:
        return <HomeScreen />;
    }
  };

  
  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  // --- COMPONENTE PRINCIPAL ---
  return (
    <div className="h-screen bg-gray-50 flex flex-col">
        
        {/* Eliminada: NotificationBar */}

        <header className="flex items-center justify-between p-4 bg-white border-b shadow-sm sticky top-0 z-20">
            <WorklyLogo />
            {currentUser && (
              <div className="text-sm font-medium text-gray-700">
                Hola, {currentUser.name.split(' ')[0]}
              </div>
            )}
        </header>

        <main className="flex-1 overflow-y-auto pb-20">
            {renderContent()}
        </main>

        {/* Barra de Navegación Inferior - 5 Pestañas RESTAURADAS */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-2xl z-20 p-1">
            <div className="flex justify-around">
                
                {/* 1. Botón Home */}
                <button
                    onClick={() => setActiveTab('home')}
                    className={`flex flex-col items-center p-2 rounded-lg transition ${activeTab === 'home' ? 'text-[#1ABC9C] font-semibold' : 'text-gray-500 hover:text-[#17202A]'}`}
                >
                    <Home className="w-6 h-6" />
                    <span className="text-xs">Inicio</span>
                </button>
                
                {/* 2. Botón Empleos */}
                <button
                    onClick={() => setActiveTab('jobs')}
                    className={`flex flex-col items-center p-2 rounded-lg transition ${activeTab === 'jobs' ? 'text-[#1ABC9C] font-semibold' : 'text-gray-500 hover:text-[#17202A]'}`}
                >
                    <Briefcase className="w-6 h-6" />
                    <span className="text-xs">Empleos</span>
                </button>
                
                {/* 3. Botón Cursos */}
                <button
                    onClick={() => setActiveTab('courses')}
                    className={`flex flex-col items-center p-2 rounded-lg transition ${activeTab === 'courses' ? 'text-[#1ABC9C] font-semibold' : 'text-gray-500 hover:text-[#17202A]'}`}
                >
                    <BookOpen className="w-6 h-6" />
                    <span className="text-xs">Cursos</span>
                </button>
                
                {/* 4. Botón Chat / Asistente */}
                <button
                    onClick={() => setActiveTab('chat')}
                    className={`flex flex-col items-center p-2 rounded-lg transition ${activeTab === 'chat' ? 'text-[#1ABC9C] font-semibold' : 'text-gray-500 hover:text-[#17202A]'}`}
                >
                    <MessageSquare className="w-6 h-6" />
                    <span className="text-xs">Asistente</span>
                </button>
                
                {/* 5. Botón Perfil */}
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
