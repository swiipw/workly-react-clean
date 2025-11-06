import React, { useState } from 'react';
import { Home, Briefcase, BookOpen, User, MessageSquare, Bot } from 'lucide-react';
import HomeScreen from './screens/HomeScreen'; 
import LoginScreen from './screens/LoginScreen';
import JobsScreen from './screens/JobsScreen';
import CoursesScreen from './screens/CoursesScreen';
import ProfileScreen from './screens/ProfileScreen';

// Componente Dummy para el Logo de la aplicación
const WorklyLogo = () => (
    <div className="flex items-center text-[#17202A] text-2xl font-black">
        <span className="text-[#1ABC9C] mr-1">Workly</span>.AI
    </div>
);

// Componente Dummy para la pantalla de Chat/Asistente
const ChatScreen = () => (
    <div className="p-4 text-center text-gray-500">
        <Bot className="w-10 h-10 mx-auto mb-2 text-[#1ABC9C]" />
        <h2 className="text-xl font-bold">Asistente AI (Próximamente)</h2>
        <p>Aquí irá el chat con el asistente Workly.</p>
    </div>
);

// Datos simulados iniciales del usuario
const initialUser = { 
    name: "Usuario Ejemplo", 
    email: "ejemplo@workly.com",
    age: 25,
    preferences: 'Programación Web, Diseño UX/UI, Remoto' 
};


const MainAppScreen = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  // Estado que guarda la información actual del usuario
  const [currentUser, setCurrentUser] = useState(initialUser); 
  
  const [activeTab, setActiveTab] = useState('home'); 
  
  const handleLogin = (name, email) => {
    setCurrentUser(prev => ({ 
        ...prev, 
        name: name || prev.name, 
        email: email || prev.email 
    }));
    setIsLoggedIn(true);
    setActiveTab('home'); 
  };

  const handleLogout = () => {
    console.log("Cerrando sesión...");
    setCurrentUser(null);
    setIsLoggedIn(false);
    setActiveTab('home'); 
  };
  
  // FUNCIÓN CLAVE: Recibe los datos del perfil y actualiza el estado global.
  const handleUpdateUser = (newUserData) => {
    console.log("Actualizando estado de usuario en MainAppScreen:", newUserData); 
    
    setCurrentUser(prevUser => ({
        ...prevUser,
        ...newUserData,
        // Aseguramos que 'age' se guarde como número si es posible
        age: newUserData.age ? parseInt(newUserData.age, 10) : ''
    }));
    console.log("¡Perfil actualizado con éxito!");
  };


  // Función para renderizar el contenido de la pestaña
  const renderContent = () => {
    if (!currentUser && isLoggedIn) {
        return <div className="p-10 text-center text-gray-500">Cargando datos del usuario...</div>;
    }

    switch (activeTab) {
      case 'home':
        return <HomeScreen />; 
      case 'jobs':
        return <JobsScreen />;
      case 'courses':
        return <CoursesScreen />; 
      case 'chat':
        return <ChatScreen />; 
      case 'profile':
        return (
            // CLAVE: Pasamos la función de actualización (handleUpdateUser) a ProfileScreen
            <ProfileScreen 
                user={currentUser} 
                onLogout={handleLogout} 
                onUpdateUser={handleUpdateUser}
            />
        );
      default:
        return <HomeScreen />;
    }
  };

  
  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  // --- COMPONENTE PRINCIPAL (Ya logueado) ---
  return (
    <div className="h-screen bg-gray-50 flex flex-col">
        
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

        {/* Barra de Navegación Inferior */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-2xl z-20 p-1">
            <div className="flex justify-around">
                
                {/* Botones de Navegación */}
                {[
                  { id: 'home', icon: Home, label: 'Inicio' },
                  { id: 'jobs', icon: Briefcase, label: 'Empleos' },
                  { id: 'courses', icon: BookOpen, label: 'Cursos' },
                  { id: 'chat', icon: MessageSquare, label: 'Asistente' },
                  { id: 'profile', icon: User, label: 'Perfil' },
                ].map(({ id, icon: Icon, label }) => (
                  <button
                      key={id}
                      onClick={() => setActiveTab(id)}
                      className={`flex flex-col items-center p-2 rounded-lg transition ${activeTab === id ? 'text-[#1ABC9C] font-semibold' : 'text-gray-500 hover:text-[#17202A]'}`}
                  >
                      <Icon className="w-6 h-6" />
                      <span className="text-xs">{label}</span>
                  </button>
                ))}
            </div>
        </nav>
    </div>
  );
};

export default MainAppScreen;
