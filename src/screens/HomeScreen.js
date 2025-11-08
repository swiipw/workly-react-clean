import React from 'react';
// IMPORTACIÓN CORREGIDA: Incluye Briefcase, User, y Star.
import { TrendingUp, Users, BookOpen, Clock, Zap, MapPin, Briefcase, User, Star } from 'lucide-react'; 

// Datos simulados
const userData = {
    name: "Javier",
    level: "Intermedio",
    streak: 5,
    points: 1250,
};

const statsData = [
    { icon: Users, label: "Comunidad", value: "35k", color: "text-[#1ABC9C]", bg: "bg-[#E8F8F5]" },
    { icon: TrendingUp, label: "Puntos", value: userData.points, color: "text-[#F39C12]", bg: "bg-[#FEF9E7]" },
    { icon: BookOpen, label: "Cursos", value: "82", color: "text-[#3498DB]", bg: "bg-[#EBF5FB]" },
    { icon: Clock, label: "Horas", value: "120h", color: "text-[#9B59B6]", bg: "bg-[#F4F1F8]" },
];

const quickLinks = [
    { title: "Ver Empleos", icon: Briefcase, color: "bg-[#F39C12]", to: "/jobs" },
    { title: "Mi Perfil", icon: User, color: "bg-[#1ABC9C]", to: "/profile" },
    { title: "Asistente AI", icon: Zap, color: "bg-[#3498DB]", to: "/chat" },
];

const StatCard = ({ stat }) => (
    <div className={`p-3 rounded-xl shadow-md flex items-center justify-between transition hover:shadow-lg ${stat.bg}`}>
        <div className={`p-2 rounded-full ${stat.color} bg-white shadow-inner`}>
            <stat.icon className="w-6 h-6" />
        </div>
        <div className="text-right">
            <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
            <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
        </div>
    </div>
);

const QuickLink = ({ link }) => (
    <button className={`w-full p-4 rounded-xl flex items-center justify-center space-x-3 transition hover:opacity-90 ${link.color} text-white font-bold`}>
        <link.icon className="w-5 h-5" />
        <span>{link.title}</span>
    </button>
);


const HomeScreen = ({ user }) => {
    // Usamos el nombre del usuario o un fallback si la prop 'user' no está definida
    const userName = user?.name || "Usuario";
    const userLevel = user?.level || userData.level;
    const userStreak = user?.streak || userData.streak;

    const welcomeMessage = "¡Bienvenido de vuelta!";
    
    return (
        <div className="p-4 space-y-6">
            
            {/* 1. Encabezado y Saludo */}
            <div className="flex justify-between items-center border-b pb-4">
                <div>
                    <p className="text-sm font-medium text-gray-500">{welcomeMessage}</p>
                    <h1 className="text-3xl font-extrabold text-[#17202A] mt-1">{userName}</h1>
                </div>
                {/* Streak Counter */}
                <div className="flex items-center space-x-1 p-2 bg-white rounded-xl shadow-md border border-[#F39C12]">
                    <Zap className="w-5 h-5 text-[#F39C12] fill-[#F39C12]" />
                    <span className="text-lg font-bold text-[#17202A]">{userStreak}</span>
                </div>
            </div>

            {/* 2. Resumen de Nivel y Progreso */}
            <section className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#1ABC9C]">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-xl font-bold text-[#17202A]">Tu Nivel Actual</h2>
                        <p className="text-3xl font-extrabold text-[#1ABC9C] mt-1">{userLevel}</p>
                    </div>
                    <div className="text-right">
                        <div className="flex items-center text-gray-500 text-sm">
                            <Star className="w-4 h-4 mr-1 text-[#F39C12]" /> 
                            <span>Próximo Nivel</span>
                        </div>
                        <p className="text-xl font-bold text-[#F39C12]">Avanzado</p>
                    </div>
                </div>
                
                {/* Barra de Progreso Simulada */}
                <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-[#1ABC9C] h-2.5 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1 text-right">65% completado</p>
                </div>
            </section>
            
            {/* 3. Estadísticas Clave (Grid) */}
            <section className="grid grid-cols-2 gap-4">
                {statsData.map((stat, index) => (
                    <StatCard key={index} stat={stat} />
                ))}
            </section>
            
            {/* 4. Enlaces Rápidos y Carrusel de Empleos Destacados (Simulados) */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#17202A] flex items-center">
                    <Zap className="w-6 h-6 mr-2 text-[#F39C12]" />
                    Acciones Rápidas
                </h2>
                <div className="grid grid-cols-3 gap-3">
                    {quickLinks.map((link, index) => (
                        <QuickLink key={index} link={link} />
                    ))}
                </div>
            </section>
            
            {/* 5. Empleos Destacados */}
            <section>
                <h2 className="text-xl font-bold text-[#17202A] mb-4 flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-[#3498DB]" />
                    Empleos Cerca
                </h2>
                <div className="space-y-3">
                    {/* Tarjeta de Empleo Destacado (Simulada) */}
                    <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-[#3498DB] hover:shadow-lg transition cursor-pointer">
                        <h3 className="text-lg font-bold text-[#17202A]">Desarrollador Full Stack</h3>
                        <p className="text-gray-600">Innovate Solutions</p>
