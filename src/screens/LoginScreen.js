import React, { useState } from 'react';
import { Mail, Lock, LogIn } from 'lucide-react'; 
import PrimaryButton from '../components/PrimaryButton'; 
// No necesitamos WorklyLogo.js si vamos a usar una imagen de logo
// import WorklyLogo from '../components/WorklyLogo'; 

const LoginScreen = ({ onLogin }) => { 
  const [email, setEmail] = useState('nombre@workly.com'); 
  const [password, setPassword] = useState('123456'); 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(''); 
    
  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true); 
    
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
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-2xl">
        
        {/* LOGO OFICIAL Y ESLOGAN */}
        <div className="flex flex-col items-center mb-10">
          {/* Aquí cargamos la imagen del logo desde public/ */}
          <img 
            src="/workly_logo.png" // Asegúrate de que esta ruta coincida con el nombre de tu archivo en public/
            alt="Workly Logo" 
            className="w-32 h-auto mb-4" // Ajusta el tamaño según sea necesario
          />
          <h1 className="text-3xl font-extrabold text-[#17202A] mb-2">Workly</h1>
          <p className="text-gray-500 text-center text-lg font-medium">Conectamos talento joven con oportunidades del futuro</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="email" 
              placeholder="Correo electrónico" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full p-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1ABC9C] focus:border-transparent" 
              required
            />
          </div>
          
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="password" 
              placeholder="Contraseña" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full p-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1ABC9C] focus:border-transparent" 
              required
            />
          </div>

          {error && <div className="text-sm text-red-600 font-medium">{error}</div>}

          <PrimaryButton type="submit" disabled={isLoading}>
            {isLoading ? (
                <div className="flex items-center justify-center">
                    <span className="animate-spin mr-2">⚙️</span>
                    Iniciando Sesión...
                </div>
            ) : (
                <div className="flex items-center justify-center">
                    <LogIn className="w-5 h-5 mr-2" />
                    Iniciar Sesión
                </div>
            )}
          </PrimaryButton>
          
          <div className="text-center text-sm mt-4 space-y-2">
           <button
            type="button"
            onClick={handleToggleRegister}
            className="text-[#F39C12] hover:text-[#E67E22] font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#F39C12]"
        >
            Regístrate
        </button>
    </p>
</div>
      </form>
      </div>
    </div>
  );
};

export default LoginScreen;
