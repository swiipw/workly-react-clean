  {/* CORRECCIÓN: Usamos <button> en lugar de <a> con href="#" */}
            <button 
                type="button" 
                onClick={handleForgotPassword}
                className="text-[#1ABC9C] hover:text-[#17202A] block transition font-medium focus:outline-none focus:ring-2 focus:ring-[#1ABC9C]"
            >
                ¿Olvidaste tu contraseña?
            </button>
            <p className="text-gray-500">
                ¿No tienes cuenta? 
                {/* CORRECCIÓN: Usamos <span> con atributos de accesibilidad para simular un enlace interactivo */}
                <span 
                    onClick={handleRegister}
                    className="text-[#F39C12] hover:text-[#E67E22] font-semibold transition cursor-pointer ml-1 focus:outline-none focus:ring-2 focus:ring-[#F39C12]"
                    role="link" 
                    tabIndex="0" 
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleRegister(); }} 
                >
                    Regístrate
                </span>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
