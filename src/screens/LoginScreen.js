import React, { useState } from 'react';
import { Mail, Lock, LogIn } from 'lucide-react'; 
import PrimaryButton from '../components/PrimaryButton'; 
// Ya no necesitamos WorklyLogo.js aquí si usamos la imagen
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
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-2xl">
        
        {/* LOGO OFICIAL Y ESLOGAN */}
        <div className="flex flex-col items-center mb-10">
          {/* RUTA: /workly_logo.png busca el archivo en la carpeta public/ */}
          <img 
            src="/workly_logo.png" 
            alt="Workly Logo" 
            className="w-48 h-auto mb-4" // Ajusta el tamaño (w-32 es 128px)
          />
          <h1 className="text-3xl font-extrabold text-[#17202A] mb-2">Workly</h1>
          {/* ESLOGAN */}
          <p className="text-gray-500 text-center text-lg font-medium">Conectamos talento joven con oportunidades del futuro</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          
          {/* CAMPO DE CORREO */}
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
          
          {/* CAMPO DE CONTRASEÑA */}
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

          {/* BOTÓN DE INICIO DE SESIÓN */}
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
            <a href="#" className="text-[#1ABC9C] hover:text-[#17202A] block transition">¿Olvidaste tu contraseña?</a>
            <p className="text-gray-500">¿No tienes cuenta? <a href="#" className="text-[#F39C12] hover:text-[#E67E22] font-semibold transition">Regístrate</a></p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
