import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import WorklyLogo from '../components/WorklyLogo'; 
import PrimaryButton from '../components/PrimaryButton'; 

const LoginScreen = ({ onLogin }) => { 
  const [email, setEmail] = useState('nombre@workly.com'); 
  const [password, setPassword] = useState('123456'); 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(''); 
    
  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true); 
    
    // Lógica simple de demo login
    setTimeout(() => {
        setIsLoading(false);
        if (password === '123456' && email.endsWith('@workly.com')) {
            onLogin({ name: 'Usuario Demo', email: email });
        } else {
            setError('Credenciales incorrectas. Usa nombre@workly.com y 123456.');
        }
    }, 1000);
  };
    
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-2xl">
        <div className="flex flex-col items-center mb-10">
          <WorklyLogo size={40} className="mb-2" />
          <h1 className="text-3xl font-extrabold text-[#17202A]">Bienvenido a Workly</h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
            <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border rounded-xl" />
            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 border rounded-xl" />
            {error && <div className="text-sm text-red-600">{error}</div>}
            <PrimaryButton type="submit" disabled={isLoading}>
                {isLoading ? 'Iniciando Sesión...' : 'Iniciar Sesión'} 
            </PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
