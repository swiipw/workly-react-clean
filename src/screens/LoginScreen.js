import React, { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton'; 
import WorklyLogo from '../components/WorklyLogo'; 

const LoginScreen = ({ onLogin }) => { 
  const [email, setEmail] = useState('nombre@workly.com'); 
  const [password, setPassword] = useState('123456'); 
  const [isLoading, setIsLoading] = useState(false);
    
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
        setIsLoading(false);
        onLogin({ name: 'Usuario Demo', email: email });
    }, 1000);
  };
    
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-2xl">
        <div className="flex flex-col items-center mb-10">
          <WorklyLogo size={40} className="mb-2" />
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border rounded-xl" />
          <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 border rounded-xl" />
          <PrimaryButton type="submit" disabled={isLoading}>
            {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
